/* =====================================
   EXPERIMENTS SECTION RENDERER
===================================== */

function loadExperiments() {

const section = document.getElementById("experiments")

const experiments = siteData.experiments

let experimentCards = ""


experiments.forEach(exp => {

experimentCards += `

<div class="experiment-card reveal">

<h4>${exp.title}</h4>

<p>
${exp.description}
</p>

</div>

`

})


section.innerHTML = `

<div class="section-header reveal">

<h2 class="section-title">Experiments</h2>

<p class="section-subtitle">
Exploring new ideas, systems, and technologies shaping the future of intelligent software.
</p>

</div>

<div class="experiment-grid">

${experimentCards}

</div>

`

}