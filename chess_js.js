'use strict';

const settings = {
    rowCount: 10,
    colsCount: 10,
    startPositionX: 0,
    startPositionY: 0,
    playerCellColor: '#733535',
    emptyCellColor: '#ececec',
};

const game = {
    settings,
        containerElement: null,
        sellElements: null,

    run() {
        this.init();
        this.render();
    },

    init() {
        this.containerElement = document.getElementById('game');
        this.initCells();
    },

    initCells() {
        this.containerElement.innerHTML = '';
        this.sellElements = [];
        for (let row = 0; row < this.settings.rowCount; row++) {
            const trElem = document.createElement('tr');
            this.containerElement.appendChild(trElem);
            for (let col = 0; col < this.settings.colsCount; col++) {
                const cell = document.createElement('td');
                this.sellElements.push(cell);
                trElem.appendChild(cell);
            }
        }
        console.log(this.sellElements.length);

    },

    render() {
        console.log(rarka);
        for (let i; i < this.sellElements.length; i++) {
            if (this.sellElements % 2) {
                this.sellElements.forEach(cell => cell.style.backgroundColor = this.settings.playerCellColor);
            } else {
                this.sellElements.forEach(cell => cell.style.backgroundColor = this.settings.emptyCellColor);
            }
        }
    },

};

window.addEventListener('load', () => game.run());
