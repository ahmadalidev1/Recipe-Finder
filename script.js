
// const appId = "71baa403";
// const appKey = "4895979415fc65315eeb8a3b6effa2e0"



// fetch(`https://api.edamam.com/api/recipes/v2?type=public&q=${"cake"}&app_id=${appId}&app_key=${appKey}`)
//     .then((response) => response.json())
//     .then((data) => {
//         // console.log(data)
//         console.log(data.hits)
//         // console.log(data.hits[0])
//         // console.log(data.hits[0].recipe)
//         // console.log(data.hits[0].recipe.label)


//         const hit = data.hits
//         hit.forEach((item) => {
//             // console.log(item)
//             console.log(item.recipe)
//             // console.log(item.recipe.label)
//         })
//     })


const btn = document.querySelector(".button")
const inp = document.querySelector("input")
const box = document.querySelector(".box")

const appId = "71baa403";
const appKey = "4895979415fc65315eeb8a3b6effa2e0"

btn.addEventListener("click", () => {
    let val = inp.value
    fetch(`https://api.edamam.com/api/recipes/v2?type=public&q=${val}&app_id=${appId}&app_key=${appKey}`)
        .then((response) => response.json())
        .then((data) => {
            console.log(data.hits);

            const hits = data.hits
            hits.forEach((item) => {
                box.innerHTML += `
                  <div class="card">
                        <h1 class="label">${item.recipe.label}</h1>
                        <image src="${item.recipe.image}" />
                        <p><b>Calories:</b>${item.recipe.calories}</p>
                        <p><b>Cusine:</b>${item.recipe.cuisineType}</p>
                     <a href="http://www.lottieanddoof.com/2009/04/warm-strawberry-crumb-cake/">View Full recipe</a>
                  </div>
                `
            })
        })

        inp.value = ""
})