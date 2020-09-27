import { Boss } from '../../lib/boss'
import { Dungeon } from '../../lib/dungeon'

export default new Dungeon('Spires of Ascension',
  'Spires of Ascension is located in Bastion at (58.4, 28.7)',
  'https://www.youtube.com/watch?v=vb7ryFpwJrk', [
    new Boss('Kin-Tara', [
      'Avoid random black bolts from the add',
      'Boss cleaves, tank should be facing boss away',
      '[[Dark Lance]](https://shadowlands.wowhead.com/spell=327481/dark-lance) - Interrupt this',
      'When flying up, spread out. Targeted player has to move out of the cloud before spear hits.',
      'Kill boss and add at the same time or they will enrage (Like gnome couple in Mechagon)']),
    new Boss('Ventunax', [
      'Stay out of shadow clouds',
      'Avoid dark bolts',
      '[[]]() - Frontal cone you can dodge, tank face boss away from group.']),
    new Boss('Oryphrion', [
      'Keep spread at least 8 yards',
      '[[Charged Stomp]]() - Dispel the tank',
      '[[Empyreal Ordinance]]() - Move out of circles, soak orbs before they hit boss.']),
    new Boss('Devos, Paragon of Doubt', [
      '[[Run Through]]() - Stay close to the edge to manage boss (like crawtusk in Underrot)',
      'Go away from swirlies that spawn explosive orbs',
      '[[Lingering Doubt]]() - Dispel when the debuffed person is away from the group',
      '[[Anima Conduit]]() - Pick up blue orbs and run to the conduit in the middle of the room while dodging swirlies',
      'Click spear when powered, throw spear at boss, rinse and repeat']),
    new Boss('Trash', [
      'Forsworn Warden - Interrupt [[Greater Mending]]()',
      'Forsworn Champion and Mender - Interrupt [[Forsworn Doctrine]]()',
      'Forsworn Goliath - Interrupt [[Rebellious Fist]]()',
      'Forsworn Squad-Leader - Kill this guy first'])
  ])
