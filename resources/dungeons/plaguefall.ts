import { Boss } from "../../lib/boss"
import { Dungeon } from "../../lib/dungeon"

export default new Dungeon('Plaguefall',
  'Plaguefall is located in Maldraxxus at (59.2, 64.8)',
  'https://www.youtube.com/watch?v=7pTSFY8WXHU',[
  new Boss('Globgrog',[
    'Clear trash, boss summons adds and has knockback',
    '[[Plaguestomp]](https://shadowlands.wowhead.com/spell=324527/plaguestomp) knockback and damages whole group (This slows, so get going!',
    '[[Slime Wave]](https://shadowlands.wowhead.com/spell=324667/slime-wave) Be close to the boss to dodge',
    '[[Beckon Slime]](https://shadowlands.wowhead.com/spell=339209/beckon-slime) pulls boss to far side and spawns adds. Slow, stun, nuke those adds before they reach him']),
  new Boss('Doctor Ickus', [
    'Tank trash leading to the boss on the edges so you don’t pull boss early',
    '[[Slime Injection]](https://shadowlands.wowhead.com/spell=329110/slime-injection) - Big tank damage, dispellable debuff, add spawns when it’s dispelled',
    'Tank needs to be in melee range at all times.',
    'Keep boss out of red pools, else he’ll get a nasty haste buff',
    'When he jumps, get to a new platform ASAP and focus the new add before [[Virulent Explosion]](https://shadowlands.wowhead.com/spell=321406/virulent-explosion) goes off.']),
  new Boss('Domina Venomblade', [
    '[[Brood Assassins]](https://shadowlands.wowhead.com/spell=332313/brood-assassins) - Find the web on the ground, get the spider out of stealth, KILL it.',
    '[[Shadow Ambush]](https://shadowlands.wowhead.com/spell=333353/shadow-ambush) - Giant purple circle, move out and don’t hit others with it']),
  new Boss('Margrave Stradama', [
    'Spawns when you kill all the trash. Green pool gives a bad stacking dot.',
    'Boss summons an add that will put a circle on the ground. (Tank needs to be inside and will take BIG damage)',
    'Nuke these adds so two aren’t up at once',
    'Boss submerges, dance of safety with tentacles. Either spread tentacles with small gaps, or group them and have a large safe space']),
  new Boss('Trash', [
    'Fungi Stormer - CC or stun [[Fungistorm]](https://shadowlands.wowhead.com/spell=328177/fungistorm)',
    'Plague Belcher - Frontal Cone, don’t let them touch blob',
    'Rotten Slimeclaw - Stacking debuff, make sure it falls off before the next pack is pulled.',
    'Rotmarrow Slime - Interrupt [[Corrosive Gunk]](https://shadowlands.wowhead.com/spell=340210/corrosive-gunk)',
    'Slime Tentacle - Someone ALWAYS has to be in melee range.'
    ])
])
