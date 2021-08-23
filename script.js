// Authentication //

var emailEl = document.getElementById("email");
var userNameEl = document.getElementById("user-name")
var restaurantName = document.getElementById("restaurant");
var passEl = document.getElementById("password");
var cityName = document.getElementById("city");
var phoneNum = document.getElementById("phone-num");
var countryName = document.getElementById("country");

// For User SignUp //

function userSignUp() {
    saveUserInFirestore();
    firebase.auth().createUserWithEmailAndPassword(emailEl.value, passEl.value)
        .then((userCredential) => {
            // Signed in 
            var user = userCredential.user;
            console.log(user, userCredential);
            window.location = "./home.html";

            // ...
        })
        .catch((error) => {
            console.error(error);
            // ..
        });
}

// For User Sign In //

function userSignIn() {
    firebase.auth().signInWithEmailAndPassword(emailEl.value, passEl.value)
        .then((userCredential) => {
            // Signed in      
            var user = userCredential.user;
            console.log(user, userCredential);
            window.location = "./home.html";
            // ...
        })
        .catch((error) => {
            console.error(error)
        });
}

// For Seller SignUp //

function sellerSignUp() {
    saveSellerInFirestore();
    firebase.auth().createUserWithEmailAndPassword(emailEl.value, passEl.value)
        .then((userCredential) => {
            // Signed in 
            var user = userCredential.user;
            console.log(user, userCredential);
            window.location = "./Dashboard.html";

            // ...
        })
        .catch((error) => {
            console.error(error);
            // ..
        });
}

// For Seller Sign In //

function sellerSignIn() {
    firebase.auth().signInWithEmailAndPassword(emailEl.value, passEl.value)
        .then((userCredential) => {
            // Signed in      
            var user = userCredential.user;
            console.log(user, userCredential);
            window.location = "./Dashboard.html";
            // ...
        })
        .catch((error) => {
            console.error(error)
        });
}
// For Sign Out //
// For user
function userSignOut() {
    firebase.auth().signOut()
        .then(() => {
            // Sign-out successful.
            window.location = "../index.html"
        }).catch((error) => {
            // An error happened.
        });
}
// For Seller
function sellerSignOut() {
    firebase.auth().signOut()
        .then(() => {
            // Sign-out successful.
            window.location = "../index.html"
        }).catch((error) => {
            // An error happened.
        });
}

// Forget Password //

function sendResetLink() {
    let emailAddress = emailEl.value
    firebase.auth().sendPasswordResetEmail(emailAddress)
        .then(() => {
            window.alert("Email has Sent!");
            // Password reset email sent!
            // ..
            window.location = "./Main/index.html";
            setTimeout(() => {
            }, 500);
        })
        .catch((error) => {
            window.alert(error);
            // ..
        });

}

// On auth state change
function userObserver() {
    firebase.auth().onAuthStateChanged((user) => {
        if (user) {
            // User is signed in, see docs for a list of available properties
            // https://firebase.google.com/docs/reference/js/firebase.User
            var uid = user.uid;
            console.log(uid + " is logged in");
            // ...
        } else {
            // User is signed out
            // ...
            console.log("There are no user logged in");
        }
    });
}
// Firestore //

let db = firebase.firestore();

function saveUserInFirestore() {


    // Add a new document in collection "Users"
    db.collection("Users").doc().set({
        name: userNameEl.value,
        email: emailEl.value,
        phoneNumber: phoneNum.value,
        country: countryName.value,
        city: cityName.value
    })
        .then(() => {
            console.log("Document successfully written!");
        })
        .catch((error) => {
            console.error("Error writing document: ", error);
        });

}
function saveSellerInFirestore() {


    // Add a new document in collection "Users"
    db.collection("Seller").doc().set({
        email: emailEl.value,
        restaurant: restaurant.value,
        country: countryName.value,
        city: cityName.value,
    })
        .then(() => {
            console.log("Document successfully written!");
        })
        .catch((error) => {
            console.error("Error writing document: ", error);
        });

}

// For Order //

// let itemName = document.getElementById("order");
// let additionalFood =  document.getElementById('additional-food');
// let quantityEl =  document.getElementById("quantity");
// let addressEl =  document.getElementById("address");
// let messageEl =  document.getElementById('message');

// function getOrder(){
//     db.collection("Orders").doc().set({
//         item: itemName.value,
//         additionalItem: additionalFood.value,
//         amount: quantityEl.value,
//         addressValue: addressEl.value,
//         note: messageEl.value
//     })
//     .then(() => {
//         console.log("Document successfully written!");
//     })
//     .catch((error) => {
//         console.error("Error writing document: ", error);
//     });
// }