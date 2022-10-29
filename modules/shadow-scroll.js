export default function shadowScoll() {
  class ScrollShadow {
    constructor(projetos) {
      this.projetos = document.querySelectorAll(projetos);
      this.addScrollEvent = this.addScrollEvent.bind(this);
      this.activeLinkScroll();
      this.addScrollEvent();
    }
    addScrollEvent() {
      this.projetos.forEach((projeto) => {
        projeto =
          window.pageYOffset > projeto.offsetTop - window.innerHeight * 0.9
            ? projeto.classList.add("active")
            : projeto.classList.remove("active");
      });
    }
    activeLinkScroll() {
      window.addEventListener("scroll", this.addScrollEvent);
    }
  }

  const scroll = new ScrollShadow('a[href^="#"]');
}
