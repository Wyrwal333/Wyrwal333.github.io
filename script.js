console.log("Portfolio działa poprawnie!");

const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  alert("Wiadomość została wysłana!");

  form.reset();
});