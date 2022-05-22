class MenuItem {
    constructor(href, title, id, className){
        this.href = href;
        this.title = title;
        this.id = id;
        this.className = className;
    }
    render(){
        return `<li id = "${this.id}" class = "${this.className}"><a href="${this.href}" >${this.title}</a></li>`
    }
}