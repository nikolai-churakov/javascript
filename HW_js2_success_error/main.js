window.onload = () => {
    let buttonSendForm = document.getElementById('success');
    buttonSendForm.addEventListener('click', e => {
        e.preventDefault();
        let request = 'error.json';
        if (document.getElementById('input').value) {
            request = 'success.json';
        }
        fetch(request)
            .then(result => result.json())
            .then(data => console.log(data.result))
    });

        document.getElementById('aboutMe').addEventListener('click', () => {
            let getInfo = new XMLHttpRequest();
            getInfo.open('GET', 'help.json', true);
            getInfo.onload = () => {
                let data = JSON.parse(getInfo.responseText);
                console.log(data);
            }
            getInfo.send();
        });

        let btnSendAge = document.getElementById('btnSendAge');
        btnSendAge.addEventListener('click',async () => {
         let response = await fetch('1.json');
            console.log(response);
         if (response.ok) {
             console.log(response.ok);
             let data2 = await response.json();
         } else {
             console.log("Error load" +response);
         }
        })
}
