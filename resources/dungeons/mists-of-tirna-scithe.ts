import { Boss } from "../../lib/boss"
import { Dungeon } from "../../lib/dungeon"

export default new Dungeon('Halls of Atonement',
  'Mists of Tirna Scithe is in Ardenweald at (35.4, 53.9)',
  'https://www.youtube.com/watch?v=3VrAdQDo1_w',[
  new Boss('Ingra Maloch', [
    'Save CDs when tree add dies. Boss will take 200% dmg',
    'Watch out for [Enchanted Pollen], frontal cast',
    'Don’t attach Maloch when he does [[Embrace Darkness]](https://shadowlands.wowhead.com/spell=323149/embrace-darkness) (reflects damage like in Temple of Sehtralis 1st boss)',
    'Dodge swirlies, interrupt Maloch so he moves']),
  new Boss('Mistcaller', [
    'Find the symbol that doesn’t match the others (Usually the one without a circle when the others all have it, or vice versa)',
    'Watch out for [Dodgeball], frontal cone',
    'Don’t let the fox touch you (Explodes and stuns all friendlies within 8 yards)']),
  new Boss('Tred’ova', [
    'Avoid swirlies',
    'If fixated, run away.',
    'Tank pick up adds (Kill them as quick as possible)',
    'Break the mindlink beam by running away from each other']),
  new Boss('Trash', [
    'Villagers - Channel that stuns unless interrupted',
    'Mist Mage - [Nurse the forrest] and [Bramblethorn Coat] Interrupt',
    'Spinemaw Slugs - Interrupt shield, “acid spray”-frontal can be dodged or stunned.'])
])
