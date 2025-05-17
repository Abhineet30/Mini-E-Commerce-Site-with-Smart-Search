const products = [
    {
        name: "QuantumFlux VR Headset",
        description: "Experience ultra-realistic virtual worlds with QuantumFlux's advanced VR technology.",
        price: 299.99
    },
    {
        name: "NanoBot Home Assistant",
        description: "A tiny AI-powered robot that manages your home tasks effortlessly.",
        price: 149.99
    },
    {
        name: "SolarWave Wireless Charger",
        description: "Charge your devices anywhere with solar-powered wireless charging technology.",
        price: 59.99
    },
    {
        name: "EchoSphere Smart Speaker",
        description: "A smart speaker with 360-degree sound and voice assistant integration.",
        price: 89.99
    },
    {
        name: "GlideX Hoverboard",
        description: "Smooth and fast hoverboard with advanced balance control.",
        price: 499.99
    },
    {
        name: "PixelPro 4K Drone",
        description: "Capture stunning aerial footage with the PixelPro 4K camera drone.",
        price: 399.99
    },
    {
        name: "ThermoSmart Mug",
        description: "Keeps your beverage at the perfect temperature all day long.",
        price: 39.99
    },
    {
        name: "CyberLink Smart Glasses",
        description: "Augmented reality glasses with seamless smartphone connectivity.",
        price: 249.99
    },
    {
        name: "VoltMax Portable Battery",
        description: "High-capacity portable battery pack for all your devices.",
        price: 79.99
    },
    {
        name: "AuraGlow LED Desk Lamp",
        description: "Adjustable LED desk lamp with mood lighting and wireless charging pad.",
        price: 69.99
    }
];

const productList = document.getElementById('productList');
const searchInput = document.getElementById('searchInput');

function displayProducts(filteredProducts) {
    productList.innerHTML = '';
    if (filteredProducts.length === 0) {
        const li = document.createElement('li');
        li.textContent = 'No products found.';
        li.style.fontStyle = 'italic';
        li.style.color = '#666';
        productList.appendChild(li);
        return;
    }
    filteredProducts.forEach(product => {
        const li = document.createElement('li');
        li.className = 'product-item';
        li.innerHTML = `
            <div class="product-name">${product.name}</div>
            <div class="product-description">${product.description}</div>
            <div class="product-price">$${product.price.toFixed(2)}</div>
        `;
        productList.appendChild(li);
    });
}

function smartSearch(query) {
    query = query.toLowerCase();
    // Simple natural language search: match any word in name or description
    const keywords = query.split(/\s+/).filter(Boolean);
    return products.filter(product => {
        const text = (product.name + ' ' + product.description).toLowerCase();
        return keywords.every(keyword => text.includes(keyword));
    });
}

searchInput.addEventListener('input', () => {
    const query = searchInput.value.trim();
    if (query === '') {
        displayProducts(products);
    } else {
        const results = smartSearch(query);
        displayProducts(results);
    }
});

// Initial display of all products
displayProducts(products);
