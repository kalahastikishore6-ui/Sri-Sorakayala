
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

  form.addEventListener('submit', () => {
    console.log("Form submitted to FormSubmit");
  });

});

