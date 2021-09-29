let colorSample = null;
let answers = [];
let correctColorCode = null;
let score = 0;
let total = 0;
let choose = 0;
let j = 0;
let game = 999;

if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("/sw.js");
}

window.onload = function() {
  document.getElementById("color").onclick = ColorChoice;
  function ColorChoice() {
    game = 1;
    document.getElementById("one").style.display = "block";
    document.getElementById("two").style.display = "block";
    document.getElementById("three").style.display = "block";
    document.getElementById("color").style.visibility = "hidden";
    document.getElementById("hex").style.visibility = "hidden";
  }
  document.getElementById("hex").onclick = HexChoice;
  function HexChoice() {
    game = 0;
    document.getElementById("one").style.display = "block";
    document.getElementById("two").style.display = "block";
    document.getElementById("three").style.display = "block";
    document.getElementById("color").style.visibility = "hidden";
    document.getElementById("hex").style.visibility = "hidden";
  }

  document.getElementById("one").onclick = start1;
  function start1() {
    document.getElementById("color").style.visibility = "hidden";
    document.getElementById("hex").style.visibility = "hidden";
    document.getElementById("name").style.visibility = "hidden";
    choose = 1;
    document.getElementById("one").style.display = "none";
    document.getElementById("two").style.display = "none";
    document.getElementById("three").style.display = "none";
    document.getElementById("colorSample").style.visibility = "visible";
    document.getElementById("total").style.visibility = "visible";
    document.getElementById("a").style.visibility = "visible";
    document.getElementById("b").style.visibility = "visible";
    document.getElementById("title").style.visibility = "visible";
    if (game == 1) {
      document.getElementById("colorSample").style.backgroundColor = "white";
      document.getElementById("title").innerHTML =
        "What is the colour of this HEX code?";
      loadNewQuestion2();
    } else if (game == 0) {
      document.getElementById("title").innerHTML =
        "What is the HEX code for this colour?";

      document.getElementById("a").style.backgroundColor = "white";

      document.getElementById("b").style.backgroundColor = "white";
      document.getElementById("c").style.backgroundColor = "white";
      document.getElementById("d").style.backgroundColor = "white";
      document.getElementById("e").style.backgroundColor = "white";
      document.getElementById("f").style.backgroundColor = "white";
      document.getElementById("g").style.backgroundColor = "white";
      document.getElementById("h").style.backgroundColor = "white";
            loadNewQuestion();

    }
  }

  document.getElementById("two").onclick = start2;
  function start2() {
    document.getElementById("color").style.visibility = "hidden";
    document.getElementById("hex").style.visibility = "hidden";
    document.getElementById("name").style.visibility = "hidden";

    choose = 2;
    document.getElementById("one").style.display = "none";
    document.getElementById("two").style.display = "none";
    document.getElementById("three").style.display = "none";
    document.getElementById("colorSample").style.visibility = "visible";
    document.getElementById("total").style.visibility = "visible";
    document.getElementById("a").style.visibility = "visible";
    document.getElementById("b").style.visibility = "visible";
    document.getElementById("c").style.visibility = "visible";
    document.getElementById("d").style.visibility = "visible";
    document.getElementById("title").style.visibility = "visible";
    if (game == 1) {
      document.getElementById("colorSample").style.backgroundColor = "white";
      document.getElementById("title").innerHTML =
        "What is the colour of this HEX code?";

      loadNewQuestion2();
    } else if (game == 0) {
      document.getElementById("title").innerHTML =
        "What is the HEX code for this colour?";

      document.getElementById("a").style.backgroundColor = "white";
      document.getElementById("b").style.backgroundColor = "white";
      document.getElementById("c").style.backgroundColor = "white";
      document.getElementById("d").style.backgroundColor = "white";
      document.getElementById("e").style.backgroundColor = "white";
      document.getElementById("f").style.backgroundColor = "white";
      document.getElementById("g").style.backgroundColor = "white";
      document.getElementById("h").style.backgroundColor = "white";
      loadNewQuestion();
    }
  }
  document.getElementById("three").onclick = start3;

  function start3() {
    document.getElementById("color").style.visibility = "hidden";
    document.getElementById("hex").style.visibility = "hidden";
    document.getElementById("name").style.visibility = "hidden";

    choose = 3;
    document.getElementById("one").style.display = "none";
    document.getElementById("two").style.display = "none";
    document.getElementById("three").style.display = "none";
    document.getElementById("colorSample").style.visibility = "visible";
    document.getElementById("total").style.visibility = "visible";
    document.getElementById("a").style.visibility = "visible";
    document.getElementById("b").style.visibility = "visible";
    document.getElementById("c").style.visibility = "visible";
    document.getElementById("d").style.visibility = "visible";
    document.getElementById("e").style.visibility = "visible";
    document.getElementById("f").style.visibility = "visible";
    document.getElementById("g").style.visibility = "visible";
    document.getElementById("h").style.visibility = "visible";
    document.getElementById("title").style.visibility = "visible";
    if (game == 1) {
      document.getElementById("colorSample").style.backgroundColor = "white";
      document.getElementById("title").innerHTML =
        "What is the colour of this HEX code?";

      loadNewQuestion2();
    } else if (game == 0) {
      loadNewQuestion();
      document.getElementById("a").style.backgroundColor = "white";
      document.getElementById("title").innerHTML =
        "What is the HEX code for this colour?";

      document.getElementById("b").style.backgroundColor = "white";
      document.getElementById("c").style.backgroundColor = "white";
      document.getElementById("d").style.backgroundColor = "white";
      document.getElementById("e").style.backgroundColor = "white";
      document.getElementById("f").style.backgroundColor = "white";
      document.getElementById("g").style.backgroundColor = "white";
      document.getElementById("h").style.backgroundColor = "white";
    }
  }

  colorSample = document.getElementById("colorSample");

  answers.push(document.getElementById("a"));
  answers.push(document.getElementById("b"));
  answers.push(document.getElementById("c"));
  answers.push(document.getElementById("d"));
  answers.push(document.getElementById("e"));
  answers.push(document.getElementById("f"));
  answers.push(document.getElementById("g"));
  answers.push(document.getElementById("h"));

  for (let i = 0; i < answers.length; i++) {
    answers[i].addEventListener("click", function() {
      if (game == 1) {
        markIt2(this);
      } else if (game == 0) {
        markIt(this);
      }
    });
  }
  if (game == 1) {
    loadNewQuestion2();
  } else if (game == 0) {
    loadNewQuestion();
  }
};
function begin() {
  document.getElementById("color").style.visibility = "visible";
  document.getElementById("hex").style.visibility = "visible";
  document.getElementById("colorSample").style.visibility = "hidden";
  document.getElementById("total").style.visibility = "hidden";
  document.getElementById("a").style.visibility = "hidden";
  document.getElementById("b").style.visibility = "hidden";
  document.getElementById("title").style.visibility = "hidden";
  document.getElementById("c").style.visibility = "hidden";
  document.getElementById("d").style.visibility = "hidden";
  document.getElementById("e").style.visibility = "hidden";
  document.getElementById("f").style.visibility = "hidden";
  document.getElementById("g").style.visibility = "hidden";
  document.getElementById("h").style.visibility = "hidden";
  document.getElementById("name").style.visibility = "visible";
}

function markIt(elem) {
  if (total >= 10) {
    begin();
    total = 0;
    score = 0;
  }
  let gotItRight = false;
  total++;
  console.log("comparing " + elem.innerHTML + " to " + correctColorCode);
  if (elem.innerHTML == correctColorCode) {
    score++;
    gotItRight = true;
  }
  document.getElementById("score").innerHTML = score + " / " + total;
  window.setTimeout(function() {
    if (gotItRight) {
      colorSample.innerHTML = "Correct!";
    } else {
      colorSample.innerHTML = "Incorrect!";
    }
  }, 100);
  window.setTimeout(function() {
    loadNewQuestion();
  }, 1000);
}

function loadNewQuestion() {
  let colorCode = getRandomHexCode();
  colorSample.innerHTML = "";
  colorSample.style.backgroundColor = colorCode;
  if (choose == 1) {
    j = 2;
  }
  if (choose == 2) {
    j = 4;
  }
  if (choose == 3) {
    j = 8;
  }
  let solution = Math.floor(Math.random() * j);
  for (let i = 0; i < answers.length; i++) {
    answers[i].style.fontSize = "2em";
    if (i == solution) {
      answers[i].innerHTML = colorCode;
    } else {
      answers[i].innerHTML = getRandomHexCode();
    }
  }
  correctColorCode = colorCode;
}

function markIt2(elem) {
  if (total >= 10) {
    total = 0;
    score = 0;
    begin();
  }
  let gotItRight = false;
  total++;
  console.log("comparing " + elem.innerHTML + " to " + correctColorCode);
  if (elem.innerHTML == "get") {
    score++;
    gotItRight = true;
  }
  document.getElementById("score").innerHTML = score + " / " + total;
  window.setTimeout(function() {
    if (gotItRight) {
      colorSample.innerHTML = "Correct!";
    } else {
      colorSample.innerHTML = "Incorrect!";
    }
  }, 100);
  window.setTimeout(function() {
    loadNewQuestion2();
  }, 1000);
}

function loadNewQuestion2() {
  let hexCode = getRandomHexCode();
  colorSample.innerHTML = hexCode;
  for (let y = 0; y < answers.length; y++) {
    console.log("Loading random hex code in answers");
    answers[y].innerHTML = " ";
    answers[y].style.backgroundColor = getRandomHexCode();
  }
  answers.innerHTML = "";
  if (choose == 1) {
    j = 2;
  }
  if (choose == 2) {
    j = 4;
  }
  if (choose == 3) {
    j = 8;
  }
  let ans = Math.floor(Math.random() * j);
  for (let i1 = 0; i1 < answers.length; i1++) {
    if (i1 == ans) {
      answers[i1].style.backgroundColor = hexCode;
      answers[i1].innerHTML = "get";
      answers[i1].style.fontSize = "0";
    }
  }
  correctColorCode = hexCode;
}

function getRandomHexCode() {
  let result = [];
  let hexRef = [
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "a",
    "b",
    "c",
    "d",
    "e",
    "f"
  ];
  result.push("#");
  for (let n = 0; n < 6; n++) {
    result.push(hexRef[Math.floor(Math.random() * 16)]);
  }
  return result.join("");
}
