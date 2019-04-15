var mysql = require("mysql");
var inquirer = require("inquirer");

// create the connection information for the sql database
var connection = mysql.createConnection({
    host: "localhost",

    // Your port; if not 3306
    port: 3306,

    // Your username
    user: "root",

    // Your password
    password: "Nebojohn1",
    database: "bamazon_db"
});

// connect to the mysql server and sql database
connection.connect(function (err) {
    if (err) throw err;
    // run the start function after the connection is made to prompt the user
    console.log("Database connected!");
    //viewTable();
    //askCustomer ();
    //start(); 
});

function viewTable() {
    connection.query("SELECT * FROM products", function (err, results) {
        if (err) {
            throw err;
        };
        for (var i = 0; i < results.length; i++) {
            var products = results[i];
            console.log(
                "\n\n" +
                "Item - id: " + products.item_id + "\n\n" +
                "Product name: " + products.product_name + "\n\n" +
                "Department: " + products.department_name + "\n\n" +
                "Price per Unit: " + products.price + "\n\n" +
                "Available stock: " + products.stock_quantity +
                "\n----------------------------------------------------------\n"
            );
        };
    });
};
viewTable();


function userRequest() {

    inquirer.prompt([
        {
            name: "id",
            type: "input",
            message: "What id of the product you want to buy?"
        },
        {
            name: "quantity",
            type: "input",
            message: "How many items do you want to order?"
        }
    ]).then(function (answer) {
        connection.query("SELECT * FROM products WHERE item_id = " + answer.id, function (err, results) {
            if (err) {
                throw err;
            } else {
                for (var i = 0; i < results.length; i++) {
                    var products = results[i];
                    var stockLeft = products.stock_quantity;
                    if(answer.quantity <=products.stock_quantity){
                        console.log("we have some items available for you!");
                        // update the database
                        
            
                        stockLeft-=answer.quantity;
                        connection.query("UPDATE products SET ? WHERE ?", 
                        [
                            {stock_quantity:stockLeft},
                            {item_id: answer.id}
                        ],
                        function(err){
                            if(err){
                                throw err
                            } else{
                                connection.query("SELECT * FROM products WHERE item_id =" + answer.id, function(err, response){
                                    if (err){
                                        throw err
                                    } else{
                                        var stock =response[0].stock_quantity;
                                        console.log("database updated! stock left is now: " + stock);
                                    }
                                });
                            }
                        });

                        var priceToPay = parseInt(answer.quantity)*(products.price);

                        console.log(
                            "\n\n" +
                            "Details of the product you ordered: " + "\n\n" +
                            "Item - id: " + products.item_id + "\n\n" +
                            "Product name: " + products.product_name + "\n\n" +
                            "Department: " + products.department_name + "\n\n" +
                            "Price per Unit: " + products.price + "\n\n" +
                            "Available stock: " + products.stock_quantity + "\n\n" +
                            "Stock left after your order: " + stockLeft + "\n\n" + 
                            "YOU ORDERED " + answer.quantity + " ITEMS" + "\n\n" +
                            "THE TOTAL PRICE TO PAY FOR YOUR ORDER IS " + priceToPay + "\n\n" +
                            "\n----------------------------------------------------------\n"
                        );

                    }
                    else{
                        console.log("We don't have enough in our stock to satisfy your order, please try another quantity");
                    }
                };
            }
        });
    });
};
setTimeout(function(){userRequest()},1000);
