/** Catálogo de paletas — 10 mono + 10 dual + 10 tríada. Fuente única para CSS y constants.ts */

/** @typedef {"mono"|"dual"|"triad"} Scheme */

/**
 * @param {string} d1
 * @param {string} d2
 * @param {string} d3
 * @param {string} color
 * @param {string} bgPrimary
 * @param {string} bgSecondary
 * @param {string} bgReadonly
 * @param {string} bBase 6-char hex (sin alpha)
 * @param {string} bRequired
 * @param {string} bOptional
 * @param {Partial<{info:string,success:string,warning:string,error:string,danger:string}>} sem
 */
function tok(d1, d2, d3, color, bgPrimary, bgSecondary, bgReadonly, bBase, bRequired, bOptional, sem = {}) {
  return {
    d1, d2, d3,
    color, bgPrimary, bgSecondary, bgReadonly, bBase, bRequired, bOptional,
    info: sem.info ?? "#5eb3ff",
    success: sem.success ?? "#2e9e5a",
    warning: sem.warning ?? "#e6a817",
    error: sem.error ?? "#e04545",
    danger: sem.danger ?? "#c6283a",
  };
}

/** @param {ReturnType<typeof tok>} t */
function monoSide(d1, color, bgPrimary, bgSecondary, bgReadonly, bBase, bRequired, bOptional, sem) {
  return tok(d1, d1, d1, color, bgPrimary, bgSecondary, bgReadonly, bBase, bRequired, bOptional, sem);
}

/** @param {object} p */
function p(p) {
  return p;
}

export const PALETTES = [
  /* ── Mono (10) ── */
  p({ id: "grafito", label: "Grafito", icon: "mdi:square", scheme: "mono", note: "gris pizarra frío",
    light: tok("#475569", "#64748b", "#0ea5e9", "#1e293b", "#f8fafc", "#ffffff", "#f1f5f9", "#475569", "#334155", "#64748b", { info: "#0284c7", success: "#16a34a", warning: "#ca8a04", error: "#dc2626", danger: "#b91c1c" }),
    dark: tok("#94a3b8", "#cbd5e1", "#38bdf8", "#f1f5f9", "#0f1419", "#1e293b", "#151c24", "#94a3b8", "#cbd5e1", "#e2e8f0", { info: "#38bdf8", success: "#4ade80", warning: "#fbbf24", error: "#f87171", danger: "#fb7185" }),
  }),
  p({ id: "menta", label: "Menta", icon: "mdi:sprout", scheme: "mono", note: "verde menta / agua fresca",
    light: tok("#14b8a6", "#22d3ee", "#a3e635", "#0a2e28", "#f0fdfa", "#ffffff", "#ccfbf1", "#14b8a6", "#0d9488", "#22d3ee", { info: "#06b6d4", success: "#22c55e", warning: "#eab308", error: "#ef4444", danger: "#dc2626" }),
    dark: tok("#5eead4", "#67e8f9", "#bef264", "#ecfdf5", "#041a16", "#0c2e28", "#082420", "#5eead4", "#99f6e4", "#a5f3fc", { info: "#22d3ee", success: "#4ade80", warning: "#fbbf24", error: "#f87171", danger: "#fb7185" }),
  }),
  p({ id: "vulcano", label: "Vulcano", icon: "mdi:fire", scheme: "mono", note: "grises volcánicos",
    light: monoSide("#6e6862", "#2a2826", "#f4f2ef", "#ffffff", "#ebe8e4", "#6e6862", "#5c5650", "#8a7f72", { info: "#6f7d86", success: "#5a8a6a", warning: "#b8923a", error: "#c45c4a", danger: "#a84838" }),
    dark: monoSide("#b5aea4", "#eceae6", "#1a1917", "#2c2a27", "#22201e", "#9a948c", "#c9c2b8", "#a89f94", { info: "#9aa8b0", success: "#7eb89a", warning: "#d4b05a", error: "#e08a7a", danger: "#d47262" }),
  }),
  p({ id: "carbon", label: "Carbón", icon: "mdi:hexagon-outline", scheme: "mono", note: "carbón neutro",
    light: monoSide("#374151", "#111827", "#f9fafb", "#ffffff", "#f3f4f6", "#374151", "#1f2937", "#4b5563"),
    dark: monoSide("#9ca3af", "#f3f4f6", "#0b0f14", "#1f2937", "#151b22", "#6b7280", "#d1d5db", "#9ca3af"),
  }),
  p({ id: "plata", label: "Plata", icon: "mdi:brightness-6", scheme: "mono", note: "plata azulada",
    light: monoSide("#64748b", "#1e293b", "#f1f5f9", "#ffffff", "#e2e8f0", "#64748b", "#475569", "#94a3b8"),
    dark: monoSide("#cbd5e1", "#f8fafc", "#121820", "#243044", "#1a2430", "#94a3b8", "#e2e8f0", "#cbd5e1"),
  }),
  p({ id: "humo", label: "Humo", icon: "mdi:smoke", scheme: "mono", note: "gris cálido humo",
    light: monoSide("#78716c", "#292524", "#fafaf9", "#ffffff", "#f5f5f4", "#78716c", "#57534e", "#a8a29e"),
    dark: monoSide("#a8a29e", "#fafaf9", "#1c1917", "#292524", "#231f1e", "#78716c", "#d6d3d1", "#a8a29e"),
  }),
  p({ id: "marfil", label: "Marfil", icon: "mdi:feather", scheme: "mono", note: "marfil cálido",
    light: monoSide("#a8947a", "#3d3428", "#faf8f5", "#ffffff", "#f5f0e8", "#a8947a", "#8a7760", "#c4b5a0"),
    dark: monoSide("#d4c4a8", "#faf6ef", "#1a1612", "#2e2820", "#241f19", "#a8947a", "#e8dcc8", "#d4c4a8"),
  }),
  p({ id: "azabache", label: "Azabache", icon: "mdi:circle-slice-8", scheme: "mono", note: "negro azulado",
    light: monoSide("#1e293b", "#0f172a", "#f8fafc", "#ffffff", "#f1f5f9", "#1e293b", "#0f172a", "#334155"),
    dark: monoSide("#64748b", "#e2e8f0", "#060a10", "#0f172a", "#0a1018", "#334155", "#94a3b8", "#64748b"),
  }),
  p({ id: "nieve", label: "Nieve", icon: "mdi:snowflake", scheme: "mono", note: "blanco helado",
    light: monoSide("#94a3b8", "#334155", "#f8fafc", "#ffffff", "#eef2f7", "#94a3b8", "#64748b", "#cbd5e1"),
    dark: monoSide("#e2e8f0", "#f8fafc", "#0c1218", "#1a2430", "#121a22", "#64748b", "#f1f5f9", "#e2e8f0"),
  }),
  p({ id: "piedra", label: "Piedra", icon: "mdi:wall", scheme: "mono", note: "piedra tostada",
    light: monoSide("#8b8178", "#3a3530", "#f7f5f3", "#ffffff", "#efece8", "#8b8178", "#6b635c", "#a39990"),
    dark: monoSide("#b8aea4", "#f5f2ef", "#1a1816", "#2c2926", "#221f1c", "#8b8178", "#d4ccc4", "#b8aea4"),
  }),

  /* ── Dual (10) ── */
  p({ id: "oceano", label: "Océano", icon: "mdi:waves", scheme: "dual", note: "teal + cielo",
    light: tok("#0d9488", "#38bdf8", "#f59e0b", "#0a2e32", "#f0fdfa", "#ffffff", "#ccfbf1", "#0d9488", "#0f766e", "#38bdf8", { info: "#38bdf8", success: "#16a34a", warning: "#f59e0b", error: "#dc2626", danger: "#b91c1c" }),
    dark: tok("#2dd4bf", "#7dd3fc", "#fcd34d", "#ecfdf5", "#041a18", "#0c2e2a", "#082420", "#2dd4bf", "#5eead4", "#7dd3fc", { info: "#7dd3fc", success: "#4ade80", warning: "#fbbf24", error: "#f87171", danger: "#fb7185" }),
  }),
  p({ id: "ambar", label: "Ámbar", icon: "mdi:weather-sunny", scheme: "dual", note: "ámbar + oro",
    light: tok("#d97706", "#ca8a04", "#dc2626", "#3a2808", "#fffbeb", "#ffffff", "#fef3c7", "#d97706", "#b45309", "#ca8a04"),
    dark: tok("#fbbf24", "#facc15", "#f87171", "#fef3c7", "#1a1206", "#2e200c", "#221808", "#fbbf24", "#fcd34d", "#facc15"),
  }),
  p({ id: "indigo", label: "Índigo", icon: "mdi:moon-waning-crescent", scheme: "dual", note: "índigo + violeta",
    light: tok("#4338ca", "#6366f1", "#f97316", "#1e1b4b", "#eef2ff", "#ffffff", "#e0e7ff", "#4338ca", "#3730a3", "#6366f1"),
    dark: tok("#818cf8", "#a5b4fc", "#fb923c", "#e0e7ff", "#0c0a1e", "#1e1b4b", "#14102e", "#818cf8", "#a5b4fc", "#c7d2fe"),
  }),
  p({ id: "tierra", label: "Tierra", icon: "mdi:terrain", scheme: "dual", note: "marrón + ocre",
    light: tok("#92400e", "#a16207", "#15803d", "#3a2810", "#fefce8", "#ffffff", "#fef9c3", "#92400e", "#78350f", "#a16207"),
    dark: tok("#d97706", "#eab308", "#4ade80", "#fef3c7", "#1a1006", "#2e1e0c", "#221608", "#d97706", "#fbbf24", "#fcd34d"),
  }),
  p({ id: "cobre", label: "Cobre", icon: "mdi:gold", scheme: "dual", note: "cobre + turquesa",
    light: tok("#b45309", "#0d9488", "#b45309", "#3a2010", "#fff7ed", "#ffffff", "#ffedd5", "#b45309", "#92400e", "#0d9488"),
    dark: tok("#fb923c", "#2dd4bf", "#fb923c", "#ffedd5", "#1a0e06", "#2e1810", "#221208", "#fb923c", "#fdba74", "#2dd4bf"),
  }),
  p({ id: "oliva", label: "Oliva", icon: "mdi:fruit-grapes", scheme: "dual", note: "oliva + oro",
    light: tok("#647048", "#ca8a04", "#647048", "#2a2e1a", "#f7f8f2", "#ffffff", "#eef0e4", "#647048", "#4d5536", "#ca8a04"),
    dark: tok("#a3b86c", "#fbbf24", "#a3b86c", "#f0f4e4", "#14180c", "#242a18", "#1a1e12", "#a3b86c", "#c5d99a", "#fbbf24"),
  }),
  p({ id: "glaciar", label: "Glaciar", icon: "mdi:snowflake-variant", scheme: "dual", note: "hielo + azul profundo",
    light: tok("#0284c7", "#7dd3fc", "#0284c7", "#0c2a42", "#f0f9ff", "#ffffff", "#e0f2fe", "#0284c7", "#0369a1", "#7dd3fc"),
    dark: tok("#38bdf8", "#bae6fd", "#38bdf8", "#e0f2fe", "#061018", "#0c2030", "#081820", "#38bdf8", "#7dd3fc", "#bae6fd"),
  }),
  p({ id: "bosque", label: "Bosque", icon: "mdi:tree", scheme: "dual", note: "verde bosque + musgo",
    light: tok("#166534", "#a16207", "#166534", "#0a2818", "#f0fdf4", "#ffffff", "#dcfce7", "#166534", "#14532d", "#a16207"),
    dark: tok("#4ade80", "#fbbf24", "#4ade80", "#ecfdf5", "#061408", "#0c2414", "#081c10", "#4ade80", "#86efac", "#fbbf24"),
  }),
  p({ id: "medianoche", label: "Medianoche", icon: "mdi:weather-night", scheme: "dual", note: "navy + cian",
    light: tok("#1e3a5f", "#38bdf8", "#1e3a5f", "#0a1828", "#eff6ff", "#ffffff", "#dbeafe", "#1e3a5f", "#172e4a", "#38bdf8"),
    dark: tok("#60a5fa", "#22d3ee", "#60a5fa", "#dbeafe", "#060c14", "#0f1a2e", "#0a1220", "#60a5fa", "#93c5fd", "#22d3ee"),
  }),
  p({ id: "ciruela", label: "Ciruela", icon: "mdi:flower-tulip-outline", scheme: "dual", note: "ciruela + rosa",
    light: tok("#7e22ce", "#db2777", "#7e22ce", "#2a0a3a", "#faf5ff", "#ffffff", "#f3e8ff", "#7e22ce", "#6b21a8", "#db2777"),
    dark: tok("#c084fc", "#f472b6", "#c084fc", "#fae8ff", "#14061a", "#240a2e", "#1a0822", "#c084fc", "#d8b4fe", "#f472b6"),
  }),

  /* ── Tríada (10) ── */
  p({ id: "hues-dodgerblue", label: "Dodger", icon: "mdi:palette-swatch", scheme: "triad", note: "azul dodger ContaPyme", aliases: ["contapyme"],
    light: tok("dodgerblue", "#e85d4c", "#9b5de5", "#1a2a3a", "#f4f8fc", "#ffffff", "#eef4fb", "#5a7a9a", "dodgerblue", "#4caf88", { info: "#5eb3ff", success: "#2e9e5a", warning: "#e6a817", error: "#e04545", danger: "#c6283a" }),
    dark: tok("dodgerblue", "#e85d4c", "#9b5de5", "#e8f2ff", "#0a1424", "#0f2340", "#081828", "#6b8fb8", "#6eb6ff", "#5ecf98", { info: "#7ec8ff", success: "#4ade80", warning: "#fbbf24", error: "#f87171", danger: "#fb7185" }),
  }),
  p({ id: "natural", label: "Natural", icon: "mdi:leaf", scheme: "triad", note: "verde + azul + naranja",
    light: tok("#3cb878", "#3d7cb8", "#c9783c", "#0f3322", "#f2fbf6", "#ffffff", "#e8f8ef", "#4a7a62", "#2d9a5e", "#5ecf98", { info: "#3db8a8", success: "#2e9e5a", warning: "#c9a227", error: "#d64545", danger: "#a83232" }),
    dark: tok("#5ecf98", "#7ec8ff", "#f0d060", "#ecfdf5", "#0a1810", "#0f2818", "#081410", "#5ecf98", "#7ec8ff", "#a8e6c8", { info: "#7ec8ff", success: "#4ade80", warning: "#fbbf24", error: "#f87171", danger: "#fb7185" }),
  }),
  p({ id: "coral", label: "Coral", icon: "mdi:flower-tulip", scheme: "triad", note: "coral + melocotón + violeta",
    light: tok("#e85d4c", "#f4a261", "#9b5de5", "#3a1810", "#fff8f5", "#ffffff", "#fff0eb", "#e85d4c", "#d64535", "#f4a261"),
    dark: tok("#ff8a78", "#ffc078", "#c9a0ff", "#fff0eb", "#1a0a08", "#2e1410", "#220e0c", "#ff8a78", "#ffb4a8", "#ffc078"),
  }),
  p({ id: "lavanda", label: "Lavanda", icon: "mdi:flower", scheme: "triad", note: "violeta + rosa + cian",
    light: tok("#8b5cf6", "#ec4899", "#06b6d4", "#2a1848", "#faf5ff", "#ffffff", "#f3e8ff", "#8b5cf6", "#7c3aed", "#ec4899"),
    dark: tok("#a78bfa", "#f472b6", "#22d3ee", "#f3e8ff", "#120a24", "#1e1038", "#160c2c", "#a78bfa", "#c4b5fd", "#f472b6"),
  }),
  p({ id: "cereza", label: "Cereza", icon: "mdi:fruit-cherries", scheme: "triad", note: "cereza + rosa + violeta",
    light: tok("#be123c", "#e11d48", "#7c3aed", "#3a0818", "#fff1f2", "#ffffff", "#ffe4e6", "#be123c", "#9f1239", "#e11d48"),
    dark: tok("#fb7185", "#f43f5e", "#a78bfa", "#ffe4e6", "#1a060c", "#2e0a14", "#220810", "#fb7185", "#fda4af", "#f43f5e"),
  }),
  p({ id: "fucsia", label: "Fucsia", icon: "mdi:star-four-points", scheme: "triad", note: "magenta + rosa + índigo",
    light: tok("#c026d3", "#ec4899", "#6366f1", "#3a0a3a", "#fdf4ff", "#ffffff", "#fae8ff", "#c026d3", "#a21caf", "#ec4899"),
    dark: tok("#e879f9", "#f472b6", "#818cf8", "#fae8ff", "#1a061a", "#2e0e2e", "#220a22", "#e879f9", "#f0abfc", "#f9a8d4"),
  }),
  p({ id: "aurora", label: "Aurora", icon: "mdi:aurora", scheme: "triad", note: "verde + cian + rosa",
    light: tok("#10b981", "#06b6d4", "#f472b6", "#0a2820", "#f0fdf9", "#ffffff", "#ccfbf1", "#10b981", "#059669", "#06b6d4"),
    dark: tok("#34d399", "#22d3ee", "#f9a8d4", "#ecfdf5", "#061410", "#0c241c", "#081a14", "#34d399", "#6ee7b7", "#22d3ee"),
  }),
  p({ id: "tropico", label: "Trópico", icon: "mdi:palm-tree", scheme: "triad", note: "amarillo + verde + azul",
    light: tok("#eab308", "#22c55e", "#0ea5e9", "#1a2810", "#fefce8", "#ffffff", "#ecfccb", "#ca8a04", "#a16207", "#22c55e"),
    dark: tok("#facc15", "#4ade80", "#38bdf8", "#fef9c3", "#141808", "#243018", "#1a2410", "#facc15", "#fde047", "#4ade80"),
  }),
  p({ id: "electrico", label: "Eléctrico", icon: "mdi:flash", scheme: "triad", note: "magenta + cian + amarillo",
    light: tok("#d946ef", "#22d3ee", "#facc15", "#2a103a", "#fdf4ff", "#ffffff", "#fae8ff", "#d946ef", "#a21caf", "#22d3ee"),
    dark: tok("#e879f9", "#67e8f9", "#fde047", "#fdf4ff", "#18061a", "#2c0e30", "#200a24", "#e879f9", "#f0abfc", "#67e8f9"),
  }),
  p({ id: "crepusculo", label: "Crepúsculo", icon: "mdi:weather-sunset", scheme: "triad", note: "violeta + naranja + azul",
    light: tok("#7c3aed", "#f97316", "#2563eb", "#1e1038", "#f5f3ff", "#ffffff", "#ede9fe", "#7c3aed", "#6d28d9", "#f97316"),
    dark: tok("#a78bfa", "#fb923c", "#60a5fa", "#ede9fe", "#100818", "#1e1030", "#160c24", "#a78bfa", "#c4b5fd", "#fb923c"),
  }),
];

if (PALETTES.length !== 30) throw new Error(`Se esperaban 30 paletas, hay ${PALETTES.length}`);
for (const scheme of ["mono", "dual", "triad"]) {
  const n = PALETTES.filter((x) => x.scheme === scheme).length;
  if (n !== 10) throw new Error(`Se esperaban 10 paletas ${scheme}, hay ${n}`);
}
