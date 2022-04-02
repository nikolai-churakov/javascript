'use strict';
/**
 * Создаем шахматное поле.
 * @type {{gameContainerEl: HTMLElement}}
 */
const chess = {
    gameContainerEl: document.getElementById('board'),

    figures: {
      'A1': {
        color: 'white',
        value: 'rook',
        img: '&#9814',
      },
      'B1': {
        color: 'white',
        value: 'knight',
        img: '&#9816',
      },
      'C1': {
        color: 'white',
        value: 'bishop',
        img: '&#9815',
      },
      'D1': {
        color: 'white',
        value: 'queen',
        img: '&#9813',
      },
      'E1': {
        color: 'white',
        value: 'king',
        img: '&#9812',
      },
      'F1': {
        color: 'white',
        value: 'bishop',
        img: '&#9815',
      },
      'G1': {
        color: 'white',
        value: 'knight',
        img: '&#9816',
      },
      'H1': {
        color: 'white',
        value: 'rook',
        img: '&#9814',
      },
      'A8': {
          color: 'black',
          value: 'rook',
          img: '&#9814',
      },
      'B8': {
          color: 'black',
          value: 'knight',
          img: '&#9816',
      },
      'C8': {
          color: 'black',
          value: 'bishop',
          img: '&#9815',
      },
      'D8': {
          color: 'black',
          value: 'king',
          img: '&#9812',
      },
      'E8': {
          color: 'black',
          value: 'queen',
          img: '&#9813',
      },
      'F8': {
          color: 'black',
          value: 'bishop',
          img: '&#9815',
      },
      'G8': {
          color: 'black',
          value: 'knight',
          img: '&#9816',
      },
      'H8': {
          color: 'black',
          value: 'rook',
          img: '&#9814',
      },
    },

    init() {
        this.renderMap();
        this.renderFigures();
    },

    renderMap() {
        const rows = [0, 8, 7, 6, 5, 4, 3, 2, 1, 0];
        const cols = [0, 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 0];

        for (let row = 0; row < rows.length; row++) {
            const tr = document.createElement('tr');
            this.gameContainerEl.appendChild(tr);

            for (let col = 0; col < cols.length; col++) {
                const td = document.createElement('td');
                tr.appendChild(td);

                td.dataset.row = rows[row];
                td.dataset.col = cols[col];

                if (rows[row] === 0 && cols[col] !== 0) {
                    td.innerHTML = cols[col];
                } else if (cols[col] === 0 && rows[row] !== 0){
                    td.innerHTML = rows[row];
                } else if (cols[col] === 0 && rows[row] === 0) {
                    td.style.border = 'none';
                    td.style.backgroundColor = 'white';
                }

                if (this.isCellIsBlack(row, col)) {
                    td.style.backgroundColor = '#814040'
                } else if (row > 0 && row < 9  && col > 0 && col < 9) {
                    td.style.backgroundColor = '#f3d0ad'
                }
            }
        }
    },
    /**
     * Определяем является ли ячейка черной.
     * @param rowNum Номер в строке.
     * @param colNum Номер в колонке.
     * @return boolean true если ячейка черная.
     */
    isCellIsBlack(rowNum, colNum) {
        if  (rowNum === 0 || rowNum === 9 || colNum ===0 || colNum ===9) {
            return false;
        }
        return (rowNum % 2 === 0 && colNum % 2 === 1) || (rowNum % 2 === 1 && colNum % 2 === 0);
    },

    renderFigures() {
      for (const figure of this.figures) {
          let col = figure.name.charAt(0)
          let row = figure.name.charAt(1)

          if (document.querySelector(`[data-col=`${col}`][data-row=`${row}`]`) === this.figures.object.keys()) {
              figure.position = document.querySelector(`[data-col=`${col}`][data-row=`${row}`]`)
                  .innerHTML = this.figures.figure.img;
          }
      }
    },
};

chess.init();
