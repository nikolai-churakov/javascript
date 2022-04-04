"use strict";
/**
 * Объект содержащий методы проверки
 */
const validationMethods = {

    /**
     * Метод проверки поля по длине.
     * @param {HTMLInputElement} field - поле каторое надо проверить.
     * @param {Array} args - массив с аргументами.
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
     * @return {string | null} - строку с ошибкой или nll если ошибки небыл.
     */
    mustContainNumber(field) {
        for (const val of field.value) {
            if (!Number.isInteger(Number.parseInt(val))) {
                return `Поле должно содержать только цифры.`;
            }
        }

        return null;
    },

    /**
     * Проверяет совпадает ли у 2х полей значение.
     * @param {HTMLInputElement} field - поле катьорое надо проверить.
     * @param {Array} args - поле катьорое надо проверить.
     * @return {string | null} - строку с ошибкой или nll если ошибки небыл.
     */
    fieldsCompare(field, args) {
        return field.value !== document.querySelector(args[0]).value
            ? 'Поля не совпадают.'
            : null;
    },
};

const form = {
    formEl: null,
    rules: null,

    /**
     * Инициализация формы.
     */
    init() {
        this.formEl = document.querySelector(".div-wrap");
        this.formEl.addEventListener('submit', e => this.formSubmit(e))

        this.rules = [
            {
                selector: 'input[name="name"]',
                methods: [
                    {name: 'length', args: ['>=', 1]},
                    {name: 'length', args: ['<=', 50]},
                ],
            },
            {
                selector: 'input[name="phone"]',
                methods: [
                    {name: 'mustContainNumber'},
                    {name: 'length', args: ['==', 11]},
                ],
            },
            {
                selector: 'input[name="password"]',
                methods: [
                    {name: 'length', args: ['>=', 5]},
                    {name: 'length', args: ['<=', 50]},
                ],
            },
            {
                selector: 'input[name="password_repeat"]',
                methods: [
                    {name: 'fieldsCompare', args: ['input[name="password"]']},
                ],
            },
        ];
    },

    /**
     * Метод каторый запускается перед отправкой формы.
     * @param {Event} e -событие отправки формы.
     */
    formSubmit(e) {
        if (!this.validate()) {
            e.preventDefault();
        }
    },

    /**
     * Валидирует форму.
     */
    validate() {
        let isValid = true;
        for (let rule of this.rules) {
            const inputEl = document.querySelector(rule.selector);
            for (let method of rule.methods) {
                const validFunction = validationMethods[method.name];
                const errMessage = validFunction(inputEl, method.args);
                if (errMessage) {
                    console.log(errMessage);
                    isValid = false;
                } else {
                    console.log('Ошибок не было.');
                }
            }
        }

        return isValid;
    },

    /**
     * Устанавливает класс провала валидации и сообщает почему валидация провалена.
     * @param {HTMLInputElement} inputEl - поле которое надо проверить.
     * @param {string | null} message - сообщение об ошибке.
     */
    setInValidField() {

    },

    /**
     * Устанавливает класс валидация, убирает сообщения о провале валидации если такое было.
     * @param {HTMLInputElement} inputEl - поле которое надо проверить.
     * @param {string | null} message - сообщение об ошибке.
     */
    setValidField() {

    },
};

form.init();