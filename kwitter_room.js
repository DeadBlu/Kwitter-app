
var firebaseConfig = {
  apiKey: "AIzaSyBpLztwfN9KLRDSeityLPLAuQUywf-uZvc",
  authDomain: "project-103e3.firebaseapp.com",
  databaseURL: "https://project-103e3-default-rtdb.firebaseio.com",
  projectId: "project-103e3",
  storageBucket: "project-103e3.appspot.com",
  messagingSenderId: "67254334085",
  appId: "1:67254334085:web:5f4259aa4304e72e7fefec",
  measurementId: "G-T5Q9VPTL7K"
};
  firebase.initializeApp(firebaseConfig);
  user_name=localStorage.getItem("user_name");
  function addRoom(){
    room_name = document.getElementById("room_name").value;

    firebase.database().ref("/").child(room_name).update({

    });
    localStorage.setItem("room_name", room_name);

    window.location = "kwitter_room.html";
  }
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
    //Start code
    console.log("Room Name - " + Room_names);
    row = "<div class'room_name' id="+Room_names-" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"<div><hr>";
    document.getElementById("output").innerHTML += row;
    //End code
    });});}
getData();

function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_room.html";
}
firebase.database().ref(room_name).push({
  name:user,
  message:msg,
  like:0
});
