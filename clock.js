let time,sec,min,hour,date,day,month,year;

let sec_arrow = document.getElementById("second-arrow");
let min_arrow = document.getElementById("minute-arrow");
let hour_arrow = document.getElementById("hour-arrow");

let day_span = document.getElementById("day_span");
let date_span = document.getElementById("date_span");
let month_span = document.getElementById("month_span");
let year_span = document.getElementById("year_span");

setInterval(() => {
  // sec++;
  // if(sec==60){
  //     min++;
  //     sec=0;
  //     if(min==60){
  //         hour++;
  //         min=0;
  //         if(hour==24){
  //             hour=0;
  //         }
  //     }
  // }
  time = new Date();
  sec = time.getSeconds();
  min = time.getMinutes();
  hour = time.getHours();
  date=time.getDate();
  day=time.getDay();
  month=time.getMonth();
  year=time.getFullYear();
  display();
}, 1000);

function display() {
//   sec_arrow.style.transform = `rotate(calc(6deg*${sec}))`;
  sec_arrow.animate([
      {transform:`rotate(calc(6deg*${sec}))`},   
      {transform:`rotate(calc(6deg*${sec+1}))`}    
  ],{
    //   easing:"ease",
      duration:1000,
      iterations:1
  });
  min_arrow.style.transform = `rotate(calc(${6 * min + 0.1 * sec}*1deg))`;
  hour_arrow.style.transform = `rotate(calc(${30 * hour + 0.5 * min}*1deg))`;

  //calendar
  switch(month){
      case 0:
         month_span.innerHTML="Jan";
         break; 
      case 1:
         month_span.innerHTML="Feb";
         break; 
      case 2:
         month_span.innerHTML="Mar";
         break; 
      case 3:
         month_span.innerHTML="Apr";
         break; 
      case 4:
         month_span.innerHTML="May";
         break; 
      case 5:
         month_span.innerHTML="Jun";
         break; 
      case 6:
         month_span.innerHTML="Jul";
         break; 
      case 7:
         month_span.innerHTML="Aug";
         break; 
      case 8:
         month_span.innerHTML="Sep";
         break; 
      case 9:
         month_span.innerHTML="Oct";
         break; 
      case 10:
         month_span.innerHTML="Nov";
         break; 
      case 11:
         month_span.innerHTML="Dec";
         break;  
  }
  switch(day){
      case 0:
         day_span.innerHTML="Sun";
         break; 
      case 1:
         day_span.innerHTML="Mon";
         break; 
      case 2:
         day_span.innerHTML="Tue";
         break; 
      case 3:
         day_span.innerHTML="Wed";
         break; 
      case 4:
         day_span.innerHTML="Thu";
         break; 
      case 5:
         day_span.innerHTML="Fri";
         break; 
      case 6:
         day_span.innerHTML="Sat";
         break; 
  }
  date_span.innerHTML=date;
  year_span.innerHTML=year;
}
