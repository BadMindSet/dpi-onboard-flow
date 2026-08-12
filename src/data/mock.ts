/**
 * DEMO / MOCK DATA LAYER
 * ----------------------
 * Every value below is static demonstration data for the frontend prototype.
 * No backend, database or external verification service is contacted.
 * Replace each export with a typed API response when the existing backend
 * is wired up (shapes are defined in `src/types`).
 */
import type {
  AdminArchiveRow,
  AdminEsignRow,
  AdminInvestorRow,
  AdminKycRow,
  AuditLogRow,
  DocumentRecord,
  InvestorProfile,
  NotificationRecord,
} from "@/types";

export const IS_DEMO_DATA = true;

export const investor: InvestorProfile = {
  applicationId: "DPI-2026-004182",
  fullName: "Ananya Sharma",
  email: "ananya.sharma@example.com",
  mobile: "+91 98••• ••210",
  dateOfBirth: "14 Mar 1996",
  gender: "Female",
  fatherName: "Rajesh Sharma",
  occupation: "Salaried Professional",
  addressLine1: "402, Meridian Residency",
  addressLine2: "Baner Road",
  city: "Pune",
  state: "Maharashtra",
  pincode: "411045",
  country: "India",
  maskedAadhaar: "XXXX XXXX 1234",
  maskedPan: "ABCXX••••F",
  nationality: "Indian",
  accountStatus: "Active — Onboarding in progress",
  createdAt: "02 Aug 2026",
};

export const onboardingSteps = [
  { key: "personal", label: "Personal Information", path: "/onboarding/personal" },
  { key: "contact", label: "Contact Information", path: "/onboarding/contact" },
  { key: "address", label: "Address", path: "/onboarding/address" },
  { key: "identity", label: "Identity", path: "/onboarding/identity" },
  { key: "documents", label: "Documents", path: "/onboarding/documents" },
  { key: "review", label: "Review & Submit", path: "/onboarding/review" },
] as const;

export const vaultDocuments: DocumentRecord[] = [
  {
    id: "doc-1",
    name: "Signed Investor Application",
    type: "PDF",
    sizeLabel: "412 KB",
    status: "signed",
    statusLabel: "Signed",
    signedDate: "13 Aug 2026",
    hash: "9f2c41e8d7a03b6c5f1e9a84cd27b0f3a6e51d9c8b4270fe3a1d6c5b8e90f742",
  },
  {
    id: "doc-2",
    name: "Risk Disclosure Acknowledgement",
    type: "PDF",
    sizeLabel: "188 KB",
    status: "signed",
    statusLabel: "Signed",
    signedDate: "13 Aug 2026",
    hash: "5b71a0cd93e4f28a1c60b7d5e83f24a9107cbe6d5f38a2049c7b1de6035fa982",
  },
  {
    id: "doc-3",
    name: "eKYC Verification Summary",
    type: "PDF",
    sizeLabel: "96 KB",
    status: "verified",
    statusLabel: "Verified",
    signedDate: "12 Aug 2026",
    hash: "c48e2f7d1a95b30c6e82d4f05b7a91c3e6d820fa5417b9c3d0e6f28a4b71c095",
  },
];

export const uploadedDocuments: DocumentRecord[] = [
  {
    id: "up-1",
    name: "identity-document.jpg",
    type: "JPG",
    sizeLabel: "1.4 MB",
    status: "verified",
    statusLabel: "Verified (demo)",
    uploadedDate: "12 Aug 2026",
  },
  {
    id: "up-2",
    name: "address-proof.pdf",
    type: "PDF",
    sizeLabel: "820 KB",
    status: "completed",
    statusLabel: "Uploaded",
    uploadedDate: "12 Aug 2026",
  },
  {
    id: "up-3",
    name: "bank-statement.pdf",
    type: "PDF",
    sizeLabel: "—",
    status: "required",
    statusLabel: "Required",
  },
];

export const notifications: NotificationRecord[] = [
  {
    id: "n-1",
    title: "KYC verification completed",
    body: "Your demo identity verification has been completed.",
    tone: "success",
    timestamp: "Today, 09:42",
    read: false,
  },
  {
    id: "n-2",
    title: "Document signed",
    body: "Your document was successfully signed using the demo eSign workflow.",
    tone: "success",
    timestamp: "Today, 09:51",
    read: false,
  },
  {
    id: "n-3",
    title: "Document required",
    body: "Please upload your required bank statement document.",
    tone: "warning",
    timestamp: "Yesterday, 18:05",
    read: true,
  },
  {
    id: "n-4",
    title: "Application created",
    body: "Application DPI-2026-004182 was created successfully.",
    tone: "info",
    timestamp: "02 Aug 2026, 11:20",
    read: true,
  },
];

export const adminStats = [
  { label: "Total Investors", value: "1,284", delta: "Demo dataset" },
  { label: "Pending Applications", value: "146", delta: "Demo dataset" },
  { label: "KYC Pending", value: "92", delta: "Demo dataset" },
  { label: "KYC Verified", value: "1,046", delta: "Demo dataset" },
  { label: "Documents Signed", value: "2,318", delta: "Demo dataset" },
];

export const adminInvestors: AdminInvestorRow[] = [
  { id: "1", name: "Ananya Sharma", email: "ananya.s@example.com", applicationId: "DPI-2026-004182", status: "In Progress", kyc: "Verified", documents: "2 / 3", createdDate: "02 Aug 2026" },
  { id: "2", name: "Rohit Menon", email: "rohit.m@example.com", applicationId: "DPI-2026-004183", status: "Submitted", kyc: "Pending", documents: "3 / 3", createdDate: "03 Aug 2026" },
  { id: "3", name: "Priya Nair", email: "priya.n@example.com", applicationId: "DPI-2026-004190", status: "Completed", kyc: "Verified", documents: "3 / 3", createdDate: "04 Aug 2026" },
  { id: "4", name: "Imran Qureshi", email: "imran.q@example.com", applicationId: "DPI-2026-004201", status: "In Progress", kyc: "Review Required", documents: "1 / 3", createdDate: "05 Aug 2026" },
  { id: "5", name: "Kavya Reddy", email: "kavya.r@example.com", applicationId: "DPI-2026-004212", status: "Submitted", kyc: "Rejected", documents: "2 / 3", createdDate: "06 Aug 2026" },
  { id: "6", name: "Daniel Fernandes", email: "daniel.f@example.com", applicationId: "DPI-2026-004218", status: "Completed", kyc: "Verified", documents: "3 / 3", createdDate: "07 Aug 2026" },
  { id: "7", name: "Sneha Kulkarni", email: "sneha.k@example.com", applicationId: "DPI-2026-004224", status: "In Progress", kyc: "Pending", documents: "0 / 3", createdDate: "08 Aug 2026" },
  { id: "8", name: "Arjun Patel", email: "arjun.p@example.com", applicationId: "DPI-2026-004231", status: "Submitted", kyc: "Verified", documents: "3 / 3", createdDate: "09 Aug 2026" },
  { id: "9", name: "Meera Iyer", email: "meera.i@example.com", applicationId: "DPI-2026-004240", status: "Completed", kyc: "Verified", documents: "3 / 3", createdDate: "10 Aug 2026" },
  { id: "10", name: "Vikram Singh", email: "vikram.s@example.com", applicationId: "DPI-2026-004255", status: "In Progress", kyc: "Pending", documents: "1 / 3", createdDate: "11 Aug 2026" },
];

export const adminKycRows: AdminKycRow[] = [
  { id: "k1", investor: "Ananya Sharma", document: "identity-document.jpg", status: "Verified", verifiedOn: "12 Aug 2026" },
  { id: "k2", investor: "Rohit Menon", document: "id-front.png", status: "Pending", verifiedOn: "—" },
  { id: "k3", investor: "Imran Qureshi", document: "scan-copy.pdf", status: "Review Required", verifiedOn: "—" },
  { id: "k4", investor: "Kavya Reddy", document: "photo-2026.jpg", status: "Rejected", verifiedOn: "09 Aug 2026" },
  { id: "k5", investor: "Priya Nair", document: "identity-card.jpg", status: "Verified", verifiedOn: "06 Aug 2026" },
  { id: "k6", investor: "Arjun Patel", document: "identity-proof.pdf", status: "Verified", verifiedOn: "11 Aug 2026" },
];

export const adminEsignRows: AdminEsignRow[] = [
  { id: "e1", investor: "Ananya Sharma", document: "Signed Investor Application", status: "Signed", signedDate: "13 Aug 2026", reference: "DEMO-ESN-4182" },
  { id: "e2", investor: "Rohit Menon", document: "Investor Application", status: "Ready", signedDate: "—", reference: "DEMO-ESN-4183" },
  { id: "e3", investor: "Sneha Kulkarni", document: "Investor Application", status: "Pending", signedDate: "—", reference: "DEMO-ESN-4224" },
  { id: "e4", investor: "Kavya Reddy", document: "Risk Disclosure", status: "Failed", signedDate: "—", reference: "DEMO-ESN-4212" },
  { id: "e5", investor: "Priya Nair", document: "Signed Investor Application", status: "Signed", signedDate: "07 Aug 2026", reference: "DEMO-ESN-4190" },
];

export const adminArchiveRows: AdminArchiveRow[] = [
  { id: "a1", document: "Signed Investor Application", investor: "Ananya Sharma", signedDate: "13 Aug 2026", status: "Archived", access: "Investor + Admin" },
  { id: "a2", document: "Risk Disclosure Acknowledgement", investor: "Ananya Sharma", signedDate: "13 Aug 2026", status: "Archived", access: "Investor + Admin" },
  { id: "a3", document: "Signed Investor Application", investor: "Priya Nair", signedDate: "07 Aug 2026", status: "Archived", access: "Investor + Admin" },
  { id: "a4", document: "eKYC Verification Summary", investor: "Arjun Patel", signedDate: "11 Aug 2026", status: "Archived", access: "Admin only" },
];

export const auditLogs: AuditLogRow[] = [
  { id: "l1", timestamp: "13 Aug 2026, 09:51", user: "ananya.sharma", action: "Document signed (demo eSign)", module: "eSign", status: "Success" },
  { id: "l2", timestamp: "13 Aug 2026, 09:42", user: "ananya.sharma", action: "Demo KYC validation completed", module: "eKYC", status: "Success" },
  { id: "l3", timestamp: "12 Aug 2026, 18:22", user: "admin.review", action: "Reviewed investor application", module: "Investors", status: "Success" },
  { id: "l4", timestamp: "12 Aug 2026, 17:04", user: "kavya.reddy", action: "Identity document rejected", module: "eKYC", status: "Rejected" },
  { id: "l5", timestamp: "12 Aug 2026, 12:10", user: "rohit.menon", action: "Document uploaded", module: "Documents", status: "Success" },
  { id: "l6", timestamp: "11 Aug 2026, 08:30", user: "admin.review", action: "Archived signed document", module: "Paperless", status: "Success" },
];

export const signingDocument = {
  name: "Investor Application — DPI-2026-004182",
  type: "PDF Document",
  status: "Ready for Signature",
  pages: 6,
  hash: "9f2c41e8d7a03b6c5f1e9a84cd27b0f3a6e51d9c8b4270fe3a1d6c5b8e90f742",
};
