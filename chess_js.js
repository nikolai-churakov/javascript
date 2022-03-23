'use strict';

const settings = {
    rowCount: 10,
    colsCount: 10,
    startPositionX: 0,
    startPositionY: 0,
    playerCellColor: '#AA3333',
    emptyCellColor: '#EEEEEE',
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
    },

    render() {
        this.sellElements.forEach(cell => cell.style.backgroundColor = this.settings.emptyCellColor);
        const playerCell = document
            .querySelector(`tr:nth-child(${this.player.y+1})`)
            .querySelector(`td:nth-child(${this.player.x+1})`);

        playerCell.style.backgroundColor = this.settings.playerCellColor;
    },
};

window.addEventListener('load', () => game.run());