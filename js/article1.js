/* ============================================================
   CONTENT: ganti isi blok ini untuk memuat satu berita atau satu artikel.
   - post.type: "berita" atau "artikel". Menentukan label, menu yang
     menyala, dan jenis keterangan penulis.
   - post.title: tanda *bintang* menyorot frasa dengan garis amber.
   - post.cover dan figure: isi `src` dengan nama berkas gambar yang
     dipublikasikan bersama halaman (atau data URI). Alamat gambar dari
     situs lain diblokir. Kosongkan `src` untuk menampilkan penampung foto.
     `ratio` opsional, contoh "16/9", "4/3", "3/4".
   - post.blocks: urutan isi. Jenis blok: h2, p, list, quote, figure.
     Teks **tebal** memakai dua bintang. Judul h2 otomatis masuk daftar isi.
   - post.readMin: 0 berarti waktu baca dihitung otomatis.
   - post.link: tombol tautan di akhir tulisan. Kosongkan `url` untuk
     menyembunyikannya.
   - post.related: daftar "Baca juga". Kosongkan untuk menyembunyikannya.
   - site.home: alamat halaman utama (misalnya "index.html"). Menu
     mengarah ke bagian halaman utama itu. Kosong berarti menu belum aktif.
   - org.logo: nama berkas logo yang dipublikasikan bersama halaman.
   - Set sampleNotice ke false untuk menyembunyikan pita contoh.
   ============================================================ */
const CONTENT = {
  sampleNotice: true,
  org: {
    short: "Alumni I-3",
    name: "Institut Injil Indonesia",
    fullName: "Ikatan Alumni Institut Injil Indonesia",
    logo: "img/logo.png",
  },
  site: { home: "index.html" },
  post: {
    type: "artikel",
    category: "Kegiatan",
    title: "Mau Dibawa ke Mana Ikatan Alumni?",
    deck: "Sebuah visi yang lahir dari pergumulan reflektif seorang pemimpin yang telah diberi kepercayaan.",
    date: "2025-01-16",
    updated: "2026-10-28",
    byline: {
      name: "Hardian Baja Gunanta Tarigan",
      role: "Ketua Umum",
      photo: "img/pengurus/ketum.png",
    },
    readMin: 0,
    cover: {
      src: "img/art-1a.jpg",
      alt: "Alumni berfoto bersama di halaman kampus",
      caption: "Alumni berfoto bersama usai ibadah syukur di halaman kampus.",
      credit: "Dokumentasi Humas Alumni",
      ratio: "16/9",
    },
    facts: [
      { label: "Tanggal", value: "18 Oktober 2026" },
      { label: "Tempat", value: "Kampus Institut Injil Indonesia, Batu" },
      { label: "Penyelenggara", value: "Ikatan Alumni I-3" },
      { label: "Peserta", value: "Alumni lintas angkatan" },
    ],
    blocks: [
      {
        t: "p",
        text: "Saat saya menerima tongkat estafet sebagai Ketua Umum Ikatan Alumni Institut Injil Indonesia, satu pertanyaan sederhana namun mendalam melintas di benak saya: Mau dibawa ke mana Ikatan Alumni ini? Jangan-jangan jawabannya ada di lagunya Armada, 'Mau dibawa ke mana hubungan kita.' Tapi tunggu dulu, ini bukan soal hubungan asmara, melainkan soal hubungan besar: hubungan alumni dengan almamater, alumni senior dengan junior, dan yang paling penting, hubungan visi dengan aksi nyata. Ada 3 hal penting yang menjadi perenungan pribadi saya dalam beberapa waktu belakangan ini, yang menurut saya juga relevan dalam pelaksanaan Natal Ikatan Alumni I3 pada 20 Januari 2025.",
      },
      {
        t: "h2",
        text: "Visi Kesatuan Alumni-Almamater: Melampaui Ikatan Administratif.",
      },
      {
        t: "p",
        text: "Hubungan alumni dengan almamater itu sebenarnya unik, ibarat hubungan anak dengan orang tua-kadang mesra, kadang berjarak, tapi tetap ada ikatan darah rohani yang tak bisa diputuskan. Kita tidak akan lupa dari mana kita berasal, karena dari sanalah Tuhan memulai pekerjaan besar-Nya dalam hidup kita. Kita semua punya kenangan manis—doa subuh yang mengantuk, Kerja praktis pagi dan sore, diskusi teologi sampai larut malam, pelayanan di pelosok yang penuh tantangan, bahkan makan di kantate atau dapur seadanya. Tapi, mari kita jujur. Seiring berjalannya waktu, hubungan ini sering kali mengalami jarak. Almamater mungkin sudah menjadi tempat yang kita tinggalkan bertahun-tahun lalu, dan bagi sebagian orang, hubungan dengan almamater terasa lebih seperti kewajiban administratif daripada hubungan emosional.",
      },
      {
        t: "p",
        text: "Namun, saya percaya, almamater bukan hanya bangunan fisik atau institusi. Alma mater bukan sekadar nama di ijazah, Ia adalah roh, tempat di mana Tuhan menabur benih pelayanan di hati kita, tempat kita dibentuk oleh doa, firman, persekutuan dan tempat misi dimulai. Dalam visi kesatuan alumni dan almamater, saya melihat ada panggilan untuk kembali ke akar—bukan sekadar mengenang masa lalu, tapi membawa visi besar itu bersama-sama ke depan. saya bermimpi bahwa ikatan ini tak hanya menjadi ikatan administratif, tapi ikatan hidup yang penuh cinta dan doa. Tidak mudah, tapi layak untuk diperjuangkan.",
      },
      {
        t: "p",
        text: "Bukan berarti kita harus tinggal di kampus lagi (apalagi tidur di asrama!), tapi kita perlu menghidupkan kembali hubungan spiritual dengan almamater. Saya ingin melihat alumni memandang almamater seperti rumah rohani yang selalu dirindukan, tempat kita bisa kembali untuk memperbarui visi dan semangat pelayanan. Kesatuan ini bukan tentang formalitas; ini tentang bagaimana alumni melihat almamater sebagai bagian dari panggilan Tuhan dalam hidup mereka.",
      },
      {
        t: "p",
        text: "Namun, saya juga tahu ada tantangan besar: barangkali ada alumni yang merasa bahwa almamater sudah “berubah” dan tidak lagi sama seperti dulu. Di sisi lain, almamater mungkin juga merasa bahwa alumni terlalu jauh. Di sinilah pentingnya dialog yang terbuka dan hati yang mau saling mendengar. Kesatuan alumni-almamater ini hanya akan terwujud jika kita berhenti saling menyalahkan dan mulai membangun jembatan komunikasi dan kasih.",
      },
      {
        t: "p",
        text: "Dan yang paling penting, kesatuan ini harus didasarkan pada doa dan cinta kasih. Sebagai alumni, kita harus terus berdoa bagi almamater kita, bagi para mahasiswa yang sedang bertumbuh, para dosen yang mendidik, dan para pemimpin yang memikul beban berat. Tanpa doa, kesatuan ini hanya akan menjadi kesepakatan administratif yang rapuh. Namun, dengan doa dan cinta kasih, saya percaya kesatuan ini akan menjadi seperti pohon besar yang akarnya kuat dan buahnya lebat.",
      },
      {
        t: "p",
        text: "Kesatuan alumni dan almamater adalah tentang kembali ke sumber, kembali ke misi yang Tuhan percayakan kepada kita. Sebab ketika kita terhubung dengan rumah rohani kita, kita sedang terhubung dengan panggilan ilahi yang lebih besar. Jadi, mari kita kembali ke rumah, bukan sekadar untuk mengingat masa lalu, tapi untuk merajut masa depan Bersama sebagai ikatan alumni. Almamater telah memberi kita benih; sekarang saatnya kita memberi kembali dengan cinta, doa, dan dedikasi yang tak tergoyahkan.",
      },
      {
        t: "figure",
        src: "img/art-1b.jpg",
        alt: "Foto bersama didepan Convention Hall",
        caption: "Foto bersama didepan Convention Hall",
        credit: "Dokumentasi Humas Alumni",
        ratio: "16/9",
      },
      {
        t: "h2",
        text: "Visi Kesatuan Alumni Senior-Junior: Regenerasi untuk Keberlanjutan Kepemimpinan",
      },
      {
        t: "p",
        text: "Hubungan antara alumni senior dan junior sering kali menjadi dilema klasik dalam sebuah organisasi. Di satu sisi, para senior merasa memiliki pengalaman dan kontribusi besar yang tak ternilai, namun di sisi lain, para junior sering merasa mereka hanya “anak bawang” yang belum punya tempat di meja kepemimpinan. Kalau kita tidak hati-hati, hubungan ini bisa seperti film drama konflik keluarga: senior sibuk mendikte, junior sibuk mencari kesempatan untuk bersuara. Akhirnya? Yang ada hanya kesenjangan, bukan kesatuan.",
      },
      {
        t: "p",
        text: "Visi saya sederhana namun sangat mendasar: menjadikan hubungan antara alumni senior dan junior sebagai hubungan mentor dan mentee, bukan hubungan bos dan anak buah. Regenerasi kepemimpinan harus menjadi budaya, bukan sekadar wacana. Sebab, tanpa regenerasi yang sehat, organisasi kita hanya akan berjalan di tempat atau bahkan perlahan memudar. Para senior akan terus memegang kendali hingga tenaga mereka habis, sementara para junior kehilangan motivasi untuk melanjutkan karena merasa tidak ada ruang bagi mereka.",
      },
      {
        t: "p",
        text: "Regenerasi itu seperti estafet, bukan seperti lomba lari individu. Kalau tongkat estafet jatuh, seluruh tim gagal. Regenerasi kepemimpinan bukanlah ancaman, tetapi sebuah keharusan. Regenerasi ini adalah investasi. Ketika kita mempersiapkan generasi berikutnya, kita sedang menanamkan benih kepemimpinan yang akan terus bertumbuh hingga jauh ke masa depan. Kita sedang memastikan bahwa visi founder I3 tidak berhenti di generasi kita, tetapi terus hidup dalam generasi-generasi mendatang. Maka, regenerasi adalah krusial dan prioritas.",
      },
      {
        t: "p",
        text: "Sebagai Ketua Umum, saya berkomitmen untuk menciptakan regenerasi yang sehat dan berkesinambungan. Saya ingin para senior merasa bangga saat melihat junior yang mereka bimbing mengambil alih tongkat estafet. Dan saya ingin para junior merasa bahwa mereka tidak hanya “menggantikan,” tetapi benar-benar melanjutkan apa yang telah dimulai oleh generasi sebelumnya. Itulah sebabnya dalam setiap bentuk kepengurusan Ikatan Alumni dan kepanitiaan, saya selalu mengkombinasikan alumni senior dan junior, agar berproses bersama dalam regenerasi dan keberlanjutan. Saya ingin alumni senior menjadi mentor yang tulus, yang rela berbagi pengalaman dan belajar mendengarkan. Sebaliknya, junior juga harus belajar dengan kerendahan hati, memahami bahwa kesuksesan tidak instan. Jelaslah regenerasi ini penting karena tanpa pemimpin baru, visi kita hanya akan jadi mimpi yang tertunda. Kita butuh keberlanjutan kepemimpinan yang tidak hanya “hari ini ada,” tapi juga siap “besok tetap berdampak.”",
      },
      {
        t: "p",
        text: "Kesatuan alumni senior dan junior adalah salah satu pilar utama untuk keberlanjutan organisasi ini. Tanpa kesatuan, regenerasi hanya akan menjadi slogan. Tapi dengan kesatuan yang dibangun di atas dasar saling menghormati, saling mendukung, dan saling belajar, saya percaya kita dapat membawa Ikatan Alumni ini ke arah yang lebih besar dari apa yang pernah kita bayangkan. Jadi, mari kita melangkah bersama. Senior dan junior, bergandengan tangan, berjalan dalam visi yang sama: untuk melanjutkan misi Tuhan di dunia ini, dari generasi ke generasi. Karena pada akhirnya, regenerasi bukan hanya soal melanjutkan organisasi, tetapi soal melanjutkan warisan rohani yang Tuhan percayakan kepada kita semua.",
      },
      {
        t: "quote",
        text: "Regenerasi itu seperti estafet, bukan seperti lomba lari individu. Kalau tongkat estafet jatuh, seluruh tim gagal.",
        cite: "Hardian Baja G. Tarigan, Angkatan 2008",
      },
      /*{
        t: "p",
        text: "Ada tiga kebutuhan yang paling sering disebut peserta:",
      },
      {
        t: "list",
        items: [
          "Pelatihan bagi pelayan awam di jemaat kecil.",
          "Pendampingan pastoral bagi gembala yang melayani sendirian.",
          "Bahan ajar yang mudah dipakai di jemaat dengan sumber daya terbatas.",
        ],
      },*/
      { t: "h2", text: "Vision Resiliency and Mission Sustainability" },
      {
        t: "p",
        text: "Istilah Vision Resiliency dan Mission Sustainability terdengar seperti jargon organisasi modern yang sering kita baca di buku manajemen. Tapi bagi saya, kedua konsep ini lebih dari sekadar teori: ini adalah panggilan rohani. Kita berbicara tentang memastikan bahwa visi kita tetap kuat di tengah badai perubahan dan bahwa misi kita tidak hanya bertahan, tetapi terus berkembang melampaui generasi dan tantangan zaman. Ketika saya berbicara tentang visi dan misi, saya tidak bicara tentang rencana lima tahun yang hanya selesai di atas kertas. Lebih jauh lagi, Vision Resiliency dan Mission Sustainability adalah tentang membangun masa depan yang tidak hanya bertahan tetapi juga berbuah lebat. Ini tentang memastikan bahwa visi dan misi yang Tuhan berikan kepada kita tidak berhenti di generasi ini, tetapi terus hidup dan membawa dampak di generasi berikutnya.",
      },
      {
        t: "p",
        text: "Sebagai Ketua Umum, tanggung jawab saya adalah memastikan bahwa kita tidak hanya melihat apa yang ada di depan mata, tetapi juga mempersiapkan jalan untuk masa depan. Saya percaya bahwa dengan kesatuan hati, regenerasi kepemimpinan, dan semangat yang tidak pernah padam, kita dapat membawa Ikatan Alumni Institut Injil Indonesia menuju masa depan yang lebih besar, lebih kokoh dan lebih berdampak.",
      },
      {
        t: "p",
        text: "Vision resiliency berarti visi kita harus tahan banting—bisa menghadapi perubahan zaman, gesekan, bahkan tekanan eksternal yang mungkin datang dan tetap relevant . Kalau visi kita seperti balon yang mudah pecah, maka tidak akan ada yang mau terbang bersama kita. Resiliensi visi tidak berarti kita mengubah arah setiap kali ada masalah. Sebaliknya, ini berarti kita memiliki akar yang cukup dalam untuk tetap kokoh meskipun angin perubahan berhembus kencang.",
      },
      {
        t: "p",
        text: "Di sisi lain, mission sustainability adalah tentang menjaga agar semangat Injil tetap menyala. Jangan sampai misi kita seperti api unggun yang besar di awal tapi habis kayunya di tengah jalan dan akhirnya padam. Keberlanjutan misi (mission sustainability) adalah tentang memastikan bahwa misi ini terus berjalan, bahkan jika kita tidak lagi memimpin secara langsung. Ini berarti kita harus menanamkan pola pikir investasi jangka panjang. Kita perlu menyiapkan sumber daya finansial, membangun kapasitas kepemimpinan, dan menciptakan sistem yang memungkinkan misi ini terus berjalan meskipun ada perubahan dalam struktur organisasi atau kepemimpinan.",
      },
      {
        t: "p",
        text: "Keberlanjutan juga berarti fleksibilitas. Dunia berubah, dan cara kita melayani Tuhan juga harus relevan dengan konteks zaman. Kita tidak bisa terus-menerus menggunakan metode lama dan berharap hasil yang berbeda. Sebaliknya, kita harus memiliki keberanian untuk menyesuaikan strategi tanpa mengorbankan esensi dari misi itu sendiri. Keberlanjutan misi hanya mungkin jika ada regenerasi yang sehat. Para senior perlu memastikan bahwa pengalaman dan kebijaksanaan mereka ditransfer kepada junior. Sebaliknya, junior harus berkontribusi dengan semangat, inovasi, dan perspektif baru. Ketika kedua generasi ini bekerja sama, misi kita tidak hanya akan bertahan tetapi juga berkembang dengan cara yang tidak pernah kita bayangkan sebelumnya.",
      },
      {
        t: "p",
        text: "Saya ingin memastikan bahwa semangat Iman, penginjilan, doa, pengorbanan, dan persekutuan yang diwariskan para pendiri tetap menjadi DNA kita. Ini bukan soal “apa yang kita capai” saja, tapi “bagaimana kita memastikan itu tetap hidup” bagi generasi selanjutnya.",
      },

      {
        t: "quote",
        text: "Akhir Kata: Mari Melangkah Bersama",
        cite: "Hardian Baja G. Tarigan, Angkatan 2008",
      },
      {
        t: "p",
        text: "“Mau dibawa ke mana Ikatan Alumni ini?” Jawabannya sederhana: ke arah yang Tuhan kehendaki. Saya tidak bisa melakukannya sendirian, dan tidak seharusnya sendirian. Ini adalah perjalanan bersama, dengan Tuhan sebagai nahkoda, alumni sebagai awak kapal, dan almamater sebagai pelabuhan hati kita. Jadi, mari bergandengan tangan, senior dan junior, alumni dan alma mater, membawa visi besar ini hingga menjadi warisan yang berdampak bagi generasi selanjutnya. Karena pada akhirnya, yang lebih penting dari ke mana kita membawa Ikatan Alumni adalah siapa yang kita bawa dalam perjalanan ini. Dan saya percaya, kita sedang membawa nama Kristus. Mari melangkah bersama. Jangan lupa, this is our mission. Tuhan memberkati pelayanan kita.",
      },
    ],
    tags: ["Visi", "Persekutuan Alumni", "Ikatan Alumni I-3"],
    link: {
      url: "https://example.com/berita/reuni-akbar-2026",
      cta: "Lihat dokumentasi lengkap",
    },
    related: [
      {
        type: "Berita",
        cat: "Pelayanan",
        title: "Tim Alumni Mengunjungi Jemaat di Daerah Terpencil",
        date: "2026-10-04",
        url: "https://example.com/berita/kunjungan-jemaat-terpencil",
        img: "",
      },
      {
        type: "Artikel",
        cat: "Pastoral",
        title: "Menggembalakan Jemaat di Tengah Banjir Informasi",
        date: "2026-10-21",
        url: "https://example.com/artikel/menggembalakan-di-era-informasi",
        img: "",
      },
    ],
  },
};

/* ---------- Utilitas ---------- */
const P = CONTENT.post;
const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => Array.from(r.querySelectorAll(s));
const esc = (s) =>
  String(s).replace(
    /[&<>"']/g,
    (c) =>
      ({
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#39;",
      })[c],
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
