class Tables {
  init(connection) {
    console.log('Tables are called');
    this.connection = connection
    this.createAttendances()
  }

  createAttendances() {
    const sql = `CREATE TABLE IF NOT EXISTS Attendances(
                    id int NOT NULL AUTO_INCREMENT,
                    cliente varchar(50) NOT NULL,
                    pet varchar(20),
                    service varchar(20),
                    status varchar(20) NOT NULL,
                    comments text,
                    PRIMARY KEY(id)
    )`

    this.connection.query(sql, (err) => {
      if (err)
        console.log(err);
      else
        console.log('Attenndance table created');
    })
  }
}

module.exports = new Tables;