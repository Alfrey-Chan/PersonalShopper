fetch("../components/navbar.html")
	.then((res) => res.text())
	.then((data) => {
		document.getElementById("navbar-placeholder").innerHTML = data;

		const cartMenu = document.querySelector(".cart-menu");
		const cartBtn = document.querySelector(".cart__btn");
		const closeCartBtn = document.querySelector(".close-cart-btn");
		const cartOverlay = document.querySelector(".cart-overlay");

		cartBtn.addEventListener("click", () => {
			cartMenu.classList.add("cart-menu-open");
			cartOverlay.classList.add("active");
		});

		closeCartBtn.addEventListener("click", () => {
			cartMenu.classList.remove("cart-menu-open");
			cartOverlay.classList.remove("active");
		});

		// close cart if overlay is clicked (background)
		cartOverlay.addEventListener("click", () => {
			cartMenu.classList.remove("cart-menu-open");
			cartOverlay.classList.remove("active");
		});
	});
