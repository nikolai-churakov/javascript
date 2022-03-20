'use strict';

const settings = {
    rowCount: 10,
    colsCount: 10,
    startPositionX: 0,
    startPositionY: 0,
    startDirection: 'right',
    stepInSecond: 5,
    playerCellColor: 'AA3333',
    emptyCellColor: 'EEEEEE',
};

const player = {
    x: null,
    y: null,
    direction: null,

    init(startX,StartY, startDirection) {
        this.x = startX;
        this.y = StartY;
        this.direction = startDirection;
    },
};

const game = {
    player,
    settings,
    containerElement: null,
    sellElements: null,

    run() {
        console.log(123);
        console.log(this.settings);
        this.init();
    },

    init() {
        this.player.init(this.settings.startPositionX, this.settings.startPositionY, this.settings.startDirection);
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
        console.log(this.sellElements)
    },
};

// window.addEventListener('load', () => game.run());
window.onload = () => game.run();
console.log(456);