const path = require('path')
const { createServer, proxy } = require('tencent-serverless-http')

let server
exports.handler = async (event, context) => {
  const appFilePath = path.join(__dirname, '../dist/app.js')
  const { getApp } = require(appFilePath)
  const app = await getApp()
  if (!server) {
    server = createServer(app, null, app.binaryTypes || [])
  }
  context.callbackWaitsForEmptyEventLoop = app.callbackWaitsForEmptyEventLoop === true ? true : false

  return proxy(server, event, context, 'PROMISE').promise
}
