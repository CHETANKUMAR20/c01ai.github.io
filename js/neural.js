/* =====================================
   NEURAL NETWORK BACKGROUND
===================================== */

const canvas = document.getElementById("neural-canvas")
const ctx = canvas.getContext("2d")

let particles = []
const particleCount = 80
const maxDistance = 120


/* ===============================
   CANVAS SIZE
=============================== */

function resizeCanvas() {

canvas.width = window.innerWidth
canvas.height = window.innerHeight

}

window.addEventListener("resize", resizeCanvas)

resizeCanvas()



/* ===============================
   PARTICLE CLASS
=============================== */

class Particle {

constructor() {

this.x = Math.random() * canvas.width
this.y = Math.random() * canvas.height

this.vx = (Math.random() - 0.5) * 0.6
this.vy = (Math.random() - 0.5) * 0.6

this.size = 2

}

move() {

this.x += this.vx
this.y += this.vy

if (this.x < 0 || this.x > canvas.width) {
this.vx *= -1
}

if (this.y < 0 || this.y > canvas.height) {
this.vy *= -1
}

}

draw() {

ctx.beginPath()
ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
ctx.fillStyle = "rgba(110,124,255,0.8)"
ctx.fill()

}

}



/* ===============================
   CREATE PARTICLES
=============================== */

function createParticles() {

particles = []

for (let i = 0; i < particleCount; i++) {

particles.push(new Particle())

}

}

createParticles()



/* ===============================
   CONNECT PARTICLES
=============================== */

function connectParticles() {

for (let a = 0; a < particles.length; a++) {

for (let b = a; b < particles.length; b++) {

let dx = particles[a].x - particles[b].x
let dy = particles[a].y - particles[b].y

let distance = Math.sqrt(dx * dx + dy * dy)

if (distance < maxDistance) {

ctx.strokeStyle = "rgba(110,124,255,0.15)"
ctx.lineWidth = 1

ctx.beginPath()

ctx.moveTo(particles[a].x, particles[a].y)
ctx.lineTo(particles[b].x, particles[b].y)

ctx.stroke()

}

}

}

}



/* ===============================
   ANIMATION LOOP
=============================== */

function animate() {

ctx.clearRect(0, 0, canvas.width, canvas.height)

particles.forEach(p => {

p.move()
p.draw()

})

connectParticles()

requestAnimationFrame(animate)

}

animate()