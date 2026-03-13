function loadConnect(){

const container = document.querySelector("#connect .page-content")

let cards = ""

founderData.connect.forEach(item => {

cards += `

<a href="${item.url}" target="_blank" class="connect-card">

<i data-lucide="${item.icon}" class="connect-icon"></i>

<span>${item.name}</span>

</a>

`

})

container.innerHTML = `

<h2>Connect</h2>

<p class="section-intro">
Let's connect and build the future of AI.
</p>

<div class="connect-grid">

${cards}

</div>

`

lucide.createIcons()

}