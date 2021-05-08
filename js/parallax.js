//----------------check if on mobile--------------------------
$(window).on("resize load", function () {
  if ($(window).width() < 768) {
    $("#parallax-logo").removeClass("parallax-logo");
    $("#parallax").removeClass("parallax");
  } else {
    $("#parallax-logo").addClass("parallax-logo");
    $("#parallax").addClass("parallax");
  }
});

//----------------parallax FX----------------------------------

if ($(window).width() >= 768) {
  function parallax(element, distance, speed) {
    const item = document.querySelector(element);
    item.style.transform = `translateY(${distance * speed}px)`;
  }

  window.addEventListener("scroll", function () {
    parallax(".parallax", window.scrollY, 0.6);
    parallax(".parallax-logo", window.scrollY, 0.85);
  });
}
