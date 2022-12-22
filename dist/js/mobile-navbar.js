const navshow = () => {
    const burger = document.querySelector(".burger");
    const nav = document.querySelector(".navbar_links");
    const links = document.querySelectorAll(".navbar_link");

    burger.addEventListener("click", () => {
        nav.classList.toggle("nav-active");

        links.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = "";
            } else {
                link.style.animation = `linksFade 0.5s ease forwards ${
                    index / 5 + 0.2
                }s`;
            }
        });
        burger.classList.toggle("close");
    });
};
navshow();
