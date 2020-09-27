import uncaught from 'uncaught'
import log from './lib/log'
import { setupClient } from './lib/client'

log.info(`Starting bot in ${process.env.NODE_ENV} mode`)

uncaught.start()
uncaught.addListener(function (error: Error) {
  log.fatal(`Uncaught error or rejection: ${error.message}`)
  process.exit(1)
})

setupClient()
