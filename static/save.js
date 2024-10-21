let number08h00 = localStorage.getItem('number08h00');


firstName = localStorage.getItem("firstName");
surname = localStorage.getItem("surname");
phone = localStorage.getItem("phone");
email = localStorage.getItem("email");
studentNO = localStorage.getItem("studentNO");

if(firstName!==""&&surname!==""&&phone!==""&&email!==""&&studentNO!==""){
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
        let timeSelected = document.getElementById("time").value;
        if(timeSelected&&number08h00<2){
            window.location.href = "data.html";
            //added
            number08h00++;
            localStorage.setItem('number08h00',number08h00);
        }
        else{
            //added
            alert("No time was registered, please select the given option\n\nOR "+timeSelected+" is fully booked");
        }
        localStorage.setItem('time', timeSelected);
    }
}
else{
    let results = "It seems like we didn't recieve all information please re fill the previous form or missing data";
    document.getElementById("r").innerHTML=results;   
}