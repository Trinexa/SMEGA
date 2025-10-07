/*
  # Create admin user setup

  1. New Functions
    - `create_admin_user` function to create admin users
    - Handles user creation and profile setup in one transaction

  2. Security
    - Function is security definer (runs with elevated privileges)
    - Only creates admin users, not regular users
    - Validates email format

  3. Usage
    - Call this function to create your first admin user
    - Example: SELECT create_admin_user('admin@yourcompany.com', 'your-secure-password');
*/

-- Function to create admin users
CREATE OR REPLACE FUNCTION create_admin_user(
  user_email TEXT,
  user_password TEXT
)
RETURNS JSON
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
DECLARE
  new_user_id UUID;
  result JSON;
BEGIN
  -- Validate email format
  IF user_email !~ '^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$' THEN
    RETURN json_build_object('success', false, 'error', 'Invalid email format');
  END IF;

  -- Create the user in auth.users
  INSERT INTO auth.users (
    instance_id,
    id,
    aud,
    role,
    email,
    encrypted_password,
    email_confirmed_at,
    created_at,
    updated_at,
    raw_app_meta_data,
    raw_user_meta_data,
    is_super_admin,
    confirmation_token,
    email_change,
    email_change_token_new,
    recovery_token
  ) VALUES (
    '00000000-0000-0000-0000-000000000000',
    gen_random_uuid(),
    'authenticated',
    'authenticated',
    user_email,
    crypt(user_password, gen_salt('bf')),
    NOW(),
    NOW(),
    NOW(),
    '{"provider": "email", "providers": ["email"]}',
    '{}',
    false,
    '',
    '',
    '',
    ''
  )
  RETURNING id INTO new_user_id;

  -- Create user profile with admin role
  INSERT INTO user_profiles (id, role)
  VALUES (new_user_id, 'admin');

  result := json_build_object(
    'success', true,
    'user_id', new_user_id,
    'email', user_email,
    'message', 'Admin user created successfully'
  );

  RETURN result;

EXCEPTION
  WHEN unique_violation THEN
    RETURN json_build_object('success', false, 'error', 'User with this email already exists');
  WHEN OTHERS THEN
    RETURN json_build_object('success', false, 'error', SQLERRM);
END;
$$;

-- Create your first admin user (replace with your actual email and password)
-- Uncomment and modify the line below, then run this migration
-- SELECT create_admin_user('admin@yourcompany.com', 'your-secure-password');