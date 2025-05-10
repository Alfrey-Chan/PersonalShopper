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

function updateImage(index) {
	currentImage.src = imageSources[index];
	imgIndexDots.forEach((dot) => dot.classList.remove("active"));
	imgIndexDots[index].classList.add("active");
}

const prevImg = document.querySelector(".prevImage");
const nextImg = document.querySelector(".nextImage");
const imgIndexDots = document.querySelectorAll(".dot");
const imageSources = [
	"images/snack.jpg",
	"images/snack2.jpg",
	"images/snack3.jpg",
	"images/snack4.jpg",
];
let currentIndex = 0;

prevImg.addEventListener("click", () => {
	if (currentIndex - 1 >= 0) {
		currentIndex -= 1;
		updateImage(currentIndex);
	}
});

nextImg.addEventListener("click", () => {
	if (currentIndex + 1 < imageSources.length) {
		currentIndex += 1;
		updateImage(currentIndex);
	}
});

imgIndexDots.forEach((dot) => {
	dot.addEventListener("click", () => {
		currentIndex = parseInt(dot.getAttribute("data-index"));
		updateImage(currentIndex);
	});
});
