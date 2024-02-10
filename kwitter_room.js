var firebaseConfig = {
  apiKey: "AIzaSyAbuUhwWjNvL8fFg21qN-b8TajAy4aQ4m8",
  authDomain: "kwitter-3bde9.firebaseapp.com",
  databaseURL: "https://kwitter-3bde9-default-rtdb.firebaseio.com",
  projectId: "kwitter-3bde9",
  storageBucket: "kwitter-3bde9.appspot.com",
  messagingSenderId: "753296648863",
  appId: "1:753296648863:web:3f24e9df0672c1370510aa"
};

firebase.initializeApp(firebaseConfig);
  user_name = localStorage.getItem("user_name");

document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function addRoom(){
  room_name = document.getElementById("room_name").value;

  firebase.database().ref("/").child(room_name).update({purpose : "adding room name"});
  localStorage.setItem("room_name", room_name);
  window.location = "kwitter_page.html";
}

function getData(){firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML
Room_names = childKey;
console.log("Room Name - " + Room_names);
row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+Room_names +"</div><hr>";
document.getElementById("output").innerHTML += row;
});};
getData();

function redirectToRoomName(name){
  console.log(name);
  localStorage.setItem("room_name", name);
  window.location = "kwitter_page.html";
}

function logout(){
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
  window.location = "index.html";
}



