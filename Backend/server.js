const express=require('express');
const mongoose=require('mongoose')
const app=express();
const PORT=4000;

//DB//
DB_URL='mongodb+srv://gajapathi787_db_user:ANUGAJA@cluster0.eomt35c.mongodb.net/?appName=Cluster0'
mongoose.connect(DB_URL).then(()=>console.log("Database NOw Connected"))
.catch((a)=>console.log(`THis is error${a}`)
)



//middleware//

app.use(express.json());

app.get('/',(req,res)=>{
    res.send("Backend is Running")
})


app.listen(PORT,()=>{
    console.log(`Port is running is this ${PORT}`);
    
})