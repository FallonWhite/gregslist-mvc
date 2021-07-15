import Car from "./Models/Car.js"
import House from "./Models/House.js"
import { EventEmitter } from "./Utils/EventEmitter.js"
import { isValidProp } from "./Utils/isValidProp.js"

class AppState extends EventEmitter {

  /** @type {Car[]} */
  cars = [
    new Car({
      make: 'Ford',
      model: 'Pinto',
      year: 1987,
      price: 1200,
      description: 'This Car is HOT!',
      imgUrl: 'https://blog.automedicsafrica.com/wp-content/uploads/2015/08/Impala-vs-Pinto-750x547.jpg'
    }),
    new Car({
      make: 'VW',
      model: 'Gremlin',
      year: 1988,
      price: 3400,
      description: 'Lime Green! You gonna love it',
      imgUrl: 'https://static1.hotcarsimages.com/wordpress/wp-content/uploads/2020/07/Gremlin-X.jpg'
    })
  ]

  /**@type { House[] }*/
  houses = [
    new House({
      state: 'New York',
      city: 'Elmira',
      bedrooms: 10,
      bathrooms: 4,
      year: 1876,
      price: 99900,
      description: 'Truly amazing Mansard style mansion with gothic influences.',
      imgUrl: 'https://www.oldhousedreams.com/wp-content/uploads/2021/07/04-615columbiastny.jpg'
    }),
    new House({
      state: 'North Carolina',
      city: 'Windsor',
      bedrooms: 3,
      bathrooms: 2,
      year: 1920,
      price: 110000,
      description: 'The Butler Nichols House is on the national Register of Historic Places',
      imgUrl: 'https://ap.rdcpix.com/7d6c9ef3e76bebe4b689720841a14b46l-m3597165229od-w1024_h768.webp'
    }),
    new House({
      state: 'Ohio',
      city: 'Washington Court House',
      bedrooms: 4,
      bathrooms: 3.5,
      year: 1868,
      price: 75000,
      description: 'Own a little piece of history -"The Cherry House"',
      imgUrl: 'https://ssl.cdn-redfin.com/photo/160/bigphoto/876/221025876_0.jpg'
    }),
    new House({
      state: 'Iowa',
      city: 'Vinton',
      bedrooms: 4,
      bathrooms: 1,
      year: 1900,
      price: 120000,
      description: 'Historic Frank G. Ray House. 3-Story Queen Anne mansion and Carriage House.',
      imgUrl: 'https://ap.rdcpix.com/7bf8558604e7089763e38d5af88d5b1dl-m2343569212od-w1024_h768.webp'
    })
  ]
}

export const ProxyState = new Proxy(new AppState(), {
  get(target, prop) {
    isValidProp(target, prop)
    return target[prop]
  },
  set(target, prop, value) {
    isValidProp(target, prop)
    target[prop] = value
    target.emit(prop, value)
    return true
  }
})
