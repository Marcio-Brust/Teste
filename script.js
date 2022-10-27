const body = document.querySelector("body");
const btn = document.querySelector(".btn");

const handleClick = (event) => {
  if (event.type === "touchstart") event.preventDefault();
  body.classList.toggle("active");
  const active = body.classList.contains("active");

  if (active) {
    const redes = document.querySelectorAll("ul svg");
    [...redes].forEach((img) => {
      img.setAttribute("fill", "#222");
    });
    btn.innerText = "Dark";
  } else {
    const redes = document.querySelectorAll("ul svg");
    [...redes].forEach((img) => {
      img.setAttribute("fill", "#fff");
    });
    btn.innerText = "Light";
  }
};

btn.addEventListener("click", handleClick);
btn.addEventListener("touchsatrt", handleClick);
