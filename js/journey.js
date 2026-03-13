/* =====================================
   FOUNDER JOURNEY SECTION
===================================== */

function loadJourney() {

const section = document.getElementById("journey")

const journey = siteData.journey

let timelineItems = ""


journey.forEach(step => {

timelineItems += `

<div class="timeline-item reveal">

<div class="timeline-year">
${step.year}
</div>

<div class="timeline-title">
${step.title}
</div>

<p>
${step.description}
</p>

</div>

`

})


section.innerHTML = `

<div class="section-header reveal">

<h2 class="section-title">Journey</h2>

<p class="section-subtitle">
The path of learning, experimentation, and building that led to the creation of C01AI.
</p>

</div>

<div class="timeline">

${timelineItems}

</div>

`

}