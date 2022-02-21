var currentNumberWarpper = document.getElementById("currentNumber");
var currentNumber = 0;
function increment(){
    currentNumber += 1;
    currentNumberWarpper.innerHTML = currentNumber;

    if(currentNumber >= 0){
        var vermelho = document.getElementsByTagName('span')[0]
        vermelho.style.color = 'black'
    }
}

function decrement(){
    currentNumber -= 1;
    currentNumberWarpper.innerHTML = currentNumber;

    if(currentNumber <=-1){
        var vermelho = document.getElementsByTagName('span')[0]
        vermelho.style.color = 'red'
    }
    
    
}