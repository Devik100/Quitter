var firebaseConfig = {
    apiKey: "AIzaSyCs_A-FNThPEhs9ESwvGEdbvAh8nX42t8A",
    authDomain: "quitt-supreme.firebaseapp.com",
    databaseURL: "https://quitt-supreme-default-rtdb.firebaseio.com",
    projectId: "quitt-supreme",
    storageBucket: "quitt-supreme.appspot.com",
    messagingSenderId: "279377395128",
    appId: "1:279377395128:web:00b6cca41b43d6c0aa634d"
  };
firebase.initializeApp(firebaseConfig);

    function goodbye() {
      window.location="index.html"
      localStorage.removeItem("name")
}

function quittoroom() {
      var quitname = document.getElementById("room name").value;
      firebase.database().ref("/").child(quitname).update({
          // I didn't know what to put here.
      })
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();