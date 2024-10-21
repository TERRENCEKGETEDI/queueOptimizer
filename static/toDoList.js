let dataArray =[];
let logNameA=[];
function add(){
    dataArray = JSON.parse(localStorage.getItem('dataArray'))||[];
    logNameA = JSON.parse(localStorage.getItem('logNameA'))||[];
    let text = document.getElementById("value").value;
    dataArray.push(text);
    logNameA.push(localStorage.getItem('logName'));
    localStorage.setItem('dataArray', JSON.stringify(dataArray));
    localStorage.setItem('logNameA', JSON.stringify(logNameA));
}
function reset(){
    localStorage.removeItem('dataArray');
}
setInterval(Live,1000)
function Live(){
    
    let body = document.getElementsByTagName('div');
    let lists='';
    let dataArray = JSON.parse(localStorage.getItem('dataArray'))||[];
    for(let i=0;i<dataArray.length;i++){
        if(dataArray[i]!==""){
            console.log(localStorage.getItem('logName'))
            console.log(JSON.parse(localStorage.getItem('logNameA')))
            if(localStorage.getItem('logName')===JSON.parse(localStorage.getItem('logNameA'))[i])
                {
            lists+=  "<span>"+
                        '<p>'+dataArray[i]+'</p>'+
                        '<button>done</button>'+
                    "</span>"
            }
            }
    }
    body[0].innerHTML = "<div>"+
                            lists+
                        "</div>";

                        
    for(let i=0;i<document.getElementsByTagName('p').length;i++){
        console.log(document.getElementsByTagName('button').length)
        document.getElementsByTagName('button')[i].onclick=function(){
            dataArray.splice(i,1);
            localStorage.setItem('dataArray', JSON.stringify(dataArray));
        }
    }
}