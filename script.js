let numbers = document.getElementsByClassName('numbers');
let preSelectedNumber = 0;
function selectNumber(number){
    for(let circle of numbers){
        circle.style.backgroundColor='hsl(213, 19%, 23%)';
        circle.style.color= 'hsl(216, 12%, 54%)';
    }
    number.style.backgroundColor='hsl(217, 12%, 63%)';
    number.style.color='white';
    preSelectedNumber = number.innerHTML;
    console.log(preSelectedNumber)
}
function submitNumber(){
    if(preSelectedNumber > 0){
        let selectedNumber = document.getElementById('selected-number');
        let ratingState = document.getElementById('rating-state');
        let submitedState = document.getElementById('submited-state');
        selectedNumber.innerHTML = preSelectedNumber;
        submitedState.style.display='flex';
        submitedState.style.flexDirection='column';
        submitedState.style.alignItems='center';
        ratingState.style.display='none';
    }
    else{
        alert("Elija un número!");
    }
}
