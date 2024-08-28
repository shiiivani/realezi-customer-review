document.addEventListener("DOMContentLoaded", function () {
  const modalBtn = document.getElementById("open-section-one-modal-container");
  const modal = document.querySelector(".section-one-modal-container");
  const modalContent = document.querySelector(".section-one-modal");

  modalBtn.addEventListener("click", function () {
    modal.classList.add("active");
  });
  modal.addEventListener("click", function (event) {
    if (!modalContent.contains(event.target)) {
      modal.classList.remove("active");
    }
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const modalBtn = document.getElementById("open-section-five-modal-container");
  const modal = document.querySelector(".section-five-modal-container");
  const modalContent = document.querySelector(".section-five-modal");

  modalBtn.addEventListener("click", function () {
    modal.classList.add("active");
  });
  modal.addEventListener("click", function (event) {
    if (!modalContent.contains(event.target)) {
      modal.classList.remove("active");
    }
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const modalBtn = document.getElementById("open-section-ten-modal-container");
  const modal = document.querySelector(".section-ten-modal-container");
  const modalContent = document.querySelector(".section-ten-modal");

  modalBtn.addEventListener("click", function () {
    modal.classList.add("active");
  });
  modal.addEventListener("click", function (event) {
    if (!modalContent.contains(event.target)) {
      modal.classList.remove("active");
    }
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const dropdownLabels = document.querySelectorAll(
    ".property-type-dropdown .label"
  );
  const dropdownOptionsList = document.querySelectorAll(
    ".property-type-dropdown .dropdown-options"
  );
  const forms = document.querySelectorAll(".modal-container");

  dropdownLabels.forEach((dropdownLabel, index) => {
    const dropdownOptions = dropdownOptionsList[index];
    const arrowIcon = dropdownLabel.querySelector("img");

    dropdownLabel.addEventListener("click", function () {
      dropdownOptions.classList.toggle("active");
      arrowIcon.classList.toggle("rotate");
    });

    dropdownOptions.addEventListener("click", function (event) {
      if (event.target.tagName === "LI") {
        const selectedOption = event.target.textContent;
        dropdownLabel.querySelector("p").textContent = selectedOption;
        dropdownOptions.classList.remove("active");
        arrowIcon.classList.remove("rotate");
      }
    });
  });

  forms.forEach((form) => {
    const inputs = form.querySelectorAll("input, select");
    const submitButton = form.querySelector("button[type='submit']");

    function checkInputs() {
      let allFilled = true;
      inputs.forEach((input) => {
        if (input.type === "checkbox") {
          if (!input.checked) {
            allFilled = false;
          }
        } else if (input.value.trim() === "") {
          allFilled = false;
        }
      });
      if (allFilled) {
        submitButton.classList.add("active");
      } else {
        submitButton.classList.remove("active");
      }
    }

    inputs.forEach((input) => {
      input.addEventListener("input", checkInputs);
    });

    submitButton.classList.remove("active");
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const dropdownLabel = document.querySelector(
    ".section-five-modal .budget-dropdown .label"
  );
  const dropdownContent = document.querySelector(
    ".section-five-modal .dropdown-content"
  );

  dropdownLabel.addEventListener("click", function () {
    dropdownContent.classList.toggle("active");
  });

  const minSlider = document.getElementById("minSlider");
  const maxSlider = document.getElementById("maxSlider");
  const minValueDisplay = document.getElementById("minValue");
  const maxValueDisplay = document.getElementById("maxValue");

  function updateSliderValues() {
    minValueDisplay.textContent = `Rs.${minSlider.value}`;
    maxValueDisplay.textContent = `Rs.${maxSlider.value}Cr`;
  }

  minSlider.addEventListener("input", function () {
    if (parseInt(minSlider.value) >= parseInt(maxSlider.value)) {
      minSlider.value = maxSlider.value - 1;
    }
    updateSliderValues();
  });

  maxSlider.addEventListener("input", function () {
    if (parseInt(maxSlider.value) <= parseInt(minSlider.value)) {
      maxSlider.value = minSlider.value + 1;
    }
    updateSliderValues();
  });

  // Initialize display values
  updateSliderValues();
});
