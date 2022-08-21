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


const ctx = canvas.getContext('2d')
canvas.setAttribute('height', getComputedStyle(canvas)['height'])
canvas.setAttribute('width', getComputedStyle(canvas)['width'])


class Cards{
   
    constructor(lvl,cardName, type, color, className){
        this.lvl = lvl
        this.cardName = cardName
        this.type = type
        this.alive = true
        this.color = color
        this.className = className
    }
    render(x,y,w,h){
        ctx.fillStyle = this.color
        ctx.fillRect(x,y,w,h)
    
    }
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

  function getRandomInt2(max) {
    return Math.floor(Math.random() * max);
  }
// card factory --- make different styles of cards with varying levels
const wizard = new Cards(getRandomInt(25), "Wizard", "Magic", 'blue',"card")
    wizard.render(150,260,110,150)
const knight = new Cards(getRandomInt(25), "Knight", "Melee",'darkgray',"card")
    knight.render(250,260,110,150)
const dragon = new Cards(getRandomInt(25), "Dragon", "Magic",'crimson',"card")
    dragon.render(350,260,110,150)
const dwarf = new Cards (getRandomInt(25), "Dwarf", "Melee", 'orange',"card")
    dwarf.render(450,260,110,150)
const hobbit = new Cards (getRandomInt(25), "Hobbit", "Magic", 'BurlyWood', "card")
    hobbit.render(550,260,110,150)
console.log(dragon, dwarf, knight, wizard, hobbit) //checking to see if all cards are made



/*Idea
Create a seperate constructor for the AI
of "Monsters" and have those fight amongst the Heros.
*/

let monsters = [
    'linch',
    'FrostGiant',
    'FireFox',
    'TheSwarm',
    'Alien',
    'Bear'
]
let monsterName = monsters[Math.floor(Math.random() * monsters.length)]

const lich = new Cards(getRandomInt(25), "Lich", "Magic", 'purple', "card")
const frostGiant = new Cards(getRandomInt(25), "FrostGiant", "Magic", 'blue', "card")
const fireFox = new Cards(getRandomInt(25), "fireFox", "Melee", 'crimson', "card")
const theSwarm = new Cards(getRandomInt(25), "theSwarm", "Melee", 'black', "card")
const Alien = new Cards(getRandomInt(25), "Alien", "Magic", 'green', "card")
const Bear = new Cards(getRandomInt(25), "Lich", "Magic", 'brown', "card")
const Rat = new Cards(getRandomInt(5), "Rat", "Melee", 'goldenRod', "card")


let monstersLvls = getRandomInt2(25)
let thislvl = getRandomInt(25)

if(this.lvl > monstersLvls){
    console('you won'  + thislvl + " hero level "+ "monster " + monstersLvls )
}else if (this.lvl < monstersLvls){
    console('you lost'  + thislvl + " hero level "+ "monster lvl" + monstersLvls )
}else{
    console.log('tie ' + thislvl + " hero level "+ "monster lvl" + monstersLvls )
}

// .render(550,100,90,120)

let playerCounter = 0
let AICounter = 0
const winner = function(){
    let monstersLvls = getRandomInt2(25)
    let thislvl = getRandomInt(25)
    if (monstersLvls > thislvl){
        turn = 1;
        AICounter++
        console.log("You lose! " + monstersLvls + "<- monster hero -> " + thislvl)
        console.log(AICounter + "<- AICounter PlayerCounter ->" + playerCounter)
        console.log()
    }else if(thislvl> monstersLvls){
        turn = 1;
        playerCounter++ 
        console.log("You Win!" + monstersLvls + " " + thislvl)
        console.log(AICounter + "<- AICounter PlayerCounter ->" + playerCounter)
    }else if(thislvl === monstersLvls){
        turn = 1;
        ("TIE"+ monstersLvls+ " " + thislvl)
        console.log(AICounter + "<- AICounter PlayerCounter ->" + playerCounter)
    }
}

turn = 1;
function playFunc(){
    if(turn === 1){
        wizard.render(150,100,90,120)
        cardOne.disabled = true
        turn = 0;
    }
    if(turn === 0){
        if(monsterName === "Lich"){
            lich.render(550,100,90,120)
           winner()
        }else if(monsterName === "FrostGiant"){
             frostGiant.render(550,100,90,120)
            winner()
        }else if(monsterName === "FireFox"){
            fireFox.render(550,100,90,120)
           winner()
        }else if(monsterName === "TheSwarm"){
            theSwarm.render(550,100,90,120)
           winner()
        }else if(monsterName === "Alien"){
            Alien.render(550,100,90,120)
           winner()
        }else if(monsterName === "Bear"){
            Bear.render(550,100,90,120)
           winner()
        }
  }     
 }
 function playFunc2(){
    if(turn === 1){
        knight.render(150,100,90,120)
        cardTwo.disabled = true
        turn = 0;
    }
        if(turn === 0){
            if(monsterName === "Lich"){
                lich.render(550,100,90,120)
                winner()
            }else if(monsterName === "FrostGiant"){
                frostGiant.render(550,100,90,120)
                winner()
            }else if(monsterName === "FireFox"){
                fireFox.render(550,100,90,120)
               winner()
            }else if(monsterName === "TheSwarm"){
                theSwarm.render(550,100,90,120)
                winner()
            }else if(monsterName === "Alien"){
                Alien.render(550,100,90,120)
               winner()
            }else if(monsterName === "Bear"){
                Bear.render(550,100,90,120)
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
        if(turn === 0){
            if(monsterName === "Lich"){
                lich.render(550,100,90,120)
                winner()
            }else if(monsterName === "FrostGiant"){
                frostGiant.render(550,100,90,120)
                winner()
            }else if(monsterName === "FireFox"){
                fireFox.render(550,100,90,120)
                winner()
            }else if(monsterName === "TheSwarm"){
                theSwarm.render(550,100,90,120)
                winner()
            }else if(monsterName === "Alien"){
                Alien.render(550,100,90,120)
                winner()
            }else if(monsterName === "Bear"){
                Bear.render(550,100,90,120)
                winner()
            }
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
            if(monsterName === "Lich"){
                lich.render(550,100,90,120)
                winner()
            }else if(monsterName === "FrostGiant"){
                frostGiant.render(550,100,90,120)
              winner()
            }else if(monsterName === "FireFox"){
                fireFox.render(550,100,90,120)
                winner()
            }else if(monsterName === "TheSwarm"){
                theSwarm.render(550,100,90,120)
                winner()
            }else if(monsterName === "Alien"){
                Alien.render(550,100,90,120)
                winner()
            }else if(monsterName === "Bear"){
                Bear.render(550,100,90,120)
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
        let monstersLvls = getRandomInt2(25)
        if(monsterName === "Lich"){
            lich.render(550,100,90,120)
            winner()
        }else if(monsterName === "FrostGiant"){
            frostGiant.render(550,100,90,120)
           winner()
        }else if(monsterName === "FireFox"){
            fireFox.render(550,100,90,120)
           winner()
        }else if(monsterName === "TheSwarm"){
            theSwarm.render(550,100,90,120)
           winner()
        }else if(monsterName === "Alien"){
            Alien.render(550,100,90,120)
           winner()
            turn = 1;
        }else if(monsterName === "Bear"){
            Bear.render(550,100,90,120)
           winner()
        }
  }     
 }