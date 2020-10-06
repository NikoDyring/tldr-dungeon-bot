import uncaught from 'uncaught'
import log from './lib/log'
import { setupClient } from './lib/client'
import { connect } from './lib/database'

log.info(`Starting bot in ${process.env.NODE_ENV} mode`)

uncaught.start()
uncaught.addListener(function (error: Error) {
  log.fatal(`Uncaught error or rejection: ${error.message}`)
  process.exit(1)
})

if (!process.env.MONGO_URI) {
  log.error('No mongo URI in environment')
  process.exit(1)
}

connect(process.env.MONGO_URI).catch(console.error.bind(console))
setupClient()
