function clock() {
  let weeks = new Array("Sun", "Mon", "Thu", "Wed", "Thr", "Fri", "Sat");
  let now = new Date();
  let y = now.getFullYear();
  let mo = now.getMonth() + 1;
  let d = now.getDate();
  let w = weeks[now.getDay()];
  let h = now.getHours();
  let mi = now.getMinutes();
  let s = now.getSeconds();

  if(mo < 10)mo = "0" + mo;
  if(d < 10)d = "0" + d;
  if(mi < 10)mi = "0" + mi;
  if(s < 10)s = "0" + s;

  document.getElementById("clock_date").innerHTML = y + "/" + mo + "/" + d + "(" + w + ")";
  document.getElementById("clock_time").innerHTML = h + ":" + mi + ":" + s;
  document.getElementById("clock_frame").style.fontSize = window.innerWidth / 10 + "px";
}

setInterval(clock, 1000);
