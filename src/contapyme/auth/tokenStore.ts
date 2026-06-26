export function createTokenStore(sessionKey: string) {
  function read() {
    try {
      let raw = localStorage.getItem(sessionKey);
      if (!raw) {
        const legacy = sessionStorage.getItem(sessionKey);
        if (legacy) {
          localStorage.setItem(sessionKey, legacy);
          sessionStorage.removeItem(sessionKey);
          raw = legacy;
        }
      }
      return raw ? JSON.parse(raw) : null;
    } catch {
      return null;
    }
  }

  function save(data: unknown) {
    localStorage.setItem(sessionKey, JSON.stringify(data));
    try { sessionStorage.removeItem(sessionKey); } catch { /* ignore */ }
  }

  function clear() {
    localStorage.removeItem(sessionKey);
    try { sessionStorage.removeItem(sessionKey); } catch { /* ignore */ }
  }

  return { read, save, clear };
}

export function isTokenValid(record: { token?: unknown; expiresAt?: string | number | Date | null } | null | undefined) {
  if (!record?.token) return false;
  if (record.expiresAt && new Date(record.expiresAt).getTime() < Date.now()) return false;
  return true;
}
