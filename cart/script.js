"use strict";

let cart = {
    'ART020304231': {
        'name': 'Common Projects',
        'color': 'White',
        'count': 2,
        'price': 549,
    },
    'ART020304232': 1,
    'ART020304233': 1,
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
    // delete document.querySelector( '.item[data-content="'+id+'"]');
    console.log(document.querySelector( '.item[data-content="'+id+'"]'));
    delete cart[id];
    renderCart(id);
}


const renderCart = (id) => {
    console.log(cart);
    const new_count = document.querySelector( '.count');
    new_count.innerHTML = cart[id]['count'];
}

// Анимация сердечка
//Document.('.like-btn').onclick => {
///   Document.toggleClass('is-active');
///};
///
///// Теперь заставим работать кнопки количества приобретаемого товара:
///$('.minus-btn').on('click', function(e) {
//    e.preventDefault();
//    let $this = $(this);
//    let $input = $this.closest('div').find('input');
//    let value = parseInt($input.val());
// 
//    if (value &gt; 1) {
//        value = value - 1;
//    } else {
//        value = 0;
//    }
// 
//  $input.val(value);
// 
//});
// 
// // Кнопки уменьшения и увеличения товара
//$('.plus-btn').on('click', function(e) {
//    e.preventDefault();
//    let $this = $(this);
//    let $input = $this.closest('div').find('input');
//    let value = parseInt($input.val());
// 
//    if (value &lt; 100) {
//        value = value + 1;
//    } else {
//        value =100;
//    }
// 
//    $input.val(value);
//});
//
//<input type="button" value="-" class="bminus">
//<input type="text" id="counter" name="count" value="1" min="1" step="1" title="Кол-во">
//<input type="button" value="+" class="bplus">
//<script>
//$(document).ready(function(){
//$('.bminus').click(function(e){
//e.preventDefault();
//let $this = $(this);
//let input = $('#counter');
//let value = parseInt(input.val());
//if(value > 1){value = value - 1;}
//else{value = 0;}
//input.val(value);
//});
//
//$('.bplus').click(function(e){
//e.preventDefault();
//let $this = $(this);
//let input = $('#counter');
//let value = parseInt(input.val());
//if(value < 100){value = value + 1;}
//else{value = 100;}
//input.val(value);
//});
//});