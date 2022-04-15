"use strict";

let products = {
    productCards: [
        {
            vendorCode: 'ART020304231',
            brand: 'Common Projects',
            model: 'Bball High',
            color: 'White',
            count: 1,
            price: 549,
        },
        {
            vendorCode: 'ART020304232',
            brand: 'Maison Margiela',
            model: 'Future Sneakers',
            color: 'White',
            count: 1,
            price: 870,
        },
        {
            vendorCode: 'ART020304233',
            brand: 'Our Legacy',
            model: 'Brushed Scarf',
            color: 'Brown',
            count: 1,
            price: 349,
        },
    ],
    totalAmount: 1768
}

renderProducts();

const renderTotalAmount = () => {
    document.getElementById('grand-total').innerText  = products.totalAmount;
};

renderTotalAmount();
let shoppingCart = document.querySelector('.shopping-cart');
let CardDiv = document.createElement('div');

// document.onclick = event => {
//     if (event.target.classList.contains('plus-btn')) {
//         plusFunction(event.target.dataset.id);
//     }
//     if (event.target.classList.contains('minus-btn')) {
//         minusFunction(event.target.dataset.id);
//     }
//     if (event.target.classList.contains('delete-btn')) {
//         deleteFunction(event.target.dataset.id);
//     }
//     if (event.target.classList.contains('like-btn')) {
//         likeFunction(event.target.dataset.id);
//     }
// };

const plusFunction = id => {
    products [id]['count']++;
    renderCart(id);
}

const minusFunction = id => {
    if (products [id]['count']-1 === 0) {
        deleteFunction(id);
        return true;
    }
    products [id]['count']--;
    renderCart(id);
}

const deleteFunction = index => {
    products.totalAmount = products.totalAmount - products.productCards[index].count * products.productCards[index].price;
    products.productCards.splice(index,1);
    renderTotalAmount();
    document.getElementById(String(index)).delete.DIV;
}

const likeFunction = id => {
    alert("Ну все ты лайкнул =)", id)
}

const renderCart = (id) => {
    let totalSum = 0;
    let cart_price = cart[id]['price']; // Цена одной позиции по артикулу
    let new_count = document.querySelector("span[data-id='" + id + "']").innerText = products [id] ? products [id]['count'] : 0; // Количество позиции по артикулу
    document.querySelector(".total-price[data-id='" + id + "']").innerText = cart_price * new_count;

    let arr = document.querySelectorAll(".total-price")
    let totalSum = 0;
    document.querySelectorAll(".total-price").forEach((elem)=>{
        console.log(totalSum, elem);
        totalSum = totalSum + +elem.innerText;
    })
    console.log(totalSum);

    console.log(cart);
    document.getElementById('grand-total').innerText = totalSum;
}
