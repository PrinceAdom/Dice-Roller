let dieRoll = new Array(); //keeps track of each dice roll
let dieRollTotal = 0; //keeps track of the total number of all dice rolls

let dieRollCount = document.getElementById("dice-roll");
let rollBtn = document.getElementById("roll-btn");
let display_dieRollTotal = document.getElementById("dice-roll-total");
let showAllRollsBtn = document.getElementById("display-all-rolls");
let showAllRolls = document.getElementById("all-rolls");

/* randomly roll a dice and store result in array*/
rollBtn.addEventListener("click", function(){
    showAllRollsBtn.disabled = false;
    if(Number(dieRollCount.value) <= 0){
        alert("Number of die rolls must be one or greater");
    }
    else{
        let rollCount = Number(dieRollCount.value);
        dieRoll = []; //clear previous elements before populating
        for(let toss = 0; toss < rollCount; toss++){
            dieRoll.push(generateDieFace());
        }
        display_dieRollTotal.textContent = dieRollSum(dieRoll);
    }
    
});

/* genereate die faces between 1 and 6 */
function generateDieFace(){
    return Math.floor(Math.random() * (6) + 1);
}

/* compute the sum of all die faces randomly tossed */
function dieRollSum (allTosses){
    let sum = 0;
    for(let eachFace = 0; eachFace < allTosses.length; eachFace++){
        sum += allTosses[eachFace];
    }
    return sum;
}

/* display all the die faces rolled */
showAllRollsBtn.addEventListener("click", function(){
    if(dieRoll.length == 0){
        //alert("No dies rolled yet");
        showAllRolls.innerHTML = "No dice rolled yet";
        setTimeout(function(){
            showAllRolls.innerHTML = '';
        }, 3000);
    }
    else{
        showAllRolls.textContent = "";
        for(let eachFace = 0; eachFace < dieRoll.length; eachFace++){
            let dieFace = document.createElement("li");
            let dieFaceNumber = document.createTextNode(dieRoll[eachFace]);
            dieFace.appendChild(dieFaceNumber);
            showAllRolls.appendChild(dieFace);   
        } 
        showAllRollsBtn.disabled = true;   
    }

    
    
})

