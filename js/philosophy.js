/* =====================================
   PHILOSOPHY SECTION RENDERER
===================================== */

function loadPhilosophy() {

const section = document.getElementById("philosophy")

const philosophyData = siteData.philosophy


let philosophyCards = ""

philosophyData.forEach(item => {

philosophyCards += `

<div class="experiment-card reveal">

<h4>${item.title}</h4>

<p>${item.description}</p>

</div>

`

})


section.innerHTML = `

<div class="section-header reveal">

<h2 class="section-title">Philosophy</h2>

<p class="section-subtitle">
The principles behind how we build technology, startups, and intelligent systems at C01AI.
</p>

</div>

<div class="experiment-grid">

${philosophyCards}

</div>

`

}