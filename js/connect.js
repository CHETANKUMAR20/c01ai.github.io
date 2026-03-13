/* =====================================
   CONNECT SECTION RENDERER
===================================== */

function loadConnect() {

const section = document.getElementById("connect")

const connectLinks = siteData.connect

let linksHTML = ""


connectLinks.forEach(link => {

linksHTML += `

<a href="${link.link}" target="_blank">

${link.platform}

</a>

`

})


section.innerHTML = `

<div class="section-header reveal">

<h2 class="section-title">Connect</h2>

<p class="section-subtitle">
If you're building interesting things or want to collaborate on AI systems and startups, let's connect.
</p>

</div>

<div class="connect-links reveal">

${linksHTML}

</div>

<footer class="reveal">

© ${new Date().getFullYear()} Chetan Kumar — C01AI

</footer>

`

}