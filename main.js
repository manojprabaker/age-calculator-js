let res = document.getElementById("result");

let btn = document.getElementById("age-btn");

btn.addEventListener("click", function () {
  let d = parseInt(document.getElementById("date").value);
  let m = parseInt(document.getElementById("month").value);
  let y = parseInt(document.getElementById("year").value);

  let dateToday = new Date();
  let dd = dateToday.getDate();
  let mm = dateToday.getMonth() + 1;
  let yy = dateToday.getFullYear();

  //console.log(dd,mm,yy);

  let month = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  if (d > dd) {
    dd = dd + month[mm - 1];
    mm --;
  }
  if (m > mm) {
    mm = mm + 12;
    yy --;
  }
  let dat = dd - d;
  let mon = mm - m;
  let year = yy - y;
  
  res.innerHTML=`${year} years ${mon} months  ${dat} days`
  console.log(dat,mon,year);
});
