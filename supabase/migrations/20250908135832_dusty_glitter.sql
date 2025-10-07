/*
  # Fix infinite recursion in user_profiles RLS policies

  1. Problem
    - Current admin policy creates infinite recursion by checking user_profiles table within its own policy
    - This happens when the policy tries to determine if current user is admin by querying the same table

  2. Solution
    - Drop existing recursive policies
    - Create simple, non-recursive policies
    - Users can read their own profile using auth.uid() = id
    - Remove admin-specific policies that cause recursion
    - Admins will use service role or direct database access for admin operations

  3. Security
    - Users can only read their own profile data
    - No recursive policy dependencies
    - Clean, simple access control
*/

-- Drop existing policies that cause recursion
DROP POLICY IF EXISTS "Admins can view all profiles" ON user_profiles;
DROP POLICY IF EXISTS "Users can view own profile" ON user_profiles;

-- Create simple, non-recursive policy for users to read their own profile
CREATE POLICY "Users can read own profile"
  ON user_profiles
  FOR SELECT
  TO authenticated
  USING (auth.uid() = id);

-- Allow users to insert their own profile (for account creation)
CREATE POLICY "Users can insert own profile"
  ON user_profiles
  FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = id);

-- Allow users to update their own profile
CREATE POLICY "Users can update own profile"
  ON user_profiles
  FOR UPDATE
  TO authenticated
  USING (auth.uid() = id)
  WITH CHECK (auth.uid() = id);