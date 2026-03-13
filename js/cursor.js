/* =====================================
   CUSTOM CURSOR SYSTEM
===================================== */

const cursor = document.querySelector(".cursor")

let mouseX = 0
let mouseY = 0

let cursorX = 0
let cursorY = 0


/* ===============================
   TRACK MOUSE
=============================== */

document.addEventListener("mousemove", (e) => {

mouseX = e.clientX
mouseY = e.clientY

})



/* ===============================
   SMOOTH CURSOR FOLLOW
=============================== */

function animateCursor() {

cursorX += (mouseX - cursorX) * 0.15
cursorY += (mouseY - cursorY) * 0.15

cursor.style.left = cursorX + "px"
cursor.style.top = cursorY + "px"

requestAnimationFrame(animateCursor)

}

animateCursor()



/* ===============================
   HOVER EFFECT
=============================== */

const hoverElements = document.querySelectorAll(
"a, button, .product-card, .experiment-card"
)

hoverElements.forEach(el => {

el.addEventListener("mouseenter", () => {

cursor.classList.add("active")

})

el.addEventListener("mouseleave", () => {

cursor.classList.remove("active")

})

})