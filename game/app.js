// Firebase project details
const firebaseConfig = {
    apiKey: "AIzaSyDxqRXxnDHXeWyQ7TXt-Z9VTtjeBA0rMnI",
    authDomain: "balloon-pop-50073.firebaseapp.com",
    projectId: "balloon-pop-50073",
    storageBucket: "balloon-pop-50073.appspot.com",
    messagingSenderId: "732022201529",
    appId: "1:732022201529:web:2631c5906c5f3d1509cf68",
    measurementId: "G-MJE4RDW549"
};

firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();   //store auth functnality in variable



// Function for show signup pop-up
function showsignup() {
    document.getElementById('signupsec').style.display = 'block';
    document.getElementById('loginsec').style.display = 'none';
}

// function for show login pop-up
function showslogin() {
    document.getElementById('signupsec').style.display = 'none';
    document.getElementById('loginsec').style.display = 'block';
}

// function for firebase signup
function signup_func() {
    let sign_Email = document.getElementById('signEmail').value;
    let sign_Pass = document.getElementById('signPass').value;
    console.log(sign_Email);
    auth.createUserWithEmailAndPassword(sign_Email, sign_Pass)
        .then((userCredential) => {
            // Signed in 
            let user1 = userCredential.user;
            alert("Signup Successfull");
            document.getElementById("loginsec").style.display = "block";
            document.getElementById("signupsec").style.display = "none";
            // ...
        })
        .catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
            // ..
        });
}

// check change in authentication
auth.onAuthStateChanged((user) => {
    if (user) {
        if (window.location.href.indexOf("home.html") == -1) {
            window.location.replace("home.html")
        }
        else {
            if (window.location.href.indexOf("index.html") == -1) {
                window.location.replace("index.html")
            }
        }
    }
});

//login function
function login() {
    const email = document.getElementById("loginEmail").value;
    const password = document.getElementById("loginPass").value;
    firebase.auth().signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            console.log("ok")
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorMessage);
            // ..
        });
}





//play function
function play() {
    document.getElementById('gameL1').style.display = 'block';
    let live = 3;
    document.getElementById("lives").innerHTML = live + " " + "lives"

    color = ['red' , 'green' , 'yellow']
    function pick(){
        col = color[Math.floor(Math.random() * color.length)]
        co2 = document.getElementsByClassName("dot");
        co2.style.backgroundColor = co2
    }
}



//popping
 
