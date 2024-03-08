const template = document.querySelector("#pet-card-template")
const wrapper  = document.createDocumentFragment()

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
         wrapper.appendChild(clone)
     })

     document.querySelector(".list-of-pets").appendChild(wrapper)
}

petsArea()