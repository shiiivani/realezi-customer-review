// const listItems = document.querySelectorAll(".upper-nav li");

// listItems.forEach((item) => {
//   item.addEventListener("click", function () {
//     listItems.forEach((li) => li.classList.remove("active"));

//     this.classList.add("active");
//   });
// });

// Section two navbar active button bounce animation
document.addEventListener("DOMContentLoaded", function () {
  if (window.innerWidth < 560) {
    const navItems = document.querySelectorAll(".navbar li");

    navItems.forEach((item) => {
      item.addEventListener("click", function () {
        navItems.forEach((cat) => cat.classList.remove("active"));
        item.classList.add("active");
      });
    });
  }
});

document.addEventListener("DOMContentLoaded", function () {
  if (window.innerWidth > 560) {
    const navItems = document.querySelectorAll(".navbar li");
    const navBar = document.querySelector(".navbar");
    let activeItem = document.querySelector(".navbar li.active");
    let slideLine = document.createElement("div");
    let hoverLine = document.createElement("div");

    let mouseX = 0;
    let isCursorInside = false;

    slideLine.classList.add("slide-line");
    navBar.appendChild(slideLine);

    hoverLine.classList.add("hover-line");
    navBar.appendChild(hoverLine);

    gsap.set([slideLine, hoverLine], {
      height: 30,
      position: "absolute",
      bottom: 10,
      borderRadius: "15px",
      zIndex: 1,
      transformOrigin: "left center",
    });

    gsap.set(slideLine, {
      width: activeItem.offsetWidth,
      left: activeItem.offsetLeft,
      backgroundColor: "#111F3C",
    });

    gsap.set(hoverLine, {
      width: 0,
      left: 0,
      backgroundColor: "#F4F4F4",
      zIndex: 0,
    });

    function updateActiveItem(newActiveItem) {
      if (activeItem !== newActiveItem) {
        activeItem.classList.remove("active");
        newActiveItem.classList.add("active");

        const tl = gsap.timeline();

        const activeItemRect = activeItem.getBoundingClientRect();
        const newItemRect = newActiveItem.getBoundingClientRect();
        const direction =
          newItemRect.left < activeItemRect.left ? "left" : "right";

        tl.to(slideLine, {
          duration: 0.3,
          width: newActiveItem.offsetWidth,
          left: newActiveItem.offsetLeft,
          ease: "power2.out",
        })
          .to(
            slideLine,
            {
              duration: 0.1,
              x: direction === "left" ? "-3px" : "+3px",
              ease: "bounce.out",
            },
            "-=0.1"
          )
          .to(slideLine, {
            duration: 0.1,
            x: direction === "left" ? "+3px" : "-3px",
            ease: "bounce.out",
          })
          .to(slideLine, {
            duration: 0.2,
            x: "0px",
            ease: "power2.inOut",
          });

        activeItem = newActiveItem;
      }
    }

    function attractToCursor() {
      if (isCursorInside) {
        const slideLineRect = slideLine.getBoundingClientRect();
        const slideLineCenterX = slideLineRect.left + slideLineRect.width / 2;
        const distanceX = mouseX - slideLineCenterX;
        const distance = Math.abs(distanceX);

        const maxDistance = 100;

        if (distance < maxDistance) {
          const intensity = Math.max(0, 1 - distance / maxDistance);
          gsap.to(slideLine, {
            x: intensity * (distanceX * 0.2),
            duration: 0.1,
            ease: "power2.out",
          });
        }
      }
    }

    document.addEventListener("mousemove", (event) => {
      mouseX = event.clientX;
      attractToCursor();
    });

    navBar.addEventListener("mouseenter", () => {
      isCursorInside = true;
    });

    navBar.addEventListener("mouseleave", () => {
      isCursorInside = false;
      gsap.to(slideLine, {
        x: "0px",
        duration: 0.2,
        ease: "power2.inOut",
      });
    });

    navItems.forEach((item) => {
      item.addEventListener("mouseover", function () {
        gsap.to(hoverLine, {
          width: this.offsetWidth,
          left: this.offsetLeft,
          duration: 0.3,
          ease: "power2.out",
        });
      });

      item.addEventListener("mouseout", function () {
        gsap.to(hoverLine, {
          width: 0,
          duration: 0.3,
          ease: "power2.out",
        });
      });

      item.addEventListener("click", function () {
        updateActiveItem(this);
      });
    });

    navBar.addEventListener("mouseleave", function () {
      updateActiveItem(activeItem);
    });
  }
});

// Section two fixed navbar
document.addEventListener("DOMContentLoaded", function () {
  const nav = document.querySelector(".navbar");
  const navInitialOffsetTop = nav.getBoundingClientRect().top + window.scrollY;

  window.addEventListener("scroll", function () {
    if (window.scrollY >= navInitialOffsetTop) {
      nav.classList.add("fixed");
    } else {
      nav.classList.remove("fixed");
    }
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const toggleBtn = document.getElementById("checkbox");
  const mobileNav = document.querySelector(".mobile-view-nav");

  toggleBtn.addEventListener("click", function () {
    mobileNav.classList.toggle("active");
  });
});
