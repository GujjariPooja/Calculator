function appendToDisplay(value) {
    document.getElementById('first').value+=value;
}

function clearDisplay()  {
    document.getElementById('first').value = " ";
}

function calculate()  {
    try {
        var result=eval(document.getElementById('first').value);
        document.getElementById('first').value = result;
    }catch (error) {
        document.getElementById('first') = "Error";
    }
}