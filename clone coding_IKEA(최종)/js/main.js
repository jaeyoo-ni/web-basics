// hamburger menu(sidebar)
const openBtn = document.querySelector("#open-btn");
const closeBtn = document.querySelector("#close-btn");
const sidebar = document.querySelector(".sidebar");

function openNav() {
  sidebar.style.width = "480px";
}
function closeNav() {
  sidebar.style.width = "0px";
}

openBtn.addEventListener("click", openNav);
closeBtn.addEventListener("click", closeNav);

// searchbox - modal
const searchModal = document.querySelector(".search-modal");
const searchInput = document.querySelector(".search-input");
const searchTerm = document.querySelector(".searchterm");
const search = document.querySelector(".search");
const searchbox = document.querySelector(".searchbox");

searchInput.addEventListener("click", function () {
  searchModal.style.display = "block";
  search.style.display = "block";
  search.style.zIndex = "2";
  searchTerm.style.visibility = "visible";
  searchbox.classList.add("active");

  const searchIcon = document.querySelector("#search-icon");

  searchIcon.innerText = "close";
  searchIcon.id = "close-icon";

  const closeIcon = document.querySelector("#close-icon");

  closeIcon.addEventListener("click", function () {
    closeIcon.innerText = "search";
    closeIcon.id = "search-icon";
    searchTerm.style.visibility = "hidden";
    search.style.zIndex = "inherit";
    searchbox.classList.remove("active");
    searchModal.style.display = "none";
  });

  window.onclick = function (e) {
    if (e.target == searchModal) {
      const closeIcon = document.querySelector("#close-icon");
      closeIcon.innerText = "search";
      closeIcon.id = "search-icon";
      searchTerm.style.visibility = "hidden";
      search.style.zIndex = "inherit";
      searchbox.classList.remove("active");
      searchModal.style.display = "none";
    }
  };
});

// scrollToTop Button
const scrollToTopIcon = document.querySelector(".scrollToTop-icon");
const rootElement = document.documentElement;

function scrollToTop() {
  rootElement.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}

scrollToTopIcon.addEventListener("click", scrollToTop);

function handleScroll() {
  const scrollTotal = rootElement.scrollHeight - rootElement.clientHeight;
  if (rootElement.scrollTop / scrollTotal > 0.45) {
    scrollToTopIcon.classList.add("active");
  } else {
    scrollToTopIcon.classList.remove("active");
  }
}

document.addEventListener("scroll", handleScroll);

// events-btn next & prev btn -
const nextBtn = document.querySelector("#next-btn");
const prevBtn = document.querySelector("#prev-btn");
const eventsGridLayout = document.querySelector(".events-grid-layout");

nextBtn.addEventListener("click", function () {
  eventsGridLayout.scrollLeft += 420;
  nextBtn.style.display = "none";
  prevBtn.style.display = "block";
});

prevBtn.addEventListener("click", function () {
  eventsGridLayout.scrollLeft -= 420;
  nextBtn.style.display = "block";
  prevBtn.style.display = "none";
});

// r-products btn

const rProductsNextBtn = document.querySelector("#r-products-next-btn");
const rProductsPrevBtn = document.querySelector("#r-products-prev-btn");

const rProducts = document.querySelector(".r-products");
rProductsNextBtn.addEventListener("click", function () {
  rProducts.scrollLeft += 1000;
});

rProductsPrevBtn.addEventListener("click", function () {
  rProducts.scrollLeft -= 1000;
});

// s-btn
const sNextBtn = document.querySelector("#s-next-btn");
const sPrevBtn = document.querySelector("#s-prev-btn");
const sustainableSolutions = document.querySelector(".sustainable-solutions");
sNextBtn.addEventListener("click", function () {
  sPrevBtn.style.display = "block";
  sustainableSolutions.scrollLeft += 700;
});

sPrevBtn.addEventListener("click", function () {
  sustainableSolutions.scrollLeft -= 700;
});

// masonry.js

const elem = document.querySelector(".grid");
const msnry = new Masonry(elem, {
  it: ".grid-item",
  gutter: 17,
  horizontalOrder: true,
});

const moreBtn = document.querySelector(".black.more-btn");
moreBtn.addEventListener("click", () => {
  alert("이미지 준비중입니다!");
});

// footer toggle-btn
const categoryNames = document.querySelectorAll(".category-name");
const categoryAll = document.querySelectorAll(".category");
const chevronDown = document.querySelectorAll("i.fas.fa-chevron-down");

categoryNames.forEach((categoryName) =>
  categoryName.addEventListener("click", function () {
    categoryName.classList.toggle("show");
    const buttonIcon = categoryName.children[0].children[0];
    if (categoryName.classList.contains("show")) {
      buttonIcon.classList.remove("fa-chevron-down");
      buttonIcon.classList.add("fa-chevron-up");
      categoryName.parentElement.children[1].style.display = "block";
    } else {
      buttonIcon.classList.remove("fa-chevron-up");
      buttonIcon.classList.add("fa-chevron-down");
      categoryName.parentElement.children[1].style.display = "none";
    }
  })
);

if (window.matchMedia("min-width: 768px").matches) {
  const categoryUl = document.querySelectorAll(".category ul");
  categoryUl.style.display = "block";
}
