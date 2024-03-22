import Alpine from 'alpinejs'
window.Alpine = Alpine
Alpine.start()

console.log(`I was loaded at ${Date(Date.now()).toString()}`);

const elSearchBar = document.querySelector("#searchBar")
console.log(elSearchBar)
const elResponseArea = document.querySelector("#responseArea");
document
    .querySelector("#searchButton")
    .addEventListener("click", async (event) => {
        let response = await fetch(`http://localhost:9999/.netlify/functions/test-function?sentence=${elSearchBar.value}`);
        let responseJSON = await response.json();
        let sentence = await responseJSON.sentence;
        elResponseArea.textContent = sentence;
    })
