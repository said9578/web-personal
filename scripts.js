document.addEventListener("DOMContentLoaded", () => {
    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll("nav ul li a");

    navLinks.forEach(link => {
        link.addEventListener("click", (e) => {
            e.preventDefault();
            const targetId = link.getAttribute("href").substring(1);
            const targetElement = document.getElementById(targetId);

            window.scrollTo({
                top: targetElement.offsetTop,
                behavior: "smooth"
            });
        });
    });

    // Lightbox functionality for gallery
    const galleryImages = document.querySelectorAll("#gallery img");
    const lightbox = document.createElement("div");
    lightbox.id = "lightbox";
    document.body.appendChild(lightbox);

    const showLightbox = (src) => {
        lightbox.classList.add("active");
        const img = document.createElement("img");
        img.src = src;
        while (lightbox.firstChild) {
            lightbox.removeChild(lightbox.firstChild);
        }
        lightbox.appendChild(img);
    };

    galleryImages.forEach(image => {
        image.addEventListener("click", () => {
            showLightbox(image.src);
        });
    });

    // Lightbox functionality for cv
    const cvImages = document.querySelectorAll("#cv img");

    cvImages.forEach(image => {
        image.addEventListener("click", () => {
            showLightbox(image.src);
        });
    });

    // Lightbox functionality for portfolio
    const portfolioImages = document.querySelectorAll("#portfolio img");

    portfolioImages.forEach(image => {
        image.addEventListener("click", () => {
            showLightbox(image.src);
        });
    });

    lightbox.addEventListener("click", () => {
        lightbox.classList.remove("active");
    });
});
