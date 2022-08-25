const canvas = document.getElementById('gameCanvas')
const ctx = canvas.getContext('2d')
canvas.setAttribute('height', getComputedStyle(canvas)['height'])
canvas.setAttribute('width', getComputedStyle(canvas)['width'])

let x = document.querySelector('#reset')

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
  let aiScore = document.getElementById('aiScore')
  let pScore = document.getElementById("pScore")


// card constructor that will be used to generate cards for both the user and the AI

class Cards{ 
    constructor(name,lvl,imagePath,x,y,w,h){
        this.name = name
        this.lvl = lvl
        this.x = x
        this.y = y
        this.w = w
        this.h = h
        this.image = new Image()
        this.image.src = imagePath
        this.image.onload = () => {
            this.render()
        }
    }
    render(){
        ctx.drawImage(this.image,this.x,this.y,this.w,this.h)
    }
}

class monsterCards{ 
    constructor(name, lvl,image){
    this.name = name
    this.lvl = lvl
    this.image = image
    }
    render(x,y,w,h){
    ctx.drawImage(this.image,x,y,w,h)
    }
}

 let heratic = new monsterCards('Heratic',1,heraticImg,340,300,125,150)
 let hunter = new monsterCards('Hunter',1,hunterImg,340,300,125,150)
 let knight = new monsterCards('Knight',1,knightImg,340,300,125,150)
 let mushroom = new monsterCards('mushrooom',1,mushroomImg,340,300,125,150)
 let skeleton = new monsterCards('skeleton',1,skeletonImg,340,300,125,150)

// lists hero cards in an array so heroselector can pick through them
let hero = ['duke',
    'zoey',
    'daisy',
    'wriggly',
    'cassie',
]

 let monsters = [heratic,
     hunter,
     knight,
     mushroom,
     skeleton,
]
let monsterCardPick = function(){
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

const winner = function(btnName,pickedCard){
        let monstersLvls = getRandomInt2(5)
            monsterCardPick()
            if (pickedCard.lvl < monstersLvls){
                AICounter++
                pickedCard.lvl - 1
                console.log("You lose! " + pickedCard.lvl + "<- hero monster -> " + monstersLvls)
                console.log(playerCounter + "<-PlayerCounter AICounter ->" + AICounter)
                pScore.innerText = "PLAYER: " + playerCounter 
                aiScore.innerText =" Computer: " + AICounter
                if(pickedCard.lvl === 0){
                    btnName.disabled = true
                }
            }else if(pickedCard.lvl > monstersLvls){
                playerCounter++ 
                pickedCard.Lvl + .5
                monstersLvls + 1
                monsterCardPick()
                console.log("You Win!" + pickedCard.lvl + "<- hero monster -> " + monstersLvls)
                console.log(playerCounter + "<-PlayerCounter AICounter->" + AICounter)
                btnName.disabled = true
                pScore.innerText = "PLAYER: " + playerCounter
                aiScore.innerText =" Computer: " + AICounter
            }else if(pickedCard.lvl === monstersLvls){
                ("TIE " + pickedCard.lvl + "<- hero monster -> " + monstersLvls)
                console.log(playerCounter + "<-PlayerCounter AICounter->" + AICounter)
                btnName.disabled = false
            }
            if(playerCounter === 4){
                console.log("THE PLAYER WON " + playerCounter)
                x.style.display = 'block';
            }else if(AICounter === 4){
                console.log("THE COMPUTER WON " + AICounter)
                x.style.display = 'block';
            }else if(playerCounter === 3 && AICounter === 3){
                console.log("IT WAS A TIE " + playerCounter + "<-player computer->" + AICounter)
                x.style.display = 'block';
            }
        
        
        }
// let round = 1;
// let aiDiff = 0;
// const roundChange = () => {
//     if(playerCounter === 0 && AICounter === 0){
//          round = 1;
//          aiDiff = 0;
//     }
//     console.log(round)   
//     for(aiDiff < round; aiDiff++;){
//         aiDiff ++
//         monsterCard()
//          if(playerCounter >=  1){
//         round = round + playerCounter 
//         console.log("PlayerCounter: " + playerCounter + " AiCounter: " + "Round: " + round + " aiDiff: " + aiDiff)
//     }else if(AICounter >= 1){
//         round = round + AICounter
//         console.log("PlayerCounter: " + playerCounter + "AiCounter: " + "Round: " + "aiDiff: " + aiDiff)
//     }
// }
//     }
    


let playing = (btnName,pickedCard) =>{
    btnName.addEventListener('click', function(){
      if(pickedCard === 'duke'){
        const duke = new Cards('duke',1,"./HeroCards/KingDuke.png",190,300,125,150) 
        winner(btnName, duke)
        console.log(duke.lvl)
      }else if(pickedCard === 'zoey'){
        const zoey = new Cards('zoey', 1,"./HeroCards/zoey.png", 190,300,125,150)
        winner(btnName, zoey)
      }else if(pickedCard === 'daisy'){
        const daisy = new Cards('daisy',1, "./HeroCards/daisy.png",190,300,125,150)
        winner(btnName,daisy)
      }else if(pickedCard === 'wriggly'){
        const wriggly = new Cards('wriggly', 1, "./HeroCards/wriggly.png",190,300,125,150)
        winner(btnName,wriggly)
      }else if(pickedCard === 'cassie'){
        const cassie = new Cards('cassie',1, "./HeroCards/traveler.png",190,300,125,150)
        winner(btnName,cassie)
      }
    })
    
}

//update array to be strings
// make the deck 
// constructor(name, lvl,imagePath,x,y,w,h){
playedCard = () => {
    start.disabled = true
    start.style.display = 'none';
    for(let i = 0; i <= 5; i++){
        let heroSelector = hero[Math.floor(Math.random() * hero.length)]
        if (heroSelector === 'duke'){
            if(i === 0){
               const duke = new Cards('duke','1',"./HeroCards/KingDuke.png",50,750,125,150)
                playing(btnOne, 'duke')
            }else if(i === 1){
              const duke = new Cards('duke','1',"./HeroCards/KingDuke.png", 175,750,125,150)
                playing(btnTwo, 'duke')
            }else if(i === 2){
                const duke = new Cards('duke','1',"./HeroCards/KingDuke.png", 300,750,125,150)
                playing(btnThree, 'duke')
            }else if(i === 3){
                const duke = new Cards('duke','1',"./HeroCards/KingDuke.png", 425,750,125,150)
                playing(btnFour, 'duke')
            }else if(i === 4){
                const duke = new Cards('duke','1',"./HeroCards/KingDuke.png", 550,750,125,150)
                playing(btnFive, 'duke')
            }else if(i === 5){
                const duke = new Cards('duke','1',"./HeroCards/KingDuke.png", 675,750,125,150)
                playing(btnSix, 'duke')
            }
    }else if(heroSelector === 'zoey'){
            if(i === 0){
                const zoey = new Cards('zoey', '1',"./HeroCards/zoey.png", 50,750,125,150)
                playing(btnOne, 'zoey')
            }else if(i === 1){
                const zoey = new Cards('zoey', '1',"./HeroCards/zoey.png", 175,750,125,150)
                playing(btnTwo, 'zoey')
            }else if(i === 2){
                const zoey = new Cards('zoey', '1',"./HeroCards/zoey.png", 300,750,125,150)
                playing(btnThree, 'zoey')
            }else if(i === 3){
                const zoey = new Cards('zoey', '1',"./HeroCards/zoey.png", 425,750,125,150)
                playing(btnFour, 'zoey')
            }else if(i === 4){
                const zoey = new Cards('zoey', '1',"./HeroCards/zoey.png", 550,750,125,150)
                playing(btnFive, 'zoey')
            }else if(i === 5){
                const zoey = new Cards('zoey', '1',"./HeroCards/zoey.png", 675,750,125,150)
                playing(btnSix, 'zoey')
        }
    }else if(heroSelector === 'daisy'){
        if(i === 0){
                const daisy = new Cards('daisy','1', "./HeroCards/daisy.png",50,750,125,150)
                playing(btnOne, 'daisy')
            }else if(i === 1){
                const daisy = new Cards('daisy','1', "./HeroCards/daisy.png",175,750,125,150)
                playing(btnTwo, 'daisy')
            }else if(i === 2){
                const daisy = new Cards('daisy','1', "./HeroCards/daisy.png",300,750,125,150)
                playing(btnThree, 'daisy')
            }else if(i === 3){
                const daisy = new Cards('daisy','1', "./HeroCards/daisy.png",425,750,125,150)
                playing(btnFour, 'daisy')
            }else if(i === 4){
                const daisy = new Cards('daisy','1', "./HeroCards/daisy.png",550,750,125,150)
                playing(btnFive, 'daisy')
            }else if(i === 5){
                const daisy = new Cards('daisy','1', "./HeroCards/daisy.png",675,750,125,150)
                playing(btnSix, 'daisy')
            }
    }else if(heroSelector === 'wriggly'){
        if(i === 0){
                const wriggly = new Cards('wriggly', 1, "./HeroCards/wriggly.png",50,750,125,150)
                playing(btnOne, 'wriggly')
            }else if(i === 1){
                const wriggly = new Cards('wriggly', 1, "./HeroCards/wriggly.png",175,750,125,150)
                playing(btnTwo, 'wriggly')
            }else if(i === 2){
                const wriggly = new Cards('wriggly', 1, "./HeroCards/wriggly.png",300,750,125,150) 
                playing(btnThree, 'wriggly')
            }else if(i === 3){
                const wriggly = new Cards('wriggly', 1, "./HeroCards/wriggly.png",425,750,125,150)
                playing(btnFour, 'wriggly')
            }else if(i === 4){
                const wriggly = new Cards('wriggly', 1, "./HeroCards/wriggly.png",550,750,125,150)
                playing(btnFive, 'wriggly')
            }else if(i === 5){
                const wriggly = new Cards('wriggly', 1, "./HeroCards/wriggly.png",675,750,125,150)
                playing(btnSix, 'wriggly')
            }
    }else if(heroSelector === 'cassie'){
        if(i === 0){
                const cassie = new Cards('cassie',1, "./HeroCards/traveler.png",50,750,125,150)
                playing(btnOne, 'cassie')
            }else if(i === 1){
                const cassie = new Cards('cassie',1, "./HeroCards/traveler.png",175,750,125,150) 
                playing(btnTwo, 'cassie')
            }else if(i === 2){
                const cassie = new Cards('cassie',1, "./HeroCards/traveler.png",300,750,125,150)
                playing(btnThree, 'cassie')
            }else if(i === 3){
                const cassie = new Cards('cassie',1, "./HeroCards/traveler.png",425,750,125,150)
                playing(btnFour, 'cassie')
            }else if(i === 4){
                const cassie = new Cards('cassie',1, "./HeroCards/traveler.png",550,750,125,150)
                playing(btnFive, 'cassie')
            }else if(i === 5){
                const cassie = new Cards('cassie',1, "./HeroCards/traveler.png",675,750,125,150)
                playing(btnSix, 'cassie')
            }
        }
            }   
        }




reset = () => {location.reload();}



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



