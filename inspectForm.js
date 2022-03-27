'use strict';

const inspectForm = {
    counter: 0,

    run() {
        console.log(`1`);
        this.introduce();
        this.nameCheck();
        this.phoneCheck();
        this.passwordCheck();
        this.AlarmMessage();
        this.introduce();
    },

    introduce() {
        console.log(`2`);
    },

    nameCheck() {
        let nameValue = document.getElementById(this.name).value;
        if (/^[a-z]{2,}$/ig.test(nameValue)) {
            this.isRight(this.name);
        } else {
            this.isWrong(this.name);
        }
    },

    phoneCheck() {
        let phoneValue = document.getElementById(this.phone).value;
        if (/^\+?[78][-\(]?\d{3}\)?-?\d{3}-?\d{2}-?\d{2}$/ig.test(phoneValue)){
            this.isRight(phone);
        } else this.isWrong(phone);
    },

    passwordCheck() {
        let emailValue = document.getElementById(password).value;
        if (/^[a-z]+(\.|\_|)mail@[a-z]+\.(com && ru)/ig.test(passwordValue)){
            this.isRight(password);
        } else this.isWrong(password);
    },

    isRight(id){
        document.getElementById(id).style.borderColor = 'green';
    },

    isWrong(id){
        document.getElementById(id).style.borderColor = 'red';
        this.counter = this.counter + 1;
    },

    AlarmMessage(){
        if (counter > 0) {
            document.getElementById('alarmMessage').textContent = 'Ошибка!';
        }
    },
};

window.addEventListener('load', () => inspectForm.run());

// document.addEventListener('DOMContentLoaded', () => {
//     document.getElementById('checkBtn').addEventListener('click', () => {
//         let checkForm = new CheckForm ('name', 'phone', 'password');
//         checkForm.init();
//     })
// })

console.log(`script load `);