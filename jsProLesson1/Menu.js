class Menu {
    constructor(id, className, items) {
        this.id = id;
        this.className = className;
        this.items = items;
    }

    render() {
        let result = `<ul class="${this.className}" id="${this.id}">`;
        for (let i=0; i < this.items.length; i++) {
            if(this.items[i] instanceof MenuItem) {
                result += this.items[i].render();
            }
        }
        result += `</ul>`;
        return result;
    }
}

//     render() {
//
//         let result = `<ul class="${this.className}" id="${this.id}">`;
//         for (let i = 0; i < this.items.length; i++){
//             result += `<li id = "${this.id}"><a href="${this.href}" >${this.subTitle[i]}</a><ul>`;
//             for (let j = 0; j < this.items.length; j++) {
//                 result += `${this.subItems[i][j].render()}`;
//             }
//             result += `</li></ul>`;
//         }
//         result += `</li></ul>`;
//         return result
//     }
// }

document.addEventListener('keydown', function(event) {
    if (event.code === 'Delete' || event.code === 'Backspace') {
        console.log('Меню удалилось.');
        document.getElementById('menuBlock').remove();
    } else {
        console.log('На эту клавишу события не предусмотренно.');
    }
});