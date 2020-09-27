import { Boss } from '../../lib/boss'
import { Dungeon } from '../../lib/dungeon'

export default new Dungeon('Sanguine Depths',
  'Sanguine Depths is located in Revendreth at (50.9, 29.9)',
  'https://www.youtube.com/watch?v=vuGQnAXsel0&feature=youtu.be', [
    new Boss('Kryxis the Voracious', [
      '[[Vicious Headbutt]](https://shadowlands.wowhead.com/spell=319650/vicious-headbutt) does a knockback on the tank (Dont get knocked off the edge)',
      '[[Hungering Drain]](https://shadowlands.wowhead.com/spell=319654/hungering-drain) Interrupt this',
      '[[Juggernaut Rush]](https://shadowlands.wowhead.com/spell=319713/juggernaut-rush) Stack between the boss and the player targeted',
      '[[Severing Smash]](https://shadowlands.wowhead.com/spell=319685/severing-smash) Group Knockback - Soak orbs before they reach boss, soak one each.']),
    new Boss('Executor Tarvold', [
      '[[Castigate]](https://ptr.wowhead.com/spell=322554/castigate) Stay spread so only the player targeted gets hit',
      'Nuke add when it spawns. The longer its up, the bigger the toxic pool.']),
    new Boss('Grand Protector Beryllia', [
      '[[Iron Spikes]](https://shadowlands.wowhead.com/spell=325254/iron-spikes) does large physical damage on the tank',
      '[[Rite of Supremacy]](https://shadowlands.wowhead.com/spell=325360/rite-of-supremacy) Stack in the bright yellow zone',
      'Dodge yellow swirlies on the ground']),
    new Boss('General Kaal', [
      'One player pick up Naaru crystal',
      '[[Wicked Rush]](https://shadowlands.wowhead.com/spell=323845/wicked-rush) ',
      'Move out of red-line, hitbox is bigger than it seems',
      '[[Gloom Squall]](https://shadowlands.wowhead.com/spell=322898/gloom-squall) Crystal bearer use ability and group stacks in bright yellow circle']),
    new Boss('Trash', [
      'Regal Mistdancer - Move enemies out of the red pool',
      'Grand Overseer - Interrupt [[Curse of Suppression]](https://shadowlands.wowhead.com/spell=326836/curse-of-suppression)',
      'Head Custodian - Aggros all neutral mobs around him and buffs one',
      'Hallway Gauntlet - Use Naaru crystal whenever [[Gloom Squall]](https://shadowlands.wowhead.com/spell=322898/gloom-squall) is cast'])
  ])
