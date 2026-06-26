const CONTAPYME_EMAIL_SUFFIX = /@contapyme\.com$/i;

export const CONTAPYME_LOGIN_DOMAIN = "@contapyme.com";

export function normalizeContapymeLoginId(value: unknown) {
  const s = String(value ?? "").trim();
  if (!s) return "";
  if (s.includes("@")) return s.toLowerCase();
  return `${s.toLowerCase()}${CONTAPYME_LOGIN_DOMAIN}`;
}

function titleCaseWord(word: unknown) {
  const s = String(word || "").trim();
  if (!s) return "";
  return s.charAt(0).toUpperCase() + s.slice(1).toLowerCase();
}

export function stripContapymeEmail(value: unknown) {
  return String(value ?? "").trim().replace(CONTAPYME_EMAIL_SUFFIX, "");
}

export function formatContapymeLoginInput(value: unknown) {
  const id = normalizeContapymeLoginId(value);
  if (!id) return "";
  return stripContapymeEmail(id) || id;
}

export function formatSessionChipLabel(value: unknown, fallback = "Usuario") {
  const raw = stripContapymeEmail(value) || String(value ?? "").trim();
  if (!raw) return fallback;
  const display = /\s/.test(raw) ? raw.split(/\s+/).filter(Boolean).map(titleCaseWord).join(" ") : titleCaseWord(raw);
  return display.split(/\s+/).filter(Boolean)[0] || fallback;
}

export function resolveSessionHeaderLabel(displayName: unknown, username: unknown, fallback = "Usuario") {
  const dn = String(displayName ?? "").trim();
  if (dn) return formatSessionChipLabel(dn, fallback);
  return formatSessionChipLabel(username, fallback);
}
