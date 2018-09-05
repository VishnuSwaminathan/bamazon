# Bamazon

This is an app that emulates the simple characteristics that Amazon uses, which will show a list of available items for purchasing, at what cost, and how many units are remaining.

## How To Use:

Install the node[mon], mysql, and inquirer packages (npm). You can do so by typing `npm install [package_name_here]`
You can start this app by first either typing: `node bamazonCustomer.js`
or: `nodemon bamazonCustomer.js` (this keeps the app running without having to open it again).

1. The app will prompt the customer to enter the product ID number (under the _item_id_ column).
2. Then the customer will be prompted to enter how many of the units they wish to purchase (remaining indicated under the _stock_quantity_ column).
3. If there aren't any units available of a certain product, a message will say "Insufficient quantity!", and will ask the customer if they would like to do any additional pruchases.
4. If there are units available, there will be a purchase message, showing the product's ID, name, etc. It will also show the total price for said product.
5. A final prompt will ask the customer if they would like to pruchase anything else; if they type _Yes_, they can again purchase products froma an updated product list. If they don't need to purchase anything else, the customer can type _No_.

### Example

1. ![Alt text](/part1.jpg)
2. ![Alt text](/part2.jpg)
3. ![Alt text](/part3.jpg)
4. ![Alt text](/part4.jpg)
5. ![Alt text](/part5.jpg)

## ToDo:

- [x] Customer View (Last Updated: 09/04/18)
- [ ] Manager View
- [ ] Supervisor View

# Technologies Used

### - JavaScript

### - Node.js

### - MySQL
