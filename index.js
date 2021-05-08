const customExpress = require('./config/customExpress')
const connection    = require('./infrastructure/connection')
const Tables        = require('./infrastructure/tables')

const app = customExpress()

// Start connect
connection.connect((err) => {
  if (err) {
    console.log(err)
  } else {
    console.log('----------------------------------------------------------------')
    console.log('Successful database connection')
    Tables.init(connection)
    app.listen(3000, () => console.log('Server running on http://localhost:3000'))
  }
})

