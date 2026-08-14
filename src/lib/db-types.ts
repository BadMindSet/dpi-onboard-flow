// Hand-written types for the existing DPI3 Supabase schema (external project).
// Columns were verified against the live PostgREST API.

export type Json = string | number | boolean | null | { [key: string]: Json } | Json[];

export interface InvestorProfileRow {
  id: string;
  full_name: string | null;
  email: string | null;
  mobile: string | null;
  date_of_birth: string | null;
  gender: string | null;
  occupation: string | null;
  pan_number: string | null;
  aadhaar_number: string | null;
  address_line1: string | null;
  address_line2: string | null;
  city: string | null;
  state: string | null;
  pincode: string | null;
  country: string | null;
  created_at: string;
  updated_at: string | null;
}

export interface OnboardingProgressRow {
  id: string;
  user_id: string;
  current_step: number | null;
  personal_completed: boolean | null;
  contact_completed: boolean | null;
  address_completed: boolean | null;
  identity_completed: boolean | null;
  documents_completed: boolean | null;
  created_at: string;
  updated_at: string | null;
}

export interface DocumentRow {
  id: string;
  user_id: string;
  document_type: string | null;
  file_name: string | null;
  file_path: string | null;
  file_size: number | null;
  mime_type: string | null;
  status: string | null;
  created_at: string;
}

export interface KycVerificationRow {
  id: string;
  user_id: string;
  document_type: string | null;
  document_number: string | null;
  verification_status: string | null;
  verified_at: string | null;
  created_at: string;
  updated_at: string | null;
}

export interface EsignRecordRow {
  id: string;
  user_id: string;
  document_id: string | null;
  document_hash: string | null;
  signed_at: string | null;
  created_at: string;
}

export interface PaperlessVaultRow {
  id: string;
  user_id: string;
  document_id: string | null;
  title: string | null;
  category: string | null;
  storage_path: string | null;
  created_at: string;
}

export interface AuditLogRowDb {
  id: string;
  user_id: string | null;
  action: string | null;
  entity_type: string | null;
  entity_id: string | null;
  metadata: Json | null;
  created_at: string;
}

type Table<Row> = {
  Row: Row;
  Insert: Partial<Row>;
  Update: Partial<Row>;
  Relationships: [];
};

export interface Database {
  public: {
    Tables: {
      investor_profiles: Table<InvestorProfileRow>;
      onboarding_progress: Table<OnboardingProgressRow>;
      documents: Table<DocumentRow>;
      kyc_verifications: Table<KycVerificationRow>;
      esign_records: Table<EsignRecordRow>;
      paperless_vault: Table<PaperlessVaultRow>;
      audit_logs: Table<AuditLogRowDb>;
    };
    Views: Record<string, never>;
    Functions: Record<string, never>;
    Enums: Record<string, never>;
    CompositeTypes: Record<string, never>;
  };
}
