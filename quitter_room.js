var firebaseConfig = {
      apiKey: "AIzaSyC7GC97G2XshHUpQsNysiW3wxKO6Y1hl7U",
      authDomain: "quitterwithquips.firebaseapp.com",
      databaseURL: "https://quitterwithquips-default-rtdb.firebaseio.com",
      projectId: "quitterwithquips",
      storageBucket: "quitterwithquips.appspot.com",
      messagingSenderId: "714909310327",
      appId: "1:714909310327:web:0dbf0d3372f1c87097d572"
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