$(document).ready(function () {
  let startX;
  let isSwiping = false;

  function attachTouchEvents() {
    if ($(window).width() < 560) {
      $(".diag_slides_line").each(function () {
        let $container = $(this);
        let initialTranslateX = 0;

        $container.on("touchstart", function (e) {
          isSwiping = true;
          startX = e.originalEvent.touches[0].pageX;
          e.preventDefault();
        });

        $container.on("touchmove", function (e) {
          if (!isSwiping) return;

          let currentX = e.originalEvent.touches[0].pageX;
          let deltaX = currentX - startX;

          $container.css(
            "transform",
            "translateX(" + (initialTranslateX + deltaX) + "px)"
          );
        });

        $container.on("touchend", function () {
          isSwiping = false;
          let matrix = $container
            .css("transform")
            .replace(/[^0-9\-.,]/g, "")
            .split(",");
          initialTranslateX = parseInt(matrix[4]) || 0;
        });
      });
    }
  }

  attachTouchEvents();

  $(window).resize(function () {
    if ($(window).width() >= 560) {
      $(".diag_slides_line").off("touchstart touchmove touchend");
    } else {
      attachTouchEvents();
    }
  });

  $(window).on("scroll", function () {
    var scrollTop = $(this).scrollTop();
    $(".odd").css("transform", "translateX(" + scrollTop / 10 + "px)");
    $(".even").css("transform", "translateX(" + -(scrollTop / 10) + "px)");
  });

  $(".tab_header span").click(function () {
    var tab_id = $(this).data("tab");

    $(".tab_header span").removeClass("tab_active");
    $(this).addClass("tab_active");

    $(".card_body").removeClass("active");
    $("." + tab_id).addClass("active");
  });
});
