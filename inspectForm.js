'use strict';

class CheckForm {
    constructor(name, phone, password) {
        this.name = name;
        this.phone = phone;
        this.password = password;
    }

    init() {
        this.NameCheck();
        this.PhoneCheck();
        this.passwordCheck();
        this.AlarmMessage();
    }

    NameCheck() {
        let nameValue = document.getElementById(this.name).value;
        if (/^[a-z]{2,}$/ig.test(nameValue)) {
            this.isRight(this.name);
        } else {
            this.isWrong(this.name);
        }
    }

    PhoneCheck() {
        let phoneValue = document.getElementById(this.phone).value;
        if (/^\+\d\(\d{3}\)\d{3}\-\d{4}/ig.test(phoneValue)){
            this.isRight(this.phone);
        } else this.isWrong(this.phone);
    }


    passwordCheck() {
        let emailValue = document.getElementById(this.email).value;
        if (/^[a-z]+(\.|\_|)mail@[a-z]+\.(com|ru)/ig.test(emailValue)){
            this.isRight(this.email);
        } else this.isWrong(this.email);
    }

    isRight(id){
        document.getElementById(id).style.borderColor = 'green';
    }

    isWrong(id){
        document.getElementById(id).style.borderColor = 'red';
        this.counter = this.counter + 1;
    }

    AlarmMessage(){
        if (this.counter > 0) {
            document.getElementById('alarmMessage').textContent = 'Введите данные в верном формате';
        }
    }
}

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('checkBtn').addEventListener('click', () => {
        let checkForm = new CheckForm ('name', 'phone', 'password', 'message');
        checkForm.init();
    })
})