const mongoose = require("mongoose")

const connectDB = async () => {

    try{
        const connect =await mongoose.connect(process.env.MONGO)
        console.log (`mongodb is connected sucessfully ${connect.connection.host}`)
    }
    catch(err){
        console.log(err)

    }
}

module.exports = connectDB