class Menu {
    constructor(id, className, items) {
        this.id = id;
        this.className = className;
        this.items = items;
    }
    render(){
        let result = `<ul class="${this.className}" id="${this.id}">`;
        for (let i=0; i < this.items.length; i++) {
            if(this.items[i] instanceof MenuItem) {
                result += this.items[i].render()
            }
        }
        result += `</ul>`;
        return result;
    }
}

// const removeAll = () => {
//     document.getElementBYId('buttonCheck').onclick = removeElement;
// }
//     getDirectionByCode(code) {
//         switch (code) {
//             case 'Delete':
//             case 'Backspace':
//                 return document.getElementById('menuBlock').remove();
//
//             default:
//                 return '';
//         }
// }
// removeAll();
// document.getElementById('menuBlock').event.key.backspace

document.addEventListener('keydown', function(event) {
    if (event.code === 'delete' && event.code === 'Backspace') {
        console.log('Отменить!');
    }
})