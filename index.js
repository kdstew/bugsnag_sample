const express = require('express')
const HTTP    = require('http')
const notify  = require('./notify')
const api     = require('./api')

const app  = express();
const http = HTTP.Server(app);
app.use(api())
app.use(() => notify.airbrakeExpressHandler())
app.use(() => notify.bugsnagExpressHandler)
http.listen(3000, listening.bind(this, 3000))


// Setting up server to mock a failure
errorApp = express()
errorHttp = HTTP.Server(errorApp)
errorApp.get('/504', (req, res) => res.sendStatus(504))
errorHttp.listen(3001, listening.bind(this, 3001))

function listening(port, err) {
  if (err) return log.error(err)
  console.log(`Listening on port ${port}`)
}
