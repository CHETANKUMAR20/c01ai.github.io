function loadHero(){

const container = document.querySelector("#hero .page-content")

hero.innerHTML = `

<div class="hero-container fade-in">

<h1>${founderData.name}</h1>

<p>Founder of <strong>${founderData.brand}</strong></p>

<p>${founderData.tagline}</p>

<h2>${founderData.brand}</h2>

<div class="hero-buttons">

<button class="btn">View Projects</button>

<button class="btn">Follow Journey</button>

<button class="btn">Contact</button>

</div>

</div>

`

}