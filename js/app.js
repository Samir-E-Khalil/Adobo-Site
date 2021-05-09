let isMobile = false;

//----------------check if on mobile--------------------------
$(window).on("resize load", function () {
  if ($(window).width() <= 768) {
    isMobile = true;

    //remove parallax fx
    $("#parallax-logo").removeClass("parallax-logo");
    $("#parallax").removeClass("parallax");

    // change nav-bar color
    $("#mainNav").removeClass("yellow-bg");
    $("#mainNav").addClass("green-bg");
  } else {
    isMobile = false;
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

  function fade(element, distance, speed) {
    const item = document.querySelector(element);
    item.style.opacity = `${1.0 - speed * distance}`;
  }

  window.addEventListener("scroll", function () {
    if (isMobile === false) {
      parallax(".parallax", window.scrollY, 0.55);
      parallax(".parallax-logo", window.scrollY, 0.85);
      fade(".fading", window.scrollY, 0.005);
    } else {
      return;
    }
  });
}
