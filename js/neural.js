const canvas = document.getElementById("neural-bg")
const ctx = canvas.getContext("2d")

canvas.width = window.innerWidth
canvas.height = window.innerHeight

let nodes = []

const NODE_COUNT = 80
const MAX_DISTANCE = 120

class Node{

constructor(){

this.x = Math.random() * canvas.width
this.y = Math.random() * canvas.height

this.vx = (Math.random() - 0.5) * 0.6
this.vy = (Math.random() - 0.5) * 0.6

}

move(){

this.x += this.vx
this.y += this.vy

if(this.x < 0 || this.x > canvas.width) this.vx *= -1
if(this.y < 0 || this.y > canvas.height) this.vy *= -1

}

draw(){

ctx.beginPath()
ctx.arc(this.x,this.y,2,0,Math.PI*2)
ctx.fillStyle = "#00aaff"
ctx.fill()

}

}

function createNodes(){

for(let i=0;i<NODE_COUNT;i++){

nodes.push(new Node())

}

}

function connectNodes(){

for(let i=0;i<nodes.length;i++){

for(let j=i;j<nodes.length;j++){

let dx = nodes[i].x - nodes[j].x
let dy = nodes[i].y - nodes[j].y

let distance = Math.sqrt(dx*dx + dy*dy)

if(distance < MAX_DISTANCE){

ctx.beginPath()

ctx.strokeStyle = "rgba(0,170,255,0.15)"
ctx.lineWidth = 1

ctx.moveTo(nodes[i].x,nodes[i].y)
ctx.lineTo(nodes[j].x,nodes[j].y)

ctx.stroke()

}

}

}

}

function animate(){

ctx.clearRect(0,0,canvas.width,canvas.height)

nodes.forEach(node=>{

node.move()
node.draw()

})

connectNodes()

requestAnimationFrame(animate)

}

window.addEventListener("resize",()=>{

canvas.width = window.innerWidth
canvas.height = window.innerHeight

})

createNodes()
animate()