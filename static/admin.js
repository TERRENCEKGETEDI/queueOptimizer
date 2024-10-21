
let pincode = window.prompt("Enter Admin password to continue");
if(pincode!="12345"){
    alert("Invalid password");
    window.location.href="index.html";
}
let students08h00 = ''; 
let students09h00 = ''; 
let students10h00 = ''; 
let students11h00 = ''; 
let students12h00 = ''; 
let students13h00 = ''; 
let students14h00 = ''; 
let students15h00 = ''; 
let students16h00 = '';

document.getElementById("students08h00").innerHTML = '';
document.getElementById("students09h00").innerHTML = '';
document.getElementById("students10h00").innerHTML = '';
document.getElementById("students11h00").innerHTML = '';
document.getElementById("students12h00").innerHTML = '';
document.getElementById("students13h00").innerHTML = '';
document.getElementById("students14h00").innerHTML = '';
document.getElementById("students15h00").innerHTML = '';
document.getElementById("students16h00").innerHTML = '';

function deleteUSers(){
    localStorage.setItem('number08h00',0);
    localStorage.setItem('number09h00',0);
    localStorage.setItem('number10h00',0);
    localStorage.setItem('number11h00',0);
    localStorage.setItem('number12h00',0);
    localStorage.setItem('number13h00',0);
    localStorage.setItem('number14h00',0);
    localStorage.setItem('number15h00',0);
    localStorage.setItem('number16h00',0);

    localStorage.setItem('students08h00','No record yet');
    localStorage.setItem('students09h00','No record yet');
    localStorage.setItem('students10h00','No record yet');
    localStorage.setItem('students11h00','No record yet');
    localStorage.setItem('students12h00','No record yet');
    localStorage.setItem('students13h00','No record yet');
    localStorage.setItem('students14h00','No record yet');
    localStorage.setItem('students15h00','No record yet');
    localStorage.setItem('students16h00','No record yet');
}
const dateSelected = new Date();
let day = dateSelected.getDate();
let month = dateSelected.getMonth();
let monthName =["January","February","March","April","May","June","July","August","September","October","Novermber","December"];
if(day){
    if(day===1||day===21||day===31)
        day +="st";
    else if(day===2||day===22)
        day+="nd";
    else if(day===3||day===23)
        day+="rd";
    else
        day+="th";
}
// alert(day+","+monthName[month]);
// alert(JSON.parse(localStorage.getItem('dayA')) + " " +JSON.parse(localStorage.getItem('monthA')))
setInterval(Upadte,1000);
function Upadte(){
    let   firstNameA = JSON.parse(localStorage.getItem('firstNameA'))||[];
	let   secondNameA = JSON.parse(localStorage.getItem('secondNameA'))||[];
	let   surnameA =JSON.parse(localStorage.getItem('surnameA'))||[];
	let   phoneA = JSON.parse(localStorage.getItem('phoneA'))||[];
	let   emailA = JSON.parse(localStorage.getItem('emailA'))||[];
	let   timeA = JSON.parse(localStorage.getItem('timeA'))||[];
	let   dayA = JSON.parse(localStorage.getItem('dayA'))||[];
	let   monthA = JSON.parse(localStorage.getItem('monthA'))||[];
	students08h00 = ''; 
    students09h00 = ''; 
    students10h00 = ''; 
    students11h00 = ''; 
    students12h00 = ''; 
    students13h00 = ''; 
    students14h00 = ''; 
    students15h00 = ''; 
    students16h00 = '';
    const dateSelected = new Date();
    let day = dateSelected.getDate();
    let month = dateSelected.getMonth();
    let monthName =["January","February","March","April","May","June","July","August","September","October","Novermber","December"];
    if(day){
        if(day===1||day===21||day===31)
            day +="st";
        else if(day===2||day===22)
            day+="nd";
        else if(day===3||day===23)
            day+="rd";
        else
            day+="th";
    }
    for(let i=0;i<timeA.length;i++){
        if((day+","+monthName[month])===(JSON.parse(localStorage.getItem('dayA'))[i] + "," +JSON.parse(localStorage.getItem('monthA'))[i])){
            if(timeA[i]==='08:00'||timeA[i]==='08:30')
                students08h00 += firstNameA[i]+" "+ secondNameA[i]+" "+surnameA[i]+" "+timeA[i]+'<br>';
            if(timeA[i]==='09:00'||timeA[i]==='09:30')
                students09h00 += firstNameA[i]+" "+ secondNameA[i]+" "+surnameA[i]+" "+timeA[i]+'<br>';
            if(timeA[i]==='10:00'||timeA[i]==='10:30')
                students10h00 += firstNameA[i]+" "+ secondNameA[i]+" "+surnameA[i]+" "+timeA[i]+'<br>';
            if(timeA[i]==='11:00'||timeA[i]==='11:30')
                students11h00 += firstNameA[i]+" "+ secondNameA[i]+" "+surnameA[i]+" "+timeA[i]+'<br>';
            if(timeA[i]==='12:00'||timeA[i]==='12:30')
                students12h00 += firstNameA[i]+" "+ secondNameA[i]+" "+surnameA[i]+" "+timeA[i]+'<br>';
            if(timeA[i]==='13:00'||timeA[i]==='13:30')
                students13h00 += firstNameA[i]+" "+ secondNameA[i]+" "+surnameA[i]+" "+timeA[i]+'<br>';
            if(timeA[i]==='14:00'||timeA[i]==='14:30')
                students14h00 += firstNameA[i]+" "+ secondNameA[i]+" "+surnameA[i]+" "+timeA[i]+'<br>';
            if(timeA[i]==='15:00'||timeA[i]==='15:30')
                students15h00 += firstNameA[i]+" "+ secondNameA[i]+" "+surnameA[i]+" "+timeA[i]+'<br>';
            if(timeA[i]==='16:00')
                students16h00 += firstNameA[i]+" "+ secondNameA[i]+" "+surnameA[i]+" "+timeA[i]+'<br>';
        }
    }
    document.getElementById("students08h00").innerHTML = students08h00;
    document.getElementById("students09h00").innerHTML = students09h00;
    document.getElementById("students10h00").innerHTML = students10h00;
    document.getElementById("students11h00").innerHTML = students11h00;
    document.getElementById("students12h00").innerHTML = students12h00;
    document.getElementById("students13h00").innerHTML = students13h00;
    document.getElementById("students14h00").innerHTML = students14h00;
    document.getElementById("students15h00").innerHTML = students15h00;
    document.getElementById("students16h00").innerHTML = students16h00;
}