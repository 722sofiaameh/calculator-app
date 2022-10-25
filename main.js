// grab elements..
const output = document.querySelector(".output");
const result = document.querySelector(".result");
const keys = document.querySelectorAll("button");

//add event listeners
keys.forEach(keys => {
    keys.addEventListener("click",calculate);
});


function calculate(){
    let buttonText = this.innerText;
    if (buttonText === "RESET"){
        output.innerText = "";
        result.innerText = "0";
        result.style.animation ="";
        output.style.animation = "";
        return;
    }
    if (buttonText === "DEL"){
        output.textContent = output.textContent.substr(0,output.textContent.length-1);
        return;
    }
    if(buttonText === "="){
        result.innerText = eval(output.innerText);
        result.style.animation = "big 0.5s ease-in-out";
        output.style.animation = "small 0.5s ease-in-out";
        result.style.animationFillMode = "Forwards"
        output.style.animationFillMode = "Forwards"
    }
    else{
        output.textContent += buttonText;
        return;
    }
}