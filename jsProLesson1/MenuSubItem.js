class MenuSubItem {
    constructor(href, title) {
        this.href = href;
        this.title = title;
    }
    render(){
        return `<ul><li><a href="${this.href}">${this.title}</a></li></ul>`;
    }
}