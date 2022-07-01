var firebaseConfig = {
      apiKey: "AIzaSyBtT_GX1cMufPYnSiUFhdkBP0FCbJuHYe0",
      authDomain: "quitper-6a9fa.firebaseapp.com",
      databaseURL: "https://quitper-6a9fa-default-rtdb.firebaseio.com",
      projectId: "quitper-6a9fa",
      storageBucket: "quitper-6a9fa.appspot.com",
      messagingSenderId: "963769754651",
      appId: "1:963769754651:web:84abfbf529b34506cc84be"
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