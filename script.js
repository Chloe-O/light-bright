const lightsContainer = document.getElementById('lights-container')

let lightsArray = []

for (let i = 0; i < 306; i++) {
    lightsArray.push(`<div class="light"></div>`)
}

console.log(lightsArray)

lightsContainer.innerHTML = lightsArray.join('')