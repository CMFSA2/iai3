/* ============================================================
   CONTENT: ganti isi blok ini dengan data asli alumni.
   - Foto: isi `src` dengan data URI atau berkas yang dipublikasikan
     bersama halaman. Alamat gambar dari situs lain diblokir.
   - Tanggal memakai format YYYY-MM-DD.
   - Set sampleNotice ke false untuk menyembunyikan pita contoh.
   ============================================================ */
const CONTENT = {
  sampleNotice: true,
  org: {
    short: "Alumni I-3",
    name: "Institut Injil Indonesia",
    city: "Batu, Jawa Timur",
    fullName: "Ikatan Alumni Institut Injil Indonesia",
  },
  hero: {
    eyebrow: "Ikatan Alumni · Institut Injil Indonesia · Batu",
    slogan: ["We are one in", "love, spirit, and purpose."],
    lede: "Rumah bersama bagi lulusan Institut Injil Indonesia. Temukan kabar terbaru, kenali pengurus, baca tulisan sesama alumni, dan dukung pelayanan kita.",
  },
  slogan: {
    head: "Tiga pegangan di balik slogan kita",
    main: "One in Love, in Spirit, in Purpose.",
    text: "Slogan ini mengingatkan alumni bahwa panggilan lahir dari Tuhan dan diwujudkan di tengah jemaat, keluarga, dan masyarakat, di mana pun kita ditempatkan.",
    values: [
      {
        title: "Setia pada Firman",
        text: "Pelayanan berakar pada Alkitab dan dijaga lewat belajar yang tidak pernah berhenti.",
      },
      {
        title: "Hadir di tengah jemaat",
        text: "Alumni hadir dan mendengar, dari kota besar sampai daerah yang sulit dijangkau.",
      },
      {
        title: "Berjalan bersama",
        text: "Kita saling menguatkan lintas angkatan, lewat doa, tenaga, dan dukungan nyata.",
      },
    ],
  },
  gallery: [
    {
      id: "g1",
      tag: "Reuni",
      title: "Reuni Akbar Alumni 2026",
      date: "2026-10-18",
      place: "Kampus, Batu",
      desc: "Alumni lintas angkatan berkumpul kembali di kampus, bertukar cerita pelayanan, dan makan bersama.",
      tone: 0,
      src: "",
    },
    {
      id: "g2",
      tag: "Reuni",
      title: "Ibadah Syukur Alumni",
      date: "2026-10-18",
      place: "Aula kampus",
      desc: "Ibadah pembuka reuni dipimpin oleh perwakilan tiga angkatan.",
      tone: 1,
      src: "",
    },
    {
      id: "g3",
      tag: "Seminar",
      title: "Seminar Misi di Kota",
      date: "2026-10-03",
      place: "Malang",
      desc: "Diskusi tentang cara gereja menjumpai generasi muda perkotaan.",
      tone: 2,
      src: "",
    },
    {
      id: "g4",
      tag: "Seminar",
      title: "Workshop Khotbah untuk Jemaat Kecil",
      date: "2026-09-20",
      place: "Surabaya",
      desc: "Latihan menyusun khotbah singkat yang jelas dan dekat dengan kehidupan jemaat.",
      tone: 3,
      src: "",
    },
    {
      id: "g5",
      tag: "Pelayanan",
      title: "Bakti Sosial di Desa Binaan",
      date: "2026-09-06",
      place: "Desa binaan",
      desc: "Pelayanan kesehatan sederhana dan pembagian bahan pokok bagi keluarga di desa binaan.",
      tone: 4,
      src: "",
    },
    {
      id: "g6",
      tag: "Pelayanan",
      title: "Kunjungan Pastoral ke Jemaat",
      date: "2026-08-23",
      place: "Jemaat mitra",
      desc: "Tim alumni menemani jemaat mitra dalam ibadah dan percakapan pastoral.",
      tone: 0,
      src: "",
    },
    {
      id: "g7",
      tag: "Kampus",
      title: "Penyambutan Alumni Baru",
      date: "2026-08-09",
      place: "Kampus, Batu",
      desc: "Lulusan terbaru disambut keluarga besar alumni dalam acara sederhana.",
      tone: 1,
      src: "",
    },
    {
      id: "g8",
      tag: "Kampus",
      title: "Diskusi Panel Teologi dan Budaya",
      date: "2026-07-26",
      place: "Kampus, Batu",
      desc: "Alumni dan dosen membahas cara berteologi di tengah budaya yang beragam.",
      tone: 2,
      src: "",
    },
  ],
  news: [
    {
      id: "n1",
      cat: "Kegiatan",
      title: "Reuni Akbar Alumni 2026 Berlangsung Hangat di Batu",
      date: "2026-10-18",
      by: "Humas Alumni",
      excerpt:
        "Alumni lintas angkatan kembali ke kampus untuk beribadah, berbagi kisah pelayanan, dan menyegarkan persaudaraan.",
      body: [
        "Reuni akbar tahun ini mempertemukan alumni dari berbagai angkatan dan wilayah pelayanan. Acara dibuka dengan ibadah syukur, dilanjutkan sesi berbagi kesaksian dari para gembala dan misionaris.",
        "Panitia menyampaikan bahwa reuni berikutnya akan dirancang lebih dekat dengan kebutuhan alumni di daerah. Masukan peserta dikumpulkan lewat formulir yang dibagikan di akhir acara.",
      ],
    },
    {
      id: "n2",
      cat: "Pelayanan",
      title: "Tim Alumni Mengunjungi Jemaat di Daerah Terpencil",
      date: "2026-10-04",
      by: "Bidang Pelayanan dan Misi",
      excerpt:
        "Selama akhir pekan, tim memimpin ibadah, mengajar sekolah minggu, dan mendengarkan kebutuhan majelis setempat.",
      body: [
        "Sekelompok alumni menempuh perjalanan darat dan sungai untuk menemani sebuah jemaat kecil. Mereka memimpin ibadah, mengajar sekolah minggu, dan mendengarkan kebutuhan majelis setempat.",
        "Dari kunjungan ini, tim mencatat kebutuhan akan pelatihan pelayan awam, bahan ajar, dan pendampingan pastoral berkala. Catatan tersebut diserahkan kepada bidang pelayanan dan misi.",
      ],
    },
    {
      id: "n3",
      cat: "Kampus",
      title: "Alumni Diajak Menjadi Duta Kampus pada Penerimaan Mahasiswa Baru",
      date: "2026-09-22",
      by: "Sekretariat",
      excerpt:
        "Pengurus membuka pendaftaran duta kampus bagi alumni yang bersedia memperkenalkan Institut kepada gereja di daerahnya.",
      body: [
        "Pengurus mengajak alumni menjadi penghubung antara kampus dan gereja di daerah masing-masing. Duta kampus akan menerima bahan perkenalan dan panduan singkat.",
        "Alumni yang berminat dapat mendaftar lewat sekretariat. Kontak lengkap tersedia di bagian Kontak pada halaman ini.",
      ],
    },
    {
      id: "n4",
      cat: "Kabar Alumni",
      title: "Dua Alumni Muda Ditahbiskan sebagai Gembala Sidang",
      date: "2026-09-09",
      by: "Humas Alumni",
      excerpt:
        "Keluarga besar alumni turut mendoakan dua rekan yang memulai pelayanan penggembalaan penuh waktu.",
      body: [
        "Dua alumni muda ditahbiskan dalam ibadah yang dihadiri keluarga, jemaat, dan beberapa rekan seangkatan. Pengurus alumni menyampaikan ucapan syukur dan komitmen untuk mendampingi mereka.",
        "Alumni yang ingin mengirim kabar sukacita atau pergumulan dapat menghubungi bidang humas dan media.",
      ],
    },
    {
      id: "n5",
      cat: "Kabar Alumni",
      title: "Program Beasiswa Alumni Tahap Kedua Dibuka",
      date: "2026-08-28",
      by: "Bidang Dana dan Usaha",
      excerpt:
        "Dana beasiswa dihimpun dari iuran dan persembahan kasih alumni untuk membantu mahasiswa yang membutuhkan.",
      body: [
        "Program beasiswa alumni memasuki tahap kedua. Dana berasal dari iuran dan persembahan kasih alumni, dan disalurkan kepada mahasiswa yang membutuhkan dukungan biaya studi.",
        "Alumni dapat berpartisipasi lewat rekening yang tercantum pada bagian Informasi Rekening. Laporan penggunaan dana akan dibagikan secara berkala.",
      ],
    },
  ],
  board: {
    period: "Masa bakti 2025–2029",
    groups: [
      {
        id: "pembina",
        name: "Dewan Pembina",
        desc: "Memberi arahan dan pertimbangan rohani.",
        people: [
          {
            name: "Pdt. Chandrawati, S.E., M.Th",
            role: "Dewan Penasehat",
            angk: 1998,
            city: "Kota Batu",
            tone: 0,
          },
          {
            name: "Pdt. Dr. Awasuning Manaransyah",
            role: "Dewan Penasehat",
            angk: 2001,
            city: "Kota Batu",
            tone: 1,
          },
          {
            name: "Pdt. Sudomo, D.Min",
            role: "Dewan Penasehat",
            angk: 2001,
            city: "Kota Batu",
            tone: 2,
          },
          {
            name: "Pdt. Ridwan Hutabarat, M.Th",
            role: "Dewan Penasehat",
            angk: 2001,
            city: "Kota Batu",
            tone: 3,
          },
          {
            name: "Pdt. Dr. Robby Wagey",
            role: "Dewan Penasehat",
            angk: 2001,
            city: "Kota Batu",
            tone: 4,
          },
          {
            name: "Pdt. Johanes Eklemius Manuain, M.Th",
            role: "Dewan Penasehat",
            angk: 2001,
            city: "Kota Batu",
            tone: 2,
          },
        ],
      },
      {
        id: "harian",
        name: "Pengurus Harian",
        desc: "Menjalankan organisasi sehari-hari.",
        people: [
          {
            name: "Pdt. Hardian Baja Gunanta Tarigan, M.Div",
            role: "Ketua Umum",
            angk: 2005,
            city: "Malang",
            tone: 0,
          },
          {
            name: "Pdt. Dr. Ronny Santoso",
            role: "Wakil Ketua I",
            angk: 2008,
            city: "Medan",
            tone: 1,
          },
          {
            name: "Febri Ando Pratama Saragih, S.Th",
            role: "Wakil Ketua II",
            angk: 2008,
            city: "Medan",
            tone: 1,
          },
          {
            name: "Pdt. Usada Lenno Eltho, M.Div",
            role: "Sekretaris Umum",
            angk: 2012,
            city: "Batu",
            tone: 4,
          },
          {
            name: "Pdt. Dr. Samuel Manaransyah, M.Th",
            role: "Wakil Sekretaris Umum I",
            angk: 2012,
            city: "Batu",
            tone: 4,
          },
          {
            name: "Pdt. M. Asri, S.Th., M.Min",
            role: "Wakil Sekretaris Umum II",
            angk: 2012,
            city: "Batu",
            tone: 4,
          },
          {
            name: "Pdt. Em. Kaston Sinaga, S.Th., M.Div",
            role: "Bendahara Umum",
            angk: 2010,
            city: "Surabaya",
            tone: 2,
          },
          {
            name: "Sjenny A.K. Paath, S.Th",
            role: "Wakil Bendahara Umum I",
            angk: 2010,
            city: "Surabaya",
            tone: 2,
          },
          {
            name: "Jusniar Napitupulu, S.Th",
            role: "Wakil Bendahara Umum I",
            angk: 2010,
            city: "Surabaya",
            tone: 2,
          },
        ],
      },
      {
        id: "bidang",
        name: "Bidang",
        desc: "Menangani program dan kebutuhan alumni.",
        people: [
          {
            name: "Pdt. Hiras Tambunan, S.Th",
            role: "Ketua Bidang I: Organisasi",
            angk: 2007,
            city: "Kupang",
            tone: 4,
          },
          {
            name: "Pdt. Yafet Mandiangan, S.Th",
            role: "Bidang I : Organisasi",
            angk: 2013,
            city: "Jakarta",
            tone: 2,
          },
          {
            name: "Pdt. Dr. Sarmauli, M.Th",
            role: "Ketua Bidang II : Pendidikan & Pengajaran",
            angk: 2011,
            city: "Denpasar",
            tone: 3,
          },
          {
            name: "Detrina Nokas, S.Th., M.Pd",
            role: "Bidang II Sub Bidang: Kegiatan Persekutuan Alumni",
            angk: 2015,
            city: "Bandung",
            tone: 1,
          },
          {
            name: "Sylvia Irani Takaliuang, S.E., M.Th",
            role: "Bidang II Sub Bidang: Kegiatan Persekutuan Alumni",
            angk: 2015,
            city: "Bandung",
            tone: 1,
          },
          {
            name: "Pdt. Dr. Jammes J. Takaliuang, S.S.",
            role: "Ketua Bidang III: Penelitian dan Pengembangan",
            angk: 2015,
            city: "Bandung",
            tone: 1,
          },
          {
            name: "Josina Riruma, S.H., M.Th",
            role: "Bidang III Sub Bidang: Pendataan & Pelaksanaan Kegiatan Alumni",
            angk: 2015,
            city: "Bandung",
            tone: 1,
          },
          {
            name: "Ubat Pahala Charles Silalahi, M.Phil",
            role: "Bidang III Sub Bidang: Pendataan & Pelaksanaan Kegiatan Alumni",
            angk: 2015,
            city: "Bandung",
            tone: 1,
          },
          {
            name: "Pdt. Dr. Rio Janto Pardede",
            role: "Ketua Bidang IV: Kemitraan & PKM",
            angk: 2015,
            city: "Bandung",
            tone: 1,
          },
          {
            name: "Pdt. Imanuel Pandu,S.Mis., M.Pdk",
            role: "Bidang IV Sub Bidang: Tanggap Darurat & Pemerhati",
            angk: 2015,
            city: "Bandung",
            tone: 1,
          },
          {
            name: "Ps. Nataniel Randakila, M.Th",
            role: "Bidang IV Sub Bidang: Tanggap Darurat & Pemerhati",
            angk: 2015,
            city: "Bandung",
            tone: 1,
          },
          {
            name: "Pdt. Dr. Iwan Setiawan, M.Th",
            role: "Sub Bidang: Humas",
            angk: 2015,
            city: "Bandung",
            tone: 1,
          },
          {
            name: "Pdm. Robert Hia, M.Th",
            role: "Sub Bidang: Humas",
            angk: 2015,
            city: "Bandung",
            tone: 1,
          },
          {
            name: "Pdt. Paulina Rouli, M.Th",
            role: "Sub Bidang Doa",
            angk: 2015,
            city: "Bandung",
            tone: 1,
          },
          {
            name: "Pdt. Sontinar Hutasoit, B.Th",
            role: "Sub Bidang Doa",
            angk: 2015,
            city: "Bandung",
            tone: 1,
          },
          {
            name: "Grace Enting Alfrianne Illu, S.Th",
            role: "Ketua Bidang V : IT Publikasi",
            angk: 2015,
            city: "Bandung",
            tone: 1,
          },
          {
            name: "Yosia Kristianto, S.Th",
            role: "Bidang V : IT Publikasi",
            angk: 2015,
            city: "Bandung",
            tone: 1,
          },
          {
            name: "Ruth Fulcher Hutabarat, S.Th",
            role: "Bidang V : IT Publikasi",
            angk: 2019,
            city: "Batam",
            tone: 1,
          },
          {
            name: "Christian M.F Simarmata, S.Th",
            role: "Bidang V : IT Publikasi",
            angk: 2019,
            city: "Bengkulu",
            tone: 1,
          },
        ],
      },
    ],
  },
  articles: [
    {
      id: "a1",
      tag: "Pastoral",
      title: "Menggembalakan Jemaat di Tengah Banjir Informasi",
      author: "Hardian Baja G.",
      angk: 2005,
      date: "2026-10-21",
      read: 6,
      excerpt:
        "Jemaat kini membawa ribuan suara ke dalam ibadah lewat ponselnya. Gembala perlu belajar menjadi penuntun, bukan pesaing.",
      body: [
        "Hampir semua anggota jemaat membuka ponsel sebelum membuka Alkitab. Gembala tidak bisa menutup arus itu, tetapi bisa membantu jemaat menimbang apa yang mereka baca dan dengar.",
        "Mulailah dengan hal sederhana: sediakan waktu tanya jawab setelah khotbah, rekomendasikan sumber bacaan yang sehat, dan hadir lebih sering dalam percakapan pribadi. Kehadiran yang konsisten lebih meyakinkan daripada bantahan yang panjang.",
      ],
    },
    {
      id: "a2",
      tag: "Homiletika",
      title: "Khotbah Ekspositori untuk Jemaat Pedesaan",
      author: "Hardian Baja G.",
      angk: 2007,
      date: "2026-10-12",
      read: 5,
      excerpt:
        "Menjelaskan satu perikop dengan bahasa sehari-hari ternyata paling dekat dengan cara jemaat desa belajar.",
      body: [
        "Khotbah ekspositori sering dianggap rumit. Di desa, pendekatan ini justru bekerja baik bila perikopnya pendek, bahasanya lugas, dan contohnya diambil dari ladang, pasar, dan keluarga.",
        "Persiapan tetap menuntut kerja keras: membaca konteks, memahami kata kunci, lalu merumuskan pesan dalam satu kalimat. Jemaat pulang membawa kalimat itu dan mengulangnya di rumah.",
      ],
    },
    {
      id: "a3",
      tag: "Kesehatan Pelayan",
      title: "Merawat Diri Sebelum Merawat Jemaat",
      author: "Hardian Baja G.",
      angk: 2008,
      date: "2026-09-30",
      read: 7,
      excerpt:
        "Kelelahan pelayan jarang terlihat dari mimbar. Ia tampak pada hari-hari biasa yang makin sunyi.",
      body: [
        "Banyak pelayan merasa istirahat adalah kemewahan. Padahal tidur cukup, waktu bersama keluarga, dan sahabat yang jujur adalah bagian dari panggilan yang sehat.",
        "Tulisan ini mengajak rekan alumni menetapkan satu hari libur yang dijaga, menemukan seorang mentor, dan berani meminta bantuan konselor ketika beban terasa terlalu berat.",
      ],
    },
    {
      id: "a4",
      tag: "Misi",
      title: "Misi di Kota: Menjumpai Generasi Z",
      author: "Hardian Baja G.",
      angk: 2013,
      date: "2026-09-17",
      read: 6,
      excerpt:
        "Anak muda kota tidak menolak iman. Mereka menolak sikap yang tidak mau mendengar.",
      body: [
        "Di kota, anak muda hidup di antara kampus, kafe, dan ruang digital. Gereja yang ingin menjumpai mereka perlu hadir di tempat-tempat itu dengan sikap belajar.",
        "Pelayanan yang bertahan biasanya kecil dan konsisten: kelompok diskusi mingguan, pendampingan satu lawan satu, dan ruang untuk bertanya tanpa dihakimi.",
      ],
    },
    {
      id: "a5",
      tag: "Teologi",
      title: "Teologi yang Turun ke Ladang",
      author: "Hardian Baja G.",
      angk: 2012,
      date: "2026-09-02",
      read: 8,
      excerpt:
        "Teologi yang baik berakhir di dapur, ladang, dan pasar tempat jemaat bekerja.",
      body: [
        "Kuliah teologi memberi kita bahasa untuk berbicara tentang Allah. Tantangan alumni adalah memakai bahasa itu agar bisa dipahami petani, pedagang, dan ibu rumah tangga.",
        "Penulis berbagi tiga kebiasaan: membaca teks bersama jemaat, mencatat pertanyaan mereka, lalu kembali ke buku dengan pertanyaan itu. Dengan cara ini, teologi terus diuji oleh kehidupan nyata.",
      ],
    },
    {
      id: "a6",
      tag: "Pastoral",
      title: "Belajar Setia di Gereja yang Kecil",
      author: "Hardian Baja G.",
      angk: 2010,
      date: "2026-08-15",
      read: 4,
      excerpt:
        "Gereja kecil tidak menunggu menjadi besar untuk bertumbuh. Ia bertumbuh lewat kesetiaan yang tidak terlihat.",
      body: [
        "Melayani jemaat dengan belasan anggota mengajarkan bahwa ukuran bukan tolok ukur keberhasilan. Setiap anggota dikenal namanya, pergumulannya, dan kebiasaan doanya.",
        "Kesetiaan dalam hal kecil, seperti mengunjungi orang sakit atau menyiapkan ibadah dengan baik, membentuk gereja yang sehat. Itulah pelajaran terbesar dari sepuluh tahun pelayanan penulis.",
      ],
    },
  ],
  contact: {
    text: "Sekretariat menerima kabar alumni, usulan kegiatan, dan pertanyaan seputar keanggotaan. Pesan biasanya dibalas pada hari kerja.",
    mapQuery: "Institut Injil Indonesia Batu",
    rows: [
      {
        label: "Sekretariat",
        value: "Institut Injil Indonesia, Batu, Jawa Timur",
        copy: true,
      },
      {
        label: "Email",
        value: "emailikatanalumnii3@alumni-injil.example",
        copy: true,
      },
      { label: "WhatsApp", value: "+62 812 0000 0000", copy: true },
      { label: "Instagram", value: "@alumni.institut.i3", copy: true },
      {
        label: "Jam layanan",
        value: "Senin sampai Sabtu, 08.00 sampai 16.00 WIB",
        copy: false,
      },
    ],
  },
  bank: {
    text: "Dukungan Anda membiayai beasiswa, kunjungan pelayanan, dan kegiatan alumni. Pilih tujuan, transfer ke rekening yang sesuai, lalu kirim konfirmasi kepada bendahara.",
    accounts: [
      {
        id: "b1",
        bank: "BCA",
        mark: "BCA",
        number: "1234567890",
        holder: "Ikatan Alumni Institut Injil Indonesia",
        purpose: "Iuran alumni",
      },
      {
        id: "b2",
        bank: "Bank Mandiri",
        mark: "MDR",
        number: "1230001234567",
        holder: "Ikatan Alumni Institut Injil Indonesia",
        purpose: "Dana beasiswa",
      },
      {
        id: "b3",
        bank: "BRI",
        mark: "BRI",
        number: "012301000456567",
        holder: "Ikatan Alumni Institut Injil Indonesia",
        purpose: "Persembahan kegiatan",
      },
    ],
  },
};

/* ---------- Utilitas ---------- */
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
const toDate = (iso) => new Date(iso + "T00:00:00");
const fmt = (iso) =>
  toDate(iso).toLocaleDateString("id-ID", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
const byNew = (a, b) => (a.date < b.date ? 1 : -1);
const SPOTS = [
  [72, 28],
  [28, 34],
  [64, 62],
  [35, 70],
  [80, 45],
];
const groupNum = (n) =>
  String(n)
    .replace(/(\d{4})(?=\d)/g, "$1 ")
    .trim();

let toastTimer;
function toast(msg) {
  const t = $("#toast");
  t.textContent = msg;
  t.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => t.classList.remove("show"), 2200);
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

/* ---------- Navigasi dan tema ---------- */
const NAV = [
  ["slogan", "Slogan"],
  ["galeri", "Galeri"],
  ["berita", "Berita"],
  ["pengurus", "Pengurus"],
  ["artikel", "Artikel"],
  ["kontak", "Kontak"],
  ["rekening", "Rekening"],
];
function renderNav() {
  const links = NAV.map(
    ([id, label]) => `<a href="#${id}" data-spy-link="${id}">${label}</a>`,
  ).join("");
  $("#navLinks").innerHTML = links;
  $("#mobileMenu").innerHTML = links;
  $("#footNav").innerHTML = `<a href="#beranda">Beranda</a>` + links;
}
function setupSpy() {
  if (!("IntersectionObserver" in window)) return;
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((en) => {
        if (!en.isIntersecting) return;
        $$("[data-spy-link]").forEach((a) => {
          if (a.dataset.spyLink === en.target.id)
            a.setAttribute("aria-current", "true");
          else a.removeAttribute("aria-current");
        });
      });
    },
    { rootMargin: "-40% 0px -55% 0px" },
  );
  $$("[data-spy]").forEach((s) => io.observe(s));
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

/* ---------- Hero, slogan ---------- */
function renderHero() {
  const h = CONTENT.hero;
  $("#heroEyebrow").textContent = h.eyebrow;
  $("#heroTitle").innerHTML =
    `${esc(h.slogan[0])} <em>${esc(h.slogan[1])}</em>`;
  $("#heroLede").textContent = h.lede;
  const n = [...CONTENT.news].sort(byNew)[0];
  const a = [...CONTENT.articles].sort(byNew)[0];
  $("#latest").innerHTML = `
    <button type="button" data-action="read" data-type="news" data-id="${esc(n.id)}">
      <span class="eyebrow">Berita terbaru</span><strong>${esc(n.title)}</strong><small>${fmt(n.date)}</small>
    </button>
    <button type="button" data-action="read" data-type="article" data-id="${esc(a.id)}">
      <span class="eyebrow">Artikel terbaru</span><strong>${esc(a.title)}</strong><small>${esc(a.author)} · Angkatan ${esc(a.angk)}</small>
    </button>`;
  const rays = $("#rays");
  const cx = 200,
    cy = 372,
    r = 560,
    step = Math.PI / 20;
  let d = "";
  for (let i = 0; i < 20; i += 2) {
    const a1 = Math.PI + i * step,
      a2 = a1 + step;
    const p = (ang) =>
      `${(cx + r * Math.cos(ang)).toFixed(1)},${(cy + r * Math.sin(ang)).toFixed(1)}`;
    d += `<polygon points="${cx},${cy} ${p(a1)} ${p(a2)}"/>`;
  }
  rays.innerHTML = d;
}
function renderSlogan() {
  const s = CONTENT.slogan;
  $("#sloganHead").textContent = s.head;
  $("#sloganMain").textContent = s.main;
  $("#sloganText").textContent = s.text;
  $("#values").innerHTML = s.values
    .map((v) => `<li><h3>${esc(v.title)}</h3><p>${esc(v.text)}</p></li>`)
    .join("");
}

/* ---------- Galeri ---------- */
let galFilter = "Semua",
  lbList = [],
  lbIndex = 0;
const galTags = () => ["Semua", ...new Set(CONTENT.gallery.map((g) => g.tag))];
function media(item, i) {
  const [sx, sy] = SPOTS[i % SPOTS.length];
  const img = item.src
    ? `<img src="${esc(item.src)}" alt="${esc(item.title)}" loading="lazy">`
    : "";
  return `<span class="ph tone-${item.tone % 5}" style="--sx:${sx}%;--sy:${sy}%">${img}</span>`;
}
function renderGalFilters() {
  $("#galFilters").innerHTML = galTags()
    .map(
      (t) =>
        `<button class="chip" type="button" data-action="gal-filter" data-v="${esc(t)}" aria-pressed="${t === galFilter}">${esc(t)}</button>`,
    )
    .join("");
}
function renderGallery() {
  lbList = CONTENT.gallery
    .filter((g) => galFilter === "Semua" || g.tag === galFilter)
    .sort(byNew);
  const el = $("#gallery");
  el.classList.toggle("is-filtered", galFilter !== "Semua");
  el.innerHTML = lbList
    .map(
      (g, i) => `
    <button class="g-item" type="button" data-action="photo" data-i="${i}" aria-label="Buka foto: ${esc(g.title)}">
      ${media(g, i)}
      <span class="g-cap"><span class="tag">${esc(g.tag)}</span><strong>${esc(g.title)}</strong><small>${fmt(g.date)} · ${esc(g.place)}</small></span>
    </button>`,
    )
    .join("");
  renderGalFilters();
}
function showPhoto(i) {
  lbIndex = (i + lbList.length) % lbList.length;
  const g = lbList[lbIndex];
  const note = g.src ? "" : `<span class="lb-note">Foto belum diunggah</span>`;
  $("#lbMedia").innerHTML = media(g, lbIndex) + note;
  $("#lbTag").textContent = g.tag;
  $("#lbTitle").textContent = g.title;
  $("#lbMeta").textContent = `${fmt(g.date)} · ${g.place}`;
  $("#lbDesc").textContent = g.desc;
  $("#lbCount").textContent = `${lbIndex + 1} dari ${lbList.length}`;
}

/* ---------- Berita ---------- */
let newsFilter = "Semua";
function renderNews() {
  const cats = ["Semua", ...new Set(CONTENT.news.map((n) => n.cat))];
  $("#newsFilters").innerHTML = cats
    .map(
      (t) =>
        `<button class="chip" type="button" data-action="news-filter" data-v="${esc(t)}" aria-pressed="${t === newsFilter}">${esc(t)}</button>`,
    )
    .join("");
  const list = CONTENT.news
    .filter((n) => newsFilter === "Semua" || n.cat === newsFilter)
    .sort(byNew);
  const f = list[0];
  const rest = list.slice(1);
  const feature = `
    <button class="news-feature" type="button" data-action="read" data-type="news" data-id="${esc(f.id)}">
      <span class="nf-media"><span class="ph tone-${(CONTENT.news.indexOf(f) + 1) % 5}" style="--sx:70%;--sy:34%"></span></span>
      <span class="nf-body">
        <span class="meta-line"><span class="tag">${esc(f.cat)}</span><span>${fmt(f.date)}</span></span>
        <h3>${esc(f.title)}</h3>
        <p>${esc(f.excerpt)}</p>
        <span class="more">Baca selengkapnya →</span>
      </span>
    </button>`;
  const rows = rest
    .map((n) => {
      const d = toDate(n.date);
      return `
    <button class="news-row" type="button" data-action="read" data-type="news" data-id="${esc(n.id)}">
      <span class="nr-date"><b>${d.getDate()}</b><span>${d.toLocaleDateString("id-ID", { month: "short" })}</span></span>
      <span class="nr-main"><span class="tag">${esc(n.cat)}</span><span class="nr-title">${esc(n.title)}</span></span>
    </button>`;
    })
    .join("");
  $("#news").innerHTML =
    feature +
    `<div class="news-list">${rows || '<p class="empty">Belum ada berita lain pada kategori ini.</p>'}</div>`;
}

/* ---------- Pengurus ---------- */
let boardTab = "all";
const initials = (name) =>
  name
    .split(/\s+/)
    .map((t) => t.replace(/,$/, ""))
    .filter((t) => !/\./.test(t))
    .slice(0, 2)
    .map((t) => t[0])
    .join("")
    .toUpperCase();
function renderBoard() {
  const b = CONTENT.board;
  $("#boardPeriod").textContent = "Pengurus · " + b.period;
  $("#boardTabs").innerHTML = [{ id: "all", name: "Semua" }, ...b.groups]
    .map(
      (g) =>
        `<button class="chip" type="button" data-action="board-tab" data-v="${esc(g.id)}" aria-pressed="${g.id === boardTab}">${esc(g.name)}</button>`,
    )
    .join("");
  $("#board").innerHTML = b.groups
    .filter((g) => boardTab === "all" || g.id === boardTab)
    .map(
      (g) => `
    <div class="b-group">
      <div class="b-head"><h3>${esc(g.name)}</h3><p>${esc(g.desc)}</p></div>
      <div class="b-grid">${g.people
        .map(
          (p) => `
        <div class="person">
          <span class="avatar tone-${p.tone % 5}" aria-hidden="true">${esc(initials(p.name))}</span>
          <span class="role">${esc(p.role)}</span>
          <span class="name">${esc(p.name)}</span>
          <span class="sub">Angkatan ${esc(p.angk)} · ${esc(p.city)}</span>
        </div>`,
        )
        .join("")}</div>
    </div>`,
    )
    .join("");
}

/* ---------- Artikel ---------- */
let artTag = "Semua";
function renderArtTags() {
  const tags = ["Semua", ...new Set(CONTENT.articles.map((a) => a.tag))];
  $("#artTags").innerHTML = tags
    .map(
      (t) =>
        `<button class="chip" type="button" data-action="art-tag" data-v="${esc(t)}" aria-pressed="${t === artTag}">${esc(t)}</button>`,
    )
    .join("");
}
function renderArticles() {
  const q = $("#artSearch").value.trim().toLowerCase();
  const asc = $("#artSort").value === "old";
  let list = CONTENT.articles.filter(
    (a) =>
      (artTag === "Semua" || a.tag === artTag) &&
      (!q ||
        [a.title, a.author, a.tag, a.excerpt]
          .join(" ")
          .toLowerCase()
          .includes(q)),
  );
  list = list.sort(byNew);
  if (asc) list.reverse();
  $("#artCount").textContent = `${list.length} artikel ditampilkan`;
  $("#articles").innerHTML = list.length
    ? list
        .map(
          (a) => `
    <button class="a-row" type="button" data-action="read" data-type="article" data-id="${esc(a.id)}">
      <span class="a-meta"><span class="tag">${esc(a.tag)}</span><time datetime="${esc(a.date)}">${fmt(a.date)}</time></span>
      <span class="a-main"><span class="a-title">${esc(a.title)}</span><span class="a-ex">${esc(a.excerpt)}</span></span>
      <span class="a-by"><span>${esc(a.author)}</span><small>Angkatan ${esc(a.angk)} · ${esc(a.read)} menit baca</small></span>
      <span class="a-go" aria-hidden="true">→</span>
    </button>`,
        )
        .join("")
    : `<p class="empty">Tidak ada artikel yang cocok. Coba kata kunci lain atau pilih topik Semua.</p>`;
  renderArtTags();
}

/* ---------- Kontak dan rekening ---------- */
function renderContact() {
  const c = CONTENT.contact;
  $("#contactText").textContent = c.text;
  $("#mapLink").href =
    "https://www.google.com/maps/search/?api=1&query=" +
    encodeURIComponent(c.mapQuery);
  $("#contacts").innerHTML = c.rows
    .map(
      (r) => `
    <div class="c-row">
      <dt>${esc(r.label)}</dt><dd>${esc(r.value)}</dd>
      ${r.copy ? `<button class="btn btn-sm" type="button" data-action="copy" data-text="${esc(r.value)}" data-label="${esc(r.label)}">Salin</button>` : "<span></span>"}
    </div>`,
    )
    .join("");
}
function renderBank() {
  const b = CONTENT.bank;
  $("#bankText").textContent = b.text;
  $("#banks").innerHTML = b.accounts
    .map(
      (a) => `
    <div class="bank" id="${esc(a.id)}">
      <div class="bank-top"><span class="bank-name"><span class="bank-mark" aria-hidden="true">${esc(a.mark)}</span>${esc(a.bank)}</span><span class="tag">${esc(a.purpose)}</span></div>
      <div><p class="eyebrow" style="color:var(--muted)">Nomor rekening</p><p class="bank-num">${esc(groupNum(a.number))}</p></div>
      <div class="bank-foot"><span class="bank-holder">a.n. ${esc(a.holder)}</span>
        <button class="btn btn-sm" type="button" data-action="copy" data-text="${esc(a.number)}" data-label="Nomor rekening ${esc(a.bank)}">Salin nomor</button></div>
    </div>`,
    )
    .join("");
  $("#f-tujuan").innerHTML = b.accounts
    .map((a) => `<option value="${esc(a.id)}">${esc(a.purpose)}</option>`)
    .join("");
  updateMsg();
}
function updateMsg() {
  const acc =
    CONTENT.bank.accounts.find((a) => a.id === $("#f-tujuan").value) ||
    CONTENT.bank.accounts[0];
  $$(".bank").forEach((el) =>
    el.classList.toggle("is-picked", el.id === acc.id),
  );
  const nama = $("#f-nama").value.trim() || "[nama Anda]";
  const angk = $("#f-angk").value.trim() || "[tahun angkatan]";
  const nom = $("#f-nominal").value.trim() || "[nominal]";
  $("#f-out").value =
    `Shalom, Bendahara ${CONTENT.org.fullName}.\n\nSaya ${nama} (Angkatan ${angk}) sudah mentransfer ${nom} untuk ${acc.purpose.toLowerCase()} ke rekening ${acc.bank} ${acc.number} a.n. ${acc.holder}.\n\nBukti transfer saya lampirkan. Terima kasih.`;
}

/* ---------- Overlay ---------- */
let openEl = null,
  lastFocus = null;
function openOverlay(el) {
  lastFocus = document.activeElement;
  openEl = el;
  el.hidden = false;
  document.documentElement.classList.add("lock");
  const c = el.querySelector("[data-close]");
  if (c) c.focus();
}
function closeOverlay() {
  if (!openEl) return;
  openEl.hidden = true;
  openEl = null;
  document.documentElement.classList.remove("lock");
  if (lastFocus && lastFocus.focus) lastFocus.focus();
}
function openReader(type, id) {
  const list = type === "news" ? CONTENT.news : CONTENT.articles;
  const it = list.find((x) => x.id === id);
  if (!it) return;
  $("#rdKicker").textContent =
    (type === "news" ? "Berita · " : "Artikel · ") + (it.cat || it.tag);
  $("#rdTitle").textContent = it.title;
  $("#rdMeta").textContent =
    type === "news"
      ? `${fmt(it.date)} · ${it.by}`
      : `Oleh ${it.author} · Angkatan ${it.angk} · ${fmt(it.date)} · ${it.read} menit baca`;
  $("#rdBody").innerHTML = it.body.map((p) => `<p>${esc(p)}</p>`).join("");
  openOverlay($("#reader"));
  $("#reader .panel").scrollTop = 0;
}

/* ---------- Event ---------- */
document.addEventListener("click", (e) => {
  if (openEl && e.target === openEl) {
    closeOverlay();
    return;
  }
  if (e.target.closest("[data-close]")) {
    closeOverlay();
    return;
  }
  const t = e.target.closest("[data-action]");
  if (!t) {
    const l = e.target.closest(".mobile-menu a");
    if (l) toggleMenu(false);
    return;
  }
  const a = t.dataset.action;
  if (a === "theme") {
    const next = currentTheme() === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", next);
    try {
      localStorage.setItem("i3-theme", next);
    } catch (err) {}
  } else if (a === "menu") toggleMenu();
  else if (a === "dismiss-notice") $("#notice").hidden = true;
  else if (a === "gal-filter") {
    galFilter = t.dataset.v;
    renderGallery();
  } else if (a === "photo") {
    showPhoto(+t.dataset.i);
    openOverlay($("#lightbox"));
  } else if (a === "lb-prev") showPhoto(lbIndex - 1);
  else if (a === "lb-next") showPhoto(lbIndex + 1);
  else if (a === "news-filter") {
    newsFilter = t.dataset.v;
    renderNews();
  } else if (a === "board-tab") {
    boardTab = t.dataset.v;
    renderBoard();
  } else if (a === "art-tag") {
    artTag = t.dataset.v;
    renderArticles();
  } else if (a === "read") openReader(t.dataset.type, t.dataset.id);
  else if (a === "copy") copyText(t.dataset.text, t.dataset.label);
  else if (a === "copy-msg") copyText($("#f-out").value, "Pesan konfirmasi");
});
function toggleMenu(force) {
  const m = $("#mobileMenu"),
    b = $(".menu-btn");
  const show = typeof force === "boolean" ? force : m.hidden;
  m.hidden = !show;
  b.setAttribute("aria-expanded", String(show));
}
document.addEventListener("keydown", (e) => {
  if (!openEl) return;
  if (e.key === "Escape") {
    closeOverlay();
    return;
  }
  if (openEl.id === "lightbox") {
    if (e.key === "ArrowLeft") showPhoto(lbIndex - 1);
    if (e.key === "ArrowRight") showPhoto(lbIndex + 1);
  }
  if (e.key === "Tab") {
    const f = $$("button,[href],input,select,textarea", openEl).filter(
      (x) => !x.disabled,
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
$("#artSearch").addEventListener("input", renderArticles);
$("#artSort").addEventListener("change", renderArticles);
["#f-nama", "#f-angk", "#f-nominal"].forEach((s) =>
  $(s).addEventListener("input", updateMsg),
);
$("#f-tujuan").addEventListener("change", updateMsg);

/* ---------- Mulai ---------- */
renderNav();
renderHero();
renderSlogan();
renderGallery();
renderNews();
renderBoard();
renderArticles();
renderContact();
renderBank();
setupSpy();
$("#footText").textContent =
  `© 2026 Christian Marlen Firuli Simarmata. Soli Deo Gloria.`;
$("#notice").hidden = !CONTENT.sampleNotice;
