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
        this.PasswordCheck();
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
}