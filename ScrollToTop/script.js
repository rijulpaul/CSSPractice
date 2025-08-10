let scroll = document.getElementById("toTop");
scroll.style.display = "none";

window.addEventListener("scroll", () => {
  if (this.scrollY > 300) {
    scroll.style.display = "flex";
  } else {
    scroll.style.display = "none";
  }
});

scroll.onclick = function(){
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}


