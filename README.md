## JS Project Proposal: When Elephants Fly Game

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

In addition to the entry file, 'board.js' will handle logic for creating and updating the necessary elements to render to the DOM. 'game.js' will handle the game logic for behind the scenes. 'airplane.js' and 'elephant.js' will handle the game objects. 

### Features

* Infinite scrolling
* Gravity / Updraft
* Sprite animation
* Live Score

### Implementation Timeline

Day 1
Set up file structure. Style the single page. Render game space background and scrolling. Render paper airplane and gliding steadily to the ground. 

Day 2
Implement game over when airplane hits the ground. Implement player controls, 'A' and 'D' for increasing and decreasing angle of flight. 

Day 3
Implement placing random updrafts. Implement updraft causing change in airplane movement.

Day 4
Implement flying elephants. Implement crashing into an elephant and ending the game. Implement game over when airplane hits the ground and live score based on time aloft.