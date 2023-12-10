// import { axios } from "axios";
// const axios = require("axios");

const carrousel = document.querySelector(".carrousel-container");
const leftButton = document.querySelector(".scroll-left");
const rightButton = document.querySelector(".scroll-right");
let ticking = false;
const modal = document.querySelector(".modal");
const contactButton = document.querySelector(".contact");
const closeContactButton = document.querySelector(".form-container i");
const submitButton = document.querySelector("#submit-button");

function carrouselScroll() {
  if (getScrollPosition(carrousel) === 0)
    leftButton.style.visibility = "hidden";
  leftButton.addEventListener("click", onClickToScroll);
  rightButton.addEventListener("click", onClickToScroll);
}

function onClickToScroll(e) {
  const option = {
    behavior: "smooth",
  };
  let currentPosition = getScrollPosition(carrousel);
  console.log(currentPosition);
  if (e.target.className.includes("left"))
    option.left = Math.ceil(currentPosition / 287) * 287 - 861;
  if (e.target.className.includes("right"))
    option.left = Math.floor(currentPosition / 287) * 287 + 861;
  carrousel.scroll(option);
}

function getScrollPosition(elt) {
  return elt.scrollLeft;
}

function onCarouselScroll(e) {
  let scrollPosition = getScrollPosition(e.target);

  if (!ticking) {
    window.requestAnimationFrame(() => {
      if (scrollPosition > 0) leftButton.style.visibility = "visible";
      else leftButton.style.visibility = "hidden";
      if (scrollPosition < 1670) rightButton.style.visibility = "visible";
      else rightButton.style.visibility = "hidden";
      ticking = false;
    });

    ticking = true;
  }
}

function onClickOnContactButton(e) {
  modal.classList.remove("hidden");
}
function closeModal(e) {
  modal.classList.add("hidden");
  document.querySelector(".invalid-form").style.display = "none";
}

carrousel.addEventListener("scroll", onCarouselScroll);
carrouselScroll();

contactButton.addEventListener("click", onClickOnContactButton);
closeContactButton.addEventListener("click", closeModal);

submitButton.addEventListener("click", async (e) => {
  e.preventDefault();
  const formData = {
    firstname: document.querySelector("#firstname").value,
    lastname: document.querySelector("#lastname").value,
    email: document.querySelector("#email").value,
    subject: document.querySelector("#object").value,
    message: document.querySelector("#message").value,
  };
  // if (
  //   formData.firstname &&
  //   formData.lastname &&
  //   formData.email &&
  //   formData.message
  // ) {
  // Backend distant désactivé pour ne pas abuser de Mailgun...
  // const response = await axios.post(
  //   "https://site--tripadvisor-backend--2bhrm4wg9nqn.code.run/form",
  //   formData
  // );
  // Backend local
  // const response = await axios.post("http://localhost:3000/form", formData);
  // console.log(response);
  console.log("Message envoyé avec les valeurs suivantes:", formData);
  closeModal();
  // } else {
  //   document.querySelector(".invalid-form").style.display = "block";
  // }
});
