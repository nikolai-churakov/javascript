'use strict';

const settings = {
    rowCount: 8,
    colsCount: 8,
    rowNumber: [1, 2, 3, 4, 5, 6, 7, 8],
    colLetter: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'],
    cellFirstColor: '#DEB887',
    cellSecondColor: '#733535',
};

const cell = {
    settings,
    rowCoordinate: null,
    colCoordinete: null,
    divElem: null,
    backgroundColor: null,
};


const game = {
    settings,
        containerElement: null,
        sellElements: null,

    run() {
        this.init();
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
        const infoBOX = this.sellElements.length;
        console.log(infoBOX);
        }

};

window.addEventListener('load', () => game.run());
