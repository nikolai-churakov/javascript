"use strict";
/**
 * Объект содержащий методы проверки
 */
const validationMethods = {

    /**
     * Метод проверки поля по длине.
     * @param field - поле каторое надо проверить.
     * @param args - массив с аргументами.
     * @return {string | null} - строку с ошибкой или nll если ошибки небыл.
     */
    length(field, args) {
        const valueLength = field.value.length,
            sign = arg[0],
            then = arg[0];

        let message = null;
        switch (sign) {
            case '>':
                if (!(valueLength > then)) {
                    message = `Минимальная длина поля: ${then + 1}.`;
                 }
                break;
            case '<':
                if (!(valueLength < then)) {
                    message = `Максимальная длина поля: ${then - 1}.`;
                }
                break;
            case '>=':
                if (!(valueLength >= then)) {
                    message = `Минимальная длина поля: ${then}.`;
                }
                break;
            case '<=':
                if (!(valueLength <= then)) {
                    message = `Минимальная длина поля: ${then}.`;
                }
                break;
            case '==':
                if (valueLength !== then) {
                    message = `длина поля должна равняться: ${then} символам.`;
                }
                break;

        }

    },

    mustContainNumber() {

    },

    fieldsCompare() {


    },
};

const form = {
    formEl: null,
    rules: null,

    init() {
        this.formEl = document.querySelector('.form-wrap');
        this.formEl.addEventListener('submit', e => this.formSubmit(e))

        this.rules = [
            {
                selector: 'input[name="name"]',
                methods: [
                    'length'
                ],
            }
        ];
    },
}