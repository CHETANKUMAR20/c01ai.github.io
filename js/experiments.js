function loadExperiments(){

const container = document.querySelector("#experiments .page-content")

if(!container) return

let cards = ""

founderData.experiments.forEach(exp => {

cards += `

<div class="experiment-card">

<h3>${exp.name}</h3>

<p class="exp-status">${exp.status}</p>

<p>${exp.description}</p>

<p class="exp-tech">${exp.tech}</p>

</div>

`

})

container.innerHTML = `

<h2>AI Experiments Lab</h2>

<p class="section-intro">
Prototypes and AI systems currently under exploration.
</p>

<div class="experiment-grid">

${cards}

</div>

`

window.scrollTo(0,0)

}