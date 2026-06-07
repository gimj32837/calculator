// CALCULATOR PROGRAM

const display = document.getElementById("display");

function appendToDisplay(input){
    if(display.value === "Error")
        display.value = "";
    display.value += input;
}

function clearDisplay(){
    display.value = "";
}

function calculate(){
    try{
        let result = eval(display.value);
        display.value = Number(result.toPrecision(9));

        //display.value = eval(display.value);
    }
    catch(error){
        display.value = "Error";
    }
}
