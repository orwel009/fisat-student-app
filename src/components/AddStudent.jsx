import React, { useState } from 'react'
import Navbar from './Navbar'
import axios from 'axios'

const AddStudent = () => {
    const [data,changeData] = useState(
        {
            "firstname":"",
            "lastname":"",
            "college":"",
            "dob":"",
            "course":"",
            "mobile":"",
            "email":"",
            "address":""
        }
    )
    const inputHandler = (event)=>{
        changeData({...data,[event.target.name]:event.target.value})
    }
    const readValue = ()=>{
        console.log(data)
        axios.post("https://courseapplogix.onrender.com/addstudents",data).then(
            (response)=>{
                if (response.data.status === "success") {
                    alert("Successfully Added")
                } else {
                    alert("Error")
                }
            }
        ).catch()
    }
  return (
    <div>
        <Navbar/>
        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <div className="row g-3">
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">FirstName</label>
                            <input type="text" className="form-control" name='firstname' value={data.firstname} onChange={inputHandler}/>
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">LastName</label>
                            <input type="text" className="form-control" name='lastname' value={data.lastname} onChange={inputHandler}/>
                        </div>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <label htmlFor="" className="form-label">College</label>
                            <textarea name="college" id="" className="form-control" value={data.college} onChange={inputHandler}></textarea>
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">DOB</label>
                            <input type="date" name="dob" id="" className="form-control" value={data.dob} onChange={inputHandler}/>
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">Course</label>
                            <select name="course" value={data.course} onChange={inputHandler} id="" className="form-control">
                                <option value="MCA">MCA</option>
                                <option value="BCA">BCA</option>
                                <option value="BTech">BTech</option>
                                <option value="MTech">MTech</option>
                            </select>
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">Mobile</label>
                            <input type="text" className="form-control" name='mobile' value={data.mobile} onChange={inputHandler} />
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">Email</label>
                            <input type="email" name="email" value={data.email} onChange={inputHandler} id="" className="form-control" />
                        </div>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <label htmlFor="" className="form-label">Address</label>
                            <textarea name="address" value={data.address} onChange={inputHandler} id="" className="form-control"></textarea>
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <button className="btn btn-success" onClick={readValue}>Add Student</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AddStudent