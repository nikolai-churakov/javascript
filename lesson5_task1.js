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
    }
};

const game = {
    player,
    settings,
    containerElement: null,

    run() {
        this.init();
    },

    init() {
        this.player.init(this.settings.startPositionX, this.settings.startPositionY, this.settings.startDirection);
        this.containerElement = document.getElementById('game');
    },

    initCells() {
        this.containerElement.innerHTML = '';

    },

};

window.addEventListener('load', () => game.run());
