// import { render, createRef } from "@wordpress/element";

window.addEventListener("DOMContentLoaded", (event) => {
    const catBtns = document.querySelectorAll(`.categories button`);
    const allImages = document.querySelectorAll(`.img-block-wrapper a`);
    catBtns.forEach((btn) => {
        btn.addEventListener("click", (e) => {
            let catName = e.target.className;
            if (catName === "All") {
                allImages.forEach((image) => {
                    let classNames = image.className.split(" ");
                    if (classNames.includes("hide")) {
                        image.classList.add("show");
                        image.classList.remove("hide");
                    }
                });
            } else {
                allImages.forEach((image) => {
                    let classNames = image.className.split(" ");
                    if (classNames.includes("hide")) {
                        image.classList.add("show");
                        image.classList.remove("hide");
                    }
                });
                allImages.forEach((image) => {
                    let classNames = image.className.split(" ");
                    if (!classNames.includes(catName)) {
                        image.classList.remove("show");
                        image.classList.add("hide");
                    }
                });
            }
        });
    });
});
