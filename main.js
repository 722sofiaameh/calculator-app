// grab elements..
const output = document.querySelector(".output");
const result = document.querySelector(".result");
const keys = document.querySelectorAll("button");
let btn = document.getElementsByClassName("btn");
let arr = [...btn];

//add event listeners
keys.forEach((keys) => {
  keys.addEventListener("click", calculate);
});

arr.forEach((element, index) => {
  element.addEventListener("click", () => {
    element.style.opacity = "1";
    if (index == 0) {
      document.getElementsByTagName("body")[0].style.backgroundColor =
        "hsl(222, 26%, 31%)";
      document.getElementsByClassName("display")[0].style.backgroundColor =
        "hsl(224, 36%, 15%)";
      document.getElementsByClassName("input")[0].style.backgroundColor =
        "hsl(224, 36%, 15%)";
        document.getElementsByClassName("DEL")[0].style.backgroundColor =
        "hsl(225, 21%, 49%)";
      document.getElementsByClassName("Reset")[0].style.backgroundColor =
        "hsl(225, 21%, 49%)";
      document.getElementsByClassName("equalSign")[0].style.backgroundColor =
        "hsl(6, 63%, 50%)";
    } else if (index == 1) {
      document.getElementsByTagName("body")[0].style.backgroundColor =
        "hsl(0, 0%, 90%)";
      document.getElementsByClassName("display")[0].style.backgroundColor =
        "white";
      document.getElementsByClassName("input")[0].style.backgroundColor =
        "hsl(0, 5%, 81%)";
      document.getElementsByClassName("DEL")[0].style.backgroundColor =
        "hsl(185, 42%, 37%)";
      document.getElementsByClassName("Reset")[0].style.backgroundColor =
        "hsl(185, 42%, 37%)";
      document.getElementsByClassName("equalSign")[0].style.backgroundColor =
        "hsl(25, 98%, 40%)";
    } else {
      document.getElementsByTagName("body")[0].style.backgroundColor =
        "hsl(268, 75%, 9%)";
        // document.getElementsByTagName("body")[0].style.Color =
        // "red";
      document.getElementsByClassName("display")[0].style.backgroundColor ="hsl(268, 71%, 12%)"
      document.getElementsByClassName("input")[0].style.backgroundColor =
      "hsl(268, 71%, 12%)";
    document.getElementsByClassName("DEL")[0].style.backgroundColor =
      "hsl(290, 70%, 36%)";
    document.getElementsByClassName("Reset")[0].style.backgroundColor =
      "hsl(290, 70%, 36%)";
    document.getElementsByClassName("equalSign")[0].style.backgroundColor =
      "hsl(176, 100%, 44%)";
    }
    arr
      .filter(function (item) {
        return item != element;
      })
      .forEach((item) => {
        item.style.opacity = "0";
      });
  });
});

// create a function calculate..
function calculate() {
  let buttonText = this.innerText;
  if (buttonText === "RESET") {
    output.innerText = "";
    result.innerText = "0";
    result.style.animation = "";
    output.style.animation = "";
    return;
  }
  if (buttonText === "DEL") {
    output.textContent = output.textContent.substr(
      0,
      output.textContent.length - 1
    );
    return;
  }
  if (buttonText === "=") {
    result.innerText = eval(output.innerText);
    result.style.animation = "big 0.5s ease-in-out";
    output.style.animation = "small 0.5s ease-in-out";
    result.style.animationFillMode = "Forwards";
    output.style.animationFillMode = "Forwards";
  } else {
    output.textContent += buttonText;
    return;
  }
}
