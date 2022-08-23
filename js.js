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

// card 1-5 refers to which button is pressed and activates with the attached card
const canvas = document.querySelector('canvas')
const cardOne = document.querySelector('#cardOne')
const cardTwo = document.querySelector('#cardTwo')
const cardThree = document.querySelector('#cardThree')
const cardFour = document.querySelector('#cardFour')
const cardFive = document.querySelector('#cardFive')


const ctx = canvas.getContext('2d')
canvas.setAttribute('height', getComputedStyle(canvas)['height'])
canvas.setAttribute('width', getComputedStyle(canvas)['width'])

// card factory
class Cards{
   
    constructor(cardName, type, color, className){
        this.cardName = cardName
        this.type = type
        this.alive = true
        this.color = color
        this.className = className
        
    }
    render = function(x,y,w,h){
        ctx.fillStyle = this.color
        ctx.fillRect(x,y,w,h)
    }
}


// level generator for hero cards
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
// level generator for AI cards 
  function getRandomInt2(max) {
    return Math.floor(Math.random() * max);
  }
// hero card factory --- make different styles of cards with varying levels


//     if(x === 1){
//         knight.render(150,260,110,150)
//     }else if(x === 2){
//         knight.render(250,260,110,150)
//     }else if(x === 3){
//         knight.render(350,260,110,150)
//     }else if(x === 4){
//         knight.render(450,260,110,150)
//     }else if(x === 5){
//         knight.render(550,260,110,150)
//     }
// }


// const d = function (x){
//     const dwarf = new Cards ("Dwarf", "Melee", 'orange',"card") 
// //     if(x === 1){
// //         dwarf.render(150,260,110,150)
// //     }else if(x === 2){
// //         dwarf.render(250,260,110,150)
// //     }else if(x === 3){
// //         dwarf.render(350,260,110,150)
// //     }else if(x === 4){
// //         dwarf.render(450,260,110,150)
// //     }else if(x === 5){
// //         dwarf.render(550,260,110,150)
// //     }
// // }

// // const e = function (x){
//     const hobbit = new Cards ("Hobbit", "Magic", 'BurlyWood', "card")
// //     if(x === 1){
// //        hobbit.render(150,260,110,150)
// //     }else if(x === 2){
// //        hobbit.render(250,260,110,150)
// //     }else if(x === 3){
// //        hobbit.render(350,260,110,150)
// //     }else if(x === 4){
// //        hobbit.render(450,260,110,150)
// //     }else if(x === 5){
// //        hobbit.render(550,260,110,150)
// //     }
// // }


// // const f = function (x){
//     const duke = new Cards("KingDuke", "Melee", 'pink', "card")
// //     if(x === 1){
// //        duke.render(150,260,110,150)
// //      }else if(x === 2){
// //        duke.render(250,260,110,150)
// //      }else if(x === 3){
// //        duke.render(350,260,110,150)
// //      }else if(x === 4){
// //        duke.render(450,260,110,150)
// //      }else if(x === 5){
// //        duke.render(550,260,110,150)
// //      } 
// // }
// // const g = function (x){
//     const zoey = new Cards("Zo-Zo", "Magic", 'white', "card")
// //     if(x === 1){
// //         zoey.render(150,260,110,150)
// //       }else if(x === 2){
// //         zoey.render(250,260,110,150)
// //       }else if(x === 3){
// //         zoey.render(350,260,110,150)
// //       }else if(x === 4){
// //         zoey.render(450,260,110,150)
// //       }else if(x === 5){
// //         zoey.render(550,260,110,150)
// //       } 
// // }

// // const heroSelector = function(x){
// //     let hero = () => {[a(x),b(x),c(x),d(x),e(x),f(x),g(x)]};
// //     hero[Math.floor(Math.random() * hero.length)]
// //     return hero(x)
// // }
// // const deckBuilder = function(){
// // for(let i = 0; i < 4; i++){
// //     if (i === 0){
// //         heroSelector(1)
// //     }else if(i === 1){
// //         heroSelector(2)
// //     }else if(i === 2){
// //         heroSelector(3)
// //     }else if (i === 3){
// //         heroSelector(4)
// //     }else if(i === 4){
// //         heroSelector(5)
// //     }else{
// //         console.log("No card selected")
// //     }
// // }
// // }

/*Idea
Create a seperate constructor for the AI
of "Monsters" and have those fight amongst the Heros.
*/

// User controlled cards
let wizard = new Cards("Wizard", "Magic", 'blue',"card")
let zoey = new Cards("Zo-Zo", "Magic", 'white', "card")
let duke = new Cards("KingDuke", "Melee", 'pink', "card")
let knight= new Cards("Knight", "Melee",'darkgray',"card")
let hobbit= new Cards ("Hobbit", "Magic", 'BurlyWood', "card")
let dwarf = new Cards ("Dwarf", "Melee", 'orange',"card")




const hero = [wizard,
    zoey,
    duke,
    knight,
    hobbit,
    dwarf,
]
// 




let firstCard = 0;
function startGame(){ //Connected to the start game button and needs to be pressed when
    for(let i = 0; i < 4; i++){ // create a deck of 5 cars
        if(i === 0){
            const heroSelector = hero[Math.floor(Math.random() * hero.length)] // pick a card at random out of the array caled "Hero"
            if(heroSelector === wizard){                        
                // if the hero that was selected was this card 
                wizard.render(150,260,110,150)
                firstCard = 1
                // than render it in the players deck
            }
            else if(heroSelector === zoey){ //set the cards to a value ie x then create the place card function
                zoey.render(150,260,110,150)
                firstCard = 2
            }else if(heroSelector === duke){
                duke.render(150,260,110,150)
                firstCard = 3

            }else if(heroSelector === knight){
                knight.render(150,260,110,150)
                firstCard = 4
                
            }else if(heroSelector === hobbit){
                hobbit.render(150,260,110,150)
                firstCard = 5

            }else if(heroSelector === dwarf){
                dwarf.render(150,260,110,150)
                firstCard = 6
            }
            
        // }else if(i === 1) {
        // const heroSelector = hero[Math.floor(Math.random() * hero.length)]
        // if(heroSelector === 'Wizard'){
        //     wizard.render(150,260,110,150)
        //     // let secondCard = wizard.render(250,260,110,150)
        // }else if(heroSelector === 'Zoey'){
        //     zoey.render(150,260,110,150)
        //     // let secondCard = zoey.render(250,260,110,150)
        // }else if(heroSelector === 'Duke'){
        //     duke.render(150,260,110,150)
        //     // let secondCard = duke.render(250,260,110,150)
        // }else if(heroSelector === 'Knight'){
        //     knight.render(150,260,110,150)
        //     // let secondCard = knight.render(250,260,110,150)
        // }else if(heroSelector === 'hobbit'){
        //     hobbit.render(150,260,110,150)
        //     // let secondCard = hobbit.render(250,260,110,150)
        // }else if(heroSelector === 'Dwarf'){
        //     dwarf.render(150,260,110,150)
        //     // let secondCard = dwarf.render(250,260,110,150)
        // }
    }
 }
    }

// function UnoFunc(className) {
//    className.render(150,100,90,120)
//  }
//  function placeCardsTwo(y) {
//      y.render(150,100,90,120)
//  }
//  function placeCardsThree(f) {
//      f.render(150,100,90,120)
//  }
//  function placeCardsFour(k) {
//      k.render(150,100,90,120)
//  }
//  function placeCardsFive(j) {
//      j.render(150,100,90,120)
//  }

//place card func with event listener / place that card in the canvas
// a function for each card that is called up in a larger function

// AI controled cards


const lich = new Cards(getRandomInt(25), "Lich", "Magic", 'purple', "card")
const frostGiant = new Cards(getRandomInt(25), "FrostGiant", "Magic", 'red', "card")
const fireFox = new Cards(getRandomInt(25), "fireFox", "Melee", 'crimson', "card")
const theSwarm = new Cards(getRandomInt(25), "theSwarm", "Melee", 'black', "card")
const alien = new Cards(getRandomInt(25), "Alien", "Magic", 'green', "card")
const bear = new Cards(getRandomInt(25), "Bear", "Magic", 'brown', "card")
// const Rat = new Cards(getRandomInt(5), "Rat", "Melee", 'goldenRod', "card")
// console.log(lich, frostGiant, fireFox, theSwarm, alien, bear)

const monsters = [
    lich,
    frostGiant,
    fireFox,
    theSwarm,
    alien,
    bear
]// create a function where that lists all the classes with their own constructor and pull that out when picking the deck

// repeat same code as hero selector.

const monsterCardOne = monsters[Math.floor(Math.random() * monsters.length)]
    console.log(monsterCardOne)
const monsterCardTwo = monsters[Math.floor(Math.random() * monsters.length)]
    console.log(monsterCardTwo)
const monsterCardThree = monsters[Math.floor(Math.random() * monsters.length)]
    console.log(monsterCardThree)
const monsterCardFour = monsters[Math.floor(Math.random() * monsters.length)]
    console.log(monsterCardFour)
const monsterCardFive = monsters[Math.floor(Math.random() * monsters.length)]
    console.log(monsterCardFive)

//winner and loser counter
let playerCounter = 0
let AICounter = 0
const winner = function(){
    let monstersLvls = getRandomInt2(15)
    let herolvl = getRandomInt(15)
    if (monstersLvls > herolvl){
        turn = 1;
        AICounter++
        console.log("You lose! " + monstersLvls + " <- monster hero -> " + herolvl)
        console.log(AICounter + " <- AICounter PlayerCounter -> " + playerCounter)
    }else if(herolvl > monstersLvls){
        turn = 1;
        playerCounter++ 
        console.log("You Win!" + monstersLvls + " <- monster hero ->  " + herolvl)
        console.log(AICounter + " <- AICounter PlayerCounter -> " + playerCounter)
    }else if(herolvl = monstersLvls){
        turn = 1;
       console.log("TIE " +  monstersLvls + " <- monster hero ->  " + herolvl)
        console.log(AICounter + " <- AICounter PlayerCounter -> " + playerCounter)
    }
}
console.log(firstCard)
// each fuction is tied to a button and activated when that button is pushed.
turn = 1;
function playFunc(){
    if(turn === 1){
     if (firstCard === 1){
        wizard.render(150,100,90,120)
        turn = 0
    }else if (firstCard === 2){
        zoey.render(150,100,90,120)
        turn = 0
    }else if(firstCard === 3){
        duke.render(150,100,90,120)
       turn = 0
    }else if(firstCard === 4){
        knight.render(150,100,90,120)
       turn = 0
    }else if(firstCard === 5){
        hobbit.render(150,100,90,120)
       turn = 0
    }else if(firstCard === 6){
        dwarf.render(150,100,90,120)
       turn = 0
    }
    cardOne.disabled = true
     
 }

if (turn ===0) {
    monsterCardOne.render
    console.log(monsters + "this is the button one")
}
}
//     if(turn === 0){
//         let monsterName = monsters[Math.floor(Math.random() * monsters.length)]
//         if(monsterName === lich){
//             console.log("The lich was called")
//             lich.render(550,100,90,120)
//            winner()
//            turn = 1
//         }else if(monsterName === frostGiant){
//             console.log("The Frost Giant called")
//              frostGiant.render(550,100,90,120)
//             winner()
//             turn = 1
//         }else if(monsterName === fireFox){
//             console.log("The Fire Fox was called")
//             fireFox.render(550,100,90,120)
//            winner()
//            turn = 1
//         }else if(monsterName === theSwarm){
//             console.log("The The swarm was called")
//             theSwarm.render(550,100,90,120)
//            winner()
//            turn = 1
//         }else if(monsterName === alien){
//             console.log("The Alien was called")
//             alien.render(550,100,90,120)
//            winner()
//            turn = 1
//         }else if(monsterName === bear){
//             console.log("The bear was called")
//             bear.render(550,100,90,120)
//            winner()
//            turn = 1
//         }
//   }    
// }

 function playFunc2(){
    if(turn === 1){
        knight.render(150,100,90,120)
        cardTwo.disabled = true
        turn = 0;
    }
    if(turn === 0){
        let monsterName = monsters[Math.floor(Math.random() * monsters.length)] // randomly select card and play it.
        if(monsterName === "Lich"){
            console.log("The lich was called")
            lich.render(550,100,90,120)
           winner()
        }else if(monsterName === "FrostGiant"){
            console.log("The Frost Giant called")
             frostGiant.render(550,100,90,120)
            winner()
        }else if(monsterName === "FireFox"){
            console.log("The Fire Fox was called")
            fireFox.render(550,100,90,120)
           winner()
        }else if(monsterName === "TheSwarm"){
            console.log("The The swarm was called")
            theSwarm.render(550,100,90,120)
           winner()
        }else if(monsterName === "Alien"){
            console.log("The Alien was called")
            alien.render(550,100,90,120)
           winner()
        }else if(monsterName === "Bear"){
            console.log("The bear was called")
            bear.render(550,100,90,120)
           winner()
        }
  }     
}
 function playFunc3(){
    if(turn === 1){
        dragon.render(150,100,90,120)
        cardThree.disabled = true
        turn = 0;
    }
    if(turn === 0){
        let monsterName = monsters[Math.floor(Math.random() * monsters.length)]
        if(monsterName === "Lich"){
            console.log("The lich was called")
            lich.render(550,100,90,120)
           winner()
        }else if(monsterName === "FrostGiant"){
            console.log("The Frost Giant called")
             frostGiant.render(550,100,90,120)
            winner()
        }else if(monsterName === "FireFox"){
            console.log("The Fire Fox was called")
            fireFox.render(550,100,90,120)
           winner()
        }else if(monsterName === "TheSwarm"){
            console.log("The The swarm was called")
            theSwarm.render(550,100,90,120)
           winner()
        }else if(monsterName === "Alien"){
            console.log("The Alien was called")
            alien.render(550,100,90,120)
           winner()
        }else if(monsterName === "Bear"){
            console.log("The bear was called")
            bear.render(550,100,90,120)
           winner()
        }
  }    
}
 
 function playFunc4(){
    if(turn === 1){
        dwarf.render(150,100,90,120)
        cardFour.disabled = true
        turn = 0;
    }
    if(turn === 0){
        let monsterName = monsters[Math.floor(Math.random() * monsters.length)]
            if(monsterName === "Lich"){
                console.log("The lich was called")
                lich.render(550,100,90,120)
               winner()
            }else if(monsterName === "FrostGiant"){
                console.log("The Frost Giant called")
                 frostGiant.render(550,100,90,120)
                winner()
            }else if(monsterName === "FireFox"){
                console.log("The Fire Fox was called")
                fireFox.render(550,100,90,120)
               winner()
            }else if(monsterName === "TheSwarm"){
                console.log("The The swarm was called")
                theSwarm.render(550,100,90,120)
               winner()
            }else if(monsterName === "Alien"){
                console.log("The Alien was called")
                alien.render(550,100,90,120)
               winner()
            }else if(monsterName === "Bear"){
                console.log("The bear was called")
                bear.render(550,100,90,120)
               winner()
            }
      } 
}
 function playFunc5(){
    if(turn === 1){
        hobbit.render(150,100,90,120)
        cardFive.disabled = true
        turn = 0;
        let thislvl = getRandomInt()
    }
    if(turn === 0){
        let monsterName = monsters[Math.floor(Math.random() * monsters.length)]
        if(monsterName === "Lich"){
            console.log("The lich was called")
            lich.render(550,100,90,120)
           winner()
        }else if(monsterName === "FrostGiant"){
            console.log("The Frost Giant called")
             frostGiant.render(550,100,90,120)
            winner()
        }else if(monsterName === "FireFox"){
            console.log("The Fire Fox was called")
            fireFox.render(550,100,90,120)
           winner()
        }else if(monsterName === "TheSwarm"){
            console.log("The The swarm was called")
            theSwarm.render(550,100,90,120)
           winner()
        }else if(monsterName === "Alien"){
            console.log("The Alien was called")
            alien.render(550,100,90,120)
           winner()
        }else if(monsterName === "Bear"){
            console.log("The bear was called")
            bear.render(550,100,90,120)
           winner()
        }
  } 
}


// window.addEventListener('DOMContentLoaded', (event) => {
//     placeCardsOne()
//     placeCardsTwo()
//     placeCardsThree()
//     placeCardsFour()
//     placeCardsFive()
//     console.log('DOM fully loaded and parsed');
// })