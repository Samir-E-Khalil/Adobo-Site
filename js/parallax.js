//----------------parallax FX----------------------------------

function parallax(element, distance, speed) {
    const item = document.querySelector(element);
    item.style.transform = `translateY(${distance * speed}px)`;
  }
  
  window.addEventListener("scroll", function () {
    parallax(".parallax", window.scrollY, 0.6);
    parallax(".parallax-logo", window.scrollY, 0.85);
  });
  