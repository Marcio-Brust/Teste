const body = document.querySelector("body");
const btn = document.querySelector(".btn");
const eventos = ["click", "touchstart"];

const handleClick = ({ type }) => {
  if (type === "touchstart") event.preventDefault();
  body.classList.toggle("active");

  const active = body.classList.contains("active");
  const redes = document.querySelectorAll("ul svg");

  const cor = active
    ? 222 && (btn.innerText = "Dark")
    : (btn.innerText = "Light") && "fff";

  [...redes].forEach((svg) => {
    svg.setAttribute("fill", `#${cor}`);
  });
};

eventos.forEach((todosEventos) =>
  btn.addEventListener(todosEventos, handleClick)
);
