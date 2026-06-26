/** Transporte César para contraseñas en login (paridad front-shared / langlab). */
export const CAESAR_PREFIX = "abc123";
export const CAESAR_SUFFIX = "xyz987";

export function caesarShiftForDate(date = new Date()) {
  return date.getUTCDate();
}

function shiftChar(c: string, delta: number) {
  const code = c.charCodeAt(0);
  if (code >= 65 && code <= 90) return String.fromCharCode(((code - 65 + delta + 26) % 26) + 65);
  if (code >= 97 && code <= 122) return String.fromCharCode(((code - 97 + delta + 26) % 26) + 97);
  return c;
}

function caesarEncode(plain: string, shift: number) {
  return [...plain].map((c) => shiftChar(c, shift)).join("");
}

export function wrapPassword(plain: string) {
  if (!plain) return plain;
  return caesarEncode(CAESAR_PREFIX + plain + CAESAR_SUFFIX, caesarShiftForDate(new Date()));
}
