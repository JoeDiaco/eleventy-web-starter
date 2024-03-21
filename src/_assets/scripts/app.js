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
        let response = await fetch(`https://totalpillowchad.com/.netlify/functions/test-function?name=${elSearchBar.textContent}`)
        let message = response.json();
        console.log(message)
    })
