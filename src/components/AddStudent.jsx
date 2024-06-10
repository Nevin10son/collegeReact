import React, { useEffect, useState } from 'react'
import NavBar from './NavBar'
import axios from 'axios'

const AddStudent = () => {
  const [datas,setdata]=useState(
    {
      "firstname":"",
      "lastname":"",
      "college":"",
      "course":"",
      "dob":"",
      "mobile":"",
      "email":"",
      "address":""

    }
  )
  const inputHandler = (event) =>{
    setdata({...datas,[event.target.name]:event.target.value})
  }
  const readValues = () =>{
    console.log(datas)
    axios.post("https://courseapplogix.onrender.com/addstudents",datas).then(
      (response)=>{
        console.log(response.data);
        if (response.data.status=="success")
           {
            alert("Successfully added");
          
        } else {
          alert("Something's wrong");
          
        }
      }
    ).catch().finally()
  }
  return (
    <div>
      <NavBar/>
      <div className="container" style={{border:"2px solid blue",padding:"10px",borderRadius:"10px"}}>
        <div className="row">
            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <div className="row g-3">
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <label htmlFor="" className="form-label" >Student's First Name :</label>
                        <input type="text" className="form-control" name="firstname" value={datas.firstname} onChange={inputHandler} />
                    </div>

                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <label htmlFor="" className="form-label">Student's Last Name:</label>
                        <input type="text" className="form-control" name='lastname' value={datas.lastname} onChange={inputHandler}/>
                    </div>
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <label htmlFor="" className="form-label">College:</label>
                        <input type="text" className="form-control" name='college' value={datas.college} onChange={inputHandler}/>
                    </div>
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                      <label htmlFor="" className="form-label">DOB:</label>
                      <input type="date" name="dob" id="" className="form-control"  value={datas.dob} onChange={inputHandler} />
                    </div>
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                      <label htmlFor="" className="form-label">Course:</label>
                      <input type="text" className="form-control" name='course' value={datas.course} onChange={inputHandler}/>
                    </div>
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                      <label htmlFor="" className="form-label">Mobile No:</label>
                      <input type="text" className="form-control" name='mobile' value={datas.mobile} onChange={inputHandler} />
                    </div>
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                      <label htmlFor="" className="form-label">email:</label>
                      <input type="text" className="form-control" name='email' value={datas.email} onChange={inputHandler}/>
                    </div>
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                      <label htmlFor="" className="form-label">Address:</label>
                      <textarea className="form-control" name='address' value={datas.address} onChange={inputHandler}></textarea>
                    </div>
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                      <button className="btn btn-primary" onClick={readValues}>Add Student</button>
                    </div>

                </div>
            </div>
        </div>
      </div>
      <br />
    </div>
  )
}

export default AddStudent
