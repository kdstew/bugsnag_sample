var airbrake = require('airbrake').createClient(
  process.env.AIRBRAKE_PROJECT_ID,
  process.env.AIRBRAKE_API_KEY
)

var bugsnag = require('bugsnag')
bugsnag.register(process.env.BUGSNAG_API_KEY)

module.exports = {
  notify: err => {
    airbrake.notify(err)
    bugsnag.notify(err)
  },
  airbrakeExpressHandler: airbrake.expressHandler.bind(airbrake),
  bugsnagExpressHandler:  bugsnag.errorHandler.bind(bugsnag)
}
