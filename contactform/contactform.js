// Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyCS9w8cMGRNTbBnpUowILkKGdF4wqTBFnI",
  authDomain: "portfoliofgs.firebaseapp.com",
  databaseURL: "https://portfoliofgs.firebaseio.com",
  projectId: "portfoliofgs",
  storageBucket: "portfoliofgs.appspot.com",
  messagingSenderId: "1022137494338",
  appId: "1:1022137494338:web:fec74c35fc5d4e842ab6db",
  measurementId: "G-GX940N5J6N"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

// Reference messages collection
var messagesRef = firebase.database().ref('messages');

// Listen for form submit
document.getElementById('contactForm').addEventListener('submit', submitForm);

//Submit Form
function submitForm(e){
  e.preventDefault();

  //Get values
  var name = getInputVal('name');
  var email = getInputVal('email');
  var subject = getInputVal('subject');
  var message = getInputVal('message');

  if(name != "" && email != "" && subject != "" && message != "")
  {
    // Save message
    saveMessage(name, email, subject, message);

    // Show alert
    document.querySelector('.alert').style.display = 'block';
    // Hide alert after 3 seconds
    setTimeout(function(){
      document.querySelector('.alert').style.display = 'none';
    },3000);

    // Clear form
    document.getElementById('contactForm').reset();
  }
  else {
    // Show alert
    document.querySelector('.errormessage').style.display = 'block';
    // Hide alert after 3 seconds
    setTimeout(function(){
      document.querySelector('.errormessage').style.display = 'none';
    },3000);
  }

}

// Function to get form values
function getInputVal(id){
  return document.getElementById(id).value;
}

// Save message to firebase
function saveMessage(name, email, subject, message){
  var newMessageRef = messagesRef.push();
  newMessageRef.set({
    name: name,
    email: email,
    subject: subject,
    message: message
  });
}
