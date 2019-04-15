DROP DATABASE IF EXISTS bamazon_db;

CREATE DATABASE bamazon_db;

USE bamazon_db;

CREATE TABLE products (
    item_id INTEGER NOT NULL AUTO_INCREMENT,
    product_name VARCHAR (100),
    department_name VARCHAR (100), 
    price INTEGER (11),
    stock_quantity INTEGER (11),
    
    PRIMARY KEY (item_id)
);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("bananas", "groceries", 5, 100); 

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("shoes", "clothing", 10, 500);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("tables", "furnitures", 100, 10);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("apples", "groceries", 3, 1000);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("chairs", "furnitures", 20, 40);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("hoodies", "clothing", 10, 100);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("earphones", "electronics", 15, 50);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("speakers", "electronics", 18, 93);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("tortillas", "groceries", 2, 17);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("ipod", "electronics", 16, 2);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("jeans", "clothing", 30, 110); 



