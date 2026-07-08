// Contact submission service.
//
// This is the ONLY place the UI talks to for sending contact messages.
// Today it is a local stub. When Supabase is added, swap the body of
// `submitContactMessage` to insert into a `contact_messages` table (or
// call a `createServerFn`) — the UI contract does not change.
//
// Example Supabase-ready future implementation:
//
//   const { error } = await supabase
//     .from("contact_messages")
//     .insert({ name, email, message });
//   if (error) return { ok: false, error: error.message };
//   return { ok: true };

import type { ContactPayload, ContactSubmitResult } from "@/types";

const MIN_DELAY_MS = 400;

export async function submitContactMessage(
  payload: ContactPayload,
): Promise<ContactSubmitResult> {
  const name = payload.name.trim();
  const email = payload.email.trim();
  const message = payload.message.trim();

  if (!name || !email || !message) {
    return { ok: false, error: "Please fill in all fields." };
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return { ok: false, error: "Please enter a valid email address." };
  }
  if (message.length > 2000) {
    return { ok: false, error: "Message must be under 2000 characters." };
  }

  // TODO(supabase): replace this stub with a real insert. See file header.
  await new Promise((resolve) => setTimeout(resolve, MIN_DELAY_MS));

  if (import.meta.env.DEV) {
    // eslint-disable-next-line no-console
    console.info("[contact] stub submit", { name, email, length: message.length });
  }

  return { ok: true };
}
