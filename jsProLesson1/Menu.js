class Menu {
    constructor(id, className, items, subItems) {
        this.id = id;
        this.className = className;
        this.items = items;
        this.subItems = subItems;
    }

    render() {
        let result = `<ul class="${this.className}" id="${this.id}">`;
        for (let i=0; i < this.items.length; i++) {
            if(this.items[i] instanceof MenuItem) {
                result += this.items[i].render();

            } else if(this.items[i] instanceof MenuSubItem) {
                result += this.items[i].render();
            }
        }
        result += `</ul>`;
        console.log(this.items);
        console.log(this.subItems);
        return result;
    }
}

document.addEventListener('keydown', function(event) {
    if (event.code === 'Delete' || event.code === 'Backspace') {
        document.getElementById('menuBlock').remove();
    } else if (event.code === 'KeyQ'){
        document.getElementById('submenu-block').remove();
    } else {
        console.log('На эту клавишу события не предусмотренно.');
    }
});