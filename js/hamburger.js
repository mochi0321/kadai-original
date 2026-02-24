// $(document).ready(function(){
// 	$(".hamburger-button").on("click", function(){
// 		$(".sp-nav").fadeIn(350);
// 	});
//     $(".close-btn").on("click", function(){
//     $(".sp-nav").fadeOut(350);
//   });

//     $(".sp-nav a").on("click", function(){
//     $(".sp-nav").fadeOut(350);
//   });
// });




document.addEventListener("DOMContentLoaded", () => {

  const hamburger = document.querySelector(".hamburger-button");
  const spNav = document.querySelector(".sp-nav");
  const overlay = document.querySelector(".overlay");
  const closeBtn = document.querySelector(".close-btn");
  const spNavLinks = document.querySelectorAll(".sp-nav a");

  function openMenu(e) {
    e.preventDefault();
    spNav.classList.add("active");
    overlay.classList.add("active");
    document.body.classList.add("menu-open");
  }

  function closeMenu() {
    spNav.classList.remove("active");
    overlay.classList.remove("active");
    document.body.classList.remove("menu-open");
  }

  hamburger.addEventListener("click", openMenu);
  closeBtn.addEventListener("click", closeMenu);
  overlay.addEventListener("click", closeMenu);

  spNavLinks.forEach(link => {
    link.addEventListener("click", closeMenu);
  });

});
