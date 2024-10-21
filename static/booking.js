let number08h00 = localStorage.getItem('number08h00'),number09h00 = localStorage.getItem('number09h00'),number10h00 = localStorage.getItem('number10h00'),number11h00 = localStorage.getItem('number11h00'),number12h00 = localStorage.getItem('number12h00'),number13h00 = localStorage.getItem('number13h00'),number14h00 = localStorage.getItem('number14h00'),number15h00 = localStorage.getItem('number15h00'),number16h00 = localStorage.getItem('number16h00');

let students08h00=[],students09h00=[],students10h00=[],students11h00=[],students12h00=[],students13h00=[],students14h00=[],students15h00=[],students16h00=[];
let first8=[],first9=[],first10=[],first11=[],first12=[],first13=[],first14=[],first15=[],first16=[];
let second8=[],second9=[],second10=[],second11=[],second12=[],second13=[],second14=[],second15=[],second16=[];
let third8=[],third9=[],third10=[],third11=[],third12=[],third13=[],third14=[],third15=[],third16=[];
let fourth8=[],fourth9=[],fourth10=[],fourth11=[],fourth12=[],fourth13=[],fourth14=[],fourth15=[],fourth16=[];
let fifth8=[],fifth9=[],fifth10=[],fifth11=[],fifth12=[],fifth13=[],fifth14=[],fifth15=[],fifth16=[];
let sixth8=[],sixth9=[],sixth10=[],sixth11=[],sixth12=[],sixth13=[],sixth14=[],sixth15=[],sixth16=[];
let seventh8=[],seventh9=[],seventh10=[],seventh11=[],seventh12=[],seventh13=[],seventh14=[],seventh15=[],seventh16=[];
let eightth8=[],eightth9=[],eightth10=[],eightth11=[],eightth12=[],eightth13=[],eightth14=[],eightth15=[],eightth16=[];
let nineth8=[],nineth9=[],nineth10=[],nineth11=[],nineth12=[],nineth13=[],nineth14=[],nineth15=[],nineth16=[];
let tenth8=[],tenth9=[],tenth10=[],tenth11=[],tenth12=[],tenth13=[],tenth14=[],tenth15=[],tenth16=[];

let limiter=5;

let firstName = localStorage.getItem("firstName"),surname = localStorage.getItem("surname"),phone = localStorage.getItem("phone"),email = localStorage.getItem("email"),studentNO = localStorage.getItem("studentNO");

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

        if(localStorage.getItem('number08h00')<2||localStorage.getItem('number09h00')<2||localStorage.getItem('number10h00')<2||localStorage.getItem('number11h00')<2||localStorage.getItem('number12h00')<2||localStorage.getItem('number13h00')<2||localStorage.getItem('number14h00')<2||localStorage.getItem('number15h00')<2||localStorage.getItem('number16h00')<2){
            
                // timeSelected = document.getElementById('time').value;
            let date =new Date(document.getElementById('dateInput').value);

            first8 = localStorage.getItem('first8');first9 = localStorage.getItem('first9');first10 = localStorage.getItem('first10');first11 = localStorage.getItem('first11');first12 = localStorage.getItem('first12');first13 = localStorage.getItem('first13');first14 = localStorage.getItem('first14');first15 = localStorage.getItem('first15');first16 = localStorage.getItem('first16');
            second8 = localStorage.getItem('second8');second9 = localStorage.getItem('second9');second10 = localStorage.getItem('second10');second11 = localStorage.getItem('second11');second12 = localStorage.getItem('second12');second13 = localStorage.getItem('second13');second14 = localStorage.getItem('second14');second15 = localStorage.getItem('second15');second16 = localStorage.getItem('second16');
            third8 = localStorage.getItem('third8');third9 = localStorage.getItem('third9');third10 = localStorage.getItem('third10');third11 = localStorage.getItem('third11');third12 = localStorage.getItem('third12');third13 = localStorage.getItem('third13');third14 = localStorage.getItem('third14');third15 = localStorage.getItem('third15');third16 = localStorage.getItem('third16');
            fourth8 = localStorage.getItem('fourth8');fourth9 = localStorage.getItem('fourth9');fourth10 = localStorage.getItem('fourth10');fourth11 = localStorage.getItem('fourth11');fourth12 = localStorage.getItem('fourth12');fourth13 = localStorage.getItem('fourth13');fourth14 = localStorage.getItem('fourth14');fourth15 = localStorage.getItem('fourth15');fourth16 = localStorage.getItem('fourth16');
            fifth8 = localStorage.getItem('fifth8');fifth9 = localStorage.getItem('fifth9');fifth10 = localStorage.getItem('fifth10');fifth11 = localStorage.getItem('fifth11');fifth12 = localStorage.getItem('fifth12');fifth13 = localStorage.getItem('fifth13');fifth14 = localStorage.getItem('fifth14');fifth15 = localStorage.getItem('fifth15');fifth16 = localStorage.getItem('fifth16');
            sixth8 = localStorage.getItem('sixth8');sixth9 = localStorage.getItem('sixth9');sixth10 = localStorage.getItem('sixth10');sixth11 = localStorage.getItem('sixth11');sixth12 = localStorage.getItem('sixth12');sixth13 = localStorage.getItem('sixth13');sixth14 = localStorage.getItem('sixth14');sixth15 = localStorage.getItem('sixth15');sixth16 = localStorage.getItem('sixth16');
            seventh8 = localStorage.getItem('seventh8');seventh9 = localStorage.getItem('seventh9');seventh10 = localStorage.getItem('seventh10');seventh11 = localStorage.getItem('seventh11');seventh12 = localStorage.getItem('seventh12');seventh13 = localStorage.getItem('seventh13');seventh14 = localStorage.getItem('seventh14');seventh15 = localStorage.getItem('seventh15');seventh16 = localStorage.getItem('seventh16');
            eightth8 = localStorage.getItem('eightth8');eightth9 = localStorage.getItem('eightth9');eightth10 = localStorage.getItem('eightth10');eightth11 = localStorage.getItem('eightth11');eightth12 = localStorage.getItem('eightth12');eightth13 = localStorage.getItem('eightth13');eightth14 = localStorage.getItem('eightth14');eightth15 = localStorage.getItem('eightth15');eightth16 = localStorage.getItem('eightth16');
            nineth8 = localStorage.getItem('nineth8');nineth9 = localStorage.getItem('nineth9');nineth10 = localStorage.getItem('nineth10');nineth11 = localStorage.getItem('nineth11');nineth12 = localStorage.getItem('nineth12');nineth13 = localStorage.getItem('nineth13');nineth14 = localStorage.getItem('nineth14');nineth15 = localStorage.getItem('nineth15');nineth16 = localStorage.getItem('nineth16');
            tenth8 = localStorage.getItem('tenth8');tenth9 = localStorage.getItem('tenth9');tenth10 = localStorage.getItem('tenth10');tenth11 = localStorage.getItem('tenth11');tenth12 = localStorage.getItem('tenth12');tenth13 = localStorage.getItem('tenth13');tenth14 = localStorage.getItem('tenth14');tenth15 = localStorage.getItem('tenth15');tenth16 = localStorage.getItem('tenth16');

            if(date.getDate()==1){
                if(time==='08:00'||time==='08:30')first8+=(students08h00 +=(number08h00+" "+firstName+" "+surname+"<br>"))
                if(time==='09:00'||time==='09:30')first9+=(students09h00 +=(number09h00+" "+firstName+" "+surname+"<br>"))
                if(time==='10:00'||time==='10:30')first10+=(students10h00 +=(number10h00+" "+firstName+" "+surname+"<br>"))
                if(time==='11:00'||time==='11:30')first11+=(students11h00 +=(number11h00+" "+firstName+" "+surname+"<br>"))
                if(time==='12:00'||time==='12:30')first12+=(students12h00 +=(number12h00+" "+firstName+" "+surname+"<br>"))
                if(time==='13:00'||time==='13:30')first13+=(students13h00 +=(number13h00+" "+firstName+" "+surname+"<br>"))
                if(time==='14:00'||time==='14:30')first14+=(students14h00 +=(number14h00+" "+firstName+" "+surname+"<br>"))
                if(time==='15:00'||time==='15:30')first15+=(students15h00 +=(number15h00+" "+firstName+" "+surname+"<br>"))
                if(time==='16:00')first16+=(students16h00 +=(number16h00+" "+firstName+" "+surname+"<br>"))
            }
            if(date.getDate()==2){
                if(time==='08:00'||time==='08:30')second8+=(students08h00 +=(number08h00+" "+firstName+" "+surname+"<br>"))
                if(time==='09:00'||time==='09:30')second9+=(students09h00 +=(number09h00+" "+firstName+" "+surname+"<br>"))
                if(time==='10:00'||time==='10:30')second10+=(students10h00 +=(number10h00+" "+firstName+" "+surname+"<br>"))
                if(time==='11:00'||time==='11:30')second11+=(students11h00 +=(number11h00+" "+firstName+" "+surname+"<br>"))
                if(time==='12:00'||time==='12:30')second12+=(students12h00 +=(number12h00+" "+firstName+" "+surname+"<br>"))
                if(time==='13:00'||time==='13:30')second13+=(students13h00 +=(number13h00+" "+firstName+" "+surname+"<br>"))
                if(time==='14:00'||time==='14:30')second14+=(students14h00 +=(number14h00+" "+firstName+" "+surname+"<br>"))
                if(time==='15:00'||time==='15:30')second15+=(students15h00 +=(number15h00+" "+firstName+" "+surname+"<br>"))
                if(time==='16:00')second16+=(students16h00 +=(number16h00+" "+firstName+" "+surname+"<br>"))
            }
            if(date.getDate()==3){
                if(time==='08:00'||time==='08:30')third8+=(students08h00 +=(number08h00+" "+firstName+" "+surname+"<br>"))
                if(time==='09:00'||time==='09:30')third9+=(students09h00 +=(number09h00+" "+firstName+" "+surname+"<br>"))
                if(time==='10:00'||time==='10:30')third10+=(students10h00 +=(number10h00+" "+firstName+" "+surname+"<br>"))
                if(time==='11:00'||time==='11:30')third11+=(students11h00 +=(number11h00+" "+firstName+" "+surname+"<br>"))
                if(time==='12:00'||time==='12:30')third12+=(students12h00 +=(number12h00+" "+firstName+" "+surname+"<br>"))
                if(time==='13:00'||time==='13:30')third13+=(students13h00 +=(number13h00+" "+firstName+" "+surname+"<br>"))
                if(time==='14:00'||time==='14:30')third14+=(students14h00 +=(number14h00+" "+firstName+" "+surname+"<br>"))
                if(time==='15:00'||time==='15:30')third15+=(students15h00 +=(number15h00+" "+firstName+" "+surname+"<br>"))
                if(time==='16:00')third16+=(students16h00 +=(number16h00+" "+firstName+" "+surname+"<br>"))
            }
            if(date.getDate()==4){
                if(time==='08:00'||time==='08:30')fourth8+=(students08h00 +=(number08h00+" "+firstName+" "+surname+"<br>"))
                if(time==='09:00'||time==='09:30')fourth9+=(students09h00 +=(number09h00+" "+firstName+" "+surname+"<br>"))
                if(time==='10:00'||time==='10:30')fourth10+=(students10h00 +=(number10h00+" "+firstName+" "+surname+"<br>"))
                if(time==='11:00'||time==='11:30')fourth11+=(students11h00 +=(number11h00+" "+firstName+" "+surname+"<br>"))
                if(time==='12:00'||time==='12:30')fourth12+=(students12h00 +=(number12h00+" "+firstName+" "+surname+"<br>"))
                if(time==='13:00'||time==='13:30')fourth13+=(students13h00 +=(number13h00+" "+firstName+" "+surname+"<br>"))
                if(time==='14:00'||time==='14:30')fourth14+=(students14h00 +=(number14h00+" "+firstName+" "+surname+"<br>"))
                if(time==='15:00'||time==='15:30')fourth15+=(students15h00 +=(number15h00+" "+firstName+" "+surname+"<br>"))
                if(time==='16:00')fourth16+=(students16h00 +=(number16h00+" "+firstName+" "+surname+"<br>"))
            }
            if(date.getDate()==5){
                if(time==='08:00'||time==='08:30')fifth8+=(students08h00 +=(number08h00+" "+firstName+" "+surname+"<br>"))
                if(time==='09:00'||time==='09:30')fifth9+=(students09h00 +=(number09h00+" "+firstName+" "+surname+"<br>"))
                if(time==='10:00'||time==='10:30')fifth10+=(students10h00 +=(number10h00+" "+firstName+" "+surname+"<br>"))
                if(time==='11:00'||time==='11:30')fifth11+=(students11h00 +=(number11h00+" "+firstName+" "+surname+"<br>"))
                if(time==='12:00'||time==='12:30')fifth12+=(students12h00 +=(number12h00+" "+firstName+" "+surname+"<br>"))
                if(time==='13:00'||time==='13:30')fifth13+=(students13h00 +=(number13h00+" "+firstName+" "+surname+"<br>"))
                if(time==='14:00'||time==='14:30')fifth14+=(students14h00 +=(number14h00+" "+firstName+" "+surname+"<br>"))
                if(time==='15:00'||time==='15:30')fifth15+=(students15h00 +=(number15h00+" "+firstName+" "+surname+"<br>"))
                if(time==='16:00')fifth16+=(students16h00 +=(number16h00+" "+firstName+" "+surname+"<br>"))
            }
            if(date.getDate()==6){
                if(time==='08:00'||time==='08:30')sixth8+=(students08h00 +=(number08h00+" "+firstName+" "+surname+"<br>"))
                if(time==='09:00'||time==='09:30')sixth9+=(students09h00 +=(number09h00+" "+firstName+" "+surname+"<br>"))
                if(time==='10:00'||time==='10:30')sixth10+=(students10h00 +=(number10h00+" "+firstName+" "+surname+"<br>"))
                if(time==='11:00'||time==='11:30')sixth11+=(students11h00 +=(number11h00+" "+firstName+" "+surname+"<br>"))
                if(time==='12:00'||time==='12:30')sixth12+=(students12h00 +=(number12h00+" "+firstName+" "+surname+"<br>"))
                if(time==='13:00'||time==='13:30')sixth13+=(students13h00 +=(number13h00+" "+firstName+" "+surname+"<br>"))
                if(time==='14:00'||time==='14:30')sixth14+=(students14h00 +=(number14h00+" "+firstName+" "+surname+"<br>"))
                if(time==='15:00'||time==='15:30')sixth15+=(students15h00 +=(number15h00+" "+firstName+" "+surname+"<br>"))
                if(time==='16:00')sixth16+=(students16h00 +=(number16h00+" "+firstName+" "+surname+"<br>"))
            }
            if(date.getDate()==7){
                if(time==='08:00'||time==='08:30')seventh8+=(students08h00 +=(number08h00+" "+firstName+" "+surname+"<br>"))
                if(time==='09:00'||time==='09:30')seventh9+=(students09h00 +=(number09h00+" "+firstName+" "+surname+"<br>"))
                if(time==='10:00'||time==='10:30')seventh10+=(students10h00 +=(number10h00+" "+firstName+" "+surname+"<br>"))
                if(time==='11:00'||time==='11:30')seventh11+=(students11h00 +=(number11h00+" "+firstName+" "+surname+"<br>"))
                if(time==='12:00'||time==='12:30')seventh12+=(students12h00 +=(number12h00+" "+firstName+" "+surname+"<br>"))
                if(time==='13:00'||time==='13:30')seventh13+=(students13h00 +=(number13h00+" "+firstName+" "+surname+"<br>"))
                if(time==='14:00'||time==='14:30')seventh14+=(students14h00 +=(number14h00+" "+firstName+" "+surname+"<br>"))
                if(time==='15:00'||time==='15:30')seventh15+=(students15h00 +=(number15h00+" "+firstName+" "+surname+"<br>"))
                if(time==='16:00')seventh16+=(students16h00 +=(number16h00+" "+firstName+" "+surname+"<br>"))
            }
            if(date.getDate()==8){
                if(time==='08:00'||time==='08:30')eigth8+=(students08h00 +=(number08h00+" "+firstName+" "+surname+"<br>"))
                if(time==='09:00'||time==='09:30')eigth9+=(students09h00 +=(number09h00+" "+firstName+" "+surname+"<br>"))
                if(time==='10:00'||time==='10:30')eigth10+=(students10h00 +=(number10h00+" "+firstName+" "+surname+"<br>"))
                if(time==='11:00'||time==='11:30')eigth11+=(students11h00 +=(number11h00+" "+firstName+" "+surname+"<br>"))
                if(time==='12:00'||time==='12:30')eigth12+=(students12h00 +=(number12h00+" "+firstName+" "+surname+"<br>"))
                if(time==='13:00'||time==='13:30')eigth13+=(students13h00 +=(number13h00+" "+firstName+" "+surname+"<br>"))
                if(time==='14:00'||time==='14:30')eigth14+=(students14h00 +=(number14h00+" "+firstName+" "+surname+"<br>"))
                if(time==='15:00'||time==='15:30')eigth15+=(students15h00 +=(number15h00+" "+firstName+" "+surname+"<br>"))
                if(time==='16:00')eigth16+=(students16h00 +=(number16h00+" "+firstName+" "+surname+"<br>"))
            }
            if(date.getDate()==9){
                if(time==='08:00'||time==='08:30')nineth8+=(students08h00 +=(number08h00+" "+firstName+" "+surname+"<br>"))
                if(time==='09:00'||time==='09:30')nineth9+=(students09h00 +=(number09h00+" "+firstName+" "+surname+"<br>"))
                if(time==='10:00'||time==='10:30')nineth10+=(students10h00 +=(number10h00+" "+firstName+" "+surname+"<br>"))
                if(time==='11:00'||time==='11:30')nineth11+=(students11h00 +=(number11h00+" "+firstName+" "+surname+"<br>"))
                if(time==='12:00'||time==='12:30')nineth12+=(students12h00 +=(number12h00+" "+firstName+" "+surname+"<br>"))
                if(time==='13:00'||time==='13:30')nineth13+=(students13h00 +=(number13h00+" "+firstName+" "+surname+"<br>"))
                if(time==='14:00'||time==='14:30')nineth14+=(students14h00 +=(number14h00+" "+firstName+" "+surname+"<br>"))
                if(time==='15:00'||time==='15:30')nineth15+=(students15h00 +=(number15h00+" "+firstName+" "+surname+"<br>"))
                if(time==='16:00')nineth16+=(students16h00 +=(number16h00+" "+firstName+" "+surname+"<br>"))
            }
            if(date.getDate()==10){
                if(time==='08:00'||time==='08:30')tenth8+=(students08h00 +=(number08h00+" "+firstName+" "+surname+"<br>"))
                if(time==='09:00'||time==='09:30')tenth9+=(students09h00 +=(number09h00+" "+firstName+" "+surname+"<br>"))
                if(time==='10:00'||time==='10:30')tenth10+=(students10h00 +=(number10h00+" "+firstName+" "+surname+"<br>"))
                if(time==='11:00'||time==='11:30')tenth11+=(students11h00 +=(number11h00+" "+firstName+" "+surname+"<br>"))
                if(time==='12:00'||time==='12:30')tenth12+=(students12h00 +=(number12h00+" "+firstName+" "+surname+"<br>"))
                if(time==='13:00'||time==='13:30')tenth13+=(students13h00 +=(number13h00+" "+firstName+" "+surname+"<br>"))
                if(time==='14:00'||time==='14:30')tenth14+=(students14h00 +=(number14h00+" "+firstName+" "+surname+"<br>"))
                if(time==='15:00'||time==='15:30')tenth15+=(students15h00 +=(number15h00+" "+firstName+" "+surname+"<br>"))
                if(time==='16:00')tenth16+=(students16h00 +=(number16h00+" "+firstName+" "+surname+"<br>"))
            }
            localStorage.setItem('first8',first8);localStorage.setItem('first9',first9);localStorage.setItem('first10',first10);localStorage.setItem('first11',first11);localStorage.setItem('first12',first12);localStorage.setItem('first13',first13);localStorage.setItem('first14',first14);localStorage.setItem('first15',first15); localStorage.setItem('first16',first16);
            localStorage.setItem('second8',second8);localStorage.setItem('second9',second9);localStorage.setItem('second10',second10);localStorage.setItem('second11',second11);localStorage.setItem('second12',second12);localStorage.setItem('second13',second13);localStorage.setItem('second14',second14);localStorage.setItem('second15',second15);localStorage.setItem('second16',second16);
            localStorage.setItem('third8',third8);localStorage.setItem('third9',third9);localStorage.setItem('third10',third10);localStorage.setItem('third11',third11);localStorage.setItem('third12',third12);localStorage.setItem('third13',third13);localStorage.setItem('third14',third14);localStorage.setItem('third15',third15);localStorage.setItem('third16',third16);
            localStorage.setItem('fourth8',fourth8);localStorage.setItem('fourth9',fourth9);localStorage.setItem('fourth10',fourth10);localStorage.setItem('fourth11',fourth11);localStorage.setItem('fourth12',fourth12);localStorage.setItem('fourth13',fourth13);localStorage.setItem('fourth14',fourth14);localStorage.setItem('fourth15',fourth15);localStorage.setItem('fourth16',fourth16);
            localStorage.setItem('fifth8',fifth8);localStorage.setItem('fifth9',fifth9);localStorage.setItem('fifth10',fifth10);localStorage.setItem('fifth11',fifth11);localStorage.setItem('fifth12',fifth12);localStorage.setItem('fifth13',fifth13);localStorage.setItem('fifth14',fifth14);localStorage.setItem('fifth15',fifth15);localStorage.setItem('fifth16',fifth16);
            localStorage.setItem('sixth8',sixth8);localStorage.setItem('sixth9',sixth9);localStorage.setItem('sixth10',sixth10);localStorage.setItem('sixth11',sixth11);localStorage.setItem('sixth12',sixth12);localStorage.setItem('sixth13',sixth13);localStorage.setItem('sixth14',sixth14);localStorage.setItem('sixth15',sixth15);localStorage.setItem('sixth16',sixth16);
            localStorage.setItem('seventh8',seventh8);localStorage.setItem('seventh9',seventh9);localStorage.setItem('seventh10',seventh10);localStorage.setItem('seventh11',seventh11);localStorage.setItem('seventh12',seventh12);localStorage.setItem('seventh13',seventh13);localStorage.setItem('seventh14',seventh14);localStorage.setItem('seventh15',seventh15);localStorage.setItem('seventh16',seventh16);
            localStorage.setItem('eightth8',eightth8);localStorage.setItem('eightth9',eightth9);localStorage.setItem('eightth10',eightth10);localStorage.setItem('eightth11',eightth11);localStorage.setItem('eightth12',eightth12);localStorage.setItem('eightth13',eightth13);localStorage.setItem('eightth14',eightth14);localStorage.setItem('eightth15',eightth15);localStorage.setItem('eightth16',eightth16);
            localStorage.setItem('nineth8',nineth8);localStorage.setItem('nineth9',nineth9);localStorage.setItem('nineth10',nineth10);localStorage.setItem('nineth11',nineth11);localStorage.setItem('nineth12',nineth12);localStorage.setItem('nineth13',nineth13);localStorage.setItem('nineth14',nineth14);localStorage.setItem('nineth15',nineth15);localStorage.setItem('nineth16',nineth16);
            localStorage.setItem('tenth8',tenth8);localStorage.setItem('tenth9',tenth9);localStorage.setItem('tenth10',tenth10);localStorage.setItem('tenth11',tenth11);localStorage.setItem('tenth12',tenth12);localStorage.setItem('tenth13',tenth13);localStorage.setItem('tenth14',tenth14);localStorage.setItem('tenth15',tenth15);localStorage.setItem('tenth16',tenth16);

        }
        if(document.getElementById('time').value){
            // if(timeSelected&&(number08h00<10||number09h00<10||number10h00<10||number11h00<10||number12h00<10||number13h00<10||number14h00<10||number16h00<10||number16h00<10)){
            
            
            let time = document.getElementById('time').value; 

            if(localStorage.getItem('number08h00')<limiter){
                if(time==='08:00'||time==='08:30'){
                    number08h00++;
                    if(number08h00===1){
                        students08h00 = ' ';
                    }
                    else{
                        students08h00 = localStorage.getItem('students08h00');
                    }
                    students08h00 +=(number08h00+" "+firstName+" "+surname+"<br>");
                    localStorage.setItem('students08h00',students08h00);
                    localStorage.setItem('number08h00',number08h00);
                    window.location.href = "data.html";
                }
            }
            else if(time==='08:00'||time==='08:30'){
                alert("This sections if fully booked try anothor slot");
            }
            if(localStorage.getItem('number09h00')<limiter){
                if(time==='09:00'||time==='09:30'){
                    number09h00++;
                    if(number09h00===1){
                        students09h00 = ' ';
                    }
                    else{
                        students09h00 = localStorage.getItem('first9');
                    }
                    // students09h00 +=(number09h00+" "+firstName+" "+surname+"<br>");
                    localStorage.setItem('students09h00',students09h00);
                    localStorage.setItem('number09h00',number09h00);
                    window.location.href = "data.html";
                }
            }
            else if(time==='09:00'||time==='09:30'){
                alert("This sections if fully booked try anothor slot");
            }

            if(localStorage.getItem('number10h00')<limiter){
                if(time==='10:00'||time==='10:30'){
                    number10h00++;
                    if(number10h00===1){
                        students10h00 = ' ';
                    }
                    else{
                        students10h00 = localStorage.getItem('students10h00');
                    }
                    students10h00 +=(number10h00+" "+firstName+" "+surname+"<br>");
                    localStorage.setItem('students10h00',students10h00);
                    localStorage.setItem('number10h00',number10h00);
                    window.location.href = "data.html";
                }
            }
            else if(time==='10:00'||time==='10:30'){
                alert("This sections if fully booked try anothor slot");
            }

            if(localStorage.getItem('number11h00')<limiter){
                if(time==='11:00'||time==='11:30'){
                    number11h00++;
                    if(number11h00===1){
                        students11h00 = ' ';
                    }
                    else{
                        students11h00 = localStorage.getItem('students11h00');
                    }
                    students11h00 +=(number11h00+" "+firstName+" "+surname+"<br>");
                    localStorage.setItem('students11h00',students11h00);
                    localStorage.setItem('number11h00',number11h00);
                    window.location.href = "data.html";
                }
            }
            else if(time==='11:00'||time==='11:30'){
                alert("This sections if fully booked try anothor slot");
            }

            if(localStorage.getItem('number12h00')<limiter){
                if(time==='12:00'||time==='12:30'){
                    number12h00++;
                    if(number12h00===1){
                        students12h00 = ' ';
                    }
                    else{
                        students12h00 = localStorage.getItem('students12h00');
                    }
                    students12h00 +=(number12h00+" "+firstName+" "+surname+"<br>");
                    localStorage.setItem('students12h00',students12h00);
                    localStorage.setItem('number12h00',number12h00);
                    window.location.href = "data.html";
                }
            }
            else if(time==='12:00'||time==='12:30'){
                alert("This sections if fully booked try anothor slot");
            }

            if(localStorage.getItem('number13h00')<limiter){
                if(time==='13:00'||time==='13:30'){
                    number13h00++;
                    if(number13h00===1){
                        students13h00 = ' ';
                    }
                    else{
                        students13h00 = localStorage.getItem('students13h00');
                    }
                    students13h00 +=(number10h00+" "+firstName+" "+surname+"<br>");
                    localStorage.setItem('students13h00',students13h00);
                    localStorage.setItem('number13h00',number13h00);
                    window.location.href = "data.html";
                }
            }
            else if(time==='13:00'||time==='13:30'){
                alert("This sections if fully booked try anothor slot");
            }

            if(localStorage.getItem('number14h00')<limiter){
                if(time==='14:00'||time==='14:30'){
                    number14h00++;
                    if(number14h00===1){
                        students14h00 = ' ';
                    }
                    else{
                        students14h00 = localStorage.getItem('students14h00');
                    }
                    students14h00 +=(number14h00+" "+firstName+" "+surname+"<br>");
                    localStorage.setItem('students14h00',students14h00);
                    localStorage.setItem('number14h00',number14h00);
                    window.location.href = "data.html";
                }
            }
            else if(time==='14:00'||time==='14:30'){
                alert("This sections if fully booked try anothor slot");
            }

            if(localStorage.getItem('number15h00')<limiter){
                if(time==='15:00'||time==='15:30'){
                    number15h00++;
                    if(number15h00===1){
                        students15h00 = ' ';
                    }
                    else{
                        students15h00 = localStorage.getItem('students15h00');
                    }
                    students15h00 +=(number15h00+" "+firstName+" "+surname+"<br>");
                    localStorage.setItem('students15h00',students15h00);
                    localStorage.setItem('number15h00',number15h00);
                    window.location.href = "data.html";
                }
            }
            else if(time==='15:00'||time==='15:30'){
                alert("This sections if fully booked try anothor slot");
            }

            if(localStorage.getItem('number16h00')<limiter){
                if(time==='16:00'){
                    number16h00++;
                    if(number16h00===1){
                        students16h00 = ' ';
                    }
                    else{
                        students16h00 = localStorage.getItem('students16h00');
                    }
                    students16h00 +=(number16h00+" "+firstName+" "+surname+"<br>");
                    localStorage.setItem('students16h00',students16h00);
                    localStorage.setItem('number16h00',number16h00);
                    window.location.href = "data.html";
                }
            }
            else if(time==='16:00'){
                alert("This sections if fully booked try anothor slot");
            }
        }
        else{
            alert("No time was registered, please select the given option\n\nOR "+timeSelected+" is fully booked");
        }
        localStorage.setItem('time', timeSelected);
    }
}
else{
    let results = "It seems like we didn't recieve all information please re fill the previous form or missing data"; 
    document.getElementById("r").innerHTML=results;
}