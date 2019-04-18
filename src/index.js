
import WhenElephantsFly from './game';


document.addEventListener("DOMContentLoaded", () => {
 
  const modal = document.getElementById("modal");
  const trigger = document.getElementById("trigger");
  const closeButton = document.getElementById("close-button");
  
  function toggleModal() {
    console.log("toggle");
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
