class Submenu extends Menu {
    constructor (href, subTitle, subClassName, id, className, items) {
        super(id, className, items);
        this.href = href;
        this.subTitle = subTitle;
        this.subClassName = subClassName;
    }

    render() {
        return `<li class="${this.subClassName}"><a href="${this.href}" >${this.subTitle}</a>${super.render()}<ul>`;
    }
}
