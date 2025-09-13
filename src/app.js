const video1 = document.getElementById("projectVideo1");
const video2 = document.getElementById("projectVideo2");
const video3 = document.getElementById("projectVideo3");
const scrollIndicator = document.querySelector(".scroll-down");

// Sidebar elements //
const sideBar = document.querySelector(".sidebar");
const menu = document.querySelector(".menu-icon");
const closeIcon = document.querySelector(".close-icon");

const hoverSign = document.querySelector(".hover-sign");

const videoList = [video1, video2, video3];

videoList.forEach(function (video) {
  video.addEventListener("mouseover", function () {
    video.play();
    hoverSign.classList.add("active");
  });
  video.addEventListener("mouseout", function () {
    video.pause();
    hoverSign.classList.remove("active");
  });
});

// Sidebar elements //
menu.addEventListener("click", function () {
  sideBar.classList.remove("close-sidebar");
  sideBar.classList.add("open-sidebar");
});

closeIcon.addEventListener("click", function () {
  sideBar.classList.remove("open-sidebar");
  sideBar.classList.add("close-sidebar");
});

function hideScrollIndicatorOnce() {
  const scrollY = window.scrollY;
  if (scrollY > 50) {
    scrollIndicator.style.display = "none";
    window.removeEventListener("scroll", hideScrollIndicatorOnce);
  }
}

window.addEventListener("scroll", hideScrollIndicatorOnce);
window.addEventListener("load", hideScrollIndicatorOnce);

window.addEventListener("load", function () {
  document.body.style.overflow = "auto";
  document.getElementById("loader").style.display = "none";
});
