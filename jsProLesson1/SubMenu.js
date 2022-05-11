class Submenu extends Menu {
    constructor (id, className,subTitle, subItems) {
        super(id, className);
        // this.subId = subId;
        // this.subClassName = subClassName;
        this.subItems = subItems;
        this.subTitle = subTitle;
    }

    render() {

        let result = `<ul class="${this.className}" id="${this.id}">`;
        for (let i = 0; i < this.subItems.length; i++){

            // console.log(this.items, this.items.length, this.subItems[i].length)
            result += `<li id = "${this.id}"><a href="${this.href}" >${this.subTitle[i]}</a><ul>`;
            for (let j = 0; j < this.subItems[i].length; j++) {
                console.log(`subItems=`, this.subItems[i].length);
                result += `${this.subItems[i][j].render()}`;
            }
            result += `</li></ul>`;
        }
        result += `</li></ul>`;
        return result
    }
}