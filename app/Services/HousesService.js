import { ProxyState } from "../AppState.js"
import House from "../Models/House.js"
import { api } from './AxiosService.js'

class HousesService {
  createHouse(rawHouse) {
    // debugger
    ProxyState.houses = [...ProxyState.houses, new House(rawHouse)]
  }
}

export const housesService = new HousesService()