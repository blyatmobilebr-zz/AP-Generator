//declaring variables
function confirm(){
    let start = document.querySelector("input#start");
    let end = document.querySelector("input#end");
    let constant = document.querySelector("input#constant");
    let button = document.querySelector("input#confirm");
    let answer = document.querySelector("div#answer");

//create the conditions to start the PA
//condition for the Crescent AP
    if(start.value.length == 0 || end.value.length == 0 || constant.value.length == 0){
        alert("Fill up all the fields.");
    }else{
        if(Number(start.value) < Number(end.value) && Number(constant.value) > 0){
            answer.innerHTML = ""
            for(let crescentCounter = Number(start.value); crescentCounter <= Number(end.value);crescentCounter += Number(constant.value)){
                answer.innerHTML += `${crescentCounter} `;
            }

//condition for the Decrescent AP
        }else if(Number(start.value) > Number(end.value) && Number(constant.value) > 0){
            answer.innerHTML = ""
            for(let decrescentCounter = Number(start.value); decrescentCounter >= Number(end.value); decrescentCounter -= Number(constant.value)){
                answer.innerHTML += `${decrescentCounter} `;
            }

//condition for constant = 0      
        }else if(Number(start.value) === Number(end.value) && Number(constant.value) === 0){
            answer.innerHTML = `The answer is: ${start.value}, since the constant = 0`

//condition if the constant is below 0 with start smaller than end
        }else if(Number(start.value) < Number(end.value) && Number(constant.value) < 0){
            alert("Enter a constant greater than 0!")

//condition if the constant is greater than 0 with start greater than end
        }else if(Number(start.value) > Number(end.value) && Number(constant.value) < 0){
            alert("Enter a constant greater than 0!")
        }else if(Number(start.value) > Number(end.value) && Number(constant.value) < 0){
            alert("Enter a constant greater than 0!")
        }else{
            alert("Enter a constant greater than 0");
        }
    }function reset(){
        let resetAnswer = document.querySelector("div#answer").innerHTML = "";
    }  
}
