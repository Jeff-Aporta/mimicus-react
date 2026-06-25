/** Rango de páginas para Pagination (Ant/MUI) — JS puro. */
export function buildPageRange(count, page, siblingCount = 1) {
  const total = Math.max(1, Math.round(Number(count)) || 1);
  const current = Math.min(total, Math.max(1, Math.round(Number(page)) || 1));
  const siblings = Math.max(0, Math.round(Number(siblingCount)) || 0);
  const items = [];
  const pageItem = (n) => ({ type: "page", page: n, key: `p-${n}` });
  const ellipsis = (key) => ({ type: "ellipsis", key });

  if (total <= 5 + siblings * 2) {
    for (let i = 1; i <= total; i++) items.push(pageItem(i));
    return { items, current, total };
  }

  items.push(pageItem(1));
  const left = Math.max(2, current - siblings);
  const right = Math.min(total - 1, current + siblings);
  if (left > 2) items.push(ellipsis("start"));
  for (let i = left; i <= right; i++) items.push(pageItem(i));
  if (right < total - 1) items.push(ellipsis("end"));
  items.push(pageItem(total));
  return { items, current, total };
}
