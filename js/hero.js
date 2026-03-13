/* =====================================
   HERO SECTION RENDERER
===================================== */

function loadHero() {

const heroSection = document.getElementById("hero")

const founder = siteData.founder
const hero = siteData.hero


heroSection.innerHTML = `

<div class="hero-container reveal">

<div class="hero-meta">
<span class="badge">${founder.company}</span>
<span>${founder.role}</span>
</div>

<h1 class="hero-title">
Building <span class="hero-highlight">intelligent systems</span>
for the next era of technology.
</h1>

<p class="hero-vision">
${hero.subtext}
</p>

<div class="hero-actions">

<a href="#startups" class="btn btn-primary">
Explore Startups
</a>

<a href="#experiments" class="btn">
View Experiments
</a>

</div>

</div>

`

}