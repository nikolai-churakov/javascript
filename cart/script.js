"use strict";

let cart = {
    'ART020304231': {
        'brand': 'Common Projects',
        'model': 'Bball High',
        'color': 'White',
        'count': 1,
        'price': 549,
    },
    'ART020304232': {
            'brand': 'Maison Margiela',
            'model': 'Future Sneakers',
            'color': 'White',
            'count': 1,
            'price': 870,
        },
    'ART020304233': {
        'brand': 'Our Legacy',
        'model': 'Brushed Scarf',
        'color': 'Brown',
        'count': 1,
        'price': 349,
    },
};

document.onclick = event => {
    if (event.target.classList.contains('plus-btn')) {
        plusFunction(event.target.dataset.id);
    }
    if (event.target.classList.contains('minus-btn')) {
        minusFunction(event.target.dataset.id);
    }
    if (event.target.classList.contains('delete-btn')) {
        deleteFunction(event.target.dataset.id);
    }
    if (event.target.classList.contains('like-btn')) {
        likeFunction(event.target.dataset.id);
    }
};

const plusFunction = id => {
    cart[id]['count']++;
    renderCart(id);
}

const minusFunction = id => {
    if (cart[id]['count']-1 === 0) {
        deleteFunction(id);
        return true;
    }
    cart[id]['count']--;
    renderCart(id);
}

const deleteFunction = id => {
    console.log(document.querySelector("div[data-id='" + id + "']"));
    let toRemove = document.querySelector("div[data-id='" + id + "']");
    toRemove.remove();
    // delete cart[id];
    renderCart(id);
}

const likeFunction = id => {
    alert("Ну все ты лайкнул =)")
}

const renderCart = (id) => {
    let cart_price = cart[id]['price'];
    console.log(cart_price); // Цена одной позиции по артикулу
    let new_count = document.querySelector("span[data-id='" + id + "']").innerText = cart[id]['count'];
    console.log(new_count); // Количество позиции по артикулу
    let total_price = document.querySelector(".total-price[data-id='" + id + "']").innerText = cart_price * new_count;

    console.log(id, total_price); // Артикул и Суммарная стоимость по одной позиции
    let grand_total =+ total_price;
    console.log(grand_total);
    // totalPrice(id, total_price);
}

// const totalPrice = (id, total_price) => {
//     let grand = 0;
//     // let grand = cart_price * new_count;
//     // document.getElementById('grand-total').innerText
//     console.log(document.querySelectorAll(".total-price"));
//     console.log(document.querySelectorAll(".total-price").forEach((grandTotal) => {
//         let sum = 0;
//         console.log(1);
// }


    // document.getElementById("grand-total").innerText = cart_price * new_count;


    // document.querySelector("span[data-id='" + id + "']").innerText = cart[id]['count'];
    // let new_count = document.querySelector("span[data-id='" + id + "']").innerText = cart[id]['count'];
// totalPrice(id, new_count);

// isSumCounting(event) {
//     const unitPrice = +event.target.dataset.price;
//     this.sumPrice = this.sumPrice + unitPrice;
//     document.getElementById('basket-price').innerText = this.sumPrice;
// },