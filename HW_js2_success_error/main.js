window.onload = () => {
    let buttonSendForm = document.getElementById('success');
    buttonSendForm.addEventListener('click', e => {
        e.preventDefault();
        let request = 'error.json';
        if (document.getElementById('input').value){
            request = 'success.json';
        }
        fetch(request)
            .then(result => result.json())
            .then(data => console.log(data.result))

    })
}

// document.getElementById('success').addEventListener('click', () => {

    // let gerData = new Promise((resolve, reject) => {
    //
    //
    // }

// let dataBlock = document.getElementById('infoBox');
//
//     fetch('succes1s.json')
//         .then(result => {
//             console.log('all right');
//             console.log(result);
//             return result.json()
//         })
//         .then(data => {
//             console.log(data);
//             dataBlock.innerText = `Телефон (${data.tel})`;
//
//         })
//         .catch(error => {
//             console.log(error);
//             console.log(data);
//         })
// })

// class Request {
// init() {
//     this.successRequest();
//     this.errorRequest();
//     this.AboutMe();
// }

//     successRequest() {
//         document.getElementById('success').addEventListener('click', () => {
//             let xhr = new XMLHttpRequest();
//             xhr.open('GET', 'success.json', true);
//             xhr.onload = () => {
//                 let data = JSON.parse(xhr.responseText);
//                 console.log(data);
//             }
//             xhr.send();
//         })
//     }
//
//     errorRequest() {
//         document.getElementById('error').addEventListener('click', () => {
//             let xhr = new XMLHttpRequest();
//             xhr.open('GET', 'error.json', true);
//             xhr.onload = () => {
//                 let data = JSON.parse(xhr.responseText);
//                 console.log(data);
//             }
//             xhr.send();
//         })
//     }
//
//     AboutMe() {
//         document.getElementById('aboutMe').addEventListener('click', () =>  {
//             let getInfo = new XMLHttpRequest();
//             getInfo.open('GET', 'help.json', true);
//             getInfo.onload = () => {
//                 let data = JSON.parse(getInfo.responseText);
//                 console.log(data);
//             }
//             getInfo.send();
//         })
//     }
// }

// document.addEventListener('DOMContentLoaded', () => {
//     let req = new Request();
//     req.init();
// });

