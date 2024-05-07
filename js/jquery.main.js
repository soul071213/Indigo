document.addEventListener("DOMContentLoaded", () => {
    const toggle = document.querySelector(".menu-toggle-btn");
    const gnb = document.querySelector(".gnb");
    toggle.addEventListener("click", () => {
      gnb.style.display = gnb.style.display === "none" ? "block" : "none";
    });
  });
  
  jQuery(function ($) {
    $(".menu-toggle-btn").click(function () {
      $(".gnb").stop().slideToggle("fast");
    });
  });
  