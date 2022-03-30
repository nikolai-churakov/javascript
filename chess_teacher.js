'use strict';
/**
 * Создаем шахматное поле.
 * @type {{gameContainerEl: HTMLElement}}
 */
const chess = {
    gameContainerEl: document.getElementById('board'),

    renderMap() {
        const rows = [0, 8, 7, 6, 5, 4, 3, 2, 1, 0];
        const cols = [0, 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 0];

        for (let row = 0; row < rows.length; row++) {
            const tr = document.createElement('tr');
            this.gameContainerEl.appendChild(tr);

            for (let col = 0; col < cols.length; col++) {
                const td = document.createElement('td');
                tr.appendChild(td);


            }
        }
    }
};

chess.renderMap();

