export type Profile = {
  id: string;
  email: string;
  full_name: string | null;
  subscription_type: 'free' | 'premium';
  created_at: string;
  updated_at: string;
};

export type Lab = {
  id: string;
  user_id: string;
  type: 'student' | 'personal' | 'company' | 'institution' | 'educator' | 'professional';
  name: string;
  description: string | null;
  created_at: string;
  updated_at: string;
};

export type Project = {
  id: string;
  user_id: string;
  lab_id: string;
  name: string;
  description: string | null;
  content: Record<string, any>;
  created_at: string;
  updated_at: string;
};