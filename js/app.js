/* =====================================
   C01AI FOUNDER SITE
   APPLICATION CONTROLLER
===================================== */

document.addEventListener("DOMContentLoaded", () => {

initializeSections()
initializeScrollReveal()
initializeSidebarNavigation()

})



/* =====================================
   LOAD SITE SECTIONS
===================================== */

function initializeSections() {

if (typeof loadHero === "function") {
loadHero()
}

if (typeof loadVision === "function") {
loadVision()
}

if (typeof loadPhilosophy === "function") {
loadPhilosophy()
}

if (typeof loadStartups === "function") {
loadStartups()
}

if (typeof loadExperiments === "function") {
loadExperiments()
}

if (typeof loadJourney === "function") {
loadJourney()
}

if (typeof loadConnect === "function") {
loadConnect()
}

}



/* =====================================
   SCROLL REVEAL ANIMATION
===================================== */

function initializeScrollReveal() {

const elements = document.querySelectorAll(".reveal")

function revealOnScroll() {

elements.forEach(element => {

const windowHeight = window.innerHeight
const elementTop = element.getBoundingClientRect().top

const visiblePoint = 120

if (elementTop < windowHeight - visiblePoint) {
element.classList.add("active")
}

})

}

window.addEventListener("scroll", revealOnScroll)

revealOnScroll()

}



/* =====================================
   SIDEBAR SMOOTH NAVIGATION
===================================== */

function initializeSidebarNavigation() {

const links = document.querySelectorAll("#sidebar a")

links.forEach(link => {

link.addEventListener("click", e => {

e.preventDefault()

const targetId = link.getAttribute("href")
const targetSection = document.querySelector(targetId)

if (targetSection) {

window.scrollTo({
top: targetSection.offsetTop - 40,
behavior: "smooth"
})

}

})

})

}