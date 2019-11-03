var VF = Vex.Flow;

// Create an SVG renderer and attach it to the DIV element named "boo".
var div = document.getElementById("boo");
var renderer = new VF.Renderer(div, VF.Renderer.Backends.SVG);

// Size our svg:
renderer.resize(500, 160);

// And get a drawing context:
var context = renderer.getContext();

// // Create a stave at position 10, 40 of width 400 on the canvas.
var stave = new VF.Stave(100, 40, 700);

// Add a clef and time signature.
stave.addClef("treble").addTimeSignature("4/4");

// Connect it to the rendering context and draw!
stave.setContext(context).draw();

var notes = [
  new VF.StaveNote({ clef: "treble", keys: ["c/5"], duration: "q" }),
  new VF.StaveNote({ clef: "treble", keys: ["d/4"], duration: "q" }),
  new VF.StaveNote({ clef: "treble", keys: ["b/4"], duration: "qr" }),
  new VF.StaveNote({
    clef: "treble",
    keys: ["c/4", "b/4", "g/4"],
    duration: "q"
  })
];

var notes2 = [
  new VF.StaveNote({ clef: "treble", keys: ["c/4"], duration: "w" })
];

// Create a voice in 4/4 and add above notes
var voices = [
  new VF.Voice({ num_beats: 4, beat_value: 4 }).addTickables(notes),
  new VF.Voice({ num_beats: 4, beat_value: 4 }).addTickables(notes2)
];

// Format and justify the notes to 400 pixels.
var formatter = new VF.Formatter().joinVoices(voices).format(voices, 400);

// Render voices
voices.forEach(function(v) {
  v.draw(context, stave);
});

l = ["a", "b", "c", "d"];
buttonRandomController = [];
//random
for (let i = 1; i <= 4; i++) {
  let x = getRandomNumber();

  document.getElementById("b" + i).innerHTML = l[x];
}

// console.log(x);

function getRandomNumber() {
  let x = Math.floor(Math.random() * 4);
  console.log("x :", x);
  buttonRandomController.push(x);
  if (buttonRandomController.includes(x)) console.log(buttonRandomController);
  return x;
}
