import { Command as AbstractCommand } from '../lib/command'
import Uid from './uid'
import Dungeon from './dungeon'

export const commands: Map<String, AbstractCommand> = new Map([Uid, Dungeon].flatMap(
    (command: AbstractCommand) => command.aliases.map((alias: string) => [alias, command])
))
