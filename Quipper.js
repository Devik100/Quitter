var firebaseConfig = {
      apiKey: "AIzaSyC7GC97G2XshHUpQsNysiW3wxKO6Y1hl7U",
      authDomain: "quitterwithquips.firebaseapp.com",
      databaseURL: "https://quitterwithquips-default-rtdb.firebaseio.com",
      projectId: "quitterwithquips",
      storageBucket: "quitterwithquips.appspot.com",
      messagingSenderId: "714909310327",
      appId: "1:714909310327:web:0dbf0d3372f1c87097d572"
    };
  
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
var user_name = localStorage.getItem("name")
var room_name = localStorage.getItem("room")
function quip () {
      var msg = document.getElementById("msg").value
      firebase.database().ref(room_name).push({
            name:user_name,
            message: msg,
            like:0
      })
      document.getElementById("msg").value = ""
}

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();

function logout () {
      localStorage.removeItem("name")
      localStorage.removeItem("room")
      window.location.replace("index.html")
}