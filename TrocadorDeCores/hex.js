const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", function () {
  let hexColor = "#";
  for (let i = 0; i < 6; i++) {
    hexColor += hex[getRandomNumber()];
  }


  color.textContent = hexColor;
  document.body.style.backgroundColor = hexColor;
});

function getRandomNumber() {
  return Math.floor(Math.random() * hex.length);
}

// darkmode

function darkMode() {
  headerDark();
  buttonDark();
  titleDark();
  imgDark();
  bodyDark();
  changeText();
}

function headerDark() {
  var header = document.querySelector("header");
  var content = document.querySelector(".darkmode");
  header.classList.toggle("dark-mode");
}

function buttonDark() {
  var botao = document.querySelector(".btn-hero");
  var select = document.querySelector(".darkmode");
  botao.classList.toggle("dark-button");
}

function titleDark() {
  var title = document.querySelector(".title");
  var color = document.querySelector(".darkmode");
  title.classList.toggle("h4-dark");
}

function imgDark() {
  var img = document.querySelector(".img-dark");
  var background = document.querySelector(".darkmode");
  img.classList.toggle("img-darkmode");
}

function bodyDark() {
  var body = document.body;
  var backcolor = document.querySelector(".darkmode");
  body.classList.toggle("bodydark")
}

// Change text from background-color

function changeText(){

  var element = document.querySelector('p');
  var button = document.querySelector(".darkmode");
    
  const initialText = '#FFFFFF';


  if (element.textContent.toLowerCase().includes(initialText.toLowerCase())) {
    element.textContent = '#181818';
  } 

  else {
    element.textContent = initialText;
  }
};
