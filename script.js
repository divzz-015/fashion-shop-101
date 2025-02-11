document.addEventListener("DOMContentLoaded", function() {
    let products = [
        {
            name: "Red Dress",
            price: 49,
            image: "https://source.unsplash.com/300x400/?red-dress"
        },
        {
            name: "Sneakers",
            price: 79,
            image: "https://source.unsplash.com/300x400/?sneakers"
        },
        {
            name: "Handbag",
            price: 99,
            image: "https://source.unsplash.com/300x400/?handbag"
        }
    ];

    let productList = document.getElementById("productList");

    products.forEach(product => {
        let productItem = `<div class="product">
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>$${product.price}</p>
        </div>`;
        
        productList.innerHTML += productItem;
    });
});
