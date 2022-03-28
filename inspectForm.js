'use strict';

const inspectForm = {
    counter: 0,

    run() {
        this.nameCheck();
        this.phoneCheck();
        this.passwordCheck();
        this.AlarmMessage();
    },

    nameCheck() {
        let nameValue = document.getElementById("name").value;
        if (/^[a-z]{2,}$/ig.test(nameValue)) {
            this.isRight("name");
        } else {
            this.isWrong("name");
        }
    },

    phoneCheck() {
        let phoneValue = document.getElementById("phone").value;
        if (/^\+?[78][-\(]?\d{3}\)?-?\d{3}-?\d{2}-?\d{2}$/ig.test(phoneValue)){
            this.isRight("phone");
        } else this.isWrong("phone");
    },

    passwordCheck() {
        let passwordValue = document.getElementById("password").value;
        if (/(?=.*[0-9])/ig.test(passwordValue)){
            this.isRight("password");
        } else this.isWrong("password");
    },

    isRight(id){
        document.getElementById(id).style.borderColor = 'green';
    },

    isWrong(id){
        document.getElementById(id).style.borderColor = 'red';
        this.counter = this.counter + 1;
    },

    AlarmMessage(){
        if (this.counter > 0) {
            document.getElementById('alarmMessage').textContent = 'Ошибка!';
        }
    },

};

// window.addEventListener('load', () => inspectForm.run());

document.addEventListener('DOMContentLoaded', () => {
document.getElementById("checkBtn").addEventListener('click', () => {
    Event.preventDefault(inspectForm.run());
})
})
