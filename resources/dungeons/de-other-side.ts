import { Boss } from "../../lib/boss"
import { Dungeon } from "../../lib/dungeon"

export default new Dungeon('De Other Side',
  'De Other Side is located in Ardenweald at (68.7, 66.1)',
  'https://www.youtube.com/watch?v=VsecBHaEo44&feature=youtu.be',[
  new Boss('Hakkar the Soulflayer', [
    '*RED* circle → Stay away from others',
    'Nuke adds away from the boss',
    'Don’t stand in puddles dropped by dead adds',
    'Break Hakkar’s shield to interrupt the cast'
  ]),
    new Boss('The Manastorms (Millhouse & Millificent)', [
    'Soak the beam shooting at Milhouse (Rotate it between players like in Temple of Sethralis)',
    'Disarm the bombs',
    'Stun Millificent with [Shadowfury](https://ptr.wowhead.com/spell=320132) to drop the bleed',
    '[Shadowfury](https://ptr.wowhead.com/spell=320132) and [Lasers](https://ptr.wowhead.com/spell=324047/echo-finger-laser-x-treme) can hit the opposite boss (Like the hammer 1st boss Mechagon: Workshop)'
  ]),
  new Boss('Dealer Xyexa', [
    'Dont let traps hit you',
    'Run over a trap before your bomb goes off',
    'Run over a trap before [Explosive Contrivance](https://ptr.wowhead.com/spell=320232)',
    'Dont get hit by the beam']),
  new Boss('Muehzala', [
    'Assign portals: Preferably 2 DPS left, rest of group right. One player per portal',
    'Move out with the debuff (Like the one at Lady Waycrest in WM)',
    'Dodge left/right based off of boss hands during [Master of Death](https://ptr.wowhead.com/spell=325258)',
    '[[Shatter Reality]](https://ptr.wowhead.com/spell=326171) Kill adds, dodge purple stuff, click the totem']),
  new Boss('Trash', [
    'Deathspeaker - Interrupt [Death’s Embrace]',
    'Atalai Devoted - Kill before [Devoted Sacrifice](https://shadowlands.wowhead.com/spell=332329/devoted-sacrifice) is finished',
    'Atalai Deathwalker - Move away from bladestorm. Turns into a spirit (Like ghosts in Waycrest Manor)',
    'Defunct Dental Drill - Line of Sight [Haywire](https://shadowlands.wowhead.com/spell=331927/haywire) Cast',
    'Wheeled Shimmermaw - Move from [Horrific Shimmerdust] or you’ll have to keep jumping to not fall asleep'])
])
