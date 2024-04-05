const mysql = require('mysql');


const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'blogdb'
});


db.connect((err) => {
  if (err) {
    console.error('Error connecting to the database:', err);
    return;
  }
  console.log('Connected to the database');
  
 /* const createTablesSQL = `
  CREATE TABLE IF NOT EXISTS Users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(255) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    role ENUM('user', 'admin') DEFAULT 'user'
  );
`
const createtable2=`
  CREATE TABLE Posts (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    content TEXT,
    userId INT,
    FOREIGN KEY (userId) REFERENCES Users(id) ON DELETE CASCADE
  )
;`
  
  db.query(createTablesSQL, (err) => {
    if (err) {
      console.error('Error creating tables:', err);
      return;
    }
    console.log('Tables created successfully');
     // Close database connection after creating tables
  });

  db.query(createtable2, (err) => {
    if (err) {
      console.error('Error creating tables:', err);
      return;
    }
    console.log('Tables created successfully');
    db.end(); // Close database connection after creating tables
  });
  */
});

module.exports = db;