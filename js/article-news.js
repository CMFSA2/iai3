/* ============================================================
   Skrip bersama untuk semua halaman berita dan artikel. Data tiap halaman
   ada di blok CONTENT di bagian bawah berkas HTML-nya, bukan di sini.
   Aturan jalur gambar: nama berkas gambar di CONTENT dibaca relatif
   terhadap berkas HTML halaman itu, bukan terhadap post.js.
   ============================================================ */
/* ---------- Utilitas ---------- */
const P = CONTENT.post;
const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => Array.from(r.querySelectorAll(s));
const esc = (s) =>
  String(s).replace(
    /[&<>"']/g,
    (c) =>
      ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[
        c
      ],
  );
const fmt = (iso) =>
  new Date(iso + "T00:00:00").toLocaleDateString("id-ID", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
const inline = (s) => esc(s).replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>");
const titleHtml = (s) =>
  String(s)
    .split("*")
    .map((part, i) => (i % 2 ? `<em>${esc(part)}</em>` : esc(part)))
    .join("");
const plain = (s) => String(s).replace(/\*/g, "");
const safeUrl = (u) =>
  u && !/^\s*(javascript|data|vbscript):/i.test(u) ? u : "";
const isAbs = (u) => /^https?:\/\//i.test(u);
const initials = (name) =>
  name
    .split(/\s+/)
    .map((t) => t.replace(/,$/, ""))
    .filter((t) => !/\./.test(t))
    .slice(0, 2)
    .map((t) => t[0])
    .join("")
    .toUpperCase();
const home = () => (CONTENT.site.home || "").trim();
const typeIsArticle = () => P.type === "artikel";

/* Gambar yang gagal dimuat (jalur salah, berkas belum ada) diganti penampung,
   supaya tidak muncul ikon rusak dan teks alt yang melebar. */
document.addEventListener(
  "error",
  (e) => {
    const el = e.target;
    if (!el || el.tagName !== "IMG") return;
    if (el.closest("#brandLogo")) {
      el.replaceWith(
        Object.assign(document.createElement("span"), {
          className: "logo-fallback",
          textContent: "IA I-3",
        }),
      );
      return;
    }
    if (el.closest("#lbMedia")) return;
    const z = el.closest(".zoom");
    if (z) {
      z.removeAttribute("data-action");
      z.style.cursor = "default";
      const h = z.querySelector(".zoom-hint");
      if (h) h.remove();
    }
    el.remove();
  },
  true,
);

let toastTimer;
function toast(msg) {
  const t = $("#toast");
  t.textContent = msg;
  t.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => t.classList.remove("show"), 2600);
}
async function copyText(text, label) {
  try {
    await navigator.clipboard.writeText(text);
    toast(label + " disalin");
    return;
  } catch (e) {}
  try {
    const ta = document.createElement("textarea");
    ta.value = text;
    ta.setAttribute("readonly", "");
    ta.style.cssText = "position:fixed;opacity:0;top:0;left:0";
    document.body.appendChild(ta);
    ta.select();
    const ok = document.execCommand("copy");
    ta.remove();
    toast(
      ok
        ? label + " disalin"
        : "Salin otomatis tidak tersedia. Pilih teks lalu salin manual.",
    );
  } catch (e) {
    toast("Salin otomatis tidak tersedia. Pilih teks lalu salin manual.");
  }
}

/* ---------- Navigasi dan tema (sama dengan situs utama) ---------- */
const NAV = [
  ["slogan", "Slogan", "Nilai dan semangat kita"],
  ["berita", "Berita", "Kabar dari sesama alumni"],
  ["pengurus", "Pengurus", "Susunan pengurus alumni"],
  ["artikel", "Artikel", "Tulisan dari ladang pelayanan"],
  ["kontak", "Kontak", "Hubungi sekretariat"],
  ["rekening", "Rekening", "Dukungan dan iuran alumni"],
];
const navHref = (id) =>
  home() ? home() + (id ? "#" + id : "") : "#" + (id || "");
function renderNav() {
  const cur = typeIsArticle() ? "artikel" : "berita";
  $("#navLinks").innerHTML = NAV.map(
    ([id, label]) =>
      `<a data-nav data-spy-link="${id}" href="${esc(navHref(id))}"${id === cur ? ' aria-current="true"' : ""}>${label}</a>`,
  ).join("");
  $("#mobileMenu").innerHTML =
    NAV.map(
      ([id, label, desc]) =>
        `<a data-nav data-spy-link="${id}" href="${esc(navHref(id))}"${id === cur ? ' aria-current="true"' : ""}><b>${label}</b><small>${desc}</small></a>`,
    ).join("") +
    `<a class="sheet-cta" data-nav href="${esc(navHref("rekening"))}"><b>Dukung alumni</b><small>Lihat rekening dan buat konfirmasi</small></a>`;
  $("#footNav").innerHTML =
    `<a data-nav href="${esc(navHref(""))}">Beranda</a>` +
    NAV.map(
      ([id, label]) => `<a data-nav href="${esc(navHref(id))}">${label}</a>`,
    ).join("");
  $("#brandLink").href = navHref("");
  $("#navCta").href = navHref("rekening");
  $("#brandLogo").innerHTML = CONTENT.org.logo
    ? `<img src="${esc(CONTENT.org.logo)}" alt="" decoding="async">`
    : `<span class="logo-fallback">IA I-3</span>`;
}
function moveInk(target) {
  const nav = $("#navLinks");
  const el = target || nav.querySelector('[aria-current="true"]');
  $$("a", nav).forEach((a) => a.toggleAttribute("data-lit", a === el));
  if (!el) {
    nav.style.setProperty("--o", "0");
    return;
  }
  const wasHidden = nav.style.getPropertyValue("--o") !== "1";
  if (wasHidden) nav.classList.add("no-glide");
  nav.style.setProperty("--x", el.offsetLeft + "px");
  nav.style.setProperty("--w", el.offsetWidth + "px");
  nav.style.setProperty("--o", "1");
  if (wasHidden) {
    void nav.offsetWidth;
    nav.classList.remove("no-glide");
  }
}
function setupInk() {
  const nav = $("#navLinks");
  nav.addEventListener("mouseover", (e) => {
    const a = e.target.closest("a");
    if (a) moveInk(a);
  });
  nav.addEventListener("mouseleave", () => moveInk());
  nav.addEventListener("focusin", (e) => {
    const a = e.target.closest("a");
    if (a) moveInk(a);
  });
  nav.addEventListener("focusout", () => moveInk());
  addEventListener("resize", () => moveInk());
  if (document.fonts && document.fonts.ready)
    document.fonts.ready.then(() => moveInk());
  moveInk();
}
function toggleMenu(force) {
  const m = $("#mobileMenu"),
    b = $(".menu-btn");
  const show = typeof force === "boolean" ? force : m.hidden;
  m.hidden = !show;
  b.setAttribute("aria-expanded", String(show));
  $(".menu-label").textContent = show ? "Tutup" : "Menu";
}
function currentTheme() {
  return (
    document.documentElement.getAttribute("data-theme") ||
    (matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light")
  );
}
try {
  const s = localStorage.getItem("i3-theme");
  if (s === "dark" || s === "light")
    document.documentElement.setAttribute("data-theme", s);
} catch (e) {}

/* ---------- Gambar ---------- */
const FIGS = [];
function photoBox(tone, src, alt) {
  const img = src
    ? `<img src="${esc(src)}" alt="${esc(alt)}" loading="lazy" decoding="async">`
    : "";
  return `<span class="ph tone-${tone % 5}">${img}</span>`;
}
function avatarHtml(person, tone, large) {
  return `<span class="avatar${large ? " avatar-lg" : ""} tone-${tone % 5}">${photoBox(tone, person.photo, person.name)}${person.photo ? "" : `<span class="av-init" aria-hidden="true">${esc(initials(person.name))}</span>`}</span>`;
}
function figureHtml(f, tone, noteLabel, extraClass) {
  const ratio = /^\d+(\.\d+)?\s*\/\s*\d+(\.\d+)?$/.test(f.ratio || "")
    ? f.ratio
    : "16/9";
  const alt = f.alt || f.caption || "";
  const media = f.src
    ? `<button class="zoom" type="button" data-action="zoom" data-fig="${FIGS.push(f) - 1}" aria-label="Perbesar foto: ${esc(alt)}">${photoBox(tone, f.src, alt)}<span class="zoom-hint" aria-hidden="true">Perbesar</span></button>`
    : `${photoBox(tone, "", "")}<span class="ph-note">${esc(noteLabel)} · ${esc(ratio.replace(/\s/g, ""))}</span>`;
  const cap =
    f.caption || f.credit
      ? `<figcaption>${f.caption ? `<span>${esc(f.caption)}</span>` : ""}${f.credit ? `<span class="credit">Foto: ${esc(f.credit)}</span>` : ""}</figcaption>`
      : "";
  return `<figure class="fig${extraClass ? " " + extraClass : ""}"><div class="fig-media" style="--ratio:${esc(ratio)}">${media}</div>${cap}</figure>`;
}

/* ---------- Kepala dan sampul ---------- */
function wordCount() {
  const parts = [P.deck || ""];
  P.blocks.forEach((b) => {
    if (b.text) parts.push(b.text);
    if (b.items) parts.push(...b.items);
  });
  return parts.join(" ").split(/\s+/).filter(Boolean).length;
}
const readMinutes = () =>
  P.readMin > 0 ? P.readMin : Math.max(1, Math.round(wordCount() / 200));
function renderHead() {
  const art = typeIsArticle();
  const backId = art ? "artikel" : "berita";
  document.title = plain(P.title) + " · " + CONTENT.org.short;
  const by = P.byline;
  $("#postHead").innerHTML = `
    <a class="back" data-nav href="${esc(navHref(backId))}"><span aria-hidden="true">←</span> Semua ${art ? "artikel" : "berita"}</a>
    <div class="kicker"><span class="tag">${esc(P.category)}</span><span class="eyebrow">${art ? "Artikel alumni" : "Berita alumni"}</span></div>
    <h1>${titleHtml(P.title)}</h1>
    <p class="deck">${esc(P.deck)}</p>
    <div class="byline">
      <div class="by-who">${avatarHtml(by, 0, false)}<span><b>${esc(by.name)}</b><small>${esc(by.role)}</small></span></div>
      <div class="by-meta">
        <span><time datetime="${esc(P.date)}">${fmt(P.date)}</time></span>
        <span>${readMinutes()} menit baca</span>
        ${P.updated ? `<span>Diperbarui ${fmt(P.updated)}</span>` : ""}
      </div>
    </div>`;
}
function renderCover() {
  $("#cover").innerHTML = figureHtml(P.cover, 1, "Foto sampul", "cover");
}

/* ---------- Isi, daftar isi, penutup ---------- */
function renderBody() {
  let n = 0;
  const toc = [];
  const html = P.blocks
    .map((b) => {
      if (b.t === "h2") {
        const id = "bagian-" + ++n;
        toc.push([id, b.text]);
        return `<h2 id="${id}">${esc(b.text)}</h2>`;
      }
      if (b.t === "p") return `<p>${inline(b.text)}</p>`;
      if (b.t === "list")
        return `<ul>${b.items.map((i) => `<li>${inline(i)}</li>`).join("")}</ul>`;
      if (b.t === "quote")
        return `<blockquote class="pull"><p>${esc(b.text)}</p>${b.cite ? `<cite>${esc(b.cite)}</cite>` : ""}</blockquote>`;
      if (b.t === "figure")
        return figureHtml(b, FIGS.length + 2 + n, "Foto isi", "");
      return "";
    })
    .join("");
  $("#prose").innerHTML = html;
  $("#tocList").innerHTML = toc
    .map(
      ([id, text]) =>
        `<li><a href="#${id}" data-toc="${id}">${esc(text)}</a></li>`,
    )
    .join("");
  $("#tocBox").hidden = toc.length < 2;
  $("#facts").innerHTML = (P.facts || [])
    .map(
      (f) =>
        `<div class="fact"><dt>${esc(f.label)}</dt><dd>${esc(f.value)}</dd></div>`,
    )
    .join("");
  $("#facts").hidden = !(P.facts && P.facts.length);
}
function shareUrl() {
  return P.shareUrl || location.href.split("#")[0];
}
function shareHtml() {
  const url = shareUrl(),
    text = plain(P.title);
  return `<a class="btn btn-sm" href="https://wa.me/?text=${encodeURIComponent(text + " " + url)}" target="_blank" rel="noopener noreferrer">WhatsApp</a>
    <a class="btn btn-sm" href="https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}" target="_blank" rel="noopener noreferrer">Facebook</a>
    <button class="btn btn-sm" type="button" data-action="copy-link">Salin tautan</button>`;
}
function renderEnd() {
  const art = typeIsArticle(),
    by = P.byline;
  const link = P.link && safeUrl(P.link.url);
  let host = "";
  if (link && isAbs(link)) {
    try {
      host = new URL(link).hostname.replace(/^www\./, "");
    } catch (e) {}
  }
  const parts = [];
  if (P.tags && P.tags.length)
    parts.push(
      `<div class="end-block"><p class="eyebrow">Topik</p><div class="tags">${P.tags.map((t) => `<span class="tag">${esc(t)}</span>`).join("")}</div></div>`,
    );
  if (link)
    parts.push(
      `<div class="cta-box"><a class="btn btn-primary" href="${esc(link)}"${isAbs(link) ? ' target="_blank" rel="noopener noreferrer"' : ""}>${esc(P.link.cta || "Buka tautan")} <span aria-hidden="true">↗</span></a>${host ? `<span class="cta-host">${esc(host)}</span>` : ""}</div>`,
    );
  parts.push(
    `<div class="end-block"><p class="eyebrow">Bagikan tulisan ini</p><div class="share">${shareHtml()}</div></div>`,
  );
  parts.push(
    `<div class="end-block"><p class="eyebrow">${art ? "Ditulis oleh" : "Dilaporkan oleh"}</p><div class="author">${avatarHtml(by, 0, true)}<span><b>${esc(by.name)}</b><small>${esc(by.role)}</small></span></div></div>`,
  );
  $("#endmatter").innerHTML = parts.join("");
  $("#shareSide").innerHTML = shareHtml();
}
function renderRelated() {
  const list = P.related || [];
  $("#terkait").hidden = !list.length;
  $("#related").innerHTML = list
    .map((r, i) => {
      const u = safeUrl(r.url) || "#";
      return `<a class="rel-row" href="${esc(u)}"${isAbs(u) ? ' target="_blank" rel="noopener noreferrer"' : ""}>
      <span class="rel-main"><span class="meta-line"><span class="tag">${esc(r.type)}</span><span>${esc(r.cat)}</span><span>${fmt(r.date)}</span></span><span class="rel-title">${esc(r.title)}</span></span>
      <span class="rel-thumb">${photoBox(i + 2, r.img, r.title)}</span>
    </a>`;
    })
    .join("");
}

/* ---------- Ukuran teks ---------- */
const SIZES = [1, 1.1, 1.2, 1.32];
const SIZE_LABELS = ["Kecil", "Sedang", "Besar", "Sangat besar"];
let sizeIdx = 1;
try {
  const s = Number.parseInt(localStorage.getItem("i3-size"), 10);
  if (s >= 0 && s < SIZES.length) sizeIdx = s;
} catch (e) {}
function applySize() {
  $("#prose").style.setProperty("--fs", SIZES[sizeIdx] + "rem");
  $("#sizeLabel").textContent = SIZE_LABELS[sizeIdx];
  $("#sizeDown").disabled = sizeIdx === 0;
  $("#sizeUp").disabled = sizeIdx === SIZES.length - 1;
  try {
    localStorage.setItem("i3-size", String(sizeIdx));
  } catch (e) {}
}

/* ---------- Progres baca dan sorotan daftar isi ---------- */
let ticking = false;
function onScroll() {
  if (ticking) return;
  ticking = true;
  requestAnimationFrame(() => {
    ticking = false;
    const r = $("#post").getBoundingClientRect();
    const total = r.height - innerHeight;
    const p = total > 0 ? Math.min(1, Math.max(0, -r.top / total)) : 0;
    $("#progress").style.setProperty("--p", p.toFixed(4));
    let cur = null;
    $$("#prose h2[id]").forEach((h) => {
      if (h.getBoundingClientRect().top <= 140) cur = h.id;
    });
    $$("#tocList a").forEach((a) => {
      if (a.dataset.toc === cur) a.setAttribute("aria-current", "true");
      else a.removeAttribute("aria-current");
    });
  });
}

/* ---------- Pratinjau foto ---------- */
let openEl = null,
  lastFocus = null,
  lbIndex = 0;
function openOverlay(el) {
  lastFocus = document.activeElement;
  openEl = el;
  el.hidden = false;
  document.documentElement.classList.add("lock");
  const c = el.querySelector("[data-close]");
  if (c) c.focus({ preventScroll: true });
}
function closeOverlay() {
  if (!openEl) return;
  openEl.hidden = true;
  openEl = null;
  document.documentElement.classList.remove("lock");
  if (lastFocus && lastFocus.focus) lastFocus.focus({ preventScroll: true });
}
function showFig(i) {
  lbIndex = (i + FIGS.length) % FIGS.length;
  const f = FIGS[lbIndex];
  $("#lbMedia").innerHTML =
    `<img src="${esc(f.src)}" alt="${esc(f.alt || f.caption || "")}">`;
  $("#lbCap").innerHTML =
    (f.caption ? `<span>${esc(f.caption)}</span>` : "") +
    (f.credit ? `<span class="credit">Foto: ${esc(f.credit)}</span>` : "");
  $("#lbCap").hidden = !(f.caption || f.credit);
  $("#lbCount").textContent = `${lbIndex + 1} dari ${FIGS.length}`;
  const multi = FIGS.length > 1;
  $("#lbPrev").hidden = !multi;
  $("#lbNext").hidden = !multi;
}

/* ---------- Event ---------- */
document.addEventListener("click", (e) => {
  if (!e.target.closest(".site-header") && !$("#mobileMenu").hidden)
    toggleMenu(false);
  if (openEl && e.target === openEl) {
    closeOverlay();
    return;
  }
  if (e.target.closest("[data-close]")) {
    closeOverlay();
    return;
  }
  if (e.target.closest("[data-nav]")) {
    if (!home()) {
      e.preventDefault();
      toast(
        "Menu ini menuju situs utama. Isi site.home di blok CONTENT agar aktif.",
      );
    }
    toggleMenu(false);
    return;
  }
  const t = e.target.closest("[data-action]");
  if (!t) return;
  const a = t.dataset.action;
  if (a === "theme") {
    const next = currentTheme() === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", next);
    try {
      localStorage.setItem("i3-theme", next);
    } catch (err) {}
  } else if (a === "menu") toggleMenu();
  else if (a === "dismiss-notice") $("#notice").hidden = true;
  else if (a === "zoom") {
    showFig(+t.dataset.fig);
    openOverlay($("#lightbox"));
  } else if (a === "lb-prev") showFig(lbIndex - 1);
  else if (a === "lb-next") showFig(lbIndex + 1);
  else if (a === "size") {
    sizeIdx = Math.min(SIZES.length - 1, Math.max(0, sizeIdx + +t.dataset.d));
    applySize();
  } else if (a === "copy-link") copyText(shareUrl(), "Tautan halaman");
});
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && !openEl && !$("#mobileMenu").hidden) {
    toggleMenu(false);
    $(".menu-btn").focus();
    return;
  }
  if (!openEl) return;
  if (e.key === "Escape") {
    closeOverlay();
    return;
  }
  if (e.key === "ArrowLeft" && FIGS.length > 1) showFig(lbIndex - 1);
  if (e.key === "ArrowRight" && FIGS.length > 1) showFig(lbIndex + 1);
  if (e.key === "Tab") {
    const f = $$("button,[href],input,select,textarea", openEl).filter(
      (x) => !x.disabled && !x.hidden,
    );
    if (!f.length) return;
    const first = f[0],
      last = f[f.length - 1];
    if (e.shiftKey && document.activeElement === first) {
      e.preventDefault();
      last.focus();
    } else if (!e.shiftKey && document.activeElement === last) {
      e.preventDefault();
      first.focus();
    }
  }
});
addEventListener("scroll", onScroll, { passive: true });
addEventListener("resize", onScroll);

/* ---------- Mulai ---------- */
renderNav();
renderHead();
renderCover();
renderBody();
renderEnd();
renderRelated();
$("#footText").textContent =
  `© Christian Marlen Firuli Simarmata. Salus Animarum Suprema Lex.`;
$("#notice").hidden = !CONTENT.sampleNotice;
applySize();
setupInk();
onScroll();
