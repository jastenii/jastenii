const toggle = document.getElementById("themeToggle");
const icon = document.getElementById("themeIcon");

function updateIcon() {
    if (document.body.classList.contains("dark")) {
        icon.src = "delete/sun.png";
    } else {
        icon.src = "delete/moon.png";
    }
}

if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark");
}

updateIcon();

toggle.onclick = () => {
    document.body.classList.toggle("dark");
    localStorage.setItem(
        "theme",
        document.body.classList.contains("dark") ? "dark" : "light"
    );
    updateIcon();
};

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {
    let current = "";

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 120;
        if (pageYOffset >= sectionTop) {
            current = section.getAttribute("id");
        }
    });

    navLinks.forEach(link => {
        link.classList.remove("active");
        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }
    });
});