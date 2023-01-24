clicks = 0;
const trackClicks = () => {
  clicks++;
  console.log(clicks);
};

// [0] - characters
// [1] - keystrokes
const inputFields = new Map();
document.onkeydown = (e) => {
  if (e.target.nodeName !== "INPUT") return;
  console.log(e.key);

  const name = e.target.placeholder;
  //initialize
  if (typeof inputFields.get(name) == "undefined")
    inputFields.set(name, [0, 0]);
  //if character or keystroke
  const previousResult = inputFields.get(name);
  if (e.key === "Backspace")
    inputFields.set(name, [previousResult[0] - 1, previousResult[1] + 1]);
  if (e.key.length === 1)
    inputFields.set(name, [previousResult[0] + 1, previousResult[1] + 1]);
};

const statistics = [
  "Number of mouse clicks: ",
  "Total time spent(seconds): ",
  "Total key presses: ",
  "Total number of characters typed: ",
];

const createSubmitDiv = () => {
  hiddenDiv.innerHTML = "";
  let statisticsResults = [];

  statisticsResults.push(String(clicks));
  let time = new Date() - start;

  time = Math.floor(time / 1000); // conversion to seconds
  statisticsResults.push(String(time));

  let keypress = 0,
    characters = 0;
  inputFields.forEach((value) => {
    keypress += value[1];
    characters += value[0];
  });
  statisticsResults.push(String(keypress));
  statisticsResults.push(String(characters));

  for (let i = 0; i < statisticsResults.length; i++) {
    const span = document.createElement("span");
    span.className = "statisticSpan";
    span.innerText = statistics[i] + statisticsResults[i];
    hiddenDiv.appendChild(span);
  }

  inputFields.forEach((value, key) => {
    const span = document.createElement("span");
    span.className = "statisticSpan";
    span.innerText =
      key +
      " key presses: " +
      value[1] +
      "  |  " +
      key +
      " characters written: " +
      value[0];
    hiddenDiv.appendChild(span);
  });
};

const start = new Date();

const body = document.querySelector(".body");
body.addEventListener("click", trackClicks);

// We have to  add the id of jsFormSubmit to all of the different sign up pages
// We have to add the hidden div as well with an id of hiddenDiv
const formSubmit = document.querySelector("#jsFormSubmit");
formSubmit.addEventListener("click", createSubmitDiv);

const hiddenDiv = document.querySelector("#hiddenDiv");
