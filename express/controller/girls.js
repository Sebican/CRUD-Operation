const connection = require('../modal/dbConnect')

const getGirls = async (req, res)=>{
   let sqlQuery = "SELECT * FROM girls"
  await connection.query(sqlQuery, (err, result)=>{
    if(err){
        res.send(err.sqlMessage);
    }
    else{
        res.send(result)
    }
   })
}

module.exports = {getGirls}