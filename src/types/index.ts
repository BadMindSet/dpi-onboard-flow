export type OnboardingStatus = "NOT_STARTED" | "IN_PROGRESS" | "COMPLETED";

export type KycState =
  | "PENDING"
  | "UPLOADING"
  | "VALIDATING"
  | "VERIFIED"
  | "REJECTED"
  | "REVIEW_REQUIRED";

export type EsignState = "LOCKED" | "READY" | "CONFIRMATION_REQUIRED" | "SIGNED";

export type StatusTone =
  | "completed"
  | "verified"
  | "signed"
  | "pending"
  | "in_progress"
  | "required"
  | "rejected"
  | "failed"
  | "locked"
  | "review"
  | "ready";

export interface InvestorProfile {
  applicationId: string;
  fullName: string;
  email: string;
  mobile: string;
  dateOfBirth: string;
  gender: string;
  fatherName: string;
  occupation: string;
  addressLine1: string;
  addressLine2: string;
  city: string;
  state: string;
  pincode: string;
  country: string;
  maskedAadhaar: string;
  maskedPan: string;
  nationality: string;
  accountStatus: string;
  createdAt: string;
}

export interface OnboardingStep {
  key: string;
  label: string;
  path: string;
  status: OnboardingStatus;
}

export interface DocumentRecord {
  id: string;
  name: string;
  type: string;
  sizeLabel: string;
  status: StatusTone;
  statusLabel: string;
  signedDate?: string;
  uploadedDate?: string;
  hash?: string;
}

export interface NotificationRecord {
  id: string;
  title: string;
  body: string;
  tone: "success" | "warning" | "info";
  timestamp: string;
  read: boolean;
}

export interface AdminInvestorRow {
  id: string;
  name: string;
  email: string;
  applicationId: string;
  status: string;
  kyc: string;
  documents: string;
  createdDate: string;
}

export interface AdminKycRow {
  id: string;
  investor: string;
  document: string;
  status: string;
  verifiedOn: string;
}

export interface AdminEsignRow {
  id: string;
  investor: string;
  document: string;
  status: string;
  signedDate: string;
  reference: string;
}

export interface AdminArchiveRow {
  id: string;
  document: string;
  investor: string;
  signedDate: string;
  status: string;
  access: string;
}

export interface AuditLogRow {
  id: string;
  timestamp: string;
  user: string;
  action: string;
  module: string;
  status: string;
}
