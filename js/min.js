$(document).ready(function () {
  // Clients Logos
  $(".clients-carousel").owlCarousel({
    autoplay: true,
    loop: true,
    margin: 15,
    dots: false,
    slideTransition: "linear",
    autoplayTimeout: 4500,
    autoplayHoverPause: true,
    autoplaySpeed: 4500,
    responsive: {
      0: {
        items: 1,
      },
      500: {
        items: 2,
      },
      600: {
        items: 4,
      },
      800: {
        items: 4,
      },
      1200: {
        items: 4,
      },
    },
  });

  // Show Color Option When Click On The Gear
  $(".gear-check").click(function () {
    $(".items").fadeToggle("slow");
  });

  // Change Theme Color On Click
  var colorLi = $(".items ul li");
  colorLi
    .eq(0)
    .css("backgroundColor", "#E41B17", ".active")
    .end()
    .eq(1)
    .css("backgroundColor", "#d800ff", ".active")
    .end()
    .eq(2)
    .css("backgroundColor", "#27a369", ".active")
    .end()
    .eq(3)
    .css("backgroundColor", "#177ce4", ".active");
  colorLi.click(function () {
    $("link[href*='theme']").attr("href", $(this).attr("data-value"));
  });

  // Scroll Top
  var scrollButton = $("#scroll-top");
  $(window).scroll(function () {
    console.log($(this).scrollTop());
    if ($(this).scrollTop() >= 700) {
      scrollButton.show();
    } else {
      scrollButton.hide();
    }
    // Click On Button TO GO Up
    scrollButton.click(function () {
      $("html,body").animate({ scrollTop: 0 }, 0);
    });
  });

// Loading Screen
$(window).on("load", function () {
  $("body").css("overflow", "auto");
  $(".loading-overlay").fadeOut(2000);
});

// Tool Box
const colorsLi = document.querySelectorAll(".colors li");
colorsLi.forEach((li) => {
  li.addEventListener("click", (e) => {
    e.target.parentElement.querySelectorAll(".active").forEach((element) => {
      element.classList.remove("active")
    });
    e.target.classList.add("active");
  });
});
});