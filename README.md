
     ,-----.,--.                  ,--. ,---.   ,--.,------.  ,------.
    '  .--./|  | ,---. ,--.,--. ,-|  || o   \  |  ||  .-.  \ |  .---'
    |  |    |  || .-. ||  ||  |' .-. |`..'  |  |  ||  |  \  :|  `--, 
    '  '--'\|  |' '-' ''  ''  '\ `-' | .'  /   |  ||  '--'  /|  `---.
     `-----'`--' `---'  `----'  `---'  `--'    `--'`-------' `------'
    ----------------------------------------------------------------- 
Samantha.js


Introduction
------
A JavaScript framework for developing audio effects and applying them to sound sources–and it's particularly good at guitar effects.

The API and all the abstraction is built around the concept of guitar effects — pedals and stomp boxes, pots and switches.

======
Core
------

The technology that made Samantha.js available is W3C's Web Audio API.


------
Concepts
======


Stage
------

Stage is a manager class, in classical terminology.

Usage:

```js
var stage = new Samantha.Stage();
```

Board
------

Board is analogous to a pedal board, where you put and organize your pedals. It has an InputBuffer instance, an OutputBuffer instance.

Usage:

```js
var stage = new Samantha.Stage();
var board1 = new Samantha.Board(stage.getContext());
var board2 = new Samantha.Board(stage.getContext());

stage.setBoard(board1);
stage.setBoard(board2);
```

Box (pedal)
------

Box is the abstract class for all pedals. Given an AudioContext, Box implements its effects in an effects chain.

Usage:

```js
// initialize the stage and get the context
var stage = new Samantha.Stage();
var ctx = stage.getContext();

// initialize the board and pedals
var board = new Samantha.Board(ctx);
var od = new Samantha.stomp.Overdrive(ctx);
var reverb = new Samantha.stomp.Reverb(ctx);
var vol = new Samantha.stomp.Volume(ctx);

// add pedals to board
board.addPedals([od, reverb]);
board.addPedalsAt(1, vol);

// tweak pedal settings
od.setDrive(0.7);
od.setLevel(0.7);
reverb.setLevel(0.3);
vol.setLevel(0.2);

// set the board on stage and start playing!
stage.setBoard(board);
```

// to be continued