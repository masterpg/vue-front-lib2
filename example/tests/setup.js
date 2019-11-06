global.td = require('testdouble')
require('testdouble-jest')(td, jest)

global.firebase = require('firebase')
require('@/quasar')
const config = require('@/base/config')

config.initConfig()

beforeEach(async () => {})

afterEach(function() {
  td.reset()
})
