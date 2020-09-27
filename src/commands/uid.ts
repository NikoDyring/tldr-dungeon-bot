import { Command } from '../lib/command'
import { Message, Client } from 'discord.js'

class Uid extends Command {
  aliases = ['uid']
  async execute (message: Message, client: Client): Promise<void> {
    message.channel.send(this.getUid(message))
  }

  getUid (message: Message) {
    return message.author.id
  }
}

export default new Uid()
