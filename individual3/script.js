const modal = document.getElementById("pizza-modal");
const modalImage = document.getElementById("modal-image");
const modalTitle = document.getElementById("modal-title");
const modalDescription = document.getElementById("modal-description");
const closeButton = document.querySelector(".close-button");

const pizzaImages = document.querySelectorAll(".menu-item img");

// Open the popup when a pizza image is clicked
pizzaImages.forEach(function(image) {

    image.addEventListener("click", function() {

        // This feature only works on desktop
        if (window.innerWidth <= 1024) {
            return;
        }

        const menuItem = image.closest(".menu-item");

        const title = menuItem.querySelector("h3").textContent;
        const description = menuItem.querySelector(".pizza-info p").textContent;
        const price = menuItem.querySelector(".price").textContent;

        modalImage.src = image.src;
        modalImage.alt = image.alt;

        modalTitle.textContent = title;
        modalDescription.textContent = description + " " + price;

        modal.classList.add("active");
        document.body.classList.add("modal-open");

    });

});

// Close the popup
function closeModal() {
    modal.classList.remove("active");
    document.body.classList.remove("modal-open");
}

// Close using X button
closeButton.addEventListener("click", closeModal);

// Close by clicking outside the popup
modal.addEventListener("click", function(event) {

    if (event.target === modal) {
        closeModal();
    }

});

// Close using Escape key
document.addEventListener("keydown", function(event) {

    if (event.key === "Escape") {
        closeModal();
    }

});

// Close popup if the screen becomes tablet-sized
window.addEventListener("resize", function() {

    if (window.innerWidth <= 1024) {
        closeModal();
    }

});