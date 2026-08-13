# DPI InvestFlow

MASTER PROMPT — DIGITAL INVESTOR ONBOARDING SYSTEM

PROFESSIONAL ENTERPRISE SaaS FRONTEND

ROLE

You are a Senior Product Designer, Senior SaaS UI/UX Designer,

Senior React Frontend Engineer, Design-System Architect and

Enterprise FinTech UX specialist with 20+ years of professional

experience.

You are designing the FRONTEND ONLY for an academic project called:

DIGITAL INVESTOR ONBOARDING SYSTEM

Short brand name:

DPI

IMPORTANT:

This is a FRONTEND DESIGN / UI PROJECT.

DO NOT build or redesign the backend.

DO NOT replace the existing PHP + MySQL backend.

DO NOT create a new backend.

DO NOT modify database architecture.

DO NOT connect to UIDAI, NSDL, government APIs, banking APIs,

or real legally-binding eSign services.

The existing application/backend will remain separate.

The goal is to create a polished, professional SaaS frontend that

represents the existing DPI project clearly during a company/project

demonstration.

============================================================

1. CORE PRODUCT IDENTITY

============================================================

Product:

Digital Investor Onboarding System

Brand:

DPI

Purpose:

A digital platform for investor onboarding, identity verification,

document management, digital signature workflow and paperless

document management.

The UI should feel like a modern enterprise FinTech/SaaS platform.

It should look:

Professional

Clean

Premium

Modern

Trustworthy

Minimal

Enterprise

Responsive

Consistent

It should NOT look:

Like a student template

Like a gaming website

Overly colorful

Over-animated

Crowded

Randomly designed

Like a generic Bootstrap template

============================================================

2. BRANDING

============================================================

Use the provided DPI logo as the primary brand identity.

IMPORTANT:

Do NOT create a random logo.

Do NOT place "DPI2" beside the logo.

The header should display the DPI logo cleanly.

Brand text:

DIGITAL INVESTOR

ONBOARDING SYSTEM

Primary visual direction:

Deep Navy Blue

Royal Blue

Professional Cyan accents

White

Very light blue/gray backgrounds

Use color carefully.

Suggested visual palette:

Primary:

#123B8F

Secondary:

#2563EB

Accent:

#06B6D4

Success:

#16A34A

Warning:

#F59E0B

Danger:

#DC2626

Background:

#F7F9FC

Text:

#0F172A

Muted:

#64748B

Do not use all colors everywhere.

Blue should be the primary brand color.

============================================================

3. TECHNOLOGY

============================================================

Build the frontend using:

React

TypeScript

Tailwind CSS

shadcn/ui

Lucide icons

Use a clean component-based architecture.

Create reusable components.

Examples:

Button

Card

Badge

Modal

Dialog

Input

Select

Tabs

Progress

Stepper

Alert

Toast

DataTable

Sidebar

Navbar

FileUpload

StatusCard

DocumentCard

Timeline

Avoid duplicate UI code.

============================================================

4. APPLICATION STRUCTURE

============================================================

Create the following frontend routes:

/

 /login

 /register

 /dashboard

 /onboarding

 /onboarding/personal

 /onboarding/contact

 /onboarding/address

 /onboarding/identity

 /onboarding/documents

 /onboarding/review

 /kyc

 /esign

 /esign/review

 /paperless

 /documents

 /profile

 /notifications

 /admin

 /admin/investors

 /admin/kyc

 /admin/esign

 /admin/paperless

 /admin/audit-logs

These are FRONTEND routes only.

Use realistic demo/mock data where backend data is unavailable.

Clearly separate mock/demo state from real backend integration.

============================================================

5. GLOBAL LAYOUT

============================================================

Create a consistent application shell.

Desktop:

-------------------------------------------------------

| DPI Logo | Navigation              Notifications User |

-------------------------------------------------------

|                                                       |

| Sidebar                Main Content                   |

|                                                       |

| Dashboard                                             |

| Investor Profile                                      |

| eKYC                                                  |

| Documents                                             |

| eSign                                                 |

| Paperless Vault                                       |

| Notifications                                         |

|                                                       |

-------------------------------------------------------

Use a clean sidebar.

Sidebar sections:

OVERVIEW

Dashboard

ONBOARDING

Personal Information

Contact Information

Address

Identity

Documents

VERIFICATION

eKYC Verification

SIGNATURE

eSign

DOCUMENTS

Paperless Vault

ACCOUNT

Profile

Notifications

Use icons.

Show active navigation state clearly.

============================================================

6. LOGIN PAGE

============================================================

Create a premium professional login page.

Layout:

Left:

Brand / hero area

Right:

Login card

Hero area should use subtle DPI-themed technology graphics.

Do not overcrowd the hero.

Login card:

Welcome Back

Sign in to your DPI account

Email Address

Password

Show Password icon

Remember me

Forgot Password?

[ Sign In ]

Below:

Don't have an account?

[ Create Account ]

Include subtle demo notice where appropriate.

============================================================

7. REGISTRATION PAGE

============================================================

Create a professional registration form.

Title:

Create Your DPI Account

Subtitle:

Start your digital investor onboarding journey.

Fields:

Full Name

Email Address

Mobile Number

Password

Confirm Password

Password fields must include:

Show / Hide password

Password strength indicator

Validation messages.

Email validation:

Valid email

Invalid email

Email already registered

Do NOT pretend the email has been checked against a real database.

For frontend demo:

Use mock states.

Example:

✓ Email available

or:

⚠ Email already registered

Use a clean two-column layout on desktop.

============================================================

8. INVESTOR DASHBOARD

============================================================

This is the most important page.

Create a premium enterprise dashboard.

Header:

Good morning, Investor

Complete your digital onboarding and verification.

Show:

Application ID

Application Status

Onboarding Progress

Example:

80% Complete

Use a professional horizontal progress indicator.

============================================================

9. DASHBOARD MODULE CARDS

============================================================

Do NOT put everything into one large card.

Create separate cards.

Example:

------------------------------------------------

PERSONAL INFORMATION

Basic investor information

✓ Completed

[ View ]

------------------------------------------------

------------------------------------------------

IDENTITY

Identity information

✓ Completed

[ View ]

------------------------------------------------

------------------------------------------------

DOCUMENTS

Upload required documents

2 / 3 completed

[ Manage ]

------------------------------------------------

------------------------------------------------

eKYC VERIFICATION

Verify your identity document

Pending

[ Verify Identity ]

------------------------------------------------

------------------------------------------------

eSIGN

Digitally sign your documents

Locked until KYC completion

[ View ]

------------------------------------------------

------------------------------------------------

PAPERLESS VAULT

Access your signed documents

3 Documents

[ Open Vault ]

------------------------------------------------

Cards should have:

Icon

Title

Description

Status

Action

Use status badges:

Completed

Pending

In Progress

Required

Verified

Rejected

============================================================

10. eKYC PAGE

============================================================

Create a professional identity verification interface.

Header:

eKYC Verification

Verify your identity document

Display a clear badge:

DEMO LOCAL VALIDATION

Important notice:

"This is an educational/student demonstration.

This interface does not connect to UIDAI, NSDL,

government authorities, or official Aadhaar verification services."

============================================================

11. DOCUMENT UPLOAD UI

============================================================

Create a large professional upload component.

Example:

-------------------------------------------------

|                                               |

|                Upload Document                |

|                                               |

|                     ↑                         |

|                                               |

|      Drag & drop your document here           |

|             or click to browse                |

|                                               |

|       JPG • PNG • WEBP • PDF                  |

|                                               |

-------------------------------------------------

Below:

[ Camera ]       [ Upload Document ]

Use a beautiful but minimal upload interface.

============================================================

12. AFTER DOCUMENT UPLOAD

============================================================

Show:

Document Preview

Filename

File size

File type

Upload status

Buttons:

[ Replace ]

[ Verify Document ]

Example:

identity-document.jpg

1.4 MB

Uploaded successfully

============================================================

13. eKYC VERIFICATION RESULT

============================================================

Create three possible UI states.

STATE 1:

VERIFIED

✓ Demo KYC Verified

Identity document successfully validated

using local demonstration rules.

Show:

Name

Masked Aadhaar Number

Document Type

Verification Date

Aadhaar example:

XXXX XXXX 1234

Button:

[ Continue to eSign ]

STATE 2:

REJECTED

✕

Document Verification Failed

The uploaded document could not be validated

as an identity document.

Possible reasons:

Unsupported document

Required information unavailable

Invalid document

Document could not be validated

Button:

[ Upload Another Document ]

STATE 3:

NEEDS REVIEW

⚠ Verification Requires Review

The uploaded document could not be confidently

validated.

Button:

[ Upload Another Document ]

IMPORTANT:

Never show a random photograph as "KYC Verified".

For example:

Taj Mahal photo

Random landscape

Selfie

Food image

Screenshot

Random image

must visually result in:

Rejected / Invalid Document

Do not represent random images as official identity verification.

============================================================

14. DOCUMENT INFORMATION CARD

============================================================

When demo data is available, display:

Document Type

Full Name

Masked Aadhaar Number

Date of Birth

Gender

Address

Sensitive values should be masked.

Example:

XXXX XXXX 1234

Never expose unnecessary sensitive identity information.

============================================================

15. eSIGN PAGE

============================================================

Create a separate professional eSign page.

Title:

Digital Signature

Subtitle:

Review your document before signing.

Show:

Document name

Document type

Document status

SHA-256 hash

Status:

Ready for Signature

Display a document preview card.

Require explicit confirmation.

Checkbox:

I have reviewed the document and confirm that I want to

continue with the demonstration signature.

Button:

[ Confirm & Sign ]

Do not automatically sign when opening the page.

Show:

DEMO LOCAL ESIGN

Clearly state:

"This is an educational demonstration and is not a legally

binding external eSign service."

============================================================

16. PAPERLESS VAULT

============================================================

Create a professional document management interface.

Title:

Paperless Vault

Subtitle:

Secure access to your signed documents.

Show document cards/table:

Document Name

Type

Signed Date

Status

Actions

Actions:

View

Download

Use document icons.

Provide:

Search

Filter

Sort

Example:

Signed Investor Application

PDF

Signed

13 Aug 2026

[ View ] [ Download ]

============================================================

17. INVESTOR PROFILE

============================================================

Create a clean profile page.

Sections:

Personal Information

Contact Information

Address

Identity

Account Status

Use masked sensitive information.

Provide:

Edit

View

Status

buttons.

============================================================

18. NOTIFICATIONS

============================================================

Create a clean notification center.

Examples:

✓ KYC verification completed

Your demo identity verification has been completed.

✓ Document signed

Your document was successfully signed using the

demo eSign workflow.

⚠ Document required

Please upload your required identity document.

Use timestamps.

============================================================

19. ADMIN DASHBOARD

============================================================

Create a separate enterprise admin interface.

Admin sidebar:

Dashboard

Investors

Applications

KYC Management

eSign Management

Paperless Archive

Audit Logs

Dashboard statistics:

Total Investors

Pending Applications

KYC Pending

KYC Verified

Documents Signed

Do NOT fabricate statistics.

Use clearly labeled demo/mock values if backend data

is unavailable.

============================================================

20. ADMIN INVESTOR MANAGEMENT

============================================================

Create professional table.

Columns:

Investor

Application ID

Status

KYC

Documents

Created Date

Actions

Actions:

View

Review

KYC

Documents

Use:

Search

Filter

Pagination

============================================================

21. ADMIN KYC

============================================================

Show:

Investor

Document

Verification Status

Verification Date

Action

Status badges:

Pending

Verified

Rejected

Review Required

Provide a clean document review panel.

============================================================

22. ADMIN eSIGN

============================================================

Show:

Investor

Document

Signature Status

Signed Date

Reference

Statuses:

Ready

Pending

Signed

Failed

============================================================

23. ADMIN PAPERLESS

============================================================

Show archived signed documents.

Columns:

Document

Investor

Signed Date

Status

Access

Buttons:

View

Download

============================================================

24. AUDIT LOGS

============================================================

Create professional audit log table.

Columns:

Timestamp

User

Action

Module

Status

Sensitive values must never be displayed.

Never show:

Passwords

CSRF tokens

Full Aadhaar numbers

Authentication secrets

============================================================

25. DESIGN LANGUAGE

============================================================

The application must use one consistent design system.

Cards:

Border radius:

12–16px

Shadows:

Very subtle

Borders:

Light gray

Buttons:

Consistent height and radius

Typography:

Modern sans-serif.

Use clear hierarchy:

H1

H2

H3

Body

Caption

Do not use excessive font sizes.

============================================================

26. ANIMATIONS

============================================================

Use subtle professional animations.

Examples:

Page fade

Card hover

Button hover

Upload animation

Progress animation

Success check animation

Sidebar transition

Modal transition

Do NOT use:

Bouncing UI

Excessive particles

Gaming effects

Heavy animations

Distracting backgrounds

Support:

prefers-reduced-motion

============================================================

27. HERO BACKGROUND

============================================================

Use a subtle futuristic DPI technology visual.

Theme:

Digital identity

Secure documents

Digital onboarding

Cybersecurity

Electronic signature

Style:

Professional enterprise

Deep blue

Soft glow

Minimal

Clean

The background must never interfere with text readability.

Do not put random stock imagery across every page.

Use hero imagery only where it improves the page.

============================================================

28. RESPONSIVE DESIGN

============================================================

Desktop:

Professional enterprise dashboard.

Tablet:

Adapt cards and navigation.

Mobile:

Use collapsible sidebar.

Cards become one-column.

Tables become responsive.

Buttons remain accessible.

No horizontal overflow.

No broken layouts.

============================================================

29. ACCESSIBILITY

============================================================

Implement:

Semantic HTML

Keyboard navigation

Visible focus states

ARIA labels where required

Accessible contrast

Form labels

Clear error messages

Accessible buttons

Accessible dialogs

Do not rely only on color to communicate status.

============================================================

30. EMPTY STATES

============================================================

Design professional empty states.

Example:

No documents yet

Your signed documents will appear here.

[ Go to Documents ]

============================================================

31. ERROR STATES

============================================================

Create clean error messages.

Example:

Something went wrong.

We couldn't load your documents.

[ Try Again ]

Do not display raw technical errors.

============================================================

32. LOADING STATES

============================================================

Use skeleton loaders instead of blank pages.

For example:

Dashboard skeleton

Document skeleton

Profile skeleton

Table skeleton

============================================================

33. MOCK DATA

============================================================

Because this is frontend-only:

Use realistic mock data.

Clearly structure mock data so that it can later be replaced

by API responses.

Create a dedicated:

src/data/

or equivalent mock data layer.

Do NOT hard-code data throughout components.

============================================================

34. COMPONENT ARCHITECTURE

============================================================

Use reusable components.

Suggested structure:

src/

  components/

    layout/

    navigation/

    dashboard/

    forms/

    ekyc/

    esign/

    documents/

    admin/

    common/

  pages/

  data/

  hooks/

  types/

  utils/

  styles/

Keep components small and maintainable.

============================================================

35. FRONTEND STATE

============================================================

Create realistic frontend states.

For eKYC:

PENDING

UPLOADING

VALIDATING

VERIFIED

REJECTED

REVIEW_REQUIRED

For eSign:

LOCKED

READY

CONFIRMATION_REQUIRED

SIGNED

For onboarding:

NOT_STARTED

IN_PROGRESS

COMPLETED

Use state-driven UI.

============================================================

36. IMPORTANT DEMO FLOW

============================================================

The evaluator should be able to understand this flow:

LOGIN

 ↓

DASHBOARD

 ↓

PERSONAL INFORMATION

 ↓

CONTACT

 ↓

ADDRESS

 ↓

IDENTITY

 ↓

DOCUMENTS

 ↓

eKYC

 ↓

DOCUMENT VALIDATION

 ↓

KYC RESULT

 ↓

eSIGN

 ↓

SIGNED DOCUMENT

 ↓

PAPERLESS VAULT

Admin:

ADMIN LOGIN

 ↓

ADMIN DASHBOARD

 ↓

INVESTORS

 ↓

KYC MANAGEMENT

 ↓

eSIGN MANAGEMENT

 ↓

PAPERLESS ARCHIVE

 ↓

AUDIT LOGS

============================================================

37. IMPORTANT BRANDING RULE

============================================================

Use ONLY:

DPI

and:

Digital Investor Onboarding System

Do not randomly introduce:

DPI2

DPI Portal

Digital Finance

Digital Banking

Random company names

Random logos

The logo should be positioned consistently.

============================================================

38. DO NOT MODIFY BACKEND

============================================================

This Lovable project is FRONTEND ONLY.

Do not create:

PHP files

MySQL database

SQL migrations

Authentication backend

Government integrations

Real KYC APIs

Real eSign APIs

The frontend should be designed so it can later communicate

with an existing backend through API endpoints.

============================================================

39. FINAL PROFESSIONAL QUALITY BAR

============================================================

Imagine this product is being presented to:

A software company

A senior developer

A product manager

A technical interviewer

A project evaluator

A FinTech company

The first impression must be:

"This looks like a professionally designed enterprise SaaS

application."

NOT:

"This looks like a college template."

============================================================

40. FINAL QA CHECK

============================================================

Before considering the frontend complete, verify:

✓ Logo consistent

✓ No DPI2 beside logo

✓ Login professional

✓ Registration professional

✓ Show/hide password

✓ Dashboard clean

✓ Modules separated

✓ eKYC clearly separated

✓ Upload UI polished

✓ Document preview works

✓ Verification states work

✓ Invalid document state exists

✓ Taj Mahal/random image cannot visually be treated as a

  verified identity document

✓ eSign separate

✓ Paperless Vault separate

✓ Admin separate

✓ Audit Logs separate

✓ Responsive

✓ Accessible

✓ No broken routes

✓ No console errors

✓ No overlapping components

✓ No random elements

✓ No inconsistent colors

✓ No inconsistent typography

✓ No unnecessary animations

============================================================

FINAL INSTRUCTION

============================================================

Build this as a polished, premium, enterprise-grade SaaS frontend.

Prioritize:

CLARITY

CONSISTENCY

PROFESSIONALISM

USABILITY

ACCESSIBILITY

RESPONSIVENESS

VISUAL HIERARCHY

Do not over-design.

Do not add unnecessary features.

Do not change the business concept.

Do not redesign the backend.

The result should be a professional frontend prototype for:

DIGITAL INVESTOR ONBOARDING SYSTEM

DPI

ready for a professional company/project demonstration.

This project was built with [Lovable](https://lovable.dev).

**Live app**: https://dpi-onboard-flow.lovable.app

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/9f00f2ab-0c9d-4618-926a-9e91a189fc6e).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
