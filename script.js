const buttons = document.querySelectorAll(".button");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const panel = button.nextElementSibling;
    panel.classList.toggle("active");
    button.classList.toggle("active");
  });
});
