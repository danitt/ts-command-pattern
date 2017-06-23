import { CommandInterface } from './command.interface'
import { LightCommand } from './LightCommand.class'
import { GarageCommand } from './GarageCommand.class'
import { SprinklerCommand } from './SprinklerCommand.class'

export class PartyCommand implements CommandInterface {
  private lightCommand = new LightCommand
  private garageCommand = new GarageCommand
  private SprinklerCommand = new SprinklerCommand
  execute() {
    console.log('🎊  Party')
    this.lightCommand.execute()
    this.garageCommand.execute()
    this.SprinklerCommand.execute()
  }
}
