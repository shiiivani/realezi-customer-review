document.addEventListener("DOMContentLoaded", () => {
  const container = document.querySelector(".main-cards");
  const prevBtn = document.querySelector(".prev-btn");
  const nextBtn = document.querySelector(".next-btn");

  let index = 0;
  const cards = container.querySelectorAll(".card-div");
  const cardWidth = cards[0].offsetWidth;

  const updateSlider = () => {
    container.style.transform = `translateX(-${index * 100}%)`;
  };

  prevBtn.addEventListener("click", () => {
    if (index > 0) {
      index--;
      updateSlider();
    }
  });

  nextBtn.addEventListener("click", () => {
    if (index < cards.length - 1) {
      index++;
      updateSlider();
    }
  });
});
