clicks = 0;
const trackClicks = () => {
  clicks++;
  console.log(clicks);
};

let keypress = 0,
  characters = 0;
document.onkeydown = (e) => {
  keypress++;
  console.log(e.key);
  if (e.key.length == 1) characters++;
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

  statisticsResults.push(String(keypress));
  statisticsResults.push(String(characters));

  for (let i = 0; i < statisticsResults.length; i++) {
    const span = document.createElement("span");
    span.className = "statisticSpan";
    span.innerText = statistics[i] + statisticsResults[i];
    hiddenDiv.appendChild(span);
  }
};

const start = new Date();

const body = document.querySelector("body");
body.addEventListener("click", trackClicks);

// We have to  add the id of jsFormSubmit to all of the different sign up pages
// We have to add the hidden div as well with an id of hiddenDiv
const formSubmit = document.querySelector("#jsFormSubmit");
formSubmit.addEventListener("click", createSubmitDiv);

const hiddenDiv = document.querySelector("#hiddenDiv");
