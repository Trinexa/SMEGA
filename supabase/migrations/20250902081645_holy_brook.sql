/*
  # Initial Schema for SME Digital Agency

  1. New Tables
    - `case_studies`
      - `id` (uuid, primary key)
      - `title` (text)
      - `description` (text)
      - `client` (text)
      - `industry` (text)
      - `challenge` (text)
      - `solution` (text)
      - `results` (text array)
      - `image_url` (text)
      - `tags` (text array)
      - `featured` (boolean)
      - `created_at` (timestamp)

    - `proposals`
      - `id` (uuid, primary key)
      - `company_name` (text)
      - `contact_name` (text)
      - `email` (text)
      - `phone` (text)
      - `services` (text array)
      - `budget_range` (text)
      - `project_description` (text)
      - `timeline` (text)
      - `status` (enum: pending, reviewed, approved, declined)
      - `created_at` (timestamp)

    - `users`
      - Links to Supabase auth users
      - `id` (uuid, references auth.users)
      - `role` (enum: admin, user)
      - `created_at` (timestamp)

  2. Security
    - Enable RLS on all tables
    - Add policies for authenticated admin access
    - Public read access for case studies (featured only)
    - Authenticated access for proposals
*/

-- Case Studies Table
CREATE TABLE IF NOT EXISTS case_studies (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  description text NOT NULL,
  client text NOT NULL,
  industry text NOT NULL,
  challenge text NOT NULL DEFAULT '',
  solution text NOT NULL DEFAULT '',
  results text[] DEFAULT '{}',
  image_url text NOT NULL DEFAULT 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800',
  tags text[] DEFAULT '{}',
  featured boolean DEFAULT false,
  created_at timestamptz DEFAULT now()
);

-- Proposals Table
CREATE TABLE IF NOT EXISTS proposals (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  company_name text NOT NULL,
  contact_name text NOT NULL,
  email text NOT NULL,
  phone text NOT NULL,
  services text[] NOT NULL DEFAULT '{}',
  budget_range text NOT NULL,
  project_description text NOT NULL,
  timeline text NOT NULL,
  status text DEFAULT 'pending' CHECK (status IN ('pending', 'reviewed', 'approved', 'declined')),
  created_at timestamptz DEFAULT now()
);

-- User Profiles Table
CREATE TABLE IF NOT EXISTS user_profiles (
  id uuid PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  role text DEFAULT 'user' CHECK (role IN ('admin', 'user')),
  created_at timestamptz DEFAULT now()
);

-- Enable RLS
ALTER TABLE case_studies ENABLE ROW LEVEL SECURITY;
ALTER TABLE proposals ENABLE ROW LEVEL SECURITY;
ALTER TABLE user_profiles ENABLE ROW LEVEL SECURITY;

-- Case Studies Policies
CREATE POLICY "Anyone can view featured case studies"
  ON case_studies
  FOR SELECT
  TO anon, authenticated
  USING (featured = true);

CREATE POLICY "Admins can manage case studies"
  ON case_studies
  FOR ALL
  TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM user_profiles
      WHERE user_profiles.id = auth.uid()
      AND user_profiles.role = 'admin'
    )
  );

-- Proposals Policies
CREATE POLICY "Anyone can create proposals"
  ON proposals
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

CREATE POLICY "Admins can view all proposals"
  ON proposals
  FOR SELECT
  TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM user_profiles
      WHERE user_profiles.id = auth.uid()
      AND user_profiles.role = 'admin'
    )
  );

CREATE POLICY "Admins can update proposals"
  ON proposals
  FOR UPDATE
  TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM user_profiles
      WHERE user_profiles.id = auth.uid()
      AND user_profiles.role = 'admin'
    )
  );

-- User Profiles Policies
CREATE POLICY "Users can view own profile"
  ON user_profiles
  FOR SELECT
  TO authenticated
  USING (auth.uid() = id);

CREATE POLICY "Admins can view all profiles"
  ON user_profiles
  FOR SELECT
  TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM user_profiles
      WHERE user_profiles.id = auth.uid()
      AND user_profiles.role = 'admin'
    )
  );

-- Insert sample data
INSERT INTO case_studies (title, description, client, industry, challenge, solution, results, image_url, tags, featured) VALUES
(
  'E-commerce Platform Transformation',
  'Complete digital transformation for a growing retail business, including custom e-commerce platform and digital marketing strategy.',
  'TechStyle Retail',
  'Fashion & Retail',
  'Outdated website with poor user experience and low conversion rates',
  'Built a modern, mobile-first e-commerce platform with integrated payment processing, inventory management, and comprehensive analytics',
  ARRAY['300% increase in online sales', '85% improvement in conversion rate', '50% reduction in cart abandonment', '4.8/5 customer satisfaction score'],
  'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800',
  ARRAY['E-commerce', 'Web Development', 'Digital Marketing'],
  true
),
(
  'Local Restaurant Digital Presence',
  'Comprehensive digital marketing campaign and website redesign for a local restaurant chain.',
  'Savory Bites Restaurant',
  'Food & Beverage',
  'Limited online presence and declining customer base during pandemic',
  'Developed a responsive website with online ordering, implemented local SEO strategy, and managed social media campaigns',
  ARRAY['250% increase in online orders', '180% growth in social media followers', '95% positive customer reviews', 'Featured in local food blogs'],
  'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=800',
  ARRAY['Web Development', 'Digital Marketing', 'SEO'],
  true
),
(
  'Healthcare Practice Management',
  'Custom patient management system and digital marketing for a growing medical practice.',
  'Wellness Medical Group',
  'Healthcare',
  'Manual appointment scheduling and poor patient communication',
  'Built a comprehensive patient portal with appointment scheduling, secure messaging, and automated reminders',
  ARRAY['200% increase in patient satisfaction', '90% reduction in no-shows', '150% growth in new patient acquisitions', 'HIPAA compliant system'],
  'https://images.pexels.com/photos/3938023/pexels-photo-3938023.jpeg?auto=compress&cs=tinysrgb&w=800',
  ARRAY['Web Development', 'Custom Software', 'Healthcare'],
  true
);