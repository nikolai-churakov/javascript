"use strict";

const validationMethods = {
    length() {

    },

    mustContainNumber() {

    },


}

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