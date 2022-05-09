class MenuItem {
    constructor(href, title) {
        this.href = href;
        this.title = title;
    }
    render(){
        return `<li><a href="${this.href}">${this.title}</a></li>`;
        // let result2 = `<li><a href="${this.href}">${this.title}</a></li>`;
        // for (let i=0; i < this.items.length; i++)
    }
}