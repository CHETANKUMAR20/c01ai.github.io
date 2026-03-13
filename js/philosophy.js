function loadPhilosophy(){

const container = document.querySelector("#philosophy .page-content")

if(!container) return

let cards = ""

founderData.philosophy.forEach(item => {

cards += `

<div class="philosophy-card">

<h3>${item}</h3>

<p>Building intelligent systems that automate work at scale.</p>

</div>

`

})

container.innerHTML = `

<h2>Founder Philosophy</h2>

<p class="philosophy-intro">
I don't just write code. I build systems that create value at scale.
</p>

<div class="philosophy-grid">

${cards}

</div>

`

window.scrollTo(0,0)

}