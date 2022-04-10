// quitter
function login() {
    username=document.getElementById("user_name").value
    localStorage.setItem("name", username)
    window.location="quitter_room.html"
}