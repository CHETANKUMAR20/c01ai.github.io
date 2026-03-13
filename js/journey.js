function loadJourney(){

const container = document.querySelector("#journey .page-content")

let timeline = ""

founderData.journey.forEach(item => {

timeline += `

<div class="journey-card">

<div class="journey-year">
${item.year}
</div>

<div class="journey-content">

<h3>${item.title}</h3>

<p>${item.description}</p>

</div>

</div>

`

})

container.innerHTML = `

<h2>Founder Journey</h2>

<p class="section-intro">
Milestones in my journey building technology and AI systems.
</p>

<div class="journey-timeline">

${timeline}

</div>

`

}