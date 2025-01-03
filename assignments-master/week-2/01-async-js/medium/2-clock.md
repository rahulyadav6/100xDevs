Using `1-counter.md` or `2-counter.md` from the easy section, can you create a
clock that shows you the current machine time?

Can you make it so that it updates every second, and shows time in the following formats - 

 - HH:MM::SS (Eg. 13:45:23)

 - HH:MM::SS AM/PM (Eg 01:45:23 PM)


 //code

function printCurrentTime(){
  const date = new Date();
  console.clear();
  let hour = date.getHours();
  let minute = date.getMinutes();
  let second = date.getSeconds();
  let ampm = "AM";
  if(hour >= 12) {
    if(hour > 12) hour -= 12;
    ampm = "PM";
  }else if (hour === 0) {
    hour = 12;
    ampm = "AM";
  }
  minute = minute < 10 ? "0" + minute : minute;
  second = second < 10 ? "0" + second : second;
  let answer = hour + ":" + minute + ":" + second + " " + ampm;
  console.log(answer);
}

setInterval(printCurrentTime,1000)
