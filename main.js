
let url = "https://ghibliapi.herokuapp.com/species/603428ba-8a86-4b0b-a9f1-65df6abef3d3"

fetch(url)  
    .then(res => res.json())

    .then(json => { 
        console.log(json.people)
        for (catUrl of json.people) {
            fetch(catUrl)
            .then(res => res.json())
            .then(catJson => {
                console.log(catJson)
                const filmUrl = catJson.films[0]
                console.log(filmUrl)

                fetch(filmUrl)
                .then(res => res.json())
                .then(filmJson => {
                    console.log(filmJson)
                    displayResults(catJson.name, filmJson.title)
                    
                })
                
              

            })
        } 

        });
    


function displayResults(catName, filmTitle) {
    let speciesList = document.getElementById("list")
        let speciesLi = document.createElement('li') 
       
        speciesLi.innerText = `${catName}: ${filmTitle} `
        speciesList.appendChild(speciesLi)
    }