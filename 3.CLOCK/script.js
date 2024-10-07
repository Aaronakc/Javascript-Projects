function timer(){
  let today_date=new Date();
  let hours=today_date.getHours();
  let minutes=today_date.getMinutes();
  let second=today_date.getSeconds();
  let millisecond=today_date.getMilliseconds();
  let timerElement=document.querySelector("#timer");
  let AM_PM="AM"
  if(hours>12){
    hours=hours-12;
    AM_PM='PM';
  }
  timerElement.innerHTML=`${hours}:${minutes.toString().padStart(2,'0')}:${second.toString().padStart(2,'0')}:${millisecond.toString().padStart(3,'0')} ${AM_PM}`
}
setInterval(timer,1);