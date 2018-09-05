DROP DATABASE IF EXISTS bamazon;
CREATE database bamazon;

USE bamazon;

CREATE TABLE products
(
  item_id INT NOT NULL AUTO_INCREMENT,
  product_name VARCHAR (100) NULL,
  department_name VARCHAR (100) NULL,
  price DECIMAL (10,2) NULL,
  stock_quantity INT NULL,
  PRIMARY KEY (item_id)
);
  
INSERT INTO products
    (product_name, department_name, price, stock_quantity)
VALUES
    ("LED Lights", "Electronics", 11.99, 1000);

INSERT INTO products
    (product_name, department_name, price, stock_quantity)
VALUES
    ("iPad", "Electronics", 499.99, 1000);

INSERT INTO products
    (product_name, department_name, price, stock_quantity)
VALUES
    ("Samsung Galaxy", "Electronics", 750.00, 1000);

INSERT INTO products
    (product_name, department_name, price, stock_quantity)
VALUES
    ("IKEA Sofa Set", "Furniture", 950.00, 1000);

INSERT INTO products
    (product_name, department_name, price, stock_quantity)
VALUES
    ("Bean Bag", "Furniture", 149.99, 1000);

INSERT INTO products
    (product_name, department_name, price, stock_quantity)
VALUES
    ("Dining Table", "Furniture", 274.99, 1000);

INSERT INTO products
    (product_name, department_name, price, stock_quantity)
VALUES
    ("Bamazon-Coin", "Cryptocurrency", 11523434.58, 10);

INSERT INTO products
    (product_name, department_name, price, stock_quantity)
VALUES
    ("Canned Dog Food", "Food & Kitchen", 9.99, 1000);

INSERT INTO products
    (product_name, department_name, price, stock_quantity)
VALUES
    ("Chef Cutlery Set", "Food & Kitchen", 149.99, 1000);

INSERT INTO products
    (product_name, department_name, price, stock_quantity)
VALUES
    ("Propane Canister", "Food & Kitchen", 23.50, 1000);
