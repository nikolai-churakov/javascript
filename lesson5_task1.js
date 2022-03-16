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
        this.y = startY;
        this.direction = startDirection;
    }
};

const game = {
    player,
    settings,

    run() {
        this.init();
    },

    init() {
        this.player
    },

};

window.addEventListener('load', () => game.run());
