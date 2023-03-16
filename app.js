const rateButton = document.querySelectorAll(".rate-button");
const rateOne = document.getElementById("rate-one");
const ratingSelected = document.querySelector(".rating-selected");
const submitButton = document.querySelector(".submit");
const thanksContainer = document.querySelector(".thanks-container");
const mainContainer = document.querySelector(".container");

function handleClick(event) {
  let rating;
  rateButton.forEach((e) => {
    if (e.classList.contains("clicked")) {
      e.classList.remove("clicked");
    }
  });
  event.target.classList.add("clicked");
}

document
  .querySelector(".rating-section")
  .addEventListener("click", handleClick);

function rating(value) {
  submitButton.addEventListener("click", () => {
    document.querySelector(
      ".rating-selected"
    ).innerHTML = `You selected ${value} out of 5`;
    thanksContainer.classList.remove("hidden");
    mainContainer.classList.add("hidden");
  });
}
