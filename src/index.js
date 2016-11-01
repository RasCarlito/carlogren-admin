// Dependencies
const choo = require('choo')

const config = require('./config')

require('./index.scss')

// Init app
const app = choo()

// Plugins
if (config.debug) {
  const log = require('choo-log')
  app.use(log())
}

// Init models
// const models = require('./models/index')
// models.map(model => app.model(model))

// Init router
app.router(require('./router'))

// Render app to body
document.body.appendChild(app.start())
