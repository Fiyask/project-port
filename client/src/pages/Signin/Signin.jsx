import React, { useState } from 'react'
import "./signin.css"
import { useNavigate } from "react-router-dom"

const Signin = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [formUpdateData, setFormUpdateData] = useState({
    username:"",
    email:"",
    password:""
  })
  // const [userData, setUserData] = useState(undefined);
  const [currentUser, setCurrentUser] = useState(undefined)
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };


  const handleUpdateChange =(e) =>{
    setFormUpdateData({
      ...formUpdateData,
      [e.target.name]: e.target.value
    })
  }

  const handlesignout = () => {
    
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try{
      const response = await fetch("http://localhost:4000/api/user/signin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),

      });
    const data= await response.json();
    // setUserData(data);
    navigate("/")
    console.log(data)
    setCurrentUser(data.validUser)
    console.log(currentUser)
    } catch (err){
      console.log(err);
      return;
    }
  };
  console.log (currentUser)
  const handleUpdateSubmit = async(e) => {
    e.preventDefault()
    try{
      const response = await fetch(`http://localhost:4000/api/user/update/${currentUser._id}`,{
        method: "PUT",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formUpdateData),

      })
      const data =await response.json()
      console.log(data)

    }
    catch(err){
      console.log(err)

    }
  };



  return (
    <div>
      <h1>log in user account</h1>
      <form action="" onSubmit={handleSubmit}>
        <input type="text" placeholder='email' name='email' id='email' onChange={handleChange} />
        <input type="text" placeholder='password' name='password' id='password' onChange={handleChange} />
        <button>submit</button>

      </form>

      <div>
      <h1>log in user account</h1>
      <form action="" onSubmit={handleSubmit}>
        <input type="text" placeholder='email' name='email' id='email' onChange={handleChange} />
        <input type="text" placeholder='password' name='password' id='password' onChange={handleChange} />
        <button>submit</button>

      </form>
      </div>

      </div>
        
       
      
  );
};

export default Signin;