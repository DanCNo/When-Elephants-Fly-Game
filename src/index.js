
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
  let highScores = document.getElementById("high-scores");
  ref.on('value', sortAddData, errorData);

  
  function sortAddData(data) {
    let scores = data.val();
    let values = Object.values(scores);

    let sortedScores = values.sort(function(a,b) {
      return a.score - b.score;
    }).reverse().slice(0, 4);

    
    let list = document.createElement('ol');
    for(let i = 0; i <sortedScores.length; i++){
      let initials = sortedScores[i].name;
      let points = sortedScores[i].score;
      let li = document.createElement('li');
      let textNode = document.createTextNode(initials + ": " + points);
      li.append(textNode);
      list.appendChild(li);
    }
    
    highScores.replaceChild(list, highScores.childNodes[0]);

  }

  function errorData(err){
    console.log(err);
    console.log("error");
  }

 
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
  
  const game = new WhenElephantsFly(gameCanvas);
  
  document.getElementById("submitButton").addEventListener("click", () => {
    let name = document.getElementById("initialSubmit").value.slice(0, 3);
    if(name.length > 0){
      let data = {
        name: name,
        score: game.score
      };
      document.getElementById("initialSubmit").value = null;
      document.getElementById("game-over-menu").style.display = "none";
      ref.push(data);

    }
    // let scoreList = document.getElementById("high-scores");
    // while(scoreList.firstChild){
    //   scoreList.removeChild(scoreList.firstChild);
    // }
    game.restart();
  });
});
