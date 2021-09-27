var firebaseConfig = {
  apiKey: "AIzaSyATqAlRAmvynowBUagfi7ALE-WW75_VKbc",
  authDomain: "project-e22a3.firebaseapp.com",
  databaseURL: "https://project-e22a3-default-rtdb.firebaseio.com",
  projectId: "project-e22a3",
  storageBucket: "project-e22a3.appspot.com",
  messagingSenderId: "746465396850",
  appId: "1:746465396850:web:8469ec2748f34f94589aeb",
  measurementId: "G-R9QPJMKQ9G"
};
  var app = initializeApp(firebaseConfig);


function k(){
    var aud= new Audio("Believer.mp3");
    aud.play();
    aud.loop=true;
    l= localStorage.getItem("user_name");
      document.getElementById("user_name").innerHTML="Welcome "+l+"!";
    }
    k();
      function AddRoom() {
        r= document.getElementById("room_name").value;
        localStorage.setItem("room-name", r);
    firebase.database().ref("/").child(r).update({
    purpose : "adding room-name"
    });
      }