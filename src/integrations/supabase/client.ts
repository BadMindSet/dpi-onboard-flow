import { createClient } from "@supabase/supabase-js";

import type { Database } from "./types";

// Publishable (browser-safe) credentials for the existing DPI3 Supabase project.
// Never place the service_role / secret key in this file.
const SUPABASE_URL =
  import.meta.env["VITE_SUPABASE_URL"] ?? "https://qphdicbrtzpmpxdgiuvg.supabase.co";
const SUPABASE_PUBLISHABLE_KEY =
  import.meta.env["VITE_SUPABASE_PUBLISHABLE_KEY"] ??
  "sb_publishable_wlaSuvWXg8RzKwloAdPSiA_IHekhGxd";

export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY, {
  auth: {
    persistSession: true,
    autoRefreshToken: true,
    detectSessionInUrl: true,
    storageKey: "dpi3-auth",
  },
});

export const DOCUMENTS_BUCKET = "documents";
