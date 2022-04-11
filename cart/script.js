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
    // console.log(cart[id]['count']);
    // console.log(id);
    // document.querySelector('basket-count').innerText = this.count
    let new_count = document.querySelector("span[data-id='" + id + "']").innerText = cart[id]['count'];
    totalPrice(id, new_count);
    // asd = cart[id]['count'];
    // console.log(asd);
}
    // let new_count = document.querySelector(".count");
    // "div.user-panel.main input[name=login]"
    // < spanclassName = "count"data - id = "ART020304231" > 1 < /span>
    //new_count.innerHTML = cart[id]['count'];

const totalPrice = (id, new_count) => {
    let cart_price = cart[id]['price'];
    let totalPrice = cart_price * new_count;
    console.log(totalPrice);
    let ttt= document.querySelectorAll(".total-price");
    console.log(ttt);
    //.innerText = totalPrice;
    // document.querySelector(".total-price[data-id='" + id + "']").innerText = (new_total * cart[id]['price']);
}


