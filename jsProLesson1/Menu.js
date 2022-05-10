class Menu {
    constructor(id, className, items, subItems) {
        this.id = id;
        this.className = className;
        this.items = items;
        this.subItems = subItems;
    }

    render(){
        let result = `<ul class="${this.className}" id="${this.id}">`;
        for (let i=0; i < this.items.length; i++) {
            if(this.items[i] instanceof MenuItem) {
                result += this.items[i].render();
            //     for (let j=0; j < this.subItems.length; j++) {
            //         result += `${this.items[i][j].render()}`;
            //     }
            //     result += `</ul>`;
            }
        }
        result += `</ul>`;
        return result;
    }
}
document.addEventListener('keydown', function(event) {
    if (event.code == 'Delete' || event.code == 'Backspace') {
        console.log('Меню удалилось.');
        document.getElementById('menuBlock').remove();
    } else {
        console.log('На эту клавишу события не предусмотренно.');
    }
});