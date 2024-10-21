function submit(){
    let firstName = document.getElementById("firstName").value;
    let secondName = document.getElementById("secondName").value;
    let surname = document.getElementById("surname").value;
    let phone = document.getElementById("phone").value;
    let email = document.getElementById("email").value;
    let studentNO = document.getElementById("studentNO").value;
    
    localStorage.setItem('firstName', firstName);
    localStorage.setItem('secondName', secondName);
    localStorage.setItem('surname', surname);
    localStorage.setItem('phone', phone);
    localStorage.setItem('email', email);
    localStorage.setItem('studentNO', studentNO);
    
    window.location.href ="booking.html";
}
function admin(){
    window.location.href ="admin.html";
}
function todo(){
    window.location.href ="toDoList.html";
}

document.addEventListener('DOMContentLoaded', function() {
    setInterval(p,1000)
    function p(){
    document.getElementById('myname').innerHTML = localStorage.getItem('logName');
    }
});
fetch('/user-info')
  .then(response => response.json())
  .then(data => {
    if (!data.error) {
      console.log('First Name:', data.firstname);
      localStorage.setItem("logName",data.firstname);
    //   alert(localStorage.getItem('logName'));
    } else {
      console.log(data.error);
    }
  })
  .catch(error => console.error('Error fetching user info:', error));