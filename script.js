const author = document.querySelector("#author")
const calculation = document.querySelector("#calculation")
const btn_toggle = document.querySelector("#toggle");
const length = document.getElementById('length')
const color = document.querySelector('#color')

// define more constants and variables here

btn_toggle.onclick = () => {
  // your code here
}

// more codes for Search and Reset buttons here
function searchbutton() {
  let colors = document.getElementById("color").value
  document.getElementById("text").style.backgroundColor = colors
}

function resetbutton() {
  document.getElementById("text").style.backgroundColor = "white"
}

function displaybutton() {
  let newtext = document.
  document.getElementById("toggle").innerHTML = newtext
}