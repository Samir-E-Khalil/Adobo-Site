//----------------check if on mobile--------------------------
$(window).on("resize load", function () {
  if ($(window).width() <= 768) {
    //remove parallax fx
    $("#parallax-logo").removeClass("parallax-logo");
    $("#parallax").removeClass("parallax");

    // change nav-bar color
    $("#mainNav").removeClass("yellow-bg");
    $("#mainNav").addClass("green-bg");
  } else {
    // add parallax fx
    $("#parallax-logo").addClass("parallax-logo");
    $("#parallax").addClass("parallax");

    // change nav-bar color
    $("#mainNav").removeClass("green-bg");
    $("#mainNav").addClass("yellow-bg");
  }
});

//----------------parallax FX----------------------------------

if ($(window).width() > 768) {
  function parallax(element, distance, speed) {
    const item = document.querySelector(element);
    item.style.transform = `translateY(${distance * speed}px)`;
  }

  window.addEventListener("scroll", function () {
    parallax(".parallax", window.scrollY, 0.6);
    parallax(".parallax-logo", window.scrollY, 0.85);
  });
}
