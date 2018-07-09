const mainImage = document.querySelector(".main-img");
const imgs = document.querySelectorAll(".img");
const inputs = document.querySelectorAll("input");
const reset = document.querySelector(".reset");
const opacity = 0.3;

// initial image to get low opacity
imgs[0].style.opacity = opacity;

// change in image
imgs.forEach(img => img.addEventListener("click", changeMainImg));

// Filter Element
const brightnessEl = document.getElementById("brightness");
const saturateEl = document.getElementById("saturate");
const contrastEl = document.getElementById("contrast");
const invertEl = document.getElementById("invert");
const grayscaleEl = document.getElementById("grayscale");
const sepiaEl = document.getElementById("sepia");
const opacityEl = document.getElementById("opacity");

document.addEventListener("DOMContentLoaded", resetAll);

function handleUpdate() {
  let brightness = brightnessEl.value;
  let saturate = saturateEl.value;
  let contrast = contrastEl.value;
  let invert = invertEl.value;
  let grayscale = grayscaleEl.value;
  let sepia = sepiaEl.value;
  let opacity = opacityEl.value;

  mainImage.style.filter = `brightness(${brightness}%) saturate(${saturate}%) contrast(${contrast}%) invert(${invert}%) grayscale(${grayscale}%) sepia(${sepia}%) opacity(${opacity}%)`;
}

inputs.forEach(input => input.addEventListener("change", handleUpdate));
// for dynamic changes
inputs.forEach(input => input.addEventListener("mousemove", handleUpdate));

// CHANGING IMAGE
function changeMainImg(e) {
  // reset opacity
  imgs.forEach(img => (img.style.opacity = 1));

  mainImage.src = e.target.src;

  // add opacity
  e.target.style.opacity = opacity;

  // load selected image with no effects
  resetAll();
}

// RESET button
reset.addEventListener("click", resetAll);

function resetAll() {
  brightnessEl.value = 100;
  saturateEl.value = 100;
  contrastEl.value = 100;
  invertEl.value = 0;
  grayscaleEl.value = 0;
  sepiaEl.value = 0;
  opacityEl.value = 100;

  // rerunning  because filter effects statys the same until mousemove over sliders
  handleUpdate();
}
