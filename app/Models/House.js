export default class House {
  constructor({ state, city, bedrooms, bathrooms, year, price, description, imgUrl }) {
    this.state = state
    this.city = city
    this.bedrooms = bedrooms
    this.bathrooms = bathrooms
    this.year = year
    this.price = price
    this.description = description || "no house description"
    this.imgUrl = imgUrl || '//placehold.it/200x200'
  }
  get Template() {
    return `
    <div class="col-md-3 col-sm-2 my-3">
      <div class="car bg-light shadow">
          <img src="${this.imgUrl}" class="w-100" alt="${this.state} ${this.city} house image">
          <div class="p-3">
              <div class="text-center">
                  <p><b>${this.city}, ${this.state}<br>${this.bedrooms + " Bed"} - ${this.bathrooms + " Bath"}<br>${"Built " + this.year}</b></p >
              </div >
              <p>${this.description}</p>
              <p><em>$${this.price}</em></p>
          </div >
      </div >
    </div >
  `
  }
}