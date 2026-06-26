/** Credenciales recordadas en login modal (localStorage, ofuscado). Clave compartida ecosistema Jeff-Aporta. */
const STORAGE_KEY = "jeffaporta:login-creds";
const PREFIX = "abc123";
const SUFFIX = "xyz987";

function encodeStoredSecret(plain: string) {
  if (!plain) return "";
  try {
    return btoa(unescape(encodeURIComponent(PREFIX + plain + SUFFIX)));
  } catch {
    return "";
  }
}

function decodeStoredSecret(enc: string) {
  if (!enc) return "";
  try {
    const raw = decodeURIComponent(escape(atob(enc)));
    if (raw.indexOf(PREFIX) === 0 && raw.slice(-SUFFIX.length) === SUFFIX) {
      return raw.slice(PREFIX.length, raw.length - SUFFIX.length);
    }
    return "";
  } catch {
    return "";
  }
}

export function readLoginCredentials() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return { username: "", password: "", remember: true };
    const saved = JSON.parse(raw);
    return {
      username: saved.username || "",
      password: saved.passwordEnc ? decodeStoredSecret(saved.passwordEnc) : "",
      remember: saved.remember !== false,
    };
  } catch {
    return { username: "", password: "", remember: true };
  }
}

export function saveLoginCredentials(username: string, password: string, remember: boolean) {
  try {
    if (!remember) {
      localStorage.removeItem(STORAGE_KEY);
      return;
    }
    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify({
        username: String(username || "").trim(),
        passwordEnc: encodeStoredSecret(password),
        remember: true,
      }),
    );
  } catch { /* ignore */ }
}

export function clearLoginCredentials() {
  try { localStorage.removeItem(STORAGE_KEY); } catch { /* ignore */ }
}
