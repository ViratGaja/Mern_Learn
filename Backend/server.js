const express=require('express');
const mongoose=require('mongoose');
const cors=require('cors')
const app=express();
const PORT=4000;

//DB//
DB_URL='mongodb+srv://gajapathi787_db_user:ANUGAJA@cluster0.eomt35c.mongodb.net/?appName=Cluster0'
mongoose.connect(DB_URL).then(()=>console.log("Database NOw Connected"))
.catch((a)=>console.log(`THis is error${a}`)
)



//middleware//

app.use(express.json());
app.use(cors())

app.get('/',(req,res)=>{
    res.send("Backend is Running")
})

// crate schema for backend


const formSchema=new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    paragraph:{
        type:String,
        required:true
    },
    createdAt:{
        type:Date,
        default:Date.now
    }
})

const FormData=mongoose.model('formdata',formSchema)


// route save from data

app.post('/api/submit',async(req,res)=>{
try{
const {title,paragraph}=req.body;

if(!title || !paragraph){
    return res.status(400).json({
        success:false,
        message:"title and paragraph are required"
    })

    
}
const newFormData=new FormData({
        title,
        paragraph
    })

    await newFormData.save();
    res.status(201).json({
        success:ture,
        message:'Form data saved successfully',
         data: newFormData
    })
}
catch(err){
console.log(err)
}
    
})


///fetch all data

// GET route to fetch all form data
app.get('/api/forms', async (req, res) => {
  try {
    const forms = await FormData.find().sort({ createdAt: -1 });
    res.status(200).json({
      success: true,
      count: forms.length,
      data: forms
    });
  } catch (error) {
    console.error('Error fetching form data:', error);
    res.status(500).json({
      success: false,
      message: 'Error fetching form data',
      error: error.message
    });
  }
});




app.listen(PORT,()=>{
    console.log(`Port is running is this ${PORT}`);
    
})