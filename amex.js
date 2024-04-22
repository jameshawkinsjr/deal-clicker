let buttons = Array.from(document.querySelectorAll("button"));
let delay = 0;
buttons.forEach((button) => {
  if (button.textContent.includes("Add to Card")) {
    setTimeout(() => {
      button.click();
    }, delay);
    delay += 1000;
  }
});
