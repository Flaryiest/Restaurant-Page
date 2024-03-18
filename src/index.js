import _ from "lodash";
import "./style.css";



function component() {
    const element = document.createElement('div');
  
    // Lodash, currently included via a script, is required for this line to work
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    element.classList.add("test");
    return element;
  }
  
  document.body.appendChild(component());
  console.log("test")

  function createHomePage () {
    const sectionOne = document.createElement("div");
    return sectionOne
  }


  
const homeButton = document.querySelector("#home")
homeButton.addEventListener("click", function () {
  console.log("test")
  document.body.appendChild(createHomePage())})