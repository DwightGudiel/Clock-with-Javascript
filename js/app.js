import { clock } from "./clock.js";

document.addEventListener("DOMContentLoaded", () => {
  clock();
  footer();
});

function footer() {
  const year = new Date().getFullYear();
  document.querySelector("#copyright-year").textContent = year;
}
