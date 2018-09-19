# Game Time

<img width="739" alt="screen shot 2018-09-19 at 6 14 28 am" src="https://user-images.githubusercontent.com/32209705/45752626-59917a80-bbd3-11e8-9b79-354a41d6f93a.png">

## Abstract

Learn object oriented programming (OOP) principles by building a game that is playable in the browser.

## Goals

Use OOP to drive the design of the game and the code
Separate business-logic code from view-related code
Create a robust test suite that thoroughly tests all functionality of a client-side application
Restrictions
You can use any of the following JavaScript libraries:

jQuery
Mocha
Moment.js
Numeral.js
(Other libraries may be used only with instructor approval.)

Nota bene: We provide a Game Time Starter Kit that has been preconfigured with webpack. You should use this starter kit.

## Game Choices

Lights Out
Snake
Tron
Othello/Reversi
Frogger
Missile Command

Rank your top three game choices and submit them to instructors by starting a direct message that includes both project partners and all module instructors. (Game requests sent to only one instructor, or missing the project partner, do not count.) Instructors will try to assign you a game in your top three choices, but may suggest a different one based on how many students choose a particular game and difficulty levels.

## Playability Features

We want your game to be as full-featured as possible. Make sure to include sufficient UX to allow the user to fully interact with the game. This would include:

Indicate when the game is over and won or lost
Allow the user to start a new game
Display a score (if applicable)
Include a clean UI surrounding the actual game interface itself (this might include instructions on how to play, a high score saved in localStorage, etc. Think of what would be most intuitive for your particular game.)
Include multiple levels of difficulty
Code organization
Your game should make use of at least two classes; the exact number will depend on which game you choose and your design choices.

You should use inheritance with your classes.

a parent class should have properties that might be shared by several other child classes
a parent class’s properties and methods should be shared by all the child classes
a child classes should inherit those properties from the parent class
The game-time-starter-kit starts with a GamePiece class from which your other classes should inherit.

Each class should have its own file with the filename capitalized. The class should be capitalized as well. Only code that is a part of this class should be in this file.

i.e.
```javascript
// Person.js
class Person {
  constructor (name) {
    this.name = name;
  }
}

// Villain.js
class Villain extends Person {
  constructor (name, skills) {
    super(name);
    this.skills = skills;
  }
}
```

## User Interface

The UI of the game should be clean, intuitive, and informative:

tell the user when the game is over (due to losing, winning, or completing the game)
tell the user the score or number of lives remaining (if applicable)
allow the user to start a new game
If your game uses the arrow keys, you should prevent the page from scrolling when the arrow keys are pressed.

## Testing

Each JavaScript file in your project should have its own test file e.g. if you have a MasterChief.js class file, all the tests for that class should be located in MasterChief-test.js

The test suite will test all functionality of the game (excepting anything touching the DOM):

Class default properties
Class methods
Anything that updates class properties
Class interactions (e.g. a ball colliding with a brick, a frog landing on a lilypad, a score or level incrementing, etc)
etc

## Extensions

Create multiple rounds of difficulty (consider increasing factors such as game speed, randomness of starting setup, etc)
Create an AI player
Get your game hosted on GitHub pages
Write a blog post on Medium detailing your experiences building a game with HTML5 Canvas and OOP
