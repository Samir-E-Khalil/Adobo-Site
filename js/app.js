let isMobile = false;

function resetTransform(element) {
  const item = document.querySelector(element);
  item.style.transform = `translateY(0px)`;
}

function resetFade(element) {
  const item = document.querySelector(element);
  item.style.opacity = `1`;
}

// remove paralax fx on mobile screen, add it if on computer
$(window).on("resize load", function () {
  if ($(window).width() <= 768) {
    isMobile = true;

    // reset paralax element transform
    resetTransform("#parallax-logo");
    resetTransform("#parallax");

    // reset opacity of fading element
    resetFade("#fading");

    // remove parallax fx
    $("#parallax-logo").removeClass("parallax-logo");
    $("#parallax").removeClass("parallax");
  } else {
    isMobile = false;

    // add parallax fx
    $("#parallax-logo").addClass("parallax-logo");
    $("#parallax").addClass("parallax");
  }
});

//-------------------FX------------------------------

if ($(window).width() > 768) {
  // parallax fx on scroll
  function parallax(element, distance, speed) {
    const item = document.querySelector(element);
    item.style.transform = `translateY(${distance * speed}px)`;
  }

  // fade-out fx on scroll
  function fade(element, distance, speed) {
    const item = document.querySelector(element);
    item.style.opacity = `${1.0 - speed * distance}`;
  }

  // on scroll event
  window.addEventListener("scroll", function () {
    if (isMobile === false) {
      parallax(".parallax", window.scrollY, 0.55);
      parallax(".parallax-logo", window.scrollY, 0.81);
      fade(".fading", window.scrollY, 0.005);
    } else {
      return;
    }
  });
}
