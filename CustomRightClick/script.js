const box = document.getElementById("box")
const menu = document.getElementById("menu")

box.addEventListener("contextmenu", (e) => {
    menu.style.display = "block";
    menu.style.top = e.y + 'px';
    menu.style.left = e.x + 'px';
    e.preventDefault();
})

box.addEventListener("click", function(){
    menu.style.display = "none";
})
