const firebaseConfig = {
    apiKey: "AIzaSyDXOOlksn9_aALZfEr9qokjpRr3_X3lqU0",
    authDomain: "kwitter-7741f.firebaseapp.com",
    databaseURL: "https://kwitter-7741f-default-rtdb.firebaseio.com",
    projectId: "kwitter-7741f",
    storageBucket: "kwitter-7741f.appspot.com",
    messagingSenderId: "746449598382",
    appId: "1:746449598382:web:24bbbed7a68a07188bfa3f",
    measurementId: "G-2GE8WSLYGB"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

function addUser() {
    user_name = document.getElementById("user_name").value;
    localStorage.setItem("user_name",user_name);
    window.location = "kwitter_room.html";
}