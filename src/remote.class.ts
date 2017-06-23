import { CommandInterface } from './Command/command.interface'

export class Remote {
  private commands: CommandInterface[] = []
  private commandStore: CommandInterface[] = []
  private commandSlots: number = 3
  setCommand = (slot: number, command: CommandInterface) => this.commands[slot] = command
  callCommand = (slot: number) => {
    console.log(this.commands[slot].execute())
    this.commandStore.push(this.commands[slot])
  }
  undoCommand = () => {
    if (!this.commandStore.length) return console.log('Nothing to undo!')
    const lastCommand = this.commandStore.pop()
    console.log(`Undoing state.. ${lastCommand.execute()}`)
  }
}
