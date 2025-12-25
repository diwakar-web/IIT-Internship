
const btn=document.querySelector(".btn");
const lower=document.querySelector(".lower");


btn.addEventListener("click", () => {
  lower.classList.toggle("show");

  if (lower.classList.contains("show")) {
    btn.textContent = "Click To Hide ⬆️";
  } else {
    btn.textContent = "Click To See ⬇️";
  }
});


