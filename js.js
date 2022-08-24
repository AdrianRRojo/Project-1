/*
Checklist:
AI plays against the user
Winner and loser system
score board on the right
card designs
play again button
if the AI and user deploy a card of the same value- it results in a tie and are allowed an extra round


---- stretch goal
make the cards move and shoot projectiles at each other
add gifs to proctiles 

*/



const canvas = document.querySelector('canvas')
const cardOne = document.querySelector('#cardOne')
const cardTwo = document.querySelector('#cardTwo')
const cardThree = document.querySelector('#cardThree')
const cardFour = document.querySelector('#cardFour')
const cardFive = document.querySelector('#cardFive')
const playerBoard = document.querySelector('#playerCounter')
const aiBoard = document.querySelector('#aiCounter')

 const hunter = document.getElementById('hunter')
 const heratic = document.getElementById('heratic')
 const skeleton = document.getElementById('skeleton')
 const mushroom = document.getElementById('mushroom')
 const knight = document.getElementById('knight')
 
 const hunter2 = document.getElementById('hunter2')
 const heratic2 = document.getElementById('heratic2')
 const skeleton2 = document.getElementById('skeleton2')
 const mushroom2 = document.getElementById('mushroom2')
 const knight2 = document.getElementById('knight2')

 const kingDuke1 = document.getElementById('kingDuke1')
 const kingDuke2= document.getElementById('kingDuke2')
 const kingDuke3 = document.getElementById('kingDuke3')

 const daisy1 = document.getElementById('daisy1')
 const daisy2 = document.getElementById('daisy2')
 const daisy3 = document.getElementById('daisy3')

 const zoey1 = document.getElementById('zoey1')
 const zoey2= document.getElementById('zoey2')
 const zoey3 = document.getElementById('zoey3')

 const wriggly1 = document.getElementById('wriggly1')
 const wriggly2 = document.getElementById('wriggly2')
 const wriggly3 = document.getElementById('wriggly3')

 const traveler1 = document.getElementById('traveler1')
 const traveler2= document.getElementById('traveler2')
 const traveler3 = document.getElementById('traveler3')




const ctx = canvas.getContext('2d')
canvas.setAttribute('height', getComputedStyle(canvas)['height'])
canvas.setAttribute('width', getComputedStyle(canvas)['width'])



let monsters = [
    'hunter',
    'heratic',
    'skeleton',
    'mushroom',
    'knight'
]

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

  function getRandomInt2(max) {
    return Math.floor(Math.random() * max);
  }
  

let playerCounter = 0
let AICounter = 0
let thisWinner = 0
const winner = function(){
    let monstersLvls = getRandomInt2(25)
    let thislvl = getRandomInt(25)
    if (monstersLvls > thislvl ){
        turn = 1;
        AICounter++
        aiBoard.innerText = "Computer: " + AICounter
        console.log("You lose! " + thislvl + " <- hero monster -> " + monstersLvls)
        console.log(AICounter + "<- AICounter PlayerCounter ->" + playerCounter)
        thisWinner = 1
       
    }else if(thislvl> monstersLvls){
        turn = 1;
        playerCounter++ 
        playerBoard.innerText = "Player: " + playerCounter
        console.log("You Win!" + thislvl + " <- hero monster -> " + monstersLvls)
        console.log(AICounter + "<- AICounter PlayerCounter ->" + playerCounter)
        thisWinner = 2

    }else if(thislvl = monstersLvls){
        turn = 1;
        ("TIE"+ thislvl +  " <- hero monster -> " + monstersLvls)
        console.log(AICounter + "<- AICounter PlayerCounter ->" + playerCounter)
         thisWinner = 3
         aiBoard.innerText = "Computer: " + AICounter
         playerBoard.innerText = "Player: " + playerCounter

    }
    if(playerCounter === 3 || AICounter === 3){
        cardOne.disabled = true
        cardTwo.disabled = true
        cardThree.disabled = true
        cardFour.disabled = true
        cardFive.disabled = true
    }
    if(playerCounter === 3){
        let winner = document.getElementById('winner')
        winner.style.display = 'block'
        winner.innerText = "YOU WIN!"
    }else if(AICounter ===3){
        let winner = document.getElementById('winner')
        winner.style.display = 'block'
        winner.innerText = " YOU LOSE"
    }
}
turn = 1;
function playFunc(){
    if(turn === 1){
        kingDuke2.style.display = 'block';
        kingDuke1.style.display = 'none'
        cardOne.disabled = true
        turn = 0;
    }
    if(turn === 0){
        let monsterName = monsters[Math.floor(Math.random() * monsters.length)]
        if(monsterName === "hunter"){
            hunter.style.display = 'block'
            setTimeout(winner(),{
    
            }, 3000);
           if(thisWinner === 2){
            kingDuke3.style.display = 'block'
            kingDuke2.style.display = 'none'
            hunter.style.display = 'none'
           }else if (thisWinner === 1){
            kingDuke2.style.display = 'none'
            hunter2.style.display = 'block'
            hunter.style.display = 'none'
           }else if(thisWinner === 3){
            kingDuke1.style.display = "block"
            kingDuke2.style.display = "none"
            hunter2.style.display = 'none'
            cardOne.disabled = false        
           }
        }else if(monsterName === "heratic"){
            heratic.style.display = 'block'
           setTimeout(winner(),{
    
            }, 3000);
           if(thisWinner === 2){
            kingDuke3.style.display = 'block'
            kingDuke2.style.display = 'none'
            heratic.style.display = 'none'
           }else if (thisWinner === 1){
            kingDuke2.style.display = 'none'
            heratic2.style.display = 'block'
            heratic.style.display = 'none'
           }else if(thisWinner === 3){
            kingDuke1.style.display = "block"
            kingDuke2.style.display = "none"
            heratic.style.display = 'none'
           }
        }else if(monsterName === "skeleton"){
            skeleton.style.display = 'block'
           setTimeout(winner(),{
    
            }, 3000);
           if(thisWinner === 2){
            kingDuke3.style.display = 'block'
            kingDuke2.style.display = 'none'
            skeleton.style.display = 'none'
           }else if (thisWinner === 1){
            kingDuke2.style.display = 'none'
            skeleton2.style.display = 'block'
            skeleton.style.display = 'none'
           }else if(thisWinner === 3){
            kingDuke1.style.display = "block"
            kingDuke2.style.display = "none"
            skeleton.style.display = 'none'
           }
        }else if(monsterName === "mushroom"){
            mushroom.style.display = 'block'
           setTimeout(winner(),{
    
            }, 3000);
           if(thisWinner === 2){
            kingDuke3.style.display = 'block'
            kingDuke2.style.display = 'none'
            mushroom.style.display = 'none'
           }else if (thisWinner === 1){
            kingDuke2.style.display = 'none'
            mushroom2.style.display = 'block'
            mushroom.style.display = 'none'
           }else if(thisWinner === 3){
            kingDuke1.style.display = "block"
            kingDuke2.style.display = "none"
            mushroom.style.display = 'none'
           }
        } if(monsterName === "knight"){
            knight.style.display = 'block'
           setTimeout(winner(),{
    
            }, 3000);
           if(thisWinner === 2){
            kingDuke3.style.display = 'block'
            kingDuke2.style.display = 'none'
            knight.style.display = 'none'
           }else if (thisWinner === 1){
            kingDuke2.style.display = 'none'
            knight.style.display = 'none'
            knight2.style.display = 'block'
           }else if(thisWinner === 3){
            kingDuke1.style.display = "block"
            kingDuke2.style.display = "none"
            knight2.style.display = 'none'
           }
        }
    }
}
function playFunc2(){
    if(turn === 1){
        daisy2.style.display = 'block';
        daisy1.style.display = 'none'
        cardTwo.disabled = true
        turn = 0;
    }
    if(turn === 0){
        let monsterName = monsters[Math.floor(Math.random() * monsters.length)]
        if(monsterName === "hunter"){
            hunter.style.display = 'block'
           setTimeout(winner(),{
    
            }, 3000);
           if(thisWinner === 2){
            daisy3.style.display = 'block'
            daisy2.style.display = 'none'
            hunter.style.display = 'none'
           }else if (thisWinner === 1){
            daisy2.style.display = 'none'
            hunter2.style.display = 'block'
            hunter.style.display = 'none'
           }else if(thisWinner === 3){
            daisy1.style.display = "block"
            cardTwo.disabled = false
            daisy3.style.display = "none"
            daisy2.style.display = 'none'
           }
        }else if(monsterName === "heratic"){
            console.log("heratic")
            heratic.style.display = 'block'
           setTimeout(winner(),{
    
            }, 3000);
           if(thisWinner === 2){
            daisy3.style.display = 'block'
            daisy2.style.display = 'none'
            heratic.style.display = 'none'
           }else if (thisWinner === 1){
            daisy2.style.display = 'none'
            heratic2.style.display = 'block'
            heratic.style.display = 'none'
           }else if(thisWinner === 3){
            daisy1.style.display = "block"
            cardTwo.disabled = false
            daisy2.style.display = 'none'
           }
        }else if(monsterName === "skeleton"){
            skeleton.style.display = 'block'
           setTimeout(winner(),{
    
            }, 3000);
           if(thisWinner === 2){
            daisy3.style.display = 'block'
            daisy2.style.display = 'none'
           }else if (thisWinner === 1){
            daisy2.style.display = 'none'
            skeleton2.style.display = 'block'
            skeleton.style.display = 'none'
           }else if(thisWinner === 3){
            daisy1.style.display = "block"
            cardTwo.disabled = false
            daisy2.style.display = 'none'
           }
        }else if(monsterName === "mushroom"){
            mushroom.style.display = 'block'
           setTimeout(winner(),{
    
            }, 3000);
           if(thisWinner === 2){
            daisy3.style.display = 'block'
            daisy2.style.display = 'none'
            mushroom.style.display = 'none'
           }else if (thisWinner === 1){
            daisy2.style.display = 'none'
            mushroom2.style.display = 'block'
            mushroom.style.display = 'none'
           }else if(thisWinner === 3){
            daisy1.style.display = "block"
            cardTwo.disabled = false
            daisy2.style.display = 'none'
           }
        } if(monsterName === "knight"){
            knight.style.display = 'block'
           setTimeout(winner(),{
    
            }, 3000);
           if(thisWinner === 2){
            daisy3.style.display = 'block'
            daisy2.style.display = 'none'
            knight.style.display = 'none'
           }else if (thisWinner === 1){
            daisy2.style.display = 'none'
            knight2.style.display = 'block'
            knight.style.display = 'none'
           }else if(thisWinner === 3){
            daisy1.style.display = "block"
            cardTwo.disabled = false
            daisy2.style.display = 'none'
           }
        }
    }
}
function playFunc3(){
    if(turn === 1){
        zoey2.style.display = 'block';
        zoey1.style.display = 'none'
        cardThree.disabled = true
        turn = 0;
    }
    if(turn === 0){
        let monsterName = monsters[Math.floor(Math.random() * monsters.length)]
        if(monsterName === "hunter"){
            hunter.style.display = 'block'
           setTimeout(winner(),{
    
            }, 3000);
           if(thisWinner === 2){
            zoey3.style.display = 'block'
            zoey2.style.display = 'none'
            hunter.style.display = 'none'
           }else if (thisWinner === 1){
            zoey2.style.display = 'none'
            hunter2.style.display = 'block'
            hunter.style.display = 'none'
           }else if(thisWinner ===3){
            zoey1.style.display = "block"
            cardThree.disabled = false
            zoey2.style.display = "none"
           }
        }else if(monsterName === "heratic"){
            console.log("heratic")
            heratic.style.display = 'block'
           setTimeout(winner(),{
    
            }, 3000);
           if(thisWinner === 2){
            zoey3.style.display = 'block'
            zoey2.style.display = 'none'
            heratic.style.display = 'none'
           }else if (thisWinner === 1){
            zoey2.style.display = 'none'
            heratic2.style.display = 'block'
            heratic.style.display = 'none'
           }else if(thisWinner === 3){
            zoey1.style.display = "block"
            cardThree.disabled = false
            zoey2.style.display = "none"
           }
        }else if(monsterName === "skeleton"){
            skeleton.style.display = 'block'
           setTimeout(winner(),{
    
            }, 3000);
           if(thisWinner === 2){
            zoey3.style.display = 'block'
            zoey2.style.display = 'none'
           }else if (thisWinner === 1){
            zoey2.style.display = 'none'
            skeleton2.style.display = 'block'
            skeleton.style.display = 'none'
           }else if(thisWinner === 3){
            zoey1.style.display = "block"
            cardThree.disabled = false
            zoey2.style.display = "none"
           }
        }else if(monsterName === "mushroom"){
            mushroom.style.display = 'block'
           setTimeout(winner(),{
    
            }, 3000);
           if(thisWinner === 2){
            zoey3.style.display = 'block'
            zoey2.style.display = 'none'
            mushroom.style.display = 'none'
           }else if (thisWinner === 1){
            zoey2.style.display = 'none'
            mushroom2.style.display = 'block'
            mushroom.style.display = 'none'
           }else if(thisWinner === 3){
            zoey1.style.display = "block"
            cardThree.disabled = false
            zoey2.style.display = "none"
           }
        } if(monsterName === "knight"){
            knight.style.display = 'block'
           setTimeout(winner(),{
    
            }, 3000);
           if(thisWinner === 2){
            zoey3.style.display = 'block'
            zoey2.style.display = 'none'
            knight.style.display = 'none'
           }else if (thisWinner === 1){
            zoey2.style.display = 'none'
            knight2.style.display = 'block'
            knight.style.display = 'none'
           }else if(thisWinner === 3){
            zoey1.style.display = "block"
            cardThree.disabled = false
            zoey2.style.display = "none"
           }
        }
    }
}
function playFunc4(){
    if(turn === 1){
        wriggly2.style.display = 'block';
        wriggly1.style.display = 'none'
        cardFour.disabled = true
        turn = 0;
    }
    if(turn === 0){
        let monsterName = monsters[Math.floor(Math.random() * monsters.length)]
        if(monsterName === "hunter"){
            hunter.style.display = 'block'
           setTimeout(winner(),{
    
            }, 3000);
           if(thisWinner === 2){
            wriggly3.style.display = 'block'
            wriggly2.style.display = 'none'
            wriggly1.style.display = 'none'
            hunter.style.display = 'none'
           }else if (thisWinner === 1){
            wriggly2.style.display = 'none'
            hunter2.style.display = 'block'
            hunter.style.display = 'none'
           }else if(thisWinner === 3){
            wriggly1.style.display = "block"
            cardFour.disabled = false
            wriggly2.style.display = "none"
           }
        }else if(monsterName === "heratic"){
            heratic.style.display = 'block'
           setTimeout(winner(),{
    
            }, 3000);
           if(thisWinner === 2){
            wriggly3.style.display = 'block'
            wriggly2.style.display = 'none'
            wriggly1.style.display = 'none'
            heratic.style.display = 'none'
           }else if (thisWinner === 1){
            wriggly2.style.display = 'none'
            heratic2.style.display = 'block'
            heratic.style.display = 'none'
           }else if(thisWinner === 3){
            wriggly1.style.display = "block"
            cardFour.disabled = false
            wriggly2.style.display = "none"
           }
        }else if(monsterName === "skeleton"){
            console.log("hunter")
            skeleton.style.display = 'block'
           setTimeout(winner(),{
    
            }, 3000);
           if(thisWinner === 2){
            wriggly3.style.display = 'block'
            wriggly2.style.display = 'none'
            wriggly1.style.display = 'none'
            skeleton.style.display = 'none'
           }else if (thisWinner ===1){
            wriggly2.style.display = 'none'
            skeleton2.style.display = 'block'
            skeleton.style.display = 'none'
           }else if(thisWinner === 3){
            wriggly1.style.display = "block"
            cardFour.disabled = false
            wriggly2.style.display = "none"
           }
        }else if(monsterName === "mushroom"){
            console.log("hunter")
            mushroom.style.display = 'block'
           setTimeout(winner(),{
    
            }, 3000);
           if(thisWinner === 2){
            wriggly3.style.display = 'block'
            wriggly2.style.display = 'none'
            wriggly1.style.display = 'none'
            mushroom.style.display = 'none'
           }else if (thisWinner === 1){
            wriggly2.style.display = 'none'
            mushroom2.style.display = 'block'
            mushroom.style.display = 'none'
           }else if(thisWinner === 3){
            wriggly1.style.display = "block"
            cardFour.disabled = false
            wriggly2.style.display = "none"
           }
        } if(monsterName === "knight"){
            knight.style.display = 'block'
           setTimeout(winner(),{
    
            }, 3000);
           if(thisWinner === 2){
            wriggly3.style.display = 'block'
            wriggly2.style.display = 'none'
            wriggly1.style.display = 'none'
            knight.style.display = 'none'
           }else if (thisWinner === 1){
            wriggly2.style.display = 'none'
            knight2.style.display = 'block'
            knight.style.display = 'none'
           }else if(thisWinner === 3){
            wriggly1.style.display = "block"
            cardFour.disabled = false
            wriggly2.style.display = "none"
           }
        }
    }
}
function playFunc5(){
    if(turn === 1){
       traveler2.style.display = 'block';
        traveler1.style.display = 'none'
        cardFive.disabled = true
        turn = 0;
    }
    if(turn === 0){
        let monsterName = monsters[Math.floor(Math.random() * monsters.length)]
        if(monsterName === "hunter"){
            hunter.style.display = 'block'
           setTimeout(winner(),{
    
            }, 3000);
           if(thisWinner === 2){
           traveler3.style.display = 'block'
           traveler2.style.display = 'none'
           hunter.style.display = 'none'
           }else if (thisWinner === 1){
            traveler2.style.display = 'none'
            hunter2.style.display = 'block'
            hunter.style.display = 'none'
           }else if(thisWinner === 3){
           traveler1.style.display = "block"
            cardFour.disabled = false
            traveler2.style.display = "none"
           }
        }else if(monsterName === "heratic"){
            heratic.style.display = 'block'
           setTimeout(winner(),{
    
            }, 3000);
           if(thisWinner === 2){
            traveler3.style.display = 'block'
           traveler2.style.display = 'none'
           heratic.style.display = 'none'
           }else if (thisWinner === 1){
            traveler2.style.display = 'none'
            heratic2.style.display = 'block'
            heratic.style.display = 'none'
           }else if(thisWinner ===3){
           traveler1.style.display = "block"
            cardFour.disabled = false
            traveler2.style.display = "none"
           }
        }else if(monsterName === "skeleton"){
            console.log("hunter")
            skeleton.style.display = 'block'
           setTimeout(winner(),{
    
            }, 3000);
           if(thisWinner === 2){
            traveler3.style.display = 'block'
           traveler2.style.display = 'none'
           skeleton.style.display = 'none'
           }else if (thisWinner === 1){
            traveler2.style.display = 'none'
            skeleton2.style.display = 'block'
            skeleton.style.display = 'none'
           }else if(thisWinner === 3){
           traveler1.style.display = "block"
            cardFour.disabled = false
            traveler2.style.display = "none"
           }
        }else if(monsterName === "mushroom"){
            console.log("hunter")
            mushroom.style.display = 'block'
           setTimeout(winner(),{
    
            }, 3000);
           if(thisWinner === 2){
            traveler3.style.display = 'block'
           traveler2.style.display = 'none'
           mushroom.style.display = 'none'
           }else if (thisWinner === 1){
            traveler2.style.display = 'none'
            mushroom2.style.display = 'block'
            mushroom.style.display = 'none'
           }else if(thisWinner === 3){
           traveler1.style.display = "block"
            cardFour.disabled = false
            traveler2.style.display = "none"
           }
        } if(monsterName === "knight"){
            knight.style.display = 'block'
           setTimeout(winner(),{
    
            }, 3000);
           if(thisWinner === 2){
            traveler3.style.display = 'block'
            traveler2.style.display = 'none'
            knight.style.display = 'none'
           }else if (thisWinner === 1){
            traveler2.style.display = 'none'
            knight2.style.display = 'block'
            knight.style.display = 'none'
           }else if(thisWinner === 3){
           traveler1.style.display = "block"
            cardFour.disabled = false
            traveler2.style.display = "none"
           }
        }
    }
}