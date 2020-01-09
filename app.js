function bgChanger() {
  if (window.scrollY > window.innerHeight / 2) {
    document.body.classList.add("bg-active");
  } else {
    document.body.classList.remove("bg-active");
  }
}
window.addEventListener("scroll", bgChanger);
