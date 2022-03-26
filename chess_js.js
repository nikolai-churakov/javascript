'use strict';

const settings = {
    rowCount: 8,
    colsCount: 8,
    rowNumber: [1, 2, 3, 4, 5, 6, 7, 8],
    colLetter: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'],
    cellFirstColor: '#f3d0ad',
    cellSecondColor: '#814040',
};

const cell = {
    settings,
    rowCoordinate: null,
    colCoordinate: null,
    divElem: null,
    backgroundColor: null,
};


const board = {
    settings,
        containerElement: null,
        sellElements: null,

    run() {
        this.init();
    },

    init() {
        this.containerElement = document.getElementById('board');
        this.creatBoard();
        this.colorCell();
        this.figureRange();
    },

    creatBoard() {
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
        },

    colorCell () {
        let flag = true;
        for (let i = 0; i < this.sellElements.length; i++) {
            if ( i % 8 === 0) flag = !flag;
            if (flag) {
                this.sellElements[i].style.backgroundColor = this.settings.cellSecondColor;
                flag = !flag;
            } else {
                this.sellElements[i].style.backgroundColor = this.settings.cellFirstColor;
                flag = !flag;
            }
        }

    },





};

window.addEventListener('load', () => board.run());
