fetch("../components/cart.html")
	.then((res) => res.text())
	.then((data) => {
		document.getElementById("cart-menu-placeholder").innerHTML = data;
		loadCartItems();
	});

// Save to localStorage
function addToCart(item) {
	let cart = JSON.parse(localStorage.getItem("cart")) || [];

	const exists = cart.some((cartItem) => cartItem.name === item.name);
	if (exists) {
		existingItem = cart.find((cartItem) => cartItem.name === item.name);
		existingItem.quantity += item.quantity;
	} else {
		cart.push(item);
	}
	localStorage.setItem("cart", JSON.stringify(cart));
	loadCartItems(); // refresh UI
}

// Load cart data into UI
function loadCartItems() {
	const cart = JSON.parse(localStorage.getItem("cart")) || [];
	const container = document.querySelector(".cart-menu");
	const cartText = document.querySelector(".empty-cart");
	const checkoutBtn = document.querySelector(".cart-menu__checkout");
	const totalPlaceHolder = document.querySelector(".cart-total");

	// Clear old items
	const oldItems = container.querySelectorAll(".cart-item");
	oldItems.forEach((e) => e.remove());

	let cartTotal = 0;

	if (cart.length === 0) {
		cartText.style.display = "block";
		checkoutBtn.style.display = "none";
		totalPlaceHolder.textContent = ""; // clear total
	} else {
		cartText.style.display = "none";
		checkoutBtn.style.display = "block";

		cart.forEach((item) => {
			const div = document.createElement("div");
			const total = item.price * item.quantity;
			cartTotal += total;

			div.classList.add("cart-item");
			div.innerHTML = `
			<p>${item.name} x ${item.quantity} - $${total.toFixed(2)}</p>
			<button class="remove-btn" data-name="${item.name}">REMOVE</button>
			`;
			container.insertBefore(div, cartText);
		});
	}

	totalPlaceHolder.textContent = `- $${cartTotal}`;
	attachRemoveListeners();
}

// Helper function to add event listeners to remove item button
function attachRemoveListeners() {
	const removeButtons = document.querySelectorAll(".remove-btn");

	removeButtons.forEach((button) => {
		button.addEventListener("click", (e) => {
			const nameToRemove = e.target.getAttribute("data-name");

			let cart = JSON.parse(localStorage.getItem("cart")) || [];
			cart = cart.filter((item) => item.name !== nameToRemove);
			localStorage.setItem("cart", JSON.stringify(cart));

			loadCartItems(); // Refresh the cart
		});
	});
}
