function eyetoggle(){
  if ($("#password-input").attr("type") == "password") {
    $("#password-input").attr("type", "text");
    document.getElementById('eyes').style.color = 'black';
  } else {
    $("#password-input").attr("type", "password");
    document.getElementById('eyes').style.color = 'lightgrey';
  }
}

// 123
function unlock(){
  if(document.getElementById('password-input').value == '123'){
    document.getElementById('lock-page').style.display = 'none';
    document.getElementById('home').style.display = 'block';
    document.getElementById('navheader').style.display = 'flex';

    timeFunction();
    nextQuote();
  }else{
    alert('Wrong Password');
  }
}

function chooseHome(){
  document.getElementById('home').style.display = 'block';
  document.getElementById('page1').style.display = 'none';
  document.getElementById('time').style.display = 'none';

  document.getElementById("btnhome").classList.add("active");
  document.getElementById("btnquiz").classList.remove("active");
  document.getElementById("btntime").classList.remove("active");
}

function choosePage1(){
  document.getElementById('home').style.display = 'none';
  document.getElementById('page1').style.display = 'block';
  document.getElementById('time').style.display = 'none';

  document.getElementById("btnhome").classList.remove("active");
  document.getElementById("btnquiz").classList.add("active");
  document.getElementById("btntime").classList.remove("active");
}

function chooseTime(){
  document.getElementById('home').style.display = 'none';
  document.getElementById('page1').style.display = 'none';
  document.getElementById('time').style.display = 'block';

  document.getElementById("btnhome").classList.remove("active");
  document.getElementById("btnquiz").classList.remove("active");
  document.getElementById("btntime").classList.add("active");

  document.getElementById('container1').style.display = 'none';
  document.getElementById('container2').style.display = 'none';
  document.getElementById('container3').style.display = 'none';

  document.getElementById('container4').style.display = 'none';
  document.getElementById('container5').style.display = 'none';
  document.getElementById('container6').style.display = 'none';

  document.getElementById('container7').style.display = 'none';
  document.getElementById('container8').style.display = 'none';
  document.getElementById('container9').style.display = 'none';

  document.getElementById('container10').style.display = 'none';
  document.getElementById('container11').style.display = 'none';
  document.getElementById('container12').style.display = 'none';

  document.getElementById('container13').style.display = 'none';
  document.getElementById('container14').style.display = 'none';
  document.getElementById('container15').style.display = 'none';

  document.getElementById('container16').style.display = 'none';
  document.getElementById('container17').style.display = 'none';
  document.getElementById('container18').style.display = 'none';

  document.getElementById('container19').style.display = 'none';
  document.getElementById('container20').style.display = 'none';
  document.getElementById('container21').style.display = 'none';

  document.getElementById('container22').style.display = 'none';
  document.getElementById('container23').style.display = 'none';
  document.getElementById('container24').style.display = 'none';

  document.getElementById('container25').style.display = 'none';
  document.getElementById('container26').style.display = 'none';
  document.getElementById('container27').style.display = 'none';

  document.getElementById('container28').style.display = 'none';
  document.getElementById('container29').style.display = 'none';
  document.getElementById('container30').style.display = 'none';

  document.getElementById('container31').style.display = 'none';
  document.getElementById('container32').style.display = 'none';
  document.getElementById('container33').style.display = 'none';

  document.getElementById('container34').style.display = 'none';
  document.getElementById('container35').style.display = 'none';
  document.getElementById('container36').style.display = 'none';

  document.getElementById('container37').style.display = 'none';
  document.getElementById('container38').style.display = 'none';
  document.getElementById('container39').style.display = 'none';
}

function unlock1(){
  // Ref: https://stackoverflow.com/questions/1531093/how-do-i-get-the-current-date-in-javascript
  var today = new Date();
  var dd = String(today.getDate()).padStart(2, '0');
  var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0
  var yyyy = today.getFullYear();
  today = mm + '/' + dd + '/' + yyyy;

  if(document.getElementById('page1-input').value == today){
    document.getElementById('page1').style.display = 'none';
    document.getElementById('page2').style.display = 'block';
    document.getElementById('navheader').style.display = 'none';
  }else{
    alert('Check the calender');
  }
}

// mcdonalds
function unlock2(){
  if(document.getElementById('page2-input').value.toLowerCase() == 'mcdonalds'){
    document.getElementById('page2').style.display = 'none';
    document.getElementById('page3').style.display = 'block';
  }else{
    alert("Its cheap, and I'm loving it MMM 🍟🍦🐔🐤");
  }
}

// 3
function unlock3(){
  if(document.querySelector('input[name="page3-radio"]:checked').value === '1'){
    document.getElementById('page3').style.display = 'none';
    document.getElementById('page4').style.display = 'block';
  }else{
    alert('1 + 2');
  }
}

// 1, 0, 1, 1,
function unlock4(){
  if( document.getElementById("page4-check1").checked == true && 
      document.getElementById("page4-check2").checked == false &&
      document.getElementById("page4-check3").checked == true &&
      document.getElementById("page4-check4").checked == true){
    document.getElementById('page4').style.display = 'none';
    document.getElementById('page5').style.display = 'block';
  }else{
    alert('1, 0, 1, 1');
  }
}

// yes
function unlock5(){
  if(document.getElementById('page5-input').value.toLowerCase() == 'yes'){
    document.getElementById('page5').style.display = 'none';
    document.getElementById('home').style.display = 'block';
    document.getElementById('navheader').style.display = 'flex';

    document.getElementById("btnhome").classList.add("active");
    document.getElementById("btnquiz").classList.remove("active");
    document.getElementById("btntime").classList.remove("active");
  }else{
    alert('The only correct answer is yes');
  }
}


// Local time function
function timeFunction() {
  var months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  var d = new Date();

  var day = days[d.getDay()];
  var date = d.getDate();
  var month = months[d.getMonth()];
  var year = d.getFullYear();

  document.getElementById("day").innerHTML = day + ", " + month + " " + date + ", " + year;
}


function toggleid(id){
  if(document.getElementById(id).style.display == 'none'){
    document.getElementById(id).style.display = 'block';
  } else {
    document.getElementById(id).style.display = 'none';
  }
}

function toggle1(a, b, c){
  toggleid(a);
  toggleid(b);
  toggleid(c);
}


// iterate through quotes
var quoteNum = -1;
function nextQuote(){
  if(quoteNum != quoteSource.length -1){
    quoteNum += 1
  }else{
    quoteNum = 0;
  }
  document.getElementById("quote").innerHTML = '"' + quoteSource[quoteNum].quote + '"';
  document.getElementById("name").innerHTML = '- ' + quoteSource[quoteNum].name;
}

var quoteSource = [{
  quote: "Start by doing what's necessary; then do what's possible; and suddenly you are doing the impossible.",
  name:"Francis of Assisi" 
}, {
  quote:"Believe you can and you're halfway there.",
  name:"Theodore Roosevelt"
}, {
  quote:"It does not matter how slowly you go as long as you do not stop.",
  name:"Confucius"
}, {
  quote:"Our greatest weakness lies in giving up. The most certain way to succeed is always to try just one more time.",
  name:"Thomas A. Edison"
}, {
  quote:"Don't watch the clock; do what it does. Keep going.",
  name:"Sam Levenson"
}];




