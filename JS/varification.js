function generatePin(){
    const number = Math.round(Math.random()*10000);
    const numberString = number + '';
    if(numberString.length === 4){
        return number;
    }
    else{
        return generatePin();
    }
}

document.getElementById("generatePinBtn").addEventListener('click', function(){
    const pin = generatePin();
    const displayPinItem = document.getElementById("displayPin");
    displayPinItem.value = pin;
})

document.getElementById("calculator").addEventListener('click', function(event){
    const digit = event.target.innerText;
    const display = document.getElementById("displayDigit");
    const previousDigit = display.value;
    if(isNaN(digit)){
       if(digit === 'C'){
        display.value = '';
       }
       else if(digit === '<'){
        digitList = previousDigit.split('');
        digitList.pop();
        const remainingDigit = digitList.join('');
        display.value = remainingDigit;
       } 
    }
    else{
        const newDigit = previousDigit + digit;
        display.value = newDigit;
    }
})


document.getElementById("submitBtn").addEventListener('click', function(){
    const generatePinFeild = document.getElementById("displayPin");
    const generatePin = generatePinFeild.value;

    const givenPinField = document.getElementById("displayDigit");
    const givenPin = givenPinField.value;

    const pinSuccessField = document.getElementById("pin-success");
    const pinFailureField = document.getElementById("pin-failure");

    if(generatePin === givenPin){
        pinSuccessField.style.display = "block";
        pinFailureField.style.display = "none";
    }
    else{
        pinFailureField.style.display = "block";
        pinSuccessField.style.display = "none";
    }
})