
// Fetch and display products dynamically
document.addEventListener('DOMContentLoaded', () => {
	fetch('products.json')
		.then(response => response.json())
		.then(products => renderProducts(products))
		.catch(() => {
			document.getElementById('products-grid').innerHTML = '<p>Unable to load products at this time.</p>';
		});

	// Set current year in footer
	document.getElementById('year').textContent = new Date().getFullYear();
});

function renderProducts(products) {
	const grid = document.getElementById('products-grid');
	grid.innerHTML = '';
	if (!Array.isArray(products) || products.length === 0) {
		grid.innerHTML = '<p>No products available.</p>';
		return;
	}
	products.forEach(product => {
		const card = document.createElement('div');
		card.className = 'product-card';
		card.innerHTML = `
			<img class="product-image" src="${product.image}" alt="${product.name}">
			<div class="product-info">
				<div>
					<div class="product-title">${product.name}</div>
					<div class="product-desc">${product.description}</div>
				</div>
			</div>
		`;
		grid.appendChild(card);
	});
}

// Contact form submission
document.addEventListener('DOMContentLoaded', () => {
	const form = document.getElementById('contact-form');
	if (form) {
		form.addEventListener('submit', function (e) {
			e.preventDefault();
			const name = document.getElementById('name').value;
			const phone = document.getElementById('phone').value;
			const email = document.getElementById('email').value;
			// You need a backend to actually send the email. This just shows a message.
			document.getElementById('form-message').textContent = 'Thank you, ' + name + '! Your details have been received.';
			form.reset();
		});
	}
});

