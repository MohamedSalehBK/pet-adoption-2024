const template = document.querySelector("#pet-card-template")
const wrapper = document.createDocumentFragment()

async function start() {
    const weatherPromise = await fetch("https://api.weather.gov/gridpoints/MFL/110,50/forecast");
    const weatherData = await weatherPromise.json()
    const ourTemperature = weatherData.properties.periods[0].temperature;
    document.querySelector("#temperature-output").textContent = ourTemperature;
}

start()


async function petsArea() {
    const petsPromise = await fetch("https://learnwebcode.github.io/bootcamp-pet-data/pets.json");
    const petsDate = await petsPromise.json()
    petsDate.forEach(pet => {
        const clone = template.content.cloneNode(true)
        clone.querySelector("h3").textContent = pet.name
        clone.querySelector(".pet-description").textContent = pet.description
        clone.querySelector(".pet-age").textContent = creatTextAge(pet.birthYear)
        clone.querySelector(".pet-card-photo img").src = pet.photo
        clone.querySelector(".pet-card-photo img").alt = `A ${pet.species} named ${pet.name}.`
        wrapper.appendChild(clone)
    })

    document.querySelector(".list-of-pets").appendChild(wrapper)
}

petsArea()

function creatTextAge(birthyear) {
    const cureentYear = new Date().getFullYear()
    const age = cureentYear - birthyear

    if (age == 1) return "1 year old"
    if (age == 0) return "less than a year old"
    return `${age}years old`


}