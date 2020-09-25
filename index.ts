import log from './lib/log'
import { setupClient } from './lib/client'
import uncaught from 'uncaught'

uncaught.start()
uncaught.addListener(function (error: Error) {
  log.fatal(`Uncaught error or rejection: ${error.message}`)
  process.exit(1)
})

try {
  await setupClient()
} catch (error) {
  log.error(error)
}
