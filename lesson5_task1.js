'use strict';

const settings = {
    rowCount: 10,
    colsCount: 10,
    startPositionX: 2,
    startPositionY: 5,
    startDirection: 'right',
    stepInSecond: 5,
    playerCellColor: '#AA3333',
    emptyCellColor: '#EEEEEE',
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

    makeStep() {
        const nextPoint = this.getNextStepPoint();
        this.x = nextPoint.x;
        this.y = nextPoint.y;
    },

    getNextStepPoint() {
        const point = {
            x: this.x,
            y: this.y,
        };

        switch (this.direction) {
            case 'up':
                point.y--;
                break;
            case 'right':
                point.x++;
                break;
            case 'down':
                point.y++;
                break;
            case 'left':
                point.x--;
                break;
        }

        return point;
    }
};

const game = {
    player,
    settings,
    containerElement: null,
    cellElements: null,

    run() {
        this.init();

        setInterval( () => {
            this.player.makeStep();
            this.render();
        }, 1000 / this.settings.stepInSecond);

        this.render();
    },

    init() {
        this.player.init(this.settings.startPositionX, this.settings.startPositionY, this.settings.startDirection);
        this.containerElement = document.getElementById('game');
        this.initCells();
        this.initEventHandlers();
    },

    initCells() {
        this.containerElement.innerHTML = '';
        this.sellElements = [];
        for (let row = 0; row < this.settings.rowCount; row++) {
            const trElem = document.createElement('tr');
            this.containerElement.appendChild(trElem);
            for (let col = 0; col < this.settings.colsCount; col++) {
                const cell = document.createElement('td');
                this.cellElements.push(cell);
                trElem.appendChild(cell);
            }
        }
    },

    initEventHandlers() {

    },

    render() {
        this.cellElements.forEach(cell => cell.style.backgroundColor = this.settings.emptyCellColor);
        const playerCell = document
            .querySelector(`tr:nth-child(${this.player.y+1})`)
            .querySelector(`td:nth-child(${this.player.x+1})`);

        playerCell.style.backgroundColor = this.settings.playerCellColor;
    },
};

window.addEventListener('load', () => game.run());
// window.onload = () => game.run()K