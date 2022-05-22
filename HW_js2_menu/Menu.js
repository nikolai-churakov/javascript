class Menu {
    constructor(id, className, items){
        this.id = id;
        this.className = className;
        this.items = items;

    }

    render(){
        let result = `<ul class="${this.className}" id="${this.id}">`;
        for (let i = 0; i < this.items.length; i++){
            if(this.items[i] instanceof MenuItem || this.items[i] instanceof Submenu) {
                result += this.items[i].render()
            }

        }
        result += `</ul>`;
        return result
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
    })