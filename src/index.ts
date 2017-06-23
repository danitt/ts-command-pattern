import { Remote } from './remote.class'
import { LightCommand } from './Command/LightCommand.class'

const remote = new Remote()
remote.setCommand(0, new LightCommand)

remote.undoCommand()
remote.callCommand(0)
remote.callCommand(0)
remote.undoCommand()
