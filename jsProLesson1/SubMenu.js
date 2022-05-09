class  SubMenu {
    constructor(href, title) {
        this.href = href;
        this.title = title;
    }
    render() {
        let result = `<ul class="${this.className}" id="${this.id}">`;
        for (let i=0; i < this.items.length; i++) {
            if(this.items[i] instanceof SubItem) {
                result += this.items[i].render()
            }
        }
        result += `</ul>`;
        return result;
    }
}