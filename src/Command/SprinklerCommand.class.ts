import { CommandInterface } from './command.interface'
import { Sprinkler } from './../Vendor/Sprinkler.class'

export class SprinklerCommand implements CommandInterface {
  private state: boolean = false
  private sprinkler = new Sprinkler()
  execute = () => {
    const action = this.state ? this.sprinkler.waterOff() : this.sprinkler.waterOn()
    this.state = !this.state
    console.log(action)
    return true
  }
}
