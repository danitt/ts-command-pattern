import { CommandInterface } from './command.interface'
import { Garage } from './../Vendor/Garage.class'

export class GarageCommand implements CommandInterface {
  private state: boolean = false
  private garage = new Garage()
  execute = () => {
    const action = this.state ? this.garage.garageDown() : this.garage.garageUp()
    this.state = !this.state
    console.log(action)
    return true
  }
}
