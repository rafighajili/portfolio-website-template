/* ========== NAVBAR ========== */
//scrolled nav
window.addEventListener("scroll", function () {
    var navbar = this.document.querySelector("nav");
    navbar.classList.toggle("scrolled", window.scrollY > 100);
});
  
//burger
const openBtn = document.querySelector("#openNav");
const closeBtn = document.querySelector("#closeNav");
const menu = document.querySelector("nav .container ul");
const links = document.querySelectorAll("nav .container ul li a");

openBtn.addEventListener("click", () => {
    openBtn.classList.add("out");
    menu.classList.add("in", "active");
    setTimeout(() => {
        openBtn.classList.remove("active", "in", "out");
        closeBtn.classList.add("in", "active");
    }, 250);
});

closeBtn.addEventListener("click", () => {
    closeBtn.classList.add("out");
    menu.classList.add("out");
    setTimeout(() => {
        closeBtn.classList.remove("active", "in", "out");
        menu.classList.remove("active", "in", "out");
        openBtn.classList.add("in", "active");
    }, 250);
});

links.forEach(link => {
    link.addEventListener("click", () => {
        closeBtn.classList.add("out");
        menu.classList.add("out");
        setTimeout(() => {
            closeBtn.classList.remove("active", "in", "out");
            menu.classList.remove("active", "in", "out");
            openBtn.classList.add("in", "active");
        }, 250);
    });
})
/* ========== END OF NAVBAR ========== */