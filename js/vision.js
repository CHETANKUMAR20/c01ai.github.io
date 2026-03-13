/* =====================================
   VISION SECTION
===================================== */

function loadVision() {

const section = document.getElementById("vision")

const vision = siteData.vision

section.innerHTML = `

<div class="section-header reveal">

<h2 class="section-title">${vision.title}</h2>

<p class="section-subtitle">
${vision.description}
</p>

</div>

`

}