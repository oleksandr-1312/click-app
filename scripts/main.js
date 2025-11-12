console.log("Hello world!")

const button = document.querySelector('.button');
const image = document.querySelector(".image");

button.addEventListener('click', () => {
  button.classList.add("button-hide");
  image.classList.add("image-display");
});

image.addEventListener('click', () => {
  button.classList.remove("button-hide");
  image.classList.remove("image-display");
})