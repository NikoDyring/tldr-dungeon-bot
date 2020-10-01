import { Boss } from '../../lib/boss'
import { Dungeon } from '../../lib/dungeon'

export default new Dungeon('Theater of Pain',
  'Theater of Pain is located in Maldraxxus at (53.21, 53.14)',
  'https://www.youtube.com/watch?v=dpkiLeC-D94', [
    new Boss('An Affront of Challengers', [
      'Focus kill each boss, dont bring multiple below 40%',
      'Kill Order: Sathel 40%(Immunity, use mass dispel/shattering throw)',
      'Hit Paceran until Sathel is not immune any more',
      'Finish Sathel',
      'Finish Paceran (Dispel the disease cast at 40%)',
      'Kill Dessia',
      'Run away if fixated',
      '[[Spectral Transference]](https://shadowlands.wowhead.com/spell=320277/spectral-transference) - Purge this, green shield on boss']),
    new Boss('Gorechop', [
      'Dodge the hooks in the gap',
      'Focus adds',
      'Stay spread when adds are alive, stay ouy of pools when they die']),
    new Boss('Xav the Unfallen', [
      'Kill the banner',
      '[[Massive Cleave]](https://shadowlands.wowhead.com/spell=320729/massive-cleave) - Giant attack on half of the room (Dodge this)',
      'Two players duel, need to kill one in 40 seconds']),
    new Boss('Kultharok', [
      'Tank always needs to be in melee',
      '[[Phantasmal Parasite]](https://shadowlands.wowhead.com/spell=319626/phantasmal-parasite) - Stay slightly spread to avoid splash damage from this ',
      'Avoid green swirlies & green circle',
      '[[Drawn Soul]](https://shadowlands.wowhead.com/spell=319521/draw-soul) - If targeted, stand in between boss and green circle']),
    new Boss('Mordretha', [
      '[[Dark Devastation]](https://shadowlands.wowhead.com/spell=323608/dark-devastation) - Giant beam, picks a target then rotates the room',
      'Spread with green circles so you dont hit another player',
      'Have circles close to each other as they will spawn an add. Interrupt and focus this',
      'Giant green rift spawns on one side of the room and tries to drag you in']),
    new Boss('Trash', [
      'Rancid Gasbag - Avoid [[Vile Eruption]](https://shadowlands.wowhead.com/spell=330614/vile-eruption) - Frontal cone and butt-cone',
      'Ancient Captain - Focus down first. Interrupt [[Demoralizing Shout]](https://shadowlands.wowhead.com/spell=330562/demoralizing-shout)',
      'Bone Magus - Dodge the [[Bone Spear]](https://shadowlands.wowhead.com/spell=342675/bone-spear) or CC. Can knock you off the edge if hit',
      'Nefarious Darkspeaker - Interrupt [[Necrotic Bolt Volley]](https://shadowlands.wowhead.com/spell=330868/necrotic-bolt-volley)'])
  ])
