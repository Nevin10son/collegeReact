import React, { useState } from 'react'
import NavBar from './NavBar'

const SearchStudent = () => {
    const [data,setdata] = useState(
        {
            "name":""
        }
    )
    const inputHandler = (event) =>{
        setdata({...data,[event.target.name]:event.target.value})
    }
    const readValues = () =>{
        console.log(data)
    }
  return (
    <div>
        <NavBar/>
        <div className="container" style={{border:"2px solid blue",padding:"10px",borderRadius:"10px"}}>
            <div className="row g-3">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <label htmlFor="" className="form-label">Search Student By name:</label>
                    <input type="text" className="form-control" name='name' value={data.name} onChange={inputHandler}  />
                </div>
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <button className="btn btn-primary" onClick={readValues}>Search</button>
                </div>
            </div>
        </div>
        <br />
    </div>
  )
}

export default SearchStudent
