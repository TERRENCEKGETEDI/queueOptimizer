// alert("double click the confirm to confirm");
let firstName = localStorage.getItem("firstName");
let secondName = localStorage.getItem("secondName");
let surname = localStorage.getItem("surname");
let phone = localStorage.getItem("phone");
let email = localStorage.getItem("email");
let studentNO = localStorage.getItem("studentNO");
let time = localStorage.getItem("time");
let day = localStorage.getItem("day");
let month = localStorage.getItem("month");

let firstNameA = [];
let secondNameA = [];
let surnameA = [];
let phoneA = [];
let emailA = [];
let studentNOA = [];
let timeA = [];
let dayA = [];
let monthA = [];
let results =   "Confirmation <br><br>"+
                "<br>First Name :"+firstName+
                "<br>Second Name :"+secondName+
                "<br>Surname :"+surname+
                "<br>Student Number :"+studentNO+
                "<br>Phone Number :"+phone+
                "<br>Email :"+email+
                "<br><br>Date :"+day+" of "+month+
                "<br>Time :"+time;
document.getElementById("results").innerHTML=results;

function send(){

    firstNameA = JSON.parse(localStorage.getItem('firstNameA'))||[];
    secondNameA = JSON.parse(localStorage.getItem('secondNameA'))||[];
    surnameA =JSON.parse(localStorage.getItem('surnameA'))||[];
    phoneA = JSON.parse(localStorage.getItem('phoneA'))||[];
    emailA = JSON.parse(localStorage.getItem('emailA'))||[];
    timeA = JSON.parse(localStorage.getItem('timeA'))||[];
    dayA = JSON.parse(localStorage.getItem('dayA'))||[];
    monthA = JSON.parse(localStorage.getItem('monthA'))||[];

    firstNameA.push(firstName);
    secondNameA.push(secondName);
    surnameA.push(surname);
    phoneA.push(phone);
    emailA.push(email);
    studentNOA.push(studentNO);
    timeA.push(time);
    dayA.push(day);
    monthA.push(month);

    localStorage.setItem('firstNameA',JSON.stringify(firstNameA));
    localStorage.setItem('secondNameA',JSON.stringify(secondNameA));
    localStorage.setItem('surnameA',JSON.stringify(surnameA));
    localStorage.setItem('phoneA',JSON.stringify(phoneA));
    localStorage.setItem('emailA',JSON.stringify(emailA));
    localStorage.setItem('timeA',JSON.stringify(timeA));
    localStorage.setItem('dayA',JSON.stringify(dayA));
    localStorage.setItem('monthA',JSON.stringify(monthA));

    alert(firstName+" "+surname+" Application recieved");

    localStorage.setItem('firstName', "");
    localStorage.setItem('secondName', "");
    localStorage.setItem('surname', "");
    localStorage.setItem('phone', "");
    localStorage.setItem('email', "");
    localStorage.setItem('studentNO', "");
    localStorage.setItem('day', "");
    localStorage.setItem('month', "");
    localStorage.setItem('time', "");
    window.location.href= "index.html";
}