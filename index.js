const carrousel = document.querySelector(".carrousel-container");
const leftButton = document.querySelector(".scroll-left");
const rightButton = document.querySelector(".scroll-right");
let ticking = false;

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
    option.left = Math.ceil(currentPosition / 280) * 280 - 840;
  if (e.target.className.includes("right"))
    option.left = Math.floor(currentPosition / 280) * 280 + 840;
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

carrousel.addEventListener("scroll", onCarouselScroll);
carrouselScroll();
