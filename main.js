const emailField = document.querySelector("input[type='email']");
const errorIcon = document.querySelector(".error__icon");
const errorText = document.querySelector(".error__text");
const submitButton = document.querySelector(".form__submit");

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function showError() {
  errorIcon.classList.add("active");
  errorText.classList.add("active");
  emailField.setAttribute("aria-invalid", "true");
}

function hideError() {
  errorIcon.classList.remove("active");
  errorText.classList.remove("active");
  emailField.removeAttribute("aria-invalid");
}

// Validate on submit
submitButton.addEventListener("click", (e) => {
  e.preventDefault(); // prevent default form behavior
  const email = emailField.value.trim();

  if (emailRegex.test(email)) {
    hideError();
    emailField.value = "";
    // Optional: success handling (e.g. send data, show message)
  } else {
    showError();
  }
});

// Live validation while typing
emailField.addEventListener("input", () => {
  const email = emailField.value.trim();
  if (emailRegex.test(email)) {
    hideError();
  }
});
