
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyAtBzgcHGzqPs-YaqKK-TbJQO5O9gbShrw",
    authDomain: "privecoiffurefinale.firebaseapp.com",
    databaseURL: "https://privecoiffurefinale.firebaseio.com",
    projectId: "privecoiffurefinale",
    storageBucket: "",
    messagingSenderId: "485527401363"
  };
  firebase.initializeApp(config);

document.getElementById("conatctForm").addEventListener("submit", submitForm);

function submitForm(e){
  e.preventDefault();
  
  var name = getValue("name");
  var phone = getValue("phone");
  var Day = getValue("Day");
  var time = getValue("time");
  check();
  if(days.indexOf(Day)==-1 && times.indexOf(time)==-1){
    saveMessage(name,phone,Day,time);
  }else{
    document.getElementById("err").classList.remove('matetrach');
  }

  document.getElementById('conatctForm').reset();
}

function getValue(champ){
  return document.getElementById(champ).value;
}


var ref = firebase.database().ref();
var days = [];
var times = [];
function check(day,time){

  ref.on("value", function(snapshot) {
     var messages = snapshot.val().messages;
     Object.keys(messages).forEach(function(el){
          days.push(messages[el].day);
          times.push(messages[el].time);
     });
  });

}

var messagesRef = firebase.database().ref('messages');

function saveMessage(name,phone,Day,time){
  var newMessageRef = messagesRef.push();
  newMessageRef.set({
    name: name,
    phone: phone,
    Day: Day,
    time: time,
  });
}
