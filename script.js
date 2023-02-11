// Initialize Firebase (ADD YOUR OWN DATA)
const firebaseConfig = {
    apiKey: "AIzaSyCf8sxJyOWZCc-xJzpc29kc6pZ-GNqAJgM",
    authDomain: "dream-it-58043.firebaseapp.com",
    databaseURL: "https://dream-it-58043-default-rtdb.firebaseio.com",
    projectId: "dream-it-58043",
    storageBucket: "dream-it-58043.appspot.com",
    messagingSenderId: "901275509006",
    appId: "1:901275509006:web:d64164a6ce1a2a960f375f",
    measurementId: "G-Y50QHPGJ3V"
  };

  firebase.initializeApp(firebaseConfig);
  
  // Reference messages collection
  var messagesRef = firebase.database().ref('messages');
  
  // Listen for form submit
  document.getElementById('contactForm').addEventListener('submit', submitForm);
  
  // Submit form
  function submitForm(e){
    e.preventDefault();
  
    // Get values
    var name = getInputVal('full-name');
    // var company = getInputVal('company');
    var email = getInputVal('email');
    // var phone = getInputVal('phone');
    var role = getInputVal('signupas');
    var password = getInputVal('password')

    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed in 
          const user = userCredential.user;
          alert('User Created'); 
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;

          alert(errorMessage);

          // ..
        });
  
    // Save message
    saveMessage(name, email, role);
  
    // Show alert
    document.querySelector('.alert').style.display = 'block';
  
    // Hide alert after 3 seconds
    setTimeout(function(){
      document.querySelector('.alert').style.display = 'none';
    },3000);
  
    // Clear form
    document.getElementById('contactForm').reset();
  }
  
  // Function to get get form values
  function getInputVal(id){
    return document.getElementById(id).value;
  }
  
  // Save message to firebase
  function saveMessage(name, email, role){
    var newMessageRef = messagesRef.push();
    newMessageRef.set({
      name: name,
      email:email,
      role:role
    });
  }