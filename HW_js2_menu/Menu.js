class Menu {
    constructor(id, className, items) {
        this.id = id;
        this.className = className;
        this.items = items;
    }
    render() {
        let result = `<ul class="${this.className}" id="${this.id}">`;
        console.log(this.items);
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
    constructor(href, subTitle, subClassName, items, id, className) {
        super(id,className, items);
        this.href = href;
        this.subTitle = subTitle;
        this.subClassName = subClassName;
    }
    render(){
        return `<li><a class="${this.subClassName}" href="${this.href}">${this.subTitle}</a>${super.render()}</li>`
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
});