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
        console.log("нажал добавить",event.target.dataset.id);
        plusFunction(event.target.dataset.id);
    }
    if (event.target.classList.contains('minus-btn')) {
        console.log(event.target.dataset.id);
        minusFunction(event.target.dataset.id);
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
    console.log(document.querySelector( '.item[data-content="'+id+'"]'));
    delete cart[id];
    renderCart(id);
}


const renderCart = (id) => {
    let new_count = document.querySelector("span[data-id='" + id + "']").innerText = cart[id]['count'];
    totalPrice(id, new_count);

}


const totalPrice = (id, new_count) => {
    let cart_price = cart[id]['price'];
    document.querySelector(".total-price[data-id='" + id + "']").innerText = cart_price * new_count;
}
