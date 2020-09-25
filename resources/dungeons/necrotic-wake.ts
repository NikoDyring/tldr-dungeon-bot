import { Boss } from "../../lib/boss"
import { Dungeon } from "../../lib/dungeon"

export default new Dungeon('Necrotic Wake',
  'The Necrotic Wake is located in Bastion at (40.0, 55.3)',
  'https://www.youtube.com/watch?v=PvpIn2am8YQ',[
    new Boss('Blightbone', [
      'Clear most of the room',
      '[[Heaving Retch]](https://shadowlands.wowhead.com/spell=320596/heaving-retch) cone attack that targets one player (Spawns 2 adds that fixate as well)',
      'Kite the adds if fixated, nuke them if not',
      'Manage the pool drops so you have enough room']),
    new Boss('Amarth', [
      'Frontal cone swirlies, side-step those.',
      'Hunter/druid dispel the enrage',
      'Stack boss on crossbow add, interrupt the caster. Adds should group up under boss',
      'Nuke the adds and then dodge the corpse explosions']),
    new Boss('Surgeon Stitchflesh', [
      'Clear whole room',
      'Tank the add off to one side of Stitchflesh',
      'Aim the hook at the boss so he gets pulled down to where it can be attacked']),
    new Boss('Nalthor the Rimebinder', [
      'Move away from rooted player before dispelling (If ranged stay spread to make dispelling easier)',
      'Dodge swirlies, keep moving until they stop spawning',
      'Run through the gauntlet, avoid swirlies, kill the add at the end.']),
    new Boss('Trash', [
      'Zolramus Necromancer - Focus down because adds die when the necromancer dies.',
      'Skeletal Marauders - Frontal cleave, interrupt the fear',
      'Workshop Assistants - Face the arrow through another enemy so they get hit instead of you'])
])
