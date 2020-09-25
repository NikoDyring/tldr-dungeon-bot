import { Message, Client, Collection, MessageEmbed } from "discord.js"
import { Command } from "../lib/command"
import { Dungeon } from "../lib/dungeon"

import deOtherSide from "../resources/dungeons/de-other-side"
import hallsOfAtonement from "../resources/dungeons/halls-of-atonement"
import mistsOfTirnaScithe from "../resources/dungeons/mists-of-tirna-scithe"
import necroticWake from "../resources/dungeons/necrotic-wake"
import plaguefall from "../resources/dungeons/plaguefall"

const dungeons = new Collection<string, Dungeon>([
  ['dos', deOtherSide],
  ['hoa', hallsOfAtonement],
  ['mots', mistsOfTirnaScithe],
  ['nw', necroticWake],
  ['plf', plaguefall]
])

const embedAuthor = 'TL:DR Shadowlands Dungeon Guide'

class DungeonCommand extends Command {
  aliases = ['d', 'dungeon']

  async execute (message: Message, client: Client): Promise<any> {
    const shortcut = message.content.split(' ')[1]
    if (!shortcut || !dungeons.has(shortcut)) return message.channel.send(this.makeHelpEmbed())
    const dungeon = this.fetchDungeonInfo(shortcut)
    message.channel.send(this.makeEmbed(dungeon))
  }

  fetchDungeonInfo (shortcut: string): Dungeon {
    return dungeons.get(shortcut)
  }

  makeEmbed (dungeon: Dungeon): MessageEmbed {
    const embed = new MessageEmbed()
      .setColor('DARK_RED')
      .setAuthor(embedAuthor)
      .setTitle(dungeon.name)
      .setDescription(dungeon.location)
      .setThumbnail('https://emoji.gg/assets/emoji/2043_FeelsDenmarkMan.png')
      .addFields(dungeon.bosses.map(boss => ({name: boss.name, value: boss.mechanics})))
      .setTimestamp()
      .setFooter('Powered by pnggang #forfuckzake')
    return embed
  }

  makeHelpEmbed () {
    const helpEmbed = new MessageEmbed()
      .setColor('DARK_RED')
      .setAuthor(embedAuthor)
      .setTitle('Get Started')
      .addFields(
        { name: '!d, !dungeon', value: 'Shows this message' },
        { name: '!d dos', value: 'Will show TL:DR of De Other Side (dos)' },
        { name: 'Dungeons supported', value: `${dungeons.keyArray().join(', ')}` }
      )
      return helpEmbed
  }
}

export default new DungeonCommand()
