/* =====================================
   STARTUPS SECTION RENDERER
===================================== */

function loadStartups() {

const section = document.getElementById("startups")

const startups = siteData.startups

let startupCards = ""


startups.forEach(startup => {

startupCards += `

<div class="product-card reveal">

<span class="badge">${startup.tag}</span>

<h3>${startup.name}</h3>

<p>
${startup.description}
</p>

</div>

`

})


section.innerHTML = `

<div class="section-header reveal">

<h2 class="section-title">Startups</h2>

<p class="section-subtitle">
An ecosystem of AI-powered products and intelligent systems built under C01AI.
</p>

</div>

<div class="product-grid">

${startupCards}

</div>

`

}