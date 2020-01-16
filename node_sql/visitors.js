const Pool = require("pg").Pool;
const pool = new Pool({
  user: "user",
  host: "localhost",
  database: "db",
  password: "pass",
  port: 5432
});

function createTable () {
    const table = `CREATE TABLE visitors(
        ID SERIAL PRIMARY KEY,
        name VARCHAR(50) NOT NULL,
        age INT NOT NULL,
        date DATE NOT NULL,
        time TIME NOT NULL,
        assistor VARCHAR(50) NOT NULL,
        comments VARCHAR(200) NOT NULL)`;

    pool.query(table,(er, res) => {
            console.log(er, res);
                pool.end();
          })
    };

function addNewVisitor (name, age, date, time, assistor, comments) {
    const tableQuery = `INSERT INTO visitors(name, age, date, time, assistor, comments)
    VALUES ('${name}', ${age}, '${date}', '${time}', '${assistor}', '${comments}')`;

    pool.query(tableQuery,(er, res) => {
            console.log(er, res);
                pool.end();
          })
    };

function listAllVisitors () {
    const array = `SELECT DISTINCT id, name FROM visitors`

    pool.query(array, (er,res) => {
        console.log(res.rows);
            pool.end();
      })
};

function removeById (id) {

    const removeVisitor = ` DELETE FROM visitors WHERE id = ${id}`

    pool.query(removeVisitor, (er,res) => {
        console.log(er, res);
            pool.end();
      })
};

function update () {

    const updateVisitor = `UPDATE visitors SET age = 30 WHERE age = 26`

    pool.query(updateVisitor, (er,res) => {
        console.log(er, res);
            pool.end();
      })
};

function visitorInfo (id) {

    const visitorInfo = `SELECT * FROM visitors WHERE id =${id}`

    pool.query(visitorInfo, (er,res) => {
        console.log(res.rows);
            pool.end();
      })
};

function removeAll (id) {

    const removeAll = `DELETE FROM visitors`

    pool.query(removeAll, (er,res) => {
        console.log(er, res);
            pool.end();
      })
};

module.exports = addNewVisitor;

//createTable();
//addNewVisitor('Max', 96, '1993-06-08', '15:05:17', 'Masixole', 'He was a boy');
//listAllVisitors();
//removeById(8);
//update();
//visitorInfo(1)
//removeAll();
