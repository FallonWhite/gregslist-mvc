import { ProxyState } from "../AppState.js"
import { HousesService } from "../Services/HousesService.js"

function _draw() {
  let template = ''
  ProxyState.houses.forEach(house => {
    template += house.Template
  })
  document.getElementById('houses').innerHTML = template
}

export default class HousesController {
  constructor() {
    ProxyState.on('houses', _draw)
    ProxyState.on('houses', () => { console.log('new house') })
    _draw()
  }
  createHouse() {
    event.preventDefault()
    let form = event.target
    let rawHouse = {
      state: form.state.value,
      city: form.city.value,
      bedrooms: form.bedrooms.value,
      bathrooms: form.bathrooms.value,
      year: form.year.value,
      price: form.price.value,
      description: form.description.value,
      imgUrl: form.imgUrl.value
    }
    housesService.createHouse(rawHouse)
    form.reset()
  }
}