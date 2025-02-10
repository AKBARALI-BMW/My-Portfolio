

$(document).ready(function () {
  $(".home-slider").owlCarousel({
    items: 1,
    loop: true,
    autoplay: true,
    autoplayTimeout: 2000,
    autoplayHoverPause: true,
    smartSpeed: 1000,
    nav: true,
    dots: true,
    navText: ["<i class='fas fa-chevron-left'></i>", "<i class='fas fa-chevron-right'></i>"]
  });
});

// Number Animation
$(document).ready(function () {
  $('.number').each(function () {
    var $this = $(this);
    var target = $this.data('number');
    var count = 0;
    var interval = setInterval(function () {
      if (count >= target) {
        clearInterval(interval);
      }
      $this.text(count);
      count++;
    }, 50); // Adjust speed here
  });
});



document.addEventListener("DOMContentLoaded", function () {
  let counters = document.querySelectorAll(".number");
  counters.forEach(counter => {
      let updateCount = () => {
          let target = +counter.getAttribute("data-number");
          let count = +counter.innerText;
          let speed = 50; // Lower number = faster count
          
          if (count < target) {
              counter.innerText = count + 1;
              setTimeout(updateCount, speed);
          } else {
              counter.innerText = target;
          }
      };
      updateCount();
  });
});