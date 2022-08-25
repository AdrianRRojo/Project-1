const canvas = document.getElementById('gameCanvas')
const ctx = canvas.getContext('2d')
canvas.setAttribute('height', getComputedStyle(canvas)['height'])
canvas.setAttribute('width', getComputedStyle(canvas)['width'])

const cassieImg = new Image()
    cassieImg.src = "./HeroCards/traveler.png"
const wrigglyImg = new Image()
    wrigglyImg.src = "./HeroCards/wriggly.png"
const daisyImg = new Image()
    daisyImg.src = "./HeroCards/daisy.png"
const zoeyImg = new Image()
    zoeyImg.src = "./HeroCards/zoey.png"
const dukeImg = new Image()
    dukeImg.src = "./HeroCards/KingDuke.png"



const heraticImg = new Image()
    heraticImg.src = "./Monsters/heratic.png"
const hunterImg = new Image()
    hunterImg.src = "./Monsters/hunter.png" 
const knightImg = new Image()
    knightImg.src = "./Monsters/knight.png" 
const mushroomImg = new Image()
    mushroomImg.src = "./Monsters/mushroom.png" 
const skeletonImg = new Image()
    skeletonImg.src = "./Monsters/skele.png" 
// win counter function
let playerCounter = 0
let AICounter = 0
function getRandomInt2(max) {
    return Math.floor(Math.random() * max);
  }
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

const winner = function(cardName, btnName){
    let monstersLvls = getRandomInt2(25)
    let thislvl = getRandomInt(25)
    let aiScore = document.getElementById('aiScore')
    let pScore = document.getElementById("pScore")
    if (monstersLvls > thislvl){
        AICounter++
        console.log("You lose! " + thislvl + "<- hero monster -> " + monstersLvls)
        console.log(playerCounter + "<-PlayerCounter AICounter ->" + AICounter)
        cardName.render(0,0,0,0)
        btnName.disabled = true
        // pScore.innerText = "PLAYER: " + playerCounter 
        // aiScore.innerText =" Computer: " + AICounter
    }else if(thislvl> monstersLvls){
        playerCounter++ 
        console.log("You Win!" + thislvl + "<- hero monster -> " + monstersLvls)
        console.log(playerCounter + "<-PlayerCounter AICounter->" + AICounter)
        cardName.render(340,300,125,150)
        btnName.disabled = true
        // pScore.innerText = "PLAYER: " + playerCounter
        // aiScore.innerText =" Computer: " + AICounter
    }else if(thislvl === monstersLvls){
        ("TIE " + thislvl + "<- hero monster -> " + monstersLvls)
        console.log(playerCounter + "<-PlayerCounter AICounter->" + AICounter)
        btnName.disabled = false
    }
    if(playerCounter === 4){
        console.log("THE PLAYER WON " + playerCounter)
    }else if(AICounter === 4){
        console.log("THE COMPUTER WON " + AICounter)
    }else if(playerCounter === 3 && AICounter === 3){
        console.log("IT WAS A TIE " + playerCounter + " " + AICounter)
    }


}

// card constructor that will be used to generate cards for both the user and the AI

class Cards{ 
    constructor(name, lvl,image){
    this.name = name
    this.lvl = lvl
    this.image = image
    }
    render(x,y,w,h){
    ctx.drawImage(this.image,x,y,w,h)
    }
}

let duke = new Cards('KingDuke', 1, dukeImg)
let zoey = new Cards('Zo-Zo', 1, zoeyImg)
let daisy = new Cards('Dazed', 1, daisyImg)
let wriggly = new Cards('Wiggle', 1, wrigglyImg)
let cassie = new Cards('Cassie', 1, cassieImg)


let heratic = new Cards('Heratic',1,heraticImg)
let hunter = new Cards('Hunter',1,hunterImg)
let knight = new Cards('Knight',1,knightImg)
let mushroom = new Cards('mushrooom',1,mushroomImg)
let skeleton = new Cards('skeleton',1,skeletonImg)

// lists hero cards in an array so heroselector can pick through them
let hero = [duke,
    zoey,
    daisy,
    wriggly,
    cassie,
]

let monsters = [heratic,
    hunter,
    knight,
    mushroom,
    skeleton,
]
let monsterCard = function(){
    let aiSelector = monsters[Math.floor(Math.random() * monsters.length)]
    if (aiSelector === heratic){
            heraticImg.onload = function(){
            heratic.render(475,300,125,150)
            console.log(heratic)
        }
        }else if(aiSelector === hunter){
            hunterImg.onload = function(){
                hunter.render(475,300,125,150)
                console.log(hunter)
            }
        }else if(aiSelector === knight){
            knightImg.onload = function(){
                knight.render(475,300,125,150)
                console.log(knight)
            }
        }else if(aiSelector === mushroom){
            mushroomImg.onload = function(){
                mushroom.render(475,300,125,150)
                console.log(mushroom)
            }
        }else if(aiSelector === skeleton){
            skeletonImg.onload = function(){
                skeleton.render(475,300,125,150)
                console.log(skeleton)
            }
        }
    }
let playing = (btnName,pickedCard) =>{
    btnName.addEventListener('click', function(){
        pickedCard.render(190,300,125,150) 
    })
    
}


playedCard = () => {
    
    for(let i = 0; i <= 5; i++){
        let heroSelector = hero[Math.floor(Math.random() * hero.length)]
        if (heroSelector === duke){
    console.log(duke)
    dukeImg.onload = function(){
        if(i === 0){
         duke.render(50,750,125,150)
         playing(btnOne, duke)
         winner(duke, btnOne)
        }else if(i === 1){
            duke.render(175,750,125,150)
            playing(btnTwo, duke)
            winner(duke, btnTwo)
        }else if(i === 2){
            duke.render(300,750,125,150)
            playing(btnThree, duke)
            winner(duke, btnThree)
        }else if(i === 3){
            duke.render(425,750,125,150)
            playing(btnFour, duke)
            winner(duke, btnFour)
        }else if(i === 4){
            duke.render(550,750,125,150)
            playing(btnFive, duke)
            winner(duke, btnFive)
        }else if(i === 5){
            duke.render(675,750,125,150)
            playing(btnSix, duke)
            winner(duke, btnSix)
        }
}
        }else if(heroSelector === zoey){
    console.log(zoey)
    zoeyImg.onload = function(){
        if(i === 0){
        zoey.render(50,750,125,150)
        playing(btnOne, zoey)
    }else if(i === 1){
        zoey.render(175,750,125,150)
        playing(btnTwo, zoey)
}   else if(i === 2){
        zoey.render(300,750,125,150)
        playing(btnThree, zoey)
}   else if(i === 3){
    zoey.render(425,750,125,150)
    playing(btnFour, zoey)
}   else if(i === 4){
    zoey.render(550,750,125,150)
    playing(btnFive, zoey)
}else if(i === 5){
    zoey.render(675,750,125,150)
    playing(btnSix, zoey)
}
}
        }else if(heroSelector === daisy){
    console.log(daisy)
    daisyImg.onload = function(){
        if(i === 0){
        daisy.render(50,750,125,150)
        playing(btnOne, daisy)
        }else if(i === 1){
            daisy.render(175,750,125,150)
            playing(btnTwo, daisy)
        }else if(i === 2){
            daisy.render(300,750,125,150)
            playing(btnThree, daisy)
        }else if(i === 3){
            daisy.render(425,750,125,150)
            playing(btnFour, daisy)
        }else if(i === 4){
            daisy.render(550,750,125,150)
            playing(btnFive, daisy)
        }else if(i === 5){
            daisy.render(675,750,125,150)
            playing(btnSix, daisy)
        }
    }
        }else if(heroSelector === wriggly){
    wrigglyImg.onload = function(){
        console.log(wriggly)
        if(i === 0){
            wriggly.render(50,750,125,150)
            playing(btnOne, wriggly)
        }else if(i === 1){
            wriggly.render(175,750,125,150)
            playing(btnTwo, wriggly)
        }else if(i === 2){
            wriggly.render(300,750,125,150) 
            playing(btnThree, wriggly)
        }else if(i === 3){
            wriggly.render(425,750,125,150)
            playing(btnFour, wriggly)
        }else if(i === 4){
            wriggly.render(550,750,125,150)
            playing(btnFive, wriggly)
        }else if(i === 5){
            wriggly.render(675,750,125,150)
            playing(btnSix, wriggly)
        }
    }
        }else if(heroSelector === cassie){
    console.log(cassie)
    cassieImg.onload = function(){
        if(i === 0){
            cassie.render(50,750,125,150)
            playing(btnOne, cassie)
        }else if(i === 1){
            cassie.render(175,750,125,150) 
            playing(btnTwo, cassie)
        }else if(i === 2){
            cassie.render(300,750,125,150)
            playing(btnThree, cassie)
        }else if(i === 3){
            cassie.render(425,750,125,150)
            playing(btnFour, cassie)
        }else if(i === 4){
            cassie.render(550,750,125,150)
            playing(btnFive, cassie)
        }else if(i === 5){
            cassie.render(675,750,125,150)
            playing(btnSix, cassie)
        }
    }
        }   
    }
}

playedCard()






//ideas
/*attach cards to a button
when that button is pressed move card to the canvas
if your card wins move towards the middle

*/

// console.log(duke,zoey,daisy,wriggly,cassie) checking to see if each card recieved each property correctly

// zoey.render(50,50,50,50)
// daisy.render(40,350,50,50)           verifying each card can render properly
// wriggly.render(150,150,50,50) 
// cassie.render(12,213,50,50)


// create still static images using the constructor but use canvas to recreate a new card from the image in the desired location once the card is played



