
 import "./Service.css"

import  logo  from "./images/logo.png";
import { Link, useNavigate } from "react-router-dom";
import { useState,useEffect } from "react";
import axios from "axios";
import { API_URL } from "./URL";
function Datas(props) {
    // let passDatas=props.pass
    const nav=useNavigate()
const[getdata,setgetdata]=useState([]);

function fun() {
    axios.get(API_URL)
    .then((res)=>{
        setgetdata(res.data)
        console.log(res.data);

    })   
}

function Deletedata(passDatas) {
axios.delete(`${API_URL}/${passDatas}`)  
.then(
    ()=>{
        axios.get(API_URL)
        .then((res)=>{
         setgetdata(res.data); 
})   
})   
}

useEffect(()=>{
    fun();
},[]);

// update
function Updatedata({id,fullname,username,email,phone,password,ConfirmPassword,gender}) {
    localStorage.setItem("id",id)
    localStorage.setItem("fullname",fullname)
    localStorage.setItem("username",username)
    localStorage.setItem("email",email)
    localStorage.setItem("phone",phone)
    localStorage.setItem("password",password)
    localStorage.setItem("confirmpassword",ConfirmPassword)
    localStorage.setItem("gender",gender)
    console.log(id)
       
}

    return(

        <div>
           <section id="banner1">
    <div className="navbar1">
        <img src={logo} alt="" class="logo" />
        <ul>
            <li><Link to="/">HOME</Link></li>
            <li><a href="#">FEATURES</a></li>
            <li><Link to="/Service"> SERVICES</Link></li>
            <li><a href="#">TESTIMONIALS</a></li>
            <li><a href="#">MEET US1111</a></li>
        </ul> 
        </div>
        <div className="table-container">
    <h1 className="form-title">Booking Persons</h1> 
   
    <table className="table">
       
        <thead>
            <tr>
            <th>FULLNAME</th>
            <th>USERNAME</th>
            <th>EMAIL</th>
            <th>PHONE NUMBER</th>
            <th>PASSWORD</th>
            <th>CONFIRM PASSWORD</th>
            <th>GENDER</th>
            <th>ACTION</th>
            <th>EDIT</th>
            </tr>
        </thead>
        <tbody>
        {getdata.map((passDatas)=>(
        <tr key={passDatas.id} >
       

            <td>{passDatas.fullname}</td>
            <td>{passDatas.username}</td>
            <td>{passDatas.email}</td>
            <td>{passDatas.phone}</td>
            <td>{passDatas.password}</td>
            <td>{passDatas.ConfirmPassword}</td>
            <td>{passDatas.gender1}{passDatas.gender2}{passDatas.gender3}</td>
            
            <td><button onClick={()=>{Deletedata(passDatas.id)}}>delete</button></td>
            
            <td><button onClick={()=>{Updatedata(passDatas);nav("/Update")}}>Update</button></td>
           
        </tr>))}
        </tbody>
    </table>
   

    </div> 
</section>


 


         </div>
    )
    
}
export default Datas;