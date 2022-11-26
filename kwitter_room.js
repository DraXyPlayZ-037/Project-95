var firebaseConfig = {
    apiKey: "AIzaSyCn_jnX494ecAxrXz8LQh1auGJXuB91oyo",
    authDomain: "kwitterproject-2521e.firebaseapp.com",
    databaseURL: "https://kwitterproject-2521e-default-rtdb.firebaseio.com",
    projectId: "kwitterproject-2521e",
    storageBucket: "kwitterproject-2521e.appspot.com",
    messagingSenderId: "604431470198",
    appId: "1:604431470198:web:123e20033ce69d29a69957"
};



function dedi() {
    uio = localStorage.getItem("Username");
    document.getElementById("hitg").innerHTML = " Welcome, " + uio;
}


firebase.initializeApp(firebaseConfig);

function totor() {

    localStorage.removeItem("Username");
    window.location = "index.html"
};


function ofef() {
    roomn = document.getElementById("amos").value;
    firebase.database().ref("/").child(roomn).update({
        purpose: "Adding Room Name"

    })
    localStorage.setItem("Room_Name", roomn);
    window.location = "kwittermessagepage.html";
};

function getData() {
    firebase.database().ref("/").on('value',
        function(snapshot) {
            document.getElementById("output").innerHTML =
                "";
            snapshot.forEach(function(childSnapshot) {
                childKey = childSnapshot.key;
                Room_names = childKey;
                //Start code
                r = "<div id=" + Room_names + " onclick='Redirect(this.id)'># " + Room_names + "</div> <hr>"
                document.getElementById("output").innerHTML += r;
                //End code
            });
        });
}
getData();