import { Boss } from './boss'

export class Dungeon {
  constructor (
    public name: string,
    public location: string,
    public videoUrl: string,
    public bosses: Boss[]
  ) {}
}
