import React, { useEffect, useState } from "react";
import "../Style/SignUp.css";
import shopping from "../shopping.png"
import axios from 'axios'
import { useNavigate } from "react-router-dom";

function SignUp() {
  const [fname, setFname] = useState("");
  const [lname, setLame] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [address, setAddress] = useState({
    shipping: {
      street: "",
      city: "",
      pincode: "",
    },
    billing: {
      street: "",
      city: "",
      pincode: "",
    },
  });
  const [role, setRole] = useState("");
  const [file, setFile] = useState([])
  const formData = new FormData()
  const upload = (e) =>{
    console.log(e.target.files)
    const file = e.target.files 
    formData.append('files',file)
  }
  const navigate = useNavigate()
  // useEffect(()=>{
  //   let auth = localStorage.getItem('user') 
  //   if(!auth)
  //     auth = localStorage.getItem('token') 
  //   if(auth){
  //     navigate('/')
  //   }
  // },[])
  const collectData = () => {
    let obj = {
      method: 'post',
      url: 'http://localhost:4000/register',
      data:{fname,lname,email,phone,password,address,role},
      body:formData      
    }
    let result = axios(obj)
    console.log(result.data)
    // localStorage.setItem("token",JSON.stringify(result.data.data.token))
    // localStorage.setItem("adminid",JSON.stringify(result.data.data.adminId))
    if(result){
      navigate('/home')
    }
  };
  return (
    <form>
      <h2>Create Account</h2>
      <div className="form-row">
        <div className="form-group col-md-6">
          <input
            type="name"
            value={fname}
            onChange={(e) => setFname(e.target.value)}
            className="form-control"
            id="inputFname"
            placeholder="First Name"
          />
        </div>
        <div className="form-group col-md-6">
          <input
            type="name"
            value={lname}
            onChange={(e) => setLame(e.target.value)}
            className="form-control"
            id="inputLname"
            placeholder="Last Name"
          />
        </div>
        <div className="form-group col-md-6">
          <input
            type="phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="form-control"
            id="inputPhone"
            placeholder="Phone Number"
          />
        </div>
        <div className="col-md-6">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="form-control"
            id="inputEmail4"
            placeholder="Email"
          />
        </div>
        <div className="form-group col-md-6">
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="form-control"
            id="inputPassword4"
            placeholder="Password"
          />
        </div>
        <div className="form-group col-md-6">
          <select
            id="inputRole"
            value={role}
            onChange={(e) => setRole(e.target.value)}
            className="form-control"
          >
            <option selected>Role</option>
            <option>admin</option>
            <option>member</option>
          </select>
        </div>

        <p>Shipping Address</p>
        <div>
          <div className="shipping">
            <input
              type="street"
              value={address.shipping.street}
              onChange={(e) =>
                setAddress({ ...address, [e.target.street]: e.target.value })
              }
              className="form-control"
              id="s-street"
              placeholder="street"
            />
          </div>
          <div className="shipping">
            <input
              type="city"
              value={address.shipping.city}
              onChange={(e) =>
                setAddress({ ...address, [e.target.city]: e.target.value })
              }
              className="form-control"
              id="s-city"
              placeholder="city"
            />
          </div>
          <div className="shipping">
            <input
              type="pincode"
              value={address.shipping.pincode}
              onChange={(e) =>
                setAddress({ ...address, [e.target.pincode]: e.target.pincode })
              }
              className="form-control"
              id="s-pincode"
              placeholder="pincode"
            />
          </div>
        </div>
        {/* billing */}
        <h6>Billing Address</h6>
        <div className="add">
          <div className="billing">
            <input
              type="street"
              value={address.billing.street}
              onChange={(e) =>
                setAddress({ ...address, [e.target.street]: e.target.value })
              }
              className="form-control"
              // id="billing"
              placeholder="street"
            />
          </div>
          <div className="billing">
            <input
              type="city"
              value={address.billing.city}
              onChange={(e) =>
                setAddress({ ...address, [e.target.city]: e.target.value })
              }
              className="form-control"
              id="b-city"
              placeholder="city"
            />
          </div>
          <div className="billing">
            <input
              type="pincode"
              value={address.billing.pincode}
              onChange={(e) =>
                setAddress({ ...address, [e.target.pincode]: e.target.pincode })
              }
              className="form-control"
              id="b-pincode"
              placeholder="pincode"
            />
          </div>
        </div>
        <div>
          <h6 id="photo">Profile Photo</h6>
          <input id="file"type="file" value={file} onChange={(e)=>upload(e)} />
        </div>
      </div>
      <button
        type="button"
        onClick={collectData}
        className="btn btn-primary"
        id="submitBtn"
      >
        Sign Up
      </button>
      <div className="header-img">
          <img src={shopping} alt={"shopping"} />
        </div>
    </form>
  );
}

export default SignUp;
