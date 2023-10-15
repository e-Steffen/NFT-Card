const imgF = document.querySelector(".heroframe");
const img = document.querySelector(".hero");
const imgEye = document.querySelector(".eye");

imgF.addEventListener("mouseenter", () => {
  imgEye.style.display = "block";
  img.style.opacity = "50%";
});

imgF.addEventListener("mouseleave", () => {
  img.style.opacity = "100%";
  imgEye.style.display = "none";
});
