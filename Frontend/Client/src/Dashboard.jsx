import React, { useState } from 'react';

const Dashboard = () => {
const [formData, setFormData]=useState({
    title:'',
    paragraph:''
})
const [loading,setLoading]=useState(false);
const [message,setMessage]=useState('')


const handleform=(e)=>{
const {name,value}=e.target;
setFormData(pre=>({
    ...pre, [name]: value
}))
}

const handleSubmit=async()=>{
    if(!formData.title || !formData.paragraph) {
        setFormData("Please fill in both fields");
        return;
    }
    setLoading(true);
    setMessage('')

    try{
        const response=await fetch('http://localhost:4000/api/submit',{
            method:'POST',
            headers:{
                'Content-type':'application/json'
            },
            body:JSON.stringify(formData)
        })
        const data=await response.json();
        if(data.success){
            setMessage('Form submitted successfully');
            setFormData({
                title:'',
                paragraph:""
            })
        }
        else{
            setMessage('Errr')
        }
    }
    catch(err){
        console.log(err)
    }
}

  return (
    <>


      <div className="dashboard-container">
        <div className="dashboard-card">
          <div className="dashboard-header">
            <h1>Dashboard</h1>
            <p>Fill in the details below</p>
          </div>

          <div>
            <div className="form-group">
              <label className="form-label" htmlFor="title">
                Title
              </label>
              <input
                type="text"
                id="title"
                name="title"
                className="form-input"
                placeholder="Enter your title..."
                value={formData.title}
                onChange={handleform}
              
              />
            </div>

            <div className="form-group">
              <label className="form-label" htmlFor="paragraph">
                Paragraph
              </label>
              <textarea
                id="paragraph"
                name="paragraph"
                className="form-input form-textarea"
                placeholder="Enter your paragraph..."
                value={formData.paragraph}
                 onChange={handleform}
            
              />
            </div>

            <button type="button"  disabled={loading} className="submit-button" onClick={handleSubmit}>
             
            </button>


          
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;