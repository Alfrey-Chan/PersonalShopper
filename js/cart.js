fetch("../components/cart.html")
	.then((res) => res.text())
	.then(
		(data) =>
			(document.getElementById("cart-menu-placeholder").innerHTML = data)
	);
