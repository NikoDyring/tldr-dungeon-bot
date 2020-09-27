export interface Config {
  token: string
  admins: string[]
}

const config: Config = {
  token: process.env.DISCORD_TOKEN ?? '',
  admins: JSON.parse(process.env.ADMINS ?? '[]')
}

console.log(config)

export default config
