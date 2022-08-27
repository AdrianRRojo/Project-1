const canvas = document.getElementById('gameCanvas')
const ctx = canvas.getContext('2d')
canvas.setAttribute('height', getComputedStyle(canvas)['height'])
canvas.setAttribute('width', getComputedStyle(canvas)['width'])
//x = to reset button
let x = document.querySelector('#reset')

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
  let newlvl = getRandomInt(2)

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

// lists hero cards in an array so heroselector can pick through them
let hero = ['duke',
    'zoey',
    'daisy',
    'wriggly',
    'cassie',
]
//array of monsters names to be played
 let monsters = ['heratic',
     'hunter',
     'knight',
     'mushroom',
     'skeleton'
]

// picks a card to play at random
let monsterCardPick = function(){
    let aiSelector = monsters[Math.floor(Math.random() * monsters.length)]
    
    if (aiSelector === 'heratic'){
        
        const heratic = new Cards('heratic','.5',"./Monsters/heratic.png",475,300,125,150)
        document.getElementById("monsterLvls").innerText = "LEVEL: " + newlvl
            console.log(heratic)
        
        }else if(aiSelector === 'hunter'){
            const hunter = new Cards('hunter','.5',"./Monsters/hunter.png",475,300,125,150)
                console.log(hunter)
               document.getElementById("monsterLvls").innerText = "LEVEL: " + newlvl
        }else if(aiSelector === 'knight'){
            const knight = new Cards('knight','.5',"./Monsters/knight.png",475,300,125,150)
                console.log(knight)
               document.getElementById("monsterLvls").innerText = "LEVEL: " + newlvl
        }else if(aiSelector === 'mushroom'){
            const mushroom = new Cards('hunter','.5',"./Monsters/mushroom.png",475,300,125,150)
                console.log(mushroom)
               document.getElementById("monsterLvls").innerText = "LEVEL: " + newlvl
        }else if(aiSelector === 'skeleton'){
            const skeleton = new Cards('hunter','.5',"./Monsters/skele.png",475,300,125,150)
                console.log(skeleton)
               document.getElementById("monsterLvls").innerText = "LEVEL: " + newlvl
            }
        }
// winner  and loser function
const winner = function(btnName,pickedCard){
            monsterCardPick()
            if (pickedCard.lvl < newlvl){
                AICounter++
                pickedCard.lvl - 1
                console.log("You lose! " + pickedCard.lvl + "<- hero monster -> " + newlvl)
                console.log(playerCounter + "<-PlayerCounter AICounter ->" + AICounter)
                pScore.innerText = "PLAYER: " + playerCounter 
                aiScore.innerText =" Computer: " + AICounter
                if(pickedCard.lvl === 0){
                    btnName.disabled = true
                }
            }else if(pickedCard.lvl > newlvl){
                playerCounter++ 
                pickedCard.Lvl + .5
                newlvl + 1
                monsterCardPick()
                console.log("You Win!" + pickedCard.lvl + "<- hero monster -> " + newlvl)
                console.log(playerCounter + "<-PlayerCounter AICounter->" + AICounter)
                pScore.innerText = "PLAYER: " + playerCounter
                aiScore.innerText =" Computer: " + AICounter
            }else if(pickedCard.lvl === newlvl){
                ("TIE " + pickedCard.lvl + "<- hero monster -> " + newlvl)
                console.log(playerCounter + "<-PlayerCounter AICounter->" + AICounter)
                btnName.disabled = false
            }
            if(playerCounter === 4){
                console.log("THE PLAYER WON " + playerCounter)
                x.style.display = 'block';
                btnOne.disabled = true
                btnTwo.disabled = true
                btnThree.disabled = true
                btnFour.disabled = true
                btnFive.disabled = true
                btnSix.disabled = true
            }else if(AICounter === 4){
                console.log("THE COMPUTER WON " + AICounter)
                x.style.display = 'block';
                btnOne.disabled = true
                btnTwo.disabled = true
                btnThree.disabled = true
                btnFour.disabled = true
                btnFive.disabled = true
                btnSix.disabled = true
            }else if(playerCounter === 3 && AICounter === 3){
                console.log("IT WAS A TIE " + playerCounter + "<-player computer->" + AICounter)
                x.style.display = 'block';
                btnOne.disabled = true
                btnTwo.disabled = true
                btnThree.disabled = true
                btnFour.disabled = true
                btnFive.disabled = true
                btnSix.disabled = true
            }
        
        
        }
//picked cards are moved to the center of the screen
let playing = (btnName,pickedCard) =>{
    btnName.addEventListener('click', function(){
      if(pickedCard === 'duke'){
        const duke = new Cards('duke',3,"./HeroCards/KingDuke.png",190,300,125,150)
        document.getElementById("playerLvl").innerText = "LEVEL: " + duke.lvl
        setTimeout(() => { 
        winner(btnName, duke)
    }, '4000')
      }else if(pickedCard === 'zoey'){
        const zoey = new Cards('zoey', 3,"./HeroCards/zoey.png", 190,300,125,150)
        document.getElementById("playerLvl").innerText = "LEVEL: " + zoey.lvl
        setTimeout(() => {
            winner(btnName, zoey)
        }, '4000')
      }else if(pickedCard === 'daisy'){
        const daisy = new Cards('daisy',4, "./HeroCards/daisy.png",190,300,125,150)
        document.getElementById("playerLvl").innerText = "LEVEL: " + daisy.lvl
        setTimeout(() => { 
        winner(btnName,daisy)
    }, '4000')
      }else if(pickedCard === 'wriggly'){
        const wriggly = new Cards('wriggly', .5, "./HeroCards/wriggly.png",190,300,125,150)
        document.getElementById("playerLvl").innerText = "LEVEL: " + wriggly.lvl
        setTimeout(() => {
        winner(btnName,wriggly)
    }, '4000')
      }else if(pickedCard === 'cassie'){
        const cassie = new Cards('cassie',2.5, "./HeroCards/traveler.png",190,300,125,150)
        document.getElementById("playerLvl").innerText = "LEVEL: " + cassie.lvl
        setTimeout(() => {
        winner(btnName,cassie)
    }, '4000')
      }
    })
    
}
//creates a deck of random cards
playedCard = () => {
    start.disabled = true
    start.style.display = 'none';
    for(let i = 0; i <= 5; i++){
        let heroSelector = hero[Math.floor(Math.random() * hero.length)]
        if (heroSelector === 'duke'){
            if(i === 0){
               const duke = new Cards('duke',2,"./HeroCards/KingDuke.png",50,600,125,150)
                playing(btnOne, 'duke')
            }else if(i === 1){
              const duke = new Cards('duke',2,"./HeroCards/KingDuke.png", 175,600,125,150)
                playing(btnTwo, 'duke')
            }else if(i === 2){
                const duke = new Cards('duke',2,"./HeroCards/KingDuke.png", 300,600,125,150)
                playing(btnThree, 'duke')
            }else if(i === 3){
                const duke = new Cards('duke',2,"./HeroCards/KingDuke.png", 425,600,125,150)
                playing(btnFour, 'duke')
            }else if(i === 4){
                const duke = new Cards('duke',1.5,"./HeroCards/KingDuke.png", 550,600,125,150)
                playing(btnFive, 'duke')
            }else if(i === 5){
                const duke = new Cards('duke',2,"./HeroCards/KingDuke.png", 675,600,125,150)
                playing(btnSix, 'duke')
            }
    }else if(heroSelector === 'zoey'){
            if(i === 0){
                const zoey = new Cards('zoey', .5,"./HeroCards/zoey.png", 50,600,125,150)
                playing(btnOne, 'zoey')
            }else if(i === 1){
                const zoey = new Cards('zoey', 1,"./HeroCards/zoey.png", 175,600,125,150)
                playing(btnTwo, 'zoey')
            }else if(i === 2){
                const zoey = new Cards('zoey', 2,"./HeroCards/zoey.png", 300,600,125,150)
                playing(btnThree, 'zoey')
            }else if(i === 3){
                const zoey = new Cards('zoey', 2,"./HeroCards/zoey.png", 425,600,125,150)
                playing(btnFour, 'zoey')
            }else if(i === 4){
                const zoey = new Cards('zoey', 2,"./HeroCards/zoey.png", 550,600,125,150)
                playing(btnFive, 'zoey')
            }else if(i === 5){
                const zoey = new Cards('zoey', 2,"./HeroCards/zoey.png", 675,600,125,150)
                playing(btnSix, 'zoey')
        }
    }else if(heroSelector === 'daisy'){
        if(i === 0){
                const daisy = new Cards('daisy',2, "./HeroCards/daisy.png",50,600,125,150)
                playing(btnOne, 'daisy')
            }else if(i === 1){
                const daisy = new Cards('daisy',2, "./HeroCards/daisy.png",175,600,125,150)
                playing(btnTwo, 'daisy')
            }else if(i === 2){
                const daisy = new Cards('daisy',2, "./HeroCards/daisy.png",300,600,125,150)
                playing(btnThree, 'daisy')
            }else if(i === 3){
                const daisy = new Cards('daisy',2, "./HeroCards/daisy.png",425,600,125,150)
                playing(btnFour, 'daisy')
            }else if(i === 4){
                const daisy = new Cards('daisy',2, "./HeroCards/daisy.png",550,600,125,150)
                playing(btnFive, 'daisy')
            }else if(i === 5){
                const daisy = new Cards('daisy',2, "./HeroCards/daisy.png",675,600,125,150)
                playing(btnSix, 'daisy')
            }
    }else if(heroSelector === 'wriggly'){
        if(i === 0){
                const wriggly = new Cards('wriggly', 2, "./HeroCards/wriggly.png",50,600,125,150)
                playing(btnOne, 'wriggly')
            }else if(i === 1){
                const wriggly = new Cards('wriggly', 2, "./HeroCards/wriggly.png",175,600,125,150)
                playing(btnTwo, 'wriggly')
            }else if(i === 2){
                const wriggly = new Cards('wriggly', 1.5, "./HeroCards/wriggly.png",300,600,125,150) 
                playing(btnThree, 'wriggly')
            }else if(i === 3){
                const wriggly = new Cards('wriggly', 1.5, "./HeroCards/wriggly.png",425,600,125,150)
                playing(btnFour, 'wriggly')
            }else if(i === 4){
                const wriggly = new Cards('wriggly', 2, "./HeroCards/wriggly.png",550,600,125,150)
                playing(btnFive, 'wriggly')
            }else if(i === 5){
                const wriggly = new Cards('wriggly', 3, "./HeroCards/wriggly.png",675,600,125,150)
                playing(btnSix, 'wriggly')
            }
    }else if(heroSelector === 'cassie'){
        if(i === 0){
                const cassie = new Cards('cassie',2.5, "./HeroCards/traveler.png",50,600,125,150)
                playing(btnOne, 'cassie')
            }else if(i === 1){
                const cassie = new Cards('cassie',2.5, "./HeroCards/traveler.png",175,600,125,150) 
                playing(btnTwo, 'cassie')
            }else if(i === 2){
                const cassie = new Cards('cassie',2.5, "./HeroCards/traveler.png",300,600,125,150)
                playing(btnThree, 'cassie')
            }else if(i === 3){
                const cassie = new Cards('cassie',2.5, "./HeroCards/traveler.png",425,600,125,150)
                playing(btnFour, 'cassie')
            }else if(i === 4){
                const cassie = new Cards('cassie',2.5, "./HeroCards/traveler.png",550,600,125,150)
                playing(btnFive, 'cassie')
            }else if(i === 5){
                const cassie = new Cards('cassie',2.5, "./HeroCards/traveler.png",675,600,125,150)
                playing(btnSix, 'cassie')
            }
        }
            }   
        }


// deployed at the end of the game and restarts the game.
reset = () => {
    x.style.display = 'none';
    btnOne.disabled = false
    btnTwo.disabled = false
    btnThree.disabled = false
    btnFour.disabled = false
    btnFive.disabled = false
    btnSix.disabled = false
    let playerCounter = 0;
    let AICounter = 0;
    pScore.innerText = "PLAYER: " + playerCounter 
    aiScore.innerText =" Computer: " + AICounter
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    document.getElementById("monsterLvls").innerText = " "
    document.getElementById("playerLvl").innerText = " "
}





