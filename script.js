let numbers = document.getElementsByClassName('numbers');
let preSelectedNumber = 0;
function selectNumber(number){
    for(let option of numbers){
        option.classList.remove('active');
    }
    
    number.classList.add('active');
    preSelectedNumber = number.innerHTML;
    console.log(preSelectedNumber);
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
        alert("Choose a number!");
    }
}
