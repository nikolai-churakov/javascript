class CheckForm {
    constructor (name, phone, password) {
        this.name = name;
        this.phone = phone;
        this.password = password;
        this.counter = 0;
    }

    init() {
        this.nameCheck();
        this.phoneCheck();
        this.passwordCheck();
        this.AlarmMessage();
    }

    nameCheck() {
        let nameValue = document.getElementById(this.name).value;
        if (/^[a-z]{2,}$/ig.test(nameValue)) {
            this.isRight(this.name);
        } else {
            this.isWrong(this.name);
        }
    };

    phoneCheck() {
        let phoneValue = document.getElementById(this.phone).value;
        if (/^\+?[78][-\(]?\d{3}\)?-?\d{3}-?\d{2}-?\d{2}$/ig.test(phoneValue)){
            this.isRight(phone);
        } else this.isWrong(phone);
    };


    passwordCheck() {
        let emailValue = document.getElementById(password).value;
        if (/^[a-z]+(\.|\_|)mail@[a-z]+\.(com && ru)/ig.test(passwordValue)){
            this.isRight(password);
        } else this.isWrong(password);
    };

    isRight(id){
        document.getElementById(id).style.borderColor = 'green';
    };

    isWrong(id){
        document.getElementById(id).style.borderColor = 'red';
        this.counter = counter + 1;
    };

    AlarmMessage(){
        if (counter > 0) {
            document.getElementById('alarmMessage').textContent = 'Не верный формат данных';
        }
    };
}

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('checkBtn').addEventListener('click', () => {
        let checkForm = new CheckForm ('name', 'phone', 'password');
        checkForm.init();
    })
})