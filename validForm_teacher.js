"use strict";
/**
 * Метод проверки поля по данным
 * @type {{mustContainNumber(), fieldsCompare(), length()}}
 */
const validationMethods = {
    length(field, args) {

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