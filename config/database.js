
const mongoose=require("mongoose");

require ("dotenv").config();

const dbConnect=()=>{
    mongoose.connect(process.env.DATABASE_URL,{
        useNewUrlParser:true,
        useUnifiedTopology:true
    })
    .then(()=>console.log("connection successful"))
     .catch((error)=>{
        console.log("issue in DB Connectino");
        console.log(error.message);
        process.exit(1);
     })
    
}

module.exports=dbConnect;
