import { Message, Client } from 'discord.js'
import { Command } from '../lib/command'

class CovenantCommand extends Command {
  aliases = ['c', 'covenant']
  execute (message: Message, client: Client): Promise<void> {
    throw new Error('Method not implemented.')
  }
}

export default new CovenantCommand()
