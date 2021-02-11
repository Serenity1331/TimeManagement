function Employee(name, hoursWorked) {
    this.name = name;
    this.hoursWorked = hoursWorked;
    this.countHours = function(dateStart, dateEnd) {
        
        // try catch not implemented yet

        let sum = 0;
        let hours = this.hoursWorked;
        let startKey = Object.keys(hours).indexOf(dateStart);
        let endKey = Object.keys(hours).indexOf(dateEnd)

        // date not present in database not implemented
        
        let chosenDates = Object.values(hours).slice(startKey, endKey + 1);

        for (let hours of chosenDates) {
            sum += hours;
        }

        return sum;
    }
}

let john = new Employee('john', {
    '2020-02-01': 8,
    '2020-02-02': 2,
    '2020-02-03': 6,
    '2020-02-04': 4,
    '2020-02-05': 0,
    '2020-02-06': 0,
    '2020-02-07': 8,
})

let jack = new Employee('jack', {
    '2020-02-01': 0,
    '2020-02-02': 0,
    '2020-02-03': 4,
    '2020-02-04': 4,
    '2020-02-05': 8,
    '2020-02-06': 8,
    '2020-02-07': 8,
})

let users = {
    'Daniel': '123',
    'David': 'xyz',
}

let staff = [john, jack];
 
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
        createHomePage();
        addListener();

    } else {
        console.log('Your name or password is incorrect. Please try again');
    }

})

function createHomePage() {
    // inverted order because parent.prepend used
    createButton('displayHours');
    createDateInput('endDate', '2020-02-07');
    createDateInput('startDate', '2020-02-01');
    createTable();
}

function createDateInput(id, value) {
    let dateInput = document.createElement("input");
    dateInput.setAttribute("type", "date");
    dateInput.setAttribute("id", id);
    dateInput.setAttribute("value", value);
    dateInput.classList.add("date");
    body.prepend(dateInput);
}

function createButton(id) {
    let searchBtn = document.createElement("button");
    searchBtn.setAttribute("id", id);
    searchBtn.innerHTML = "Search";
    body.prepend(searchBtn);
}

function createTable() {
    
    // inserts the table after search button
    let table = `
	<table class="hidden">
        <thead>
            <tr class="headRow">
                <th class="cell headCell">Names</th>
                <th class="cell headCell">Hours</th>
            </tr>
        </thead>
       
        <tr class="row">
            <td class="cell"></td>
            <td class="cell"></td>
        </tr>	

        <tr class="row">
            <td class="cell"></td>
            <td class="cell"></td>
        </tr>
    </table>`;
    let searchBtn = document.querySelector('#displayHours');
    searchBtn.insertAdjacentHTML('afterend', table);
}

function addListener() {

    let displayBtn = document.querySelector('#displayHours');

    displayBtn.addEventListener('click', function() {

        let rows = document.querySelectorAll('.row');
        let table = document.querySelector("table");

        table.classList.remove('hidden');

        for (let i = 0; i < rows.length; i++) {
            let row = rows[i];
            row.children[0].innerHTML = staff[i].name;
            row.children[1].innerHTML = staff[i].countHours(getDates()[0], getDates()[1]);
        }
    })
}

function getDates() {

    let startDate = document.querySelector('#startDate').value;
    let endDate = document.querySelector('#endDate').value;

    return [startDate,endDate];
}


