const hamburgerLines = document.querySelectorAll(".line");
const navLinks = document.querySelector(".navLinks");
const links = document.querySelectorAll(".navLinks li");

const hamburgerAnim = () => {
    hamburgerLines.forEach(line => {
        line.classList.toggle("hamburgerX");
    });

    navLinks.classList.toggle("show");
    
};