let day = document.getElementById('day');

let month = document.getElementById('month');

let year = document.getElementById('year');

let btn = document.getElementById('submit-btn') ; 

let new_age = document.getElementById('display-age') ; 



btn.addEventListener("click" , function(e){
    e.preventDefault();
let date = new Date(); 

 let y = Math.abs(date.getFullYear()-year.value)  ;

   let m = Math.abs(date.getMonth()-month.value ) ; 

   let d =Math.abs( date.getDate()-day.value)  ; 


    let displayday =document.getElementById('display-day')
    let displaymonth =document.getElementById('display-month')
    let displayyear =document.getElementById('display-year')
    
    displayday.append(d) ; 
    displaymonth.append(m);
    displayyear.append(y);
}); 