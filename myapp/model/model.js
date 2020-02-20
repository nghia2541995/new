
var db = require('../lib/db');
class Model {
    excuteQuery(query){
        return new Promise (function(resolve, reject){
            db.query(query,function(err, result){
                console.log(err, query)
                if(err){
                    reject(err)
                } else {
                    resolve(result);
                }
            })
        })
    }
}
exports.Model = Model;
