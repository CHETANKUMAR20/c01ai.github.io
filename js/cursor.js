const cursorGlow = document.getElementById("cursor-glow")

let mouseX = 0
let mouseY = 0

let glowX = 0
let glowY = 0

document.addEventListener("mousemove", (e)=>{

mouseX = e.clientX
mouseY = e.clientY

})

function animateCursor(){

glowX += (mouseX - glowX) * 0.15
glowY += (mouseY - glowY) * 0.15

cursorGlow.style.left = glowX + "px"
cursorGlow.style.top = glowY + "px"

requestAnimationFrame(animateCursor)

}

animateCursor()