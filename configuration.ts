import nodeConfig from 'config'

export interface Config {
  token: string
  admins: string[]
}

const config: Config = {
  token: nodeConfig.get<string>('token'),
  admins: nodeConfig.get<string[]>('admins')
}

export default config
