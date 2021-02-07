let users = {
    'Daniel': '123',
    'David': 'xyz',
}

let body = document.querySelector("body");
let login = document.querySelector('.login-btn');

login.addEventListener('click', function() {

    let username = document.querySelector('#name').value;
    let password = document.querySelector('#password').value;

    if (username in users && password === users[username]) {
        console.log('Login successful');
        console.log(`Hello ${username}!`);

        // removing the login page
        let container = document.querySelector(".container-main");
        body.removeChild(container);
        createDatePage();

    } else {
        console.log('Your name or password is incorrect. Please try again');
    }

})

function createDatePage() {
    createDateInput();
    createDateInput();
}

function createDateInput() {
    let dateInput = document.createElement("input");
    dateInput.setAttribute("type", "datetime-local");
    dateInput.setAttribute("id", "meeting-time");
    dateInput.setAttribute("name", "meeting-time");
    body.appendChild(dateInput);
}
