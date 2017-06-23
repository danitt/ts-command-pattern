import { CommandInterface } from './command.interface'
import { Light } from './../Vendor/Light.class'

export class LightCommand implements CommandInterface {
  private state: boolean = false
  private light = new Light()
  execute = () => {
    const action = this.state ? this.light.lightOff() : this.light.lightOn()
    this.state = !this.state
    console.log(action)
    return true
  }
}
