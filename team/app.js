const firebaseConfig = {
    apiKey: "AIzaSyA6eS9yopiPdMcWEORlTcps64u-2lvOlY4",
    authDomain: "project-management-5d622.firebaseapp.com",
    projectId: "project-management-5d622",
    storageBucket: "project-management-5d622.appspot.com",
    messagingSenderId: "354788390920",
    appId: "1:354788390920:web:1a6f34aa67ecc61f0979bd",
    measurementId: "G-W4CQXM15WR"
}

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
var database = firebase.database();

function showSignup() {
    document.getElementById("LoginSec").style.display = "none";
    document.getElementById("SingupSec").style.display = "block";
    document.getElementById("signupform").reset();
}


// function signup_back() {
//     document.getElementById("LoginSec").style.display = "block";
//     document.getElementById("SingupSec").style.display = "none";
// }

function signup_func() {
    let sign_Email = document.getElementById("signEmail").value;
    let sign_Pass = document.getElementById("signPass").value;
    console.log(sign_Email);
    firebase.auth().createUserWithEmailAndPassword(sign_Email, sign_Pass)
        .then((userCredential) => {
            // Signed in 
            let user1 = userCredential.user;
            alert("Signup Successfull");
            document.getElementById("LoginSec").style.display = "block";
            document.getElementById("SingupSec").style.display = "none";
            // ...
        })
        .catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
            // ..
        });
}




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



function logout() {
    firebase.auth().signOut().then(() => {
        // Sign-out successful.
        window.location.href = "index.html"
    }).catch((error) => {
        // An error happened.
    });
}

firebase.auth().onAuthStateChanged((user) => {
    if (user) {
        if (window.location.href.indexOf("home.html") == -1) {
            window.location.replace("home.html")
        }
    } else {
        if (window.location.href.indexOf("index.html") == -1) {
            window.location.replace("index.html")
        }
    }
});

function showprojectpopup() {
    document.getElementById("cpopup").style.display = "block";
}

function insert_project1() {
    const user = auth.currentUser.email;
    const uid = auth.currentUser.uid;
    const memEmail = document.getElementById("memEmail").value
    let ProjectName = document.getElementById("proName").value
    let dataref = database.ref("OwnProject/")
    dataref.push({
        id: uid,
        email: user,
        Project: ProjectName,
        MemberEmail: memEmail 
    })
}

function closerojectpopup() {
    document.getElementById("cpopup").style.display = "none";
}

function showownProject(){
    const uid = auth.currentUser.uid;
    database.ref('OwnProject/').on('value',function(snapshot){
        snapshot.forEach(function(childsnapshot){
            let childkey = childsnapshot.key;
            let childdata = childsnapshot.val(); //let ko var mai change kia hy
            if (childdata.id === uid){
                console.log(childdata.MemberEmail)
            }
        })
    })
}




