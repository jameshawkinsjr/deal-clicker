let buttons = Array.from(
  document.getElementsByClassName("deal-tile available-deals-wrapper")
);
let delay = 0;
buttons.forEach((button) => {
  setTimeout(() => {
    button.click();
  }, delay);
  delay += 1000;
});
