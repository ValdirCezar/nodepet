module.exports = () => {
  const express = require('express')
  const consign = require('consign')
  const bodyParser = require('body-parser')

  const app = express()

  // Add bodyParser to receive requests from Json and URL enconded
  app.use(bodyParser.urlencoded({ extended: true }))
  app.use(bodyParser.json())

  // This metho include all controllers into app
  consign()
    .include('controllers')
    .into(app)

  return app
}