const thumbnails = document.querySelectorAll(".gallery-thumb");
const currentImage = document.querySelector(".current-image");

thumbnails.forEach((thumbnail) => {
	thumbnail.addEventListener("click", () => {
		thumbnails.forEach((img) => img.classList.remove("selected"));

		thumbnail.classList.add("selected");

		currentImage.src = thumbnail.src;
	});
});

let quantity = 1;
const quantityDisplay = document.getElementById("quantity");

function increaseQuantity() {
	quantity++;
	quantityDisplay.textContent = quantity;
}

function decreaseQuantity() {
	if (quantity > 1) {
		quantity--;
		quantityDisplay.textContent = quantity;
	}
}

const buttons = document.querySelectorAll(".snack-selection-btn");

buttons.forEach((button) => {
	button.addEventListener("click", () => {
		buttons.forEach((btn) => btn.classList.remove("selected"));
		button.classList.add("selected");
	});
});

const tabButtons = document.querySelectorAll(".tab-btn");
const tabContents = document.querySelectorAll(".tab-content");

tabButtons.forEach((button) => {
	button.addEventListener("click", () => {
		tabButtons.forEach((btn) => btn.classList.remove("selected"));
		button.classList.add("selected");

		const tabId = button.dataset.tab;
		tabContents.forEach((content) => {
			content.style.display = content.id === tabId ? "block" : "none";
		});
	});
});
