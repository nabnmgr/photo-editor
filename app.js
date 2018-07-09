const mainImage = document.querySelector(".main-img img");
const inputs = document.querySelectorAll("input");
const reset = document.querySelector(".reset");

// Filter Element
const brightnessEl = document.getElementById("brightness");
const contrastEl = document.getElementById("contrast");
const grayscaleEl = document.getElementById("grayscale");
const invertEl = document.getElementById("invert");
const opacityEl = document.getElementById("opacity");
const saturateEl = document.getElementById("saturate");
const sepiaEl = document.getElementById("sepia");

function handleUpdate() {
  let brightness = brightnessEl.value;
  let contrast = contrastEl.value;
  let grayscale = grayscaleEl.value;
  let invert = invertEl.value;
  let opacity = opacityEl.value;
  let saturate = saturateEl.value;
  let sepia = sepiaEl.value;

  mainImage.style.filter = `brightness(${brightness}%) contrast(${contrast}%) grayscale(${grayscale}%) invert(${invert}%) opacity(${opacity}%) saturate(${saturate}%) sepia(${sepia}%)`;
}

inputs.forEach(input => input.addEventListener("change", handleUpdate));
// for dynamic changes
inputs.forEach(input => input.addEventListener("mousemove", handleUpdate));

// RESET button
reset.addEventListener("click", e => {
  brightnessEl.value = 100;
  contrastEl.value = 100;
  grayscaleEl.value = 0;
  invertEl.value = 0;
  opacityEl.value = 100;
  saturateEl.value = 100;
  sepiaEl.value = 0;

  // rerunning  because filter effects statys the same until mousemove over sliders
  handleUpdate();
  e.preventDefault();
});
