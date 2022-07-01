var firebaseConfig = {
      apiKey: "AIzaSyBtT_GX1cMufPYnSiUFhdkBP0FCbJuHYe0",
      authDomain: "quitper-6a9fa.firebaseapp.com",
      databaseURL: "https://quitper-6a9fa-default-rtdb.firebaseio.com",
      projectId: "quitper-6a9fa",
      storageBucket: "quitper-6a9fa.appspot.com",
      messagingSenderId: "963769754651",
      appId: "1:963769754651:web:84abfbf529b34506cc84be"
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
         console.log(firebase_message_id);
         console.log(message_data);
         name=message_data['name'];
         message=message_data['message'];
         like=message_data['like'];
         nametag="<h4>"+name+"<img class='user_tick' src='tick.png'></h4>";
         messagetag="<h4 class='message_h4'>"+message+"</h4>";
likebutton="<button class='btn btn-warning' id="+firebase_message_id+" value="+like+" onclick='update_like(this.id)'>";
         spantag="<span class='glyphicon glyphicon-thumbs-up'>Like: "+like+"</span></button><hr>";
         row=nametag+messagetag+likebutton+spantag;
         console.log(row);
         document.getElementById("output").innerHTML+=row;
      } });  }); }
getData();

function logout () {
      localStorage.removeItem("name")
      localStorage.removeItem("room")
      window.location.replace("index.html")
}
function update_like(message_id) {
      console.log("clikced on like, "+like+" likes, "+message_id)
      button_id=message_id
      likes=document.getElementById(button_id).value
      updatedlikes=Number(likes)+1
      console.log(updatedlikes)
      firebase.database().ref(room_name).child(message_id).update({like:updatedlikes})}