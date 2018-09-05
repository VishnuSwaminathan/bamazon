var mysql = require('mysql');
var inquirer = require('inquirer');
require('dotenv').config();

var db = mysql.createConnection({
  host: 'localhost',
  port: 3306,
  user: 'root',
  password: process.env.DB_PASS,
  database: 'bamazon'
});

function connectDB() {
  db.connect(function(err) {
    if (err) throw err;
    table();
  });
}

function table() {
  db.query('SELECT * FROM products WHERE stock_quantity >= 0', function(
    err,
    res
  ) {
    if (err) throw err;
    console.table(res);
    items();
  });
}

function items() {
  inquirer
    .prompt([
      {
        type: 'input',
        name: 'product',
        message: 'Enter product ID you wish to purchase: '
      },
      {
        type: 'input',
        name: 'numOfUnits',
        message: 'How many units would you like to purchase?: '
      }
    ])
    .then(function(response) {
      purchaseOrder(response);
    });
}

function purchaseOrder(response) {
  db.query(
    'SELECT * FROM products WHERE item_id = ? AND stock_quantity >= ?',
    [response.product, response.numOfUnits],
    function(err, res) {
      if (err) throw err;
      if (res.length === 0) {
        console.log('Insufficient quantity!');
        continuePurchase();
      } else {
        goThrough(response);
      }
    }
  );
}

function goThrough(response) {
  db.query(
    'UPDATE products SET stock_quantity = stock_quantity - ? WHERE item_id = ?',
    [response.numOfUnits, response.product],
    function(err, res) {
      if (err) throw err;
      db.query(
        'SELECT * FROM products WHERE item_id = ?',
        response.product,
        function(err, res) {
          console.table(res);
          console.log(
            'Your Order Total: $' +
              parseFloat(res[0].price) * parseFloat(response.numOfUnits)
          );
          return continuePurchase();
        }
      );
    }
  );
}

function continuePurchase() {
  inquirer
    .prompt([
      {
        type: 'confirm',
        name: 'continue',
        message: 'Do you want to purchase anything else?'
      }
    ])
    .then(function(response) {
      if (response.continue == true) {
        console.log('What else would you like to purchase?');
        table();
      } else {
        console.log('Thank you for using Bamazon!');
        db.end();
      }
    });
}

connectDB();
