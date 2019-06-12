## JS Project Proposal: When Elephants Fly Game

[Live Link](https://dancno.github.io/When-Elephants-Fly-Game/index.html "When Elephants Fly")

### About

Control a paper airplane gliding across the screen and catch updrafts to stay aloft as long as possible. Avoid the flying elephants!

### Functionality and MVP

- [ ] Press 'SPACE' to start the game. Press 'P' to pause. Press 'R' to reset.
- [ ] The paper airplane will steadily lose altitude. 
- [ ] Control the rudder with 'A' and 'D'.
      Press 'A' to angle the paper airplane back to gain altitude at the expense of speed.
      Press 'D' to angle the paper airplane forward to gain speed at the expense of altitude.
- [ ] Hitting updrafts will provide lift and altitude to the airplane.
- [ ] Crashing into a flying elephant that moves across the screen will cause a crash and game over.
- [ ] Hitting the ground (altitude = 0) will result in a game over. 

In addition, this project will include:

- [ ] A modal describing game rules and controls.
- [ ] A production README.

### Wireframes

This app will consist of a single screen with a game space and nav links to the Github, my LinkedIn and the About modal. 

![Wireframe](https://github.com/DanCNo/When-Elephants-Fly-Game/blob/master/assets/images/wireframe.png)

### Architecture and Technologies

* Javascript for game logic.
* HTML5 Canvas for rendering sprites and images.
* CSS for styling.

In addition to the entry file, 'level.js' will handle logic for creating and updating the necessary elements to render to the DOM. 'game.js' will handle the game logic for behind the scenes. 'airplane.js' and 'elephant.js' will handle the game objects. 

### Features and Highlights

* Infinite scrolling
* Gravity / Updraft
* Sprite animation
* Live Score
* High Scores with Google Firebase

A modal that pops up on the initial load or on user click on the rules link. 

![Rules](https://github.com/DanCNo/When-Elephants-Fly-Game/blob/master/assets/images/game_rules_modal.png)

An infinitely scrolling level with randomly generated level elements like the background clouds, enemy elephants, and 
updrafts. They're initialized off-screen on the right side and being repositioned back there once they go off-screen on the left side. Also includes the live score.

![Gameplay](https://github.com/DanCNo/When-Elephants-Fly-Game/blob/master/assets/images/gameplay_screen.png)

Game over modal with high scores display integrated with Google Firebase.

![Scores](https://github.com/DanCNo/When-Elephants-Fly-Game/blob/master/assets/images/game_over_modal.png)


