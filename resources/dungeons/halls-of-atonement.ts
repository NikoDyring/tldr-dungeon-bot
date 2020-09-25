import { Boss } from "../../lib/boss"
import { Dungeon } from "../../lib/dungeon"

export default new Dungeon('Halls of Atonement',
  'Halls of Atonement is in Revendreth at (78.3, 49.1)',
  'https://www.youtube.com/watch?v=Pm5r3XJMCCI', [
    new Boss('Halkias, the Sin-Stained Goliath', [
    'Manage the rock patches dropped by the boss on the tank and thrown at range.',
    'Move the boss to an open area before the fidget spinner starts beaming',
    'Fidget spinner can change directions',
    'DISPEL the fear put on a random player'
  ]),
    new Boss('Echelon', [
    'Avoid red pools',
    'Adds explode when they die, try to keep grouped (Like slimes in Workshop Mechagon, dont have to LoS though)',
    'The cursed player needs to run into a pool of dead adds before the boss jumps.'
  ]),
    new Boss('High Adjudicator Aleez', [
    'Interrupt Volley over Bolt',
    'The fixated player runs the add to the red vessels.(Don’t move when you face the adds)',
    'Avoid red swirlies']),
    new Boss('Lord Chamberlain', [
    'Don’t get hit by status, RED arrows show where they’re going',
      '[[Unleashed Suffering]](https://shadowlands.wowhead.com/spell=323236/unleashed-suffering) - Frontal Cone that targets a random player (Dodge this)',
    '[[Stigma of Pride]](https://shadowlands.wowhead.com/spell=323437/stigma-of-pride) - Ramping dot on the tank for 18 seconds, save CDs for the end of it.',
      'Move away when Chamberlain picks up the statues. Dodge between when they get pushed out',
    '[[Ritual of Woe]](https://shadowlands.wowhead.com/spell=323393/ritual-of-woe) - Soak the RED bolts so they don’t hit the statue (Tanks Job)']),
  new Boss('Trash', [
    'Vicious Gargan Bears - Stacks a nasty bleed',
    'Stoneborn Reavers - Interrupt, Interrupt, Interrupt',
    'Depraved Obliverators - [[Curse of Obliteration]](https://shadowlands.wowhead.com/spell=325876/curse-of-obliteration) MUST be interrupted',
    'Inquisitor(Miniboss) - Kill all neutral tormented souls to stop him from healing'])
])
