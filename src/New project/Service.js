import "./Service.css";

import  logo  from "./images/logo.png";

import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { API_URL } from "./URL";
function Service() {
    

const nav=useNavigate()
    const[fullName,setfullname]=useState("")
    const[userName,setusername]=useState("")
    const[email,setemail]=useState("")
    const[phone,setphonenumber]=useState("")
    const[password,setpassword]=useState("")
    const[ConfirmPassword,setconfirm]=useState("")
    const[gender1,setgender1]=useState(true)
    const[gender2,setgender2]=useState(true)
    const[gender3,setgender3]=useState(true)

    function Fun1(e) {
        setfullname(e.target.value)  
    }
    function Fun2(e) {
        setusername(e.target.value)  
    }
    function Fun3(e) {
        setemail(e.target.value)  
    }
    function Fun4(e) {
        setphonenumber(e.target.value)  
    }
    function Fun5(e) {
        setpassword(e.target.value)  
    }
    function Fun6(e) {
        setconfirm(e.target.value)  
    }
    function Fun7(e) {
     setgender1(e.target.value)
     
    }
    function Fun8(e) {
        setgender2(e.target.value)
       
       
      }
      function Fun9(e) {
        setgender3(e.target.value)
       
      }
    

function Funall(e) {
    e.preventDefault()
    setfullname("")
    setusername("")
    setemail("")
    setphonenumber("")
    setpassword("")
    setconfirm("")

    // let a={
    //     fullname:fullname,
    //     username:username,
    //     email:email,
    //     phone:phone,
    //     password:password,
    //     ConfirmPassword:ConfirmPassword,

    // }
    // props.add(a);
    axios.post(API_URL,{
    fullname:fullName,
        username:userName,
        email:email,
        phone:phone,
        password:password,
        ConfirmPassword:ConfirmPassword,
        gender1:gender1,
        gender2:gender2,
        gender3:gender3

    })


nav("/Datas")
   

}

 
     


    
    return(

        <div>
             <section id="banner1">
    <div className="navbar1">
        <img src={logo} alt="" class="logo" />
        <ul>
            <li><Link to="/">HOME</Link></li>
            <li><a href="#">FEATURES</a></li>
            <li><a href="#">SERVICES</a></li>
            <li><a href="#">TESTIMONIALS</a></li>
            <li><Link to="/Meetus">MEET US</Link></li>
        </ul> 
        </div> 



<div className="container">
    <h1 className="form-title">Booking for Online</h1>
    <form name="myform" onSubmit={Funall}>
        <div className="main-user-info">
            <div className="user-input-box">
                <label>Full Name</label>
                <input type="text" placeholder=" EnterFullname" onChange={Fun1} value={fullName}></input>
            </div>
            <div className="user-input-box">
                <label>User Name</label>
                <input type="text" placeholder="Enter Username" onChange={Fun2} value={userName}></input>
            </div>
            <div className="user-input-box">
                <label>Email</label>
                <input type="email" placeholder="Enter Email" onChange={Fun3} value={email}></input>
            </div>
            <div className="user-input-box">
                <label>Phone number</label>
                <input type="number" placeholder="Enter phone number" onChange={Fun4} value={phone}></input>
            </div>
            <div className="user-input-box">
                <label>Password</label>
                <input type="password" placeholder="Enter Password" onChange={Fun5} value={password}></input>
            </div>
            <div className="user-input-box">
                <label>Confirm password</label>
                <input type="password" placeholder="Confirm password" onChange={Fun6} value={ConfirmPassword}></input>
            </div>
        </div>
        <div className="gender-detail">
         <span className="gender-title">Gender</span>
         <div className="gender-category">
            <input type="radio" name="gender" id="male" onChange={()=>Fun7("male")} value={gender1}></input>
            <label>male</label>
            <input type="radio" name="gender" id="female" onChange={()=>Fun8("female")} value={gender2} ></input>
            <label>femail</label>
            <input type="radio" name="gender" id="other" onChange={()=>Fun9("other")} value={gender3}></input>
            <label>other</label>
         </div>
         <input type={"submit"}></input>
        </div>
        <div className="for-submit">
            

        </div>
    </form>

</div>
    </section>
        </div>
    )
}
export default Service;