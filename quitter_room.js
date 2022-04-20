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

    function quit() {
      window.location="index.html"
      localStorage.removeItem("name")
}

var naem = localStorage.getItem("name")
document.getElementById("quittergreeter").innerHTML = "Welcome, " + naem + ", you're a quitter!"

function quittonewroom() {
      var quitid = document.getElementById("room name").value;
      firebase.database().ref("/").child(quitid).update({
            you: "are a quitter",
            thus: "you are welcome in quitter"
      })
      localStorage.setItem("room", quitid)
      window.location = "quipper.html"
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("quitsthatpeopleliketoquitto").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       quitids = childKey;
       console.log(quitids)
       var quitthing = "<div class='quitname' id="+quitids+" onclick='quittoquipper(this.id)' >"+ quitids +"</div><hr>";
       document.getElementById("quitsthatpeopleliketoquitto").innerHTML += quitthing
      });});}
getData();

function quittoplacedroom(name) {
  console.log(name)
  localStorage.setItem("room", name)
  window.location = "quipper.html"
}