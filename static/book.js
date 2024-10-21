let firstName = localStorage.getItem("firstName");
let surname = localStorage.getItem("surname");
let phone = localStorage.getItem("phone");
let email = localStorage.getItem("email");
let studentNO = localStorage.getItem("studentNO");
let first8=[];
let first9=[];
let first10=[];
let first11=[];
let first12=[];
let first13=[];
let first14=[];
let first15=[];
let first16=[];
if(firstName&&surname&&phone&&email&&studentNO){
    let results = "Greatings "+ firstName+" "+ surname+" may you please select the date and time you would like to create and collect your student card";
    document.getElementById("r").innerHTML=results;
    let display = document.getElementById("display");
    display.style.display = "block";

    function registerDate(){
        let date=document.getElementById('dateInput').value;
        const dateSelected = new Date(date);
        let day = dateSelected.getDate();
        let month = dateSelected.getMonth();
        let monthName =["January","February","March","April","May","June","July","August","September","October","Novermber","December"];
        if(date){
            let displayTime = document.getElementById("timeSelection");
            if(day===1||day===21||day===31)
                day +="st";
            else if(day===2||day===22)
                day+="nd";
            else if(day===3||day===23)
                day+="rd";
            else
                day+="th";
            document.getElementById("Estimated").innerHTML = "Select estimated time of arrival on the "+day+" of "+monthName[month];
            displayTime.style.display = "block";
        }
        else{
            alert("Sorry it seems date was not selected");
        }
        localStorage.setItem('day', day);
        localStorage.setItem('month', monthName[month]);
    }

    function registerTime(){        
        if(document.getElementById('time').value){
            
            let time = document.getElementById('time').value;
            localStorage.setItem('time', time);
            window.location.href='data.html';
        }
        else{
            alert("No time was registered, please select the given option\n\nOR Slot is fully booked");
        }
    }
}
else{
    let results = "It seems like we did not recieve the previous information";
    document.getElementById("r").innerHTML=results;
}