
const Model = require('./model.js').Model;
 class Customer extends Model {
    getCustomer() {
       let query = 'select customers.id as id, customers.title as title, customers.name as name, customers.email as email from customers';
        return this.excuteQuery(query)
    }
}

exports.Customer = Customer


