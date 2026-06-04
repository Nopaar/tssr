/* ==========================================
   MOBILE MENU
========================================== */

const menuBtn = document.querySelector(".hamburger");
const mobileMenu = document.querySelector(".mobile-nav");

if (menuBtn && mobileMenu) {
  menuBtn.addEventListener("click", () => {
    menuBtn.classList.toggle("is-active");
    mobileMenu.classList.toggle("is-active");
  });

  document.querySelectorAll(".mobile-nav a").forEach(link => {
    link.addEventListener("click", () => {
      menuBtn.classList.remove("is-active");
      mobileMenu.classList.remove("is-active");
    });
  });
}

/* ==========================================
   JQUERY READY
========================================== */

$(function () {

  /* ==========================
     SCROLL EFFECT
  ========================== */

  $(window).on("scroll", function () {

    const scrollTop = $(this).scrollTop();

    // Sticky Navbar
    $(".navbar").toggleClass("sticky", scrollTop > 20);

    // Scroll Up Button
    $(".scroll-up-btn").toggleClass("show", scrollTop > 500);

    // Back To Top
    const backBtn = document.getElementById("back-to-top");

    if (backBtn) {
      backBtn.style.display = scrollTop > 300 ? "block" : "none";
    }

  });

  /* ==========================
     SCROLL TO TOP
  ========================== */

  $(".scroll-up-btn").click(function () {

    $("html, body").animate(
      {
        scrollTop: 0
      },
      500
    );

    return false;
  });

  /* ==========================
     NAVBAR MENU
  ========================== */

  $(".menu-btn").click(function () {
    $(".navbar .menu").toggleClass("active");
    $(".menu-btn i").toggleClass("active");
  });

  $(".navbar .menu li a").click(function () {
    $(".navbar .menu").removeClass("active");
    $(".menu-btn i").removeClass("active");
  });

  /* ==========================
     TYPED JS
  ========================== */

  if (typeof Typed !== "undefined") {

    new Typed(".typing", {
      strings: [  
        "Ingin cek kerusakan HP? Serahkan saja kepada kami. GRATIS!",
        "Smartphone Anda Bermasalah? Bisa kami perbaiki!",
        "Smartphone anda terkena virus? Biar kami yang urus!",
        "Smartphone anda mati total? Kami siap memperbaikinya!",
        "Smartphone anda terkunci? Serahkan kepada kami!",
        "Smartphone anda bootloop? Biar kami yang urus!",
        "Ingin ganti LCD smartphone? Kami siap membantu!",
        "HP tidak bisa charging? Serahkan kepada kami!"
      ],
      typeSpeed: 70,
      backSpeed: 50,
      backDelay: 50,
      loop: true,
      smartBackspace: true
    });

  }

  /* ==========================
   TYPED JS SPAREPART
========================== */

if (typeof Typed !== "undefined") {

  new Typed(".typing-sparepart", {
    strings: [
      "LCD local berkualitas (S&K Berlaku) dan dapat dicek ditempat!",
      "Battery double power berkualitas dan dijamin awet!",
      "Kaca kamera berbagai tipe Smartphone",
      "Flexible On/Off + Volume Berbagai Tipe Smartphone",
      "Tombol luar power + volume murah!",
      "Charger Original dan Fast Charging",
      "Buzzer Berkualitas",
      "Menyediakan berbagai macam alat service juga!",
      "PCB berbagai macam tipe dan berkualitas!",
      "Backcover, Backglass juga ada!",
      "Sparepart Murah dan Bergaransi",
      "Tersedia Berbagai Merek Smartphone"
    ],
    typeSpeed: 70,
    backSpeed: 50,
    backDelay: 50,
    loop: true,
    smartBackspace: true
  });

}  

  /* ==========================
     OWL CAROUSEL
  ========================== */

  if ($(".carousel").length && $.fn.owlCarousel) {

    $(".carousel").owlCarousel({
      margin: 20,
      loop: true,
      autoplay: true,
      autoplayTimeout: 2500,
      autoplayHoverPause: true,
      responsive: {
        0: {
          items: 1,
          nav: false
        },
        600: {
          items: 2,
          nav: false
        },
        1000: {
          items: 3,
          nav: false
        }
      }
    });

  }

});

/* ==========================================
   BACK TO TOP
========================================== */

function scrollToTop() {

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });

}

/* ==========================================
   FETCH STATISTICS
========================================== */

async function fetchData() {

  try {

    const response = await fetch(
      "https://api.statcord.com/v3/884467910494535741"
    );

    const data = await response.json();

    if (!data || !data.data || !data.data[0]) return;

    const stats = data.data[0];

    const serverCount = document.querySelector("#server-count");
    const userCount = document.querySelector("#user-count");
    const cmdCount = document.querySelector("#cmd-count");

    if (serverCount) {
      serverCount.innerHTML = `<h4>${stats.servers}</h4>`;
    }

    if (userCount) {
      userCount.innerHTML = `<h4>${stats.users}</h4>`;
    }

    if (cmdCount) {
      cmdCount.innerHTML = `<h4>${stats.commands}</h4>`;
    }

  } catch (error) {

    console.error("Stat API Error:", error);

  }

}

fetchData();

/* ==========================================
   COUNTRY DROPDOWN
========================================== */

document.addEventListener("DOMContentLoaded", () => {

  const countryDropdown = document.querySelector("#country");

  if (!countryDropdown) return;

  countries.forEach(country => {

    const option = document.createElement("option");

    option.value = country;
    option.textContent = country;

    countryDropdown.appendChild(option);

  });

});

/* ==========================================
   WHATSAPP FORM
========================================== */

function sendwhatsapp() {

  const phoneNumber = "6285703605976";

  const name =
    document.querySelector("#name")?.value.trim();

  const country =
    document.querySelector("#country")?.value.trim();

  const message =
    document.querySelector("#message")?.value.trim();

  if (!name || !country || !message) {

    alert("Mohon lengkapi semua data terlebih dahulu.");

    return;
  }

  const text =
`*Nama:* ${name}
*Negara:* ${country}
*Pesan:* ${message}

Instagram: @nov444r`;

  const url =
    `https://wa.me/${phoneNumber}?text=${encodeURIComponent(text)}`;

  window.open(url, "_blank");

  // Reset form
  document.querySelector("#name").value = "";
  document.querySelector("#message").value = "";
  document.querySelector("#country").selectedIndex = 0;
}

/* ==========================
   ACTIVE NAVBAR MENU
========================== */

document.addEventListener("DOMContentLoaded", () => {

    const currentPage =
        window.location.pathname.split("/").pop();

    const navLinks =
        document.querySelectorAll(".menu a, .mobile-nav a");

    navLinks.forEach(link => {

        const href = link.getAttribute("href");

        // Home
        if (
            (currentPage === "" ||
             currentPage === "index.html") &&
             href === "index.html"
        ) {
            link.classList.add("active");
        }

        // About
        if (
            currentPage === "about.html" &&
            href === "about.html"
        ) {
            link.classList.add("active");
        }

    });

});

/* ==========================
   ACTIVE SECTION SCROLL
========================== */

const sections = document.querySelectorAll("section[id]");
const navItems = document.querySelectorAll(".menu a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop =
            section.offsetTop - 150;

        const sectionHeight =
            section.clientHeight;

        if (
            pageYOffset >= sectionTop &&
            pageYOffset < sectionTop + sectionHeight
        ) {
            current = section.getAttribute("id");
        }

    });

    navItems.forEach(link => {

        link.classList.remove("active");

        if (
            link.getAttribute("href") === "#" + current
        ) {
            link.classList.add("active");
        }

    });

});
