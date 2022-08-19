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


// card factory --- make different styles of cards with varying levels
const wizard = new Cards(getRandomInt(25), "Wizard", "Magic", 'blue',"card")
//if(wizard.alive === true){
    wizard.render(150,260,110,150)
//}else {
    //wizard.render()
//}
const knight = new Cards(getRandomInt(25), "Knight", "Melee",'darkgray',"card")
knight.render(250,260,110,150)
const dragon = new Cards(getRandomInt(25), "Dragon", "Magic",'crimson',"card")
dragon.render(350,260,110,150)
const dwarf = new Cards (getRandomInt(25), "Dwarf", "Melee", 'orange',"card")
dwarf.render(450,260,110,150)
const hobbit = new Cards (getRandomInt(25), "Hobbit", "Magic", 'BurlyWood', "card")
hobbit.render(550,260,110,150)
console.log(dragon, dwarf, knight, wizard, hobbit) //checking to see if all cards are made


// What do I want to happen:
/*
when button is pushed the card is relocated to the left side of the canvas 
he AI will place a card at random on the right side of the cavnas
the card with the higher level will be placed in the middle 
the winner will be scored on the right
*/


turn = 1;
function playFunc(){
    if(turn === 1){
        wizard.render(150,100,90,120)
        cardOne.disabled = true
        turn = 0;
        //wizard.alive = false
    }
    if(turn === 0){
        let AIrandom = getRandomInt(5)
        if(AIrandom === 1){
            wizard.render(550,100,90,120)
        }else if(AIrandom === 2){
            knight.render(550,100,90,120)
        }else if(AIrandom === 3){
            dragon.render(550,100,90,120)
        }else if(AIrandom === 4){
            dwarf.render(550,100,90,120)
        }else if(AIrandom === 5){
            hobbit.render(550,100,90,120)
        }
        turn = 1;
        if(AIrandom > wizard.lvl){
            console.log("PC WON")
        }else if (wizard.lvl > AIrandom){
            console.log('YOU WIN')
        }else{
            console.log("TIE")
        }
    }
}
function playFunc2(){
  if(turn === 1){
      knight.render(150,100,90,120)
      cardTwo.disabled = true
      turn = 0;
            //wizard.alive = false
}
    if(turn === 0){
      let AIrandom = getRandomInt(5)
      if(AIrandom === 1){
         wizard.render(550,100,90,120)
        }else if(AIrandom === 2){
            knight.render(550,100,90,120)
        }else if(AIrandom === 3){
            dragon.render(550,100,90,120)
         }else if(AIrandom === 4){
            dwarf.render(550,100,90,120)
         }else if(AIrandom === 5){
            hobbit.render(550,100,90,120)
     }
        turn = 1;
        if(AIrandom > knight.lvl){
            console.log("PC WON")
        }else if (wizard.lvl > AIrandom){
            console.log('YOU WIN')
        }else{
            console.log("TIE")
        }
    }
  }
  function playFunc3(){
    if(turn === 1){
        dragon.render(150,100,90,120)
        cardThree.disabled = true
        turn = 0;
              //wizard.alive = false
  }
      if(turn === 0){
        let AIrandom = getRandomInt(5)
        if(AIrandom === 1){
           wizard.render(550,100,90,120)
          }else if(AIrandom === 2){
              knight.render(550,100,90,120)
          }else if(AIrandom === 3){
              dragon.render(550,100,90,120)
           }else if(AIrandom === 4){
              dwarf.render(550,100,90,120)
           }else if(AIrandom === 5){
              hobbit.render(550,100,90,120)
       }
          turn = 1;
          if(AIrandom > dragon.lvl){
              console.log("PC WON")
          }else if (dragon.lvl > AIrandom){
              console.log('YOU WIN')
          }else{
              console.log("TIE")
          }
      }
    }
    function playFunc4(){
        if(turn === 1){
            dwarf.render(150,100,90,120)
            cardFour.disabled = true
            turn = 0;
                  //wizard.alive = false
      }
          if(turn === 0){
            let AIrandom = getRandomInt(5)

            if(AIrandom === 1){
               wizard.render(550,100,90,120)
              }else if(AIrandom === 2){
                  dwarf.render(550,100,90,120)
              }else if(AIrandom === 3){
                  dragon.render(550,100,90,120)
               }else if(AIrandom === 4){
                  dwarf.render(550,100,90,120)
               }else if(AIrandom === 5){
                  hobbit.render(550,100,90,120)
           }
              turn = 1;
              if(AIrandom > dwarf.lvl){
                  console.log("PC WON")
              }else if (dwarf.lvl > AIrandom){
                  console.log('YOU WIN')
              }else{
                  console.log("TIE")
              }
          }
        }
        function playFunc5(){
            if(turn === 1){
                hobbit.render(150,100,90,120)
                cardFive.disabled = true
                turn = 0;
                      //wizard.alive = false
          }
              if(turn === 0){
                let AIrandom = getRandomInt(5)
                if(AIrandom === 1){
                   wizard.render(550,100,90,120)
                  }else if(AIrandom === 2){
                      knight.render(550,100,90,120)
                  }else if(AIrandom === 3){
                      dragon.render(550,100,90,120)
                   }else if(AIrandom === 4){
                      dwarf.render(550,100,90,120)
                   }else if(AIrandom === 5){
                      hobbit.render(550,100,90,120)
               }
                  turn = 1;
                  if(AIrandom > hobbit.lvl){
                      console.log("PC WON")
                  }else if (hobbit.lvl > AIrandom){
                      console.log('YOU WIN')
                  }else{
                      console.log("TIE")
                  }
              }
            }
          