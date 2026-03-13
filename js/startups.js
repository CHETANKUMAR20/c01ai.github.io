function loadStartups(){

const container = document.querySelector("#startups .page-content")

let cards = ""

founderData.startups.forEach(startup => {

cards += `

<div class="card">

<h3>${startup.title}</h3>

<p>Status: ${startup.status}</p>

<p>Stack: ${startup.stack}</p>

</div>

`

})

container.innerHTML = `

<h2>AI Startups I'm Building</h2>

<div class="card-grid">

${cards}

</div>

`

}