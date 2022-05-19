class Menu {
    constructor(id, className, items) {
        this.id = id;
        this.className = className;
        this.items = items;
    }
    render() {
        let result = `<ul class="${this.className}" id="${this.id}">`;
        for (let i=0; i < this.items.length; i++) {
            if(this.items[i] instanceof MenuItem || this.items[i] instanceof SubMenu) {
                result += this.items[i].render()
            }
        }
        result += `</ul>`;
        return result
    }
    remove() {
        let el = document.getElementById(this.id);
        if (el) {
            el.remove();
        }
    }
}
class SubMenu extends Menu {
    constructor(href, title, id, className, items) {
        super(id, className, items);
        this.href = href;
        this.title = title;
    }
    render(){
        return `<li><a href="${this.href}">${this.title}</a>${super.render()}</li>`
    }
}

document.addEventListener('keydown', function(event) {
    let menuEl = document.getElementById('menuBlock');
    if (menuEl) {
        switch (event.code) {
            case 'Delete':
            document.getElementById('menuBlock').remove();
            break;
            case 'Backspace':
            document.getElementById('menuBlock').remove();
            break;
        }
    }
    // if (event.code === 'Delete' || event.code === 'Backspace') {
    //     document.getElementById('menuBlock').remove();
    // } else if (event.code === 'KeyQ'){
    //     document.getElementById('submenu-block').remove();
    // } else {
    //     console.log('На эту клавишу события не предусмотренно.');
    // }
});