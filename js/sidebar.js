function loadSidebar(){

const sidebarContent = document.getElementById("sidebar-content")

sidebarContent.innerHTML = `

<div class="nav-item active" data-target="hero">
<i data-lucide="home" class="nav-icon"></i>
<span class="nav-text">Home</span>
</div>

<div class="nav-item" data-target="philosophy">
<i data-lucide="brain" class="nav-icon"></i>
<span class="nav-text">Philosophy</span>
</div>

<div class="nav-item" data-target="startups">
<i data-lucide="rocket" class="nav-icon"></i>
<span class="nav-text">Startups</span>
</div>

<div class="nav-item" data-target="experiments">
<i data-lucide="flask-conical" class="nav-icon"></i>
<span class="nav-text">Experiments</span>
</div>

<div class="nav-item" data-target="journey">
<i data-lucide="clock" class="nav-icon"></i>
<span class="nav-text">Journey</span>
</div>

<div class="nav-item" data-target="connect">
<i data-lucide="send" class="nav-icon"></i>
<span class="nav-text">Connect</span>
</div>

`

lucide.createIcons()

setupSidebarNavigation()
setupSidebarToggle()

}

function setupSidebarNavigation(){

const navItems = document.querySelectorAll(".nav-item")
const pages = document.querySelectorAll(".page")

navItems.forEach(item => {

item.addEventListener("click", () => {

const target = item.dataset.target

/* highlight active menu */

navItems.forEach(n => n.classList.remove("active"))
item.classList.add("active")

/* hide all pages */

pages.forEach(page => page.classList.remove("active"))

const targetPage = document.getElementById(target)

if(targetPage){

/* show selected page */

targetPage.classList.add("active")

/* reset scroll */

window.scrollTo({
top:0,
behavior:"auto"
})

/* load content */

switch(target){

case "hero":
loadHero()
break

case "philosophy":
loadPhilosophy()
break

case "startups":
loadStartups()
break

case "experiments":
loadExperiments()
break

case "journey":
loadJourney()
break

case "connect":
loadConnect()
break

}

}

})

})

}

function setupSidebarToggle(){

const toggle = document.getElementById("sidebar-toggle")
const sidebar = document.getElementById("sidebar")

toggle.addEventListener("click", ()=>{

sidebar.classList.toggle("collapsed")

/* change icon */

if(sidebar.classList.contains("collapsed")){
toggle.innerHTML = "☰"
}else{
toggle.innerHTML = "✕"
}

})

}