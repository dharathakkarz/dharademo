const mongoose = require("mongoose")
const DB= process.env.DATABASE;

mongoose.connect(DB,
    {
        useNewUrlParser:true,
        useUnifiedTopology:true,
    }
).then(()=>console.log("databse connect")).catch((err)=>console.log("Error",err))