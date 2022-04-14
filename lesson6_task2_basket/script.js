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
    let toRemove = document.querySelector("div[data-id='" + id + "']");
    toRemove.remove();
    renderCart(id);
}

const likeFunction = id => {
    alert("Ну все ты лайкнул =)", id)
}

const renderCart = (id) => {
    let totalSum = 0;
    let cart_price = cart[id]['price']; // Цена одной позиции по артикулу
    let new_count = document.querySelector("span[data-id='" + id + "']").innerText = cart[id]['count']; // Количество позиции по артикулу
    document.querySelector(".total-price[data-id='" + id + "']").innerText = cart_price * new_count;

    let arr = document.querySelectorAll(".total-price")

    for (let i = 0; i < arr.length; i++) {
        totalSum += Number(arr[i].innerText);
    }
    document.getElementById('grand-total').innerText = totalSum;
}
