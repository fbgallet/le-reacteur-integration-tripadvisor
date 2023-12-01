const caroussel = document.querySelector(".caroussel-container");
const leftButton = document.querySelector(".scroll-left");
const rightButton = document.querySelector(".scroll-right");

function carousselScroll() {
  if (getScrollPosition(caroussel) === 0)
    leftButton.style.visibility = "hidden";
  leftButton.addEventListener("click", onClickToScroll);
  rightButton.addEventListener("click", onClickToScroll);
}

function onClickToScroll(e) {
  const option = {
    behavior: "smooth",
  };
  let currentPosition = getScrollPosition(caroussel);
  console.log(currentPosition);
  if (e.target.className.includes("left")) option.left = currentPosition - 840;
  if (e.target.className.includes("right")) option.left = currentPosition + 840;
  if (option.left > 0) leftButton.style.visibility = "visible";
  if (option.left <= 0) leftButton.style.visibility = "hidden";
  if (option.left < 1670) rightButton.style.visibility = "visible";
  if (option.left >= 1670) rightButton.style.visibility = "hidden";
  caroussel.scroll(option);
}

function getScrollPosition(elt) {
  return elt.scrollLeft;
}

const observer = new MutationObserver((mutations) => {
  console.log(mutations);
  mutations.forEach((mutation) => {
    if (
      mutation.type === "attributes"
      // &&
      // mutation.attributeName === "scrollLeft"
    ) {
      handleScrollLeftChange(mutation);
    }
  });
});

function handleScrollLeftChange() {
  console.log("ScrollLeft position has changed", mutation);
}

observer.observe(caroussel, {
  attributes: true,
  // attributeFilter: ["scrollLeft"],
});

carousselScroll();
