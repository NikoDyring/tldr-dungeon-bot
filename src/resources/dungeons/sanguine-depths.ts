import { Boss } from '../../lib/boss'
import { Dungeon } from '../../lib/dungeon'

export default new Dungeon('Sanguine Depths',
  'Sanguine Depths is located in Revendreth at (50.9, 29.9)',
  'https://www.youtube.com/watch?v=vuGQnAXsel0&feature=youtu.be', [
    new Boss('Kryxis the Voracious', [
      '[[Vicious Headbutt]]() does a knockback on the tank (Dont get knocked off the edge)',
      '[[Hungering Drain]]() Interrupt this',
      '[[Juggernaut Rush]]() Stack between the boss and the player targeted',
      '[[Severing Smash]]() Group Knockback - Soak orbs before they reach boss, soak one each.']),
    new Boss('Executor Tarvold', [
      '[[Castigate]]() Stay spread so only the player targeted gets hit',
      'Nuke add when it spawns. The longer its up, the bigger the toxic pool.']),
    new Boss('Grand Protector Beryllia', [
      '[[Iron Spikes]]() does large physical damage on the tank',
      '[[Right of Supremacy]]() Stack in the bright yellow zone',
      'Dodge yellow swirlies on the ground']),
    new Boss('General Kaal', [
      'One player pick up Naaru crystal',
      '[[Wicked Rush]]() ',
      'Move out of red-line, hitbox is bigger than it seems',
      '[[Gloom Squall]]() Crystal bearer use ability and group stacks in bright yellow circle']),
    new Boss('Trash', [
      'Regal Mistdancer - Move enemies out of the red pool',
      'Grand Overseer - Interrupt [[Curse of Suppression]]()',
      'Head Custodian - Aggros all neutral mobs around him and buffs one',
      'Hallway Gauntlet - Use Naaru crystal whenever [[Gloom Squall]]() is cast'])
  ])
