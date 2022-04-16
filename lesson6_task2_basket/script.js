"use strict";

let products = {
    productCards: [
        {
            vendorCode: 'ART020304231',
            brand: 'Common Projects',
            model: 'Bball High',
            color: 'White',
            img: "item-1.png",
            count: 1,
            price: 549,
        },
        {
            vendorCode: 'ART020304232',
            brand: 'Maison Margiela',
            model: 'Future Sneakers',
            color: 'White',
            img: 'item-2.png',
            count: 2,
            price: 870,
        },
        {
            vendorCode: 'ART020304233',
            brand: 'Our Legacy',
            model: 'Brushed Scarf',
            color: 'Brown',
            img: 'item-3.png',
            count: 3,
            price: 349,
        },
    ],
    totalAmount: 1768
}

const renderProducts = () => {

    const product = products.productCards;

    /**
     * Выводит товары пришедшие массимов {products} в HTML
     */
    for (let i = 0; i < products.productCards.length; i++) {
        let divTitle = document.querySelector('.title');

        let div = document.createElement('div');
        div.className = "item";
        div.dataset.id = "item1";
        divTitle.after(div); // как добавитьу словия цикла чтобы корзина добавлялась вниз а не вверх

        let img = document.createElement('img');
        img.className = "image";
        img.src = product[i].img;
        let item = document.querySelector('.item');
        item.prepend(img);

        let description = document.createElement('div');
        description.className = "description";
        img.after(description);

            let spanBrand = document.createElement('span');
            spanBrand.innerText = product[i].brand;
            description.prepend(spanBrand);

            let spanModel = document.createElement('span');
            spanModel.innerText = product[i].model;
            description.append(spanModel);

            let spanColor = document.createElement('span');
            spanColor.innerText = product[i].color;
            description.append(spanColor);

        let quantity =  document.createElement('div');
        quantity.className = "quantity";
        description.after(quantity);

            let btnMinus = document.createElement('div');
            btnMinus.className= "minus-btn";
            quantity.prepend(btnMinus);

            let btnPlus = document.createElement('div');
            btnPlus.className = "plus-btn";
            quantity.append(btnPlus);

        let divCount = document.createElement('div');
        divCount.className = "div-count";
        divCount.innerText = product[i].count;
        quantity.after(divCount);

            let spanCount = document.createElement('span');
            spanCount.className = "count";
            divCount.prepend(spanCount);

        let divTotalPrice = document.createElement('div');
        divTotalPrice.className = "total-price";
        divTotalPrice.innerText = "549";
        divCount.after(divTotalPrice);

        let divButtons = document.createElement('div');
        divButtons.className = "buttons";
        divTotalPrice.after(divButtons);

            let spanBtnLike = document.createElement('span');
            spanBtnLike.className = "is-active like-btn";
            divButtons.prepend(spanBtnLike);

            let spanBtnDelete = document.createElement('span');
            spanBtnDelete.className = "delete-btn";
            divButtons.append(spanBtnDelete);
        }








        //         <img src="item-1.png" alt=""/>
        //     </div>

    // <div className="image">
    //     //         <img src="item-1.png" alt=""/>
    //     //     </div>

    // my_div = document.getElementById("org_div1");
    // document.body.insertBefore(newDiv, my_div);

};

const renderTotalAmount = () => {
    document.getElementById('grand-total').innerText  = products.totalAmount;
};

// let div = document.createElement('div');
// div.innerHTML = "<strong>Всем привет!</strong> Вы прочитали важное сообщение.";
//
// document.body.append(div);


renderProducts();
renderTotalAmount();


// <div className="item" id="test1" data-id="ART020304231">
//
//     <div className="image">
//         <img src="item-1.png" alt=""/>
//     </div>
//
//     <div className="description">
//         <span>Common Projects</span>
//         <span>Bball High</span>
//         <span>White</span>
//     </div>
//
//     <div className="quantity">
//         <div className="minus-btn" data-id="ART020304231"></div>
//         <div className="plus-btn" data-id="ART020304231"></div>
//     </div>
//
//     <div className="div-count">
//         <span className="count" id="count_test1" data-id="ART020304231">1</span>
//     </div>
//
//     <div className="total-price" data-id="ART020304231">549</div>
//
//     <div className="buttons">
//         <span className="is-active like-btn" data-vendorCode="ART020304231"></span>
//         <span className="delete-btn" data-id="ART020304231"></span>
//     </div>
// </div>

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

// const plusFunction = id => {
//     products [id]['count']++;
//     renderCart(id);
// }
//
// const minusFunction = id => {
//     if (products [id]['count']-1 === 0) {
//         deleteFunction(id);
//         return true;
//     }
//     products [id]['count']--;
//     renderCart(id);
// }
//
// const deleteFunction = index => {
//     products.totalAmount = products.totalAmount - products.productCards[index].count * products.productCards[index].price;
//     products.productCards.splice(index,1);
//     renderTotalAmount();
//     document.getElementById(String(index)).delete.DIV;
// }
//
// const likeFunction = id => {
//     alert("Ну все ты лайкнул =)", id)
// }

// const renderCart = (id) => {
//     let totalSum = 0;
//     let cart_price = cart[id]['price']; // Цена одной позиции по артикулу
//     let new_count = document.querySelector("span[data-id='" + id + "']").innerText = products [id] ? products [id]['count'] : 0; // Количество позиции по артикулу
//     document.querySelector(".total-price[data-id='" + id + "']").innerText = cart_price * new_count;
//
//     let arr = document.querySelectorAll(".total-price")
//     let totalSum = 0;
//     document.querySelectorAll(".total-price").forEach((elem)=>{
//         console.log(totalSum, elem);
//         totalSum = totalSum + +elem.innerText;
//     })
//     console.log(totalSum);
//
//     console.log(cart);
//     document.getElementById('grand-total').innerText = totalSum;
// }
