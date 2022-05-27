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
        })
}