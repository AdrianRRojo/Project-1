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

const wizard = new Cards(15, "wizard", "magic", 'blue')
// console.log(wizard) -- checked to see if card was made.
wizard.render(150,260,110,150)