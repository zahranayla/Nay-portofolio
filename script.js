const navBar = document.querySelector("nav");
const burgerBar = document.querySelector(".burger-bar");
const listNavMobile = document.querySelector(".list-nav-mobile");
// const buttonToTop = document.querySelector(".btn-to-top");

let openBurgerBar = false; // false = tidak dilihat; true = dilihat
burgerBar.addEventListener("click", function () {
  openBurgerBar = !openBurgerBar;
  if (openBurgerBar) {
    navBar.style.backgroundColor = "rgba(156, 168, 158, 100)";
    navBar.style.color = "#0b2b26";
    listNavMobile.style.display = "block"; // display: block;
  } else {
    navBar.style.backgroundColor = "transparent";
    navBar.style.color = "white";
    listNavMobile.style.display = "none"; // display: none;
  }
});

document.addEventListener("scroll", () => {
  if (window.scrollY >= 667) {
    navBar.style.backgroundColor = "rgba(156, 168, 158, 100)";
    navBar.style.color = "#0b2b26";
    navBar.style.transition = "all 0.5s ease-in-out";
    navBar.style.padding = "9px 25px";
    listNavMobile.style.top = "54px";
  } else {
    navBar.style.backgroundColor = "transparent";
    navBar.style.color = "white";
    navBar.style.padding = "20px 25px 20px";
    listNavMobile.style.top = "80px";
  }
});

const handleContentClick = (value) => {
  const component = document.getElementById(`content${value}`);
  component.scrollIntoView({
    behavior: "smooth",
  });
  listNavMobile.style.display = "none";
};

const scroll = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, 500);
  });
};

scroll().then(
  window.scrollTo({
    top: 1,
    behavior: "smooth",
  })
);

const typed = new Typed(".home-span-text", {
  strings: [
    "Student of Hasanuddin Univ",
    "FrontEnd Developer Novice",
    "Emerging Web Develope",
  ],
  typeSpeed: 80,
  backSpeed: 30,
  backDelay: 1000,
  loop: true,
});

// // Tampilkan buttonToTop jika scrollY >= 500
// document.addEventListener("scroll", () => {
//   if (window.scrollY >= 500) {
//     buttonToTop.style.opacity = 1;
//   } else {
//     buttonToTop.style.opacity = 0;
//   }
// });

/* ==== MATERIALS POPUP SECTION ==== */
const materialsData = [
  {
    title: "Testing Strategy",
    body: "Materi ini membahas konsep dasar dan strategi dalam pengujian perangkat lunak (<b>Software Testing</b>). <b>Testing</b> adalah proses sistematis untuk menemukan kesalahan dan memastikan bahwa perangkat lunak bekerja sesuai dengan kebutuhan pengguna. Strategi testing mencakup tahap-tahap seperti <b>Unit Testing</b>, <b>Integration Testing</b>, <b>System Testing</b>, dan <b>Acceptance Testing</b>. Berdasarkan fungsinya, testing dibagi menjadi <b>Functional Testing</b> yang menilai kesesuaian fungsi sistem dengan spesifikasi, serta <b>Non-Functional Testing</b> yang berfokus pada aspek performa, keamanan, dan usability. Selain itu, terdapat dua pendekatan berdasarkan struktur kode, yaitu <b>Black-box Testing</b> (tanpa melihat kode sumber) dan <b>White-box Testing</b> (dengan melihat logika program). Tujuan utama strategi ini adalah mendeteksi kesalahan sedini mungkin, menekan biaya perbaikan, dan memastikan kualitas sistem secara menyeluruh."
  },
  {
    title: "UI/UX Testing",
    body: "<b>UI/UX Testing</b> berfokus pada aspek tampilan antarmuka (<b>User Interface</b>) dan pengalaman pengguna (<b>User Experience</b>). <b>UI Testing</b> memastikan bahwa elemen visual seperti tombol, warna, dan layout sesuai dengan rancangan desain dan mudah digunakan. <b>UX Testing</b>, di sisi lain, menilai bagaimana pengguna berinteraksi dengan sistem, apakah proses navigasi intuitif dan pengalaman pengguna menyenangkan. Pendekatan umum dalam pengujian ini mencakup <b>Usability Testing</b>, <b>Accessibility Testing</b> (berdasarkan pedoman WCAG), serta <b>Heuristic Evaluation</b> berdasarkan 10 prinsip <b>Nielsen</b> seperti visibility, feedback, dan error prevention. Tools yang digunakan antara lain <b>Figma</b> untuk prototyping, <b>Maze</b> untuk pengujian interaktif, serta <b>Hotjar</b> dan <b>Zeplin</b> untuk menganalisis perilaku pengguna. Tujuan akhirnya adalah menciptakan sistem yang estetis, mudah digunakan, dan memberikan kepuasan maksimal bagi pengguna."
  },
  {
    title: "Testing Plan",
    body: "<b>Testing Plan</b> merupakan dokumen terstruktur yang menjadi panduan dalam proses pengujian perangkat lunak. Dokumen ini mencakup <b>ruang lingkup</b>, <b>tujuan</b>, <b>pendekatan</b>, <b>jadwal</b>, <b>risiko</b>, serta <b>sumber daya</b> yang digunakan. Elemen utama dalam Test Plan meliputi <b>Test Items</b> (komponen yang diuji), <b>Features to be Tested</b> (fitur yang diuji), <b>Testing Tasks</b> (aktivitas pengujian), dan <b>Pass/Fail Criteria</b> (kriteria keberhasilan). Penyusunan Testing Plan mengacu pada standar <b>IEEE 829-1988</b> untuk menjamin kejelasan dan konsistensi proses. Dengan adanya rencana pengujian, tim dapat memastikan bahwa proses testing berjalan efisien, terdokumentasi dengan baik, serta menghasilkan laporan yang dapat ditelusuri kembali."
  },
  {
    title: "Test Scenario, Test Case, and Bug Report",
    body: "Materi ini menjelaskan tiga komponen penting dalam pengujian perangkat lunak: <b>Test Scenario</b>, <b>Test Case</b>, dan <b>Bug Report</b>. <b>Test Scenario</b> menggambarkan situasi atau skenario yang akan diuji untuk memverifikasi fungsi tertentu dalam sistem. <b>Test Case</b> merupakan langkah-langkah rinci yang berisi input, proses, dan hasil yang diharapkan untuk menguji setiap skenario. Sementara itu, <b>Bug Report</b> adalah dokumen yang mencatat temuan kesalahan selama proses pengujian, meliputi deskripsi bug, langkah reproduksi, tingkat keparahan (<b>Severity</b>), dan prioritas perbaikan. Dokumentasi ini membantu tim pengembang memahami sumber kesalahan, memprioritaskan perbaikan, dan menjaga kualitas perangkat lunak secara keseluruhan."
  },
  {
    title: "Unit Testing",
    body: "<b>Unit Testing</b> adalah proses pengujian yang dilakukan pada unit terkecil dari perangkat lunak seperti fungsi, modul, atau class. Tujuannya adalah memastikan setiap bagian kode bekerja dengan benar sebelum digabungkan ke sistem yang lebih besar. Pendekatan yang digunakan adalah <b>AAA (Arrange – Act – Assert)</b>, yaitu menyiapkan kondisi awal, menjalankan fungsi, dan memverifikasi hasilnya. Framework populer yang digunakan meliputi <b>JUnit</b> untuk Java, <b>Pytest</b> untuk Python, dan <b>Jest</b> untuk JavaScript. Keuntungan Unit Testing adalah mendeteksi bug sejak dini, menjaga kualitas kode, dan mengurangi biaya perbaikan di tahap selanjutnya. Dengan otomatisasi testing, proses ini menjadi lebih cepat, efisien, dan konsisten."
  },
  {
    title: "API Testing",
    body: "<b>API Testing</b> berfokus pada pengujian komunikasi antar sistem melalui <b>Application Programming Interface (API)</b>. Pengujian ini memastikan bahwa API dapat menerima permintaan (<b>request</b>) dan memberikan respons (<b>response</b>) dengan benar. Tujuan utamanya adalah memverifikasi <b>keandalan</b>, <b>keamanan</b>, <b>performa</b>, dan <b>fungsionalitas</b> API. Tools yang umum digunakan antara lain <b>Postman</b> dan <b>SOAPUI</b>, yang mendukung berbagai metode HTTP seperti <b>GET</b>, <b>POST</b>, <b>PUT</b>, dan <b>DELETE</b>. Dalam pengujian API juga dilakukan validasi struktur data (<b>JSON/XML</b>), pengujian <b>error handling</b>, serta pengecekan autentikasi dan otorisasi. Dengan API Testing, integrasi antar sistem menjadi lebih stabil dan mudah dipelihara."
  },
  {
    title: "Selenium WebDriver",
    body: "<b>Selenium WebDriver</b> adalah framework <b>open-source</b> yang digunakan untuk melakukan otomatisasi pengujian pada aplikasi web di berbagai browser. Selenium mendukung banyak bahasa pemrograman seperti <b>Java</b>, <b>Python</b>, <b>C#</b>, dan <b>JavaScript</b>, serta kompatibel dengan browser populer seperti <b>Chrome</b>, <b>Firefox</b>, dan <b>Edge</b>. Keunggulan utama Selenium adalah kemampuannya melakukan <b>cross-browser testing</b> dan integrasi dengan framework seperti <b>TestNG</b> atau <b>Pytest</b>. Dengan WebDriver, tester dapat menulis skrip untuk menguji proses <b>login</b>, <b>form submission</b>, <b>navigasi halaman</b>, dan fitur interaktif lainnya. Selenium juga mendukung pengujian regresi dan dapat diintegrasikan ke pipeline <b>CI/CD</b> untuk pengujian otomatis berkelanjutan."
  },
  {
    title: "Cypress",
    body: "<b>Cypress</b> adalah framework modern berbasis <b>JavaScript</b> untuk pengujian <b>end-to-end</b> aplikasi web. Cypress berjalan langsung di browser, sehingga hasil pengujiannya cepat, akurat, dan mudah dipahami. Fitur unggulannya antara lain <b>automatic waiting</b> (tidak perlu menulis delay manual), <b>real-time reloading</b>, dan <b>time travel debugging</b> yang memungkinkan penguji menelusuri langkah pengujian. Cypress menggunakan sintaks sederhana seperti <code>cy.visit()</code>, <code>cy.get()</code>, dan <code>cy.click()</code>, yang membuat pengujian terasa seperti perilaku pengguna sebenarnya. Framework ini sangat cocok untuk aplikasi modern berbasis <b>React</b>, <b>Vue</b>, atau <b>Angular</b>. Dengan tampilan visual interaktifnya, Cypress membantu pengembang memahami hasil testing dengan lebih intuitif."
  }
];

function openModal(index) {
  const modal = document.getElementById("materialModal");
  const modalTitle = document.getElementById("modal-title");
  const modalBody = document.getElementById("modal-body");

  modalTitle.innerText = materialsData[index - 1].title;
  modalBody.innerHTML = materialsData[index - 1].body;
  modal.style.display = "flex";
}

function closeModal() {
  const modal = document.getElementById("materialModal");
  modal.style.display = "none";
}

window.onclick = function(event) {
  const modal = document.getElementById("materialModal");
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
/* ==== END MATERIALS POPUP SECTION ==== */
