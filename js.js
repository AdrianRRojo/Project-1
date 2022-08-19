const canvas = document.querySelector('canvas')

const ctx = canvas.getContext('2d')
canvas.setAttribute('height', getComputedStyle(canvas)['height'])
canvas.setAttribute('width', getComputedStyle(canvas)['width'])


class Cards{
    constructor(lvl,cardName, type, color){
        this.lvl = lvl
        this.cardName = cardName
        this.type = type
        this.alive = true
        this.color = color
    }
    render(x,y,w,h){
        ctx.fillStyle = this.color
        ctx.fillRect(x,y,w,h)
    }
}

const wizard = new Cards(Math.random() *  50, "Wizard", "magic", 'blue')
wizard.render(150,260,110,150)
const knight = new Cards(Math.random() *  50, "Knight", "Melee",'red')

const dragon = new Cards(Math.random() *  50, "Dragon", "Magin",'hotpink')

const dwarf = new Cards (Math.random ()* 50, "Dwarf", "Melee","orange")
console.log(dragon, dwarf, knight, wizard)