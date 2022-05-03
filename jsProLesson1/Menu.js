class Menu {
    constructor(id, className, items) {
        this.id = id;
        this.className = ClassName;
        this.items = items;
    }
    render(){
        let result = `<ul class="${this.className}" id="${this.id}">`;
        for (let i=0; i < this.items.length; i++) {
            result += this.item[i].render()
        }
    }
}