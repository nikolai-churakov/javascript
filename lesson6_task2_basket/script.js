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
            count: 1,
            price: 870,
        },
        {
            vendorCode: 'ART020304233',
            brand: 'Our Legacy',
            model: 'Brushed Scarf',
            color: 'Brown',
            img: 'item-3.png',
            count: 1,
            price: 349,
        },
    ],
    totalAmount: 1768
}

const product = products.productCards;

const minusCount = i => {
    product[i].count = product[i].count - 1;
    products.totalAmount = products.totalAmount - product[i].price;

    if (product[i].count === 0) {
        deleteFunction(i);

        return;
    }

    document.getElementById(`count-${i}`).innerText = product[i].count;

    document.getElementById("grand-total").innerText = products.totalAmount;
};

const plusCount = i => {
    product[i].count = ++product[i].count;
    products.totalAmount = products.totalAmount + product[i].price;

    document.getElementById(`count-${i}`).innerText = product[i].count;

    document.getElementById("grand-total").innerText = products.totalAmount;
};

const deleteFunction = i => {
    document.getElementById(i).remove();

    document.getElementById("grand-total").innerText = products.totalAmount - product[i].price * product[i].count;
};

const renderDeleteButton = (divTotalPrice, i) => {
    let divButtons = document.createElement('div');
    divButtons.className = "buttons";
    divTotalPrice.after(divButtons);

    let spanBtnLike = document.createElement('span');
    spanBtnLike.className = "is-active like-btn";
    divButtons.prepend(spanBtnLike);

    let spanBtnDelete = document.createElement('span');
    spanBtnDelete.className = "delete-btn";
    divButtons.append(spanBtnDelete);
    spanBtnDelete.addEventListener("click", () => deleteFunction(i));
}

const renderProducts = () => {
    for (let i = products.productCards.length-1; i >= 0; i--) {
        let divTitle = document.querySelector('.title');

        let div = document.createElement('div');
        div.className = "item";
        div.id = i;
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

        let quantity = document.createElement('div');
        quantity.className = "quantity";
        description.after(quantity);

        let btnMinus = document.createElement('div');
        btnMinus.className = "minus-btn";
        btnMinus.addEventListener("click", () => minusCount(i));
        quantity.prepend(btnMinus);

        let btnPlus = document.createElement('div');
        btnPlus.className = "plus-btn";
        btnPlus.addEventListener("click", () => plusCount(i));
        quantity.append(btnPlus);

        let divCount = document.createElement('div');
        divCount.className = "div-count";
        quantity.after(divCount);

        let spanCount = document.createElement('span');
        spanCount.className = "count";
        spanCount.id = `count-${i}`;
        spanCount.innerText = Number(product[i].count);
        divCount.prepend(spanCount);

        let divTotalPrice = document.createElement('div');
        divTotalPrice.className = "total-price";
        divTotalPrice.innerText = Number(product[i].price);
        divCount.after(divTotalPrice);

        renderDeleteButton(divTotalPrice, i);
    }

    document.getElementById("grand-total").innerText = products.totalAmount;
};

renderProducts();
