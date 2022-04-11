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
            'count': 2,
            'price': 870,
        },
    'ART020304233': {
        'brand': 'Our Legacy',
        'model': 'Brushed Scarf',
        'color': 'Brown',
        'count': 6,
        'price': 349,
    },
};

document.onclick = event => {
    if (event.target.classList.contains('plus-btn')) {
        console.log(event.target.dataset.id);
        plusFunction(event.target.dataset.id);
        // document.querySelector(this.dataset.id).innerHTML = 5;
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
    // delete document.getElementById('test1');
    // delete document.querySelector( '.item[data-content="'+id+'"]');
    console.log(document.querySelector( '.item[data-content="'+id+'"]'));
    delete cart[id];
    renderCart(id);
}


const renderCart = (id) => {
    console.log(cart[id]['count']);
    let new_count = document.querySelector('.count');
    new_count.innerHTML = cart[id]['count'];
};
