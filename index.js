diceGame=()=>{
    let rand_dice1=Math.floor(Math.random()*6)+1
    let rand_dice2=Math.floor(Math.random()*6)+1
    let winner=document.querySelector(".container h1")
    person1_dice=document.querySelector(".img1")
    person1_dice.setAttribute("src",`./images/dice${rand_dice1}.png`)
    person2_dice=document.querySelector(".img2")
    person2_dice.setAttribute("src",`./images/dice${rand_dice2}.png`)
    if(rand_dice1>rand_dice2){
        winner.innerHTML="Player one is the Winner"
    }
    else if (rand_dice1<rand_dice2){
        winner.innerHTML="Player two is the Winner"
    }
    else{
        winner.innerHTML="Draw"
    }
}   



