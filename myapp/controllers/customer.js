const customer = require('../model/customer');
console.log(customer)
let cuObj = new customer.Customer();
class CustomerController {
    /*
       Create a new absence
       response json;
   */


    getCustomer(request, response) {
        return cuObj.getCustomer()
            .then((result) => { response.json(result); })
            .catch((err) => { response.json(err); });
    }

}
exports.CustomerController = CustomerController;
exports.customerControlObj = new CustomerController();
