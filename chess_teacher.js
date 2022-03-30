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
        coordinate: 'A1',
        value: 'rook',
        img: '&#9814',
      },
      'B1': {
        color: 'white',
        coordinate: 'B1',
        value: 'knight',
        img: '&#9816',
      },
      'C1': {
        color: 'white',
        coordinate: 'C1',
        value: 'bishop',
        img: '&#9815',
      },
      'D1': {
        color: 'white',
        coordinate: 'D1',
        value: 'queen',
        img: '&#9813',
      },
      'E1': {
        color: 'white',
        coordinate: 'E1',
        value: 'king',
        img: '&#9812',
      },
      'F1': {
        color: 'white',
        coordinate: 'F1',
        value: 'bishop',
        img: '&#9815',
      },
      'G1': {
        color: 'white',
        coordinate: 'G1',
        value: 'knight',
        img: '&#9816',
      },
      'H1': {
        color: 'white',
        coordinate: 'H1',
        value: 'rook',
        img: '&#9814',
      },
      'A8': {
          color: 'black',
          coordinate: 'A8',
          value: 'rook',
          img: '&#9814',
      },
      'B8': {
          color: 'black',
          coordinate: 'B8',
          value: 'knight',
          img: '&#9816',
      },
      'C8': {
          color: 'black',
          coordinate: 'C8',
          value: 'bishop',
          img: '&#9815',
      },
      'D8': {
          color: 'black',
          coordinate: 'D8',
          value: 'king',
          img: '&#9812',
      },
      'E8': {
          color: 'black',
          coordinate: 'E8',
          value: 'queen',
          img: '&#9813',
      },
      'F8': {
          color: 'black',
          coordinate: 'F8',
          value: 'bishop',
          img: '&#9815',
      },
      'G8': {
          color: 'black',
          coordinate: 'G8',
          value: 'knight',
          img: '&#9816',
      },
      'H8': {
          color: 'black',
          coordinate: 'H8',
          value: 'rook',
          img: '&#9814',
      },
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
    }
};

chess.renderMap();
