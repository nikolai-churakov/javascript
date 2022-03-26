'use strict';

const settings = {
    rowCount: 8,
    colsCount: 8,
    rowNumber: [1, 2, 3, 4, 5, 6, 7, 8],
    colLetter: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'],
    cellFirstColor: '#f3d0ad',
    cellSecondColor: '#814040',

    figure: [
        {
            color: 'white',
            coordinate: 'A1',
            value: 'rook',
            img: '&#9814',
        },
        {
            color: 'white',
            coordinate: 'B1',
            value: 'knight',
            img: '&#9816',
        },
        {
            color: 'white',
            coordinate: 'C1',
            value: 'bishop',
            img: '&#9815',
        },
        {
            color: 'white',
            coordinate: 'D1',
            value: 'queen',
            img: '&#9813',
        },
        {
            color: 'white',
            coordinate: 'E1',
            value: 'king',
            img: '&#9812',
        },
        {
            color: 'white',
            coordinate: 'F1',
            value: 'bishop',
            img: '&#9815',
        },
        {
            color: 'white',
            coordinate: 'G1',
            value: 'knight',
            img: '&#9816',

        },
        {
            color: 'white',
            coordinate: 'H1',
            value: 'rook',
            img: '&#9814',
        },
        {
            color: 'black',
            coordinate: 'A8',
            value: 'rook',
            img: '&#9814',
        },
        {
            color: 'black',
            coordinate: 'B8',
            value: 'knight',
            img: '&#9816',
        },
        {
            color: 'black',
            coordinate: 'C8',
            value: 'bishop',
            img: '&#9815',
        },
        {
            color: 'black',
            coordinate: 'D8',
            value: 'queen',
            img: '&#9813',
        },
        {
            color: 'black',
            coordinate: 'E8',
            value: 'king',
            img: '&#9812',
        },
        {
            color: 'black',
            coordinate: 'F8',
            value: 'bishop',
            img: '&#9815',
        },
        {
            color: 'black',
            coordinate: 'G8',
            value: 'knight',
            img: '&#9816',
        },
        {
            color: 'black',
            coordinate: 'H8',
            value: 'rook',
            img: '&#9814',
        },
    ]

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
        tdElements: null,
        tdElem: null,

    run() {
        this.init();
    },

    init() {
        this.containerElement = document.getElementById('board');
        this.creatBoard();
        this.colorCell();
        this.arrangementFigure();
        this.pawnRange();
        this.insertColLetter();
        this.insertRowNumber();
    },

    creatBoard() {
        this.containerElement.innerHTML = '';
        this.sellElements = [];
        let table = document.createElement('table');
        for (let row = 0; row <= this.settings.rowCount-1; row++) {
            let tr = document.createElement("tr");
            for (let col = 0; col <= this.settings.colsCount-1; col++) {
                this.tdElem = document.createElement("td");
                tr.appendChild(this.tdElem);
                this.sellElements.push(this.tdElem);
                this.tdElem.id = this.settings.colLetter[col] + this.settings.rowNumber[row];
            }
            document.body.appendChild(table);
            table.appendChild(tr);
        }
        // this.containerElement.innerHTML = '';
        // this.sellElements = [];
        // for (let row = 0; row < this.settings.rowCount; row++) {
        //     const trElem = document.createElement('tr');
        //     this.containerElement.appendChild(trElem);
        //     for (let col = 0; col < this.settings.colsCount; col++) {
        //         const cell = document.createElement('td');
        //         this.sellElements.push(cell);
        //         trElem.appendChild(cell);
        //
        //     }
        // }
        // console.log(this.sellElements.length);
        // const infoBOX = this.sellElements.length;
        // console.log(infoBOX);
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

    arrangementFigure () {
        for (let i = 0; i < settings.figure.length; i++) {
            for (let j = 0; j < 64; j++) {
                let cellId = this.sellElements[j].id
                if (settings.figure[i].coordinate === cellId) {
                    this.sellElements[j].innerHTML = `<span style="color:${settings.figure[i].color};">${settings.figure[i].img}<span>`;
                }
            }
        }
    },

    pawnRange () {
        let pawnsRowWhite = document.querySelectorAll('tr:nth-child(2) td');
        for (let i = 0; i < 8; i++) {
            pawnsRowWhite[i].innerHTML = `<span style="color: white;">&#9817<span>`;
        }
        let pawnsRowBlack = document.querySelectorAll('tr:nth-child(7) td');
        for (let i = 0; i < 8; i++) {
            pawnsRowBlack[i].innerHTML = `<span style="color: black;">&#9817<span>`;
        }
    },

    insertColLetter () {
        let table = document.createElement('table');
        table.id = 'colLetterTable';
        let trColLetter = document.createElement('tr');
        for (let i = 0; i < 8; i++) {
            let tdColLetter = document.createElement('td');
            tdColLetter.innerHTML = this.settings.colLetter[i];
            tdColLetter.style.textAlign = 'center';
            trColLetter.appendChild(tdColLetter);
        }
        document.body.appendChild(table);
        table.appendChild(trColLetter);
    },

    insertRowNumber () {

        let trs = document.querySelectorAll('tr');
        for (let i = 0; i < 9; i++) {
            if (i < 8) {
                let tdRowNumber = document.createElement('td');
                tdRowNumber.innerHTML = settings.rowNumber[i];
                tdRowNumber.style.textAlign = 'center';
                trs[i].insertAdjacentElement("afterbegin", tdRowNumber);
            } else {
                let tdRowNumber = document.createElement('td');
                trs[i].insertAdjacentElement("afterbegin", tdRowNumber);
            }
        }
    },

};

window.addEventListener('load', () => board.run());

