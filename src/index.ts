import { Remote } from './remote.class'
import { LightCommand } from './Command/LightCommand.class'
import { GarageCommand } from './Command/GarageCommand.class'
import { SprinklerCommand } from './Command/SprinklerCommand.class'
import { PartyCommand } from './Command/PartyCommand.class'

const remote = new Remote()
remote.setCommand(0, new LightCommand)
remote.setCommand(1, new GarageCommand)
remote.setCommand(2, new SprinklerCommand)
remote.setCommand(3, new PartyCommand)

remote.undoCommand()
remote.callCommand(0)
remote.undoCommand()
console.log()
remote.callCommand(1)
remote.callCommand(2)
remote.callCommand(1)
remote.callCommand(2)
console.log()
remote.callCommand(3)
remote.callCommand(3)
console.log()
