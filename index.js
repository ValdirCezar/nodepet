const customExpress = require('./config/customExpress')
const connection    = require('./infrastructure/connection')

const app = customExpress()

// Start connect
connection.connect((err) => {
  if (err) {
    console.log(err)
  } else {
    console.log('----------------------------------------------------------------');
    console.log('Successful database connection');
    app.listen(3000, () => console.log('Server running on http://localhost:3000'))
  }
})

