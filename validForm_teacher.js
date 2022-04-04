"use strict";
/**
 * Объект содержащий методы проверки
 */
const validationMethods = {

    /**
     * Метод проверки поля по длине.
     * @param {HTMLInputElement} field - поле каторое надо проверить.
     * @param args - массив с аргументами.
     * @return {string | null} - строку с ошибкой или nll если ошибки небыл.
     */
    length(field, args) {
        const valueLength = field.value.length,
            sign = args[0],
            then = args[1];

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

        return message;

    },

    /**
     * Проверяет содержит ли поля только цифры.
     * @param {HTMLInputElement} field - поле катьорое надо проверить.
     * @param {string | null} - строку с ошибкой или nll если ошибки небыл.
     */
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