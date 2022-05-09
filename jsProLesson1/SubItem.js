class Submenu extends Menu {
    constructor (id, className, items, subId, subClassName, subItems, subTitle) {
        super(id, className, items);
        this.subId = subId;
        this.subClassName = subClassName;
        this.subItems = subItems;
        this.subTitle = subTitle;
    }

    render() {

        let result = `<ul class="${this.className}" id="${this.id}">`;
        for (let i = 0; i < this.items.length; i++){
            result += `<li id = "${this.subId}"><a href="${this.href}" >${this.subTitle[i]}</a><ul>`;
            for (let j = 0; j < this.subItems.length; j++) {
                result += `${this.subItems[i][j].render()}`;
            }
            result += `</li></ul>`;
        }
        result += `</li></ul>`;
        return result
    }
}