
import WhenElephantsFly from './game';


document.addEventListener("DOMContentLoaded", () => {

  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyAEsPNTL7KHbJGHtI78febk2Tj_848P01w",
    authDomain: "when-elephants-fly-hi-score.firebaseapp.com",
    databaseURL: "https://when-elephants-fly-hi-score.firebaseio.com",
    projectId: "when-elephants-fly-hi-score",
    storageBucket: "when-elephants-fly-hi-score.appspot.com",
    messagingSenderId: "698905963270",
    appId: "1:698905963270:web:495d1b6918d9d96f"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  var database = firebase.database();

  var ref = database.ref('scores');

 
  const modal = document.getElementById("modal");
  const trigger = document.getElementById("trigger");
  const closeButton = document.getElementById("close-button");
  
  function toggleModal() {
    
    modal.classList.toggle("show-modal");
  }
  
  trigger.onclick = () => {
    toggleModal();
  };

  closeButton.onclick = () => {
    toggleModal();
  };

  window.onclick = (event) => {
    
    if (event.target === modal) {
      toggleModal();
    }
  };

  const gameCanvas = document.getElementById('game');
  
  new WhenElephantsFly(gameCanvas);
  

});
