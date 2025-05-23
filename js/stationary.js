document.addEventListener("DOMContentLoaded", function () {
	const addToCartBtn = document.querySelector(".add-to-cart-btn");

	if (addToCartBtn) {
		addToCartBtn.addEventListener("click", () => {
			const name = document.querySelector(
				".snack-info-section__heading"
			).innerText;
			const price = parseFloat(
				document
					.querySelector(".snack-info-section__price")
					.innerText.replace("$", "")
			);
			const quantity = parseInt(document.getElementById("quantity").innerText);

			const item = {
				name,
				price,
				quantity,
			};

			addToCart(item);

			// Open cart menu
			const cartMenu = document.querySelector(".cart-menu");
			const cartOverlay = document.querySelector(".cart-overlay");

			if (cartMenu && cartOverlay) {
				cartMenu.classList.add("cart-menu-open");
				cartOverlay.classList.add("active");
			}
		});
	}
});
