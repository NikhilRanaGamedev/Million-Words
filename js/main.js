function menu_btn_animation(x) {
    x.classList.toggle("change");
}

document.getElementById("menu").addEventListener("click", toggleNav);

var menuState = 0 // close
function toggleNav() {
   if(menuState == 0){
    menuState = 1;
    document.getElementById("menu").style.width = "30em";
    document.getElementById("menu").style.borderTop = "3px solid #CC3E5A";
    document.getElementById("menu").style.borderBottom = "3px solid #CC3E5A";
   }
   else {
    menuState = 0;
    document.getElementById("menu").style.width = "0";
    document.getElementById("menu").style.borderTop = "0";
    document.getElementById("menu").style.borderBottom = "0";
   }
}

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
