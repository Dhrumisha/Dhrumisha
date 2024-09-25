import React, { useState } from "react";
import { IoIosEye } from "react-icons/io";
import { IoIosEyeOff } from "react-icons/io";
import { Link, useNavigate } from 'react-router-dom';

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);

    const navigate = useNavigate();


    const handlepassword = ()=>{
        setShowPassword(!showPassword);
    }

    const handleSubmit = (e)=>{
        e.preventDefault();

        const user = JSON.parse(localStorage.getItem(email));

        if(user){
          localStorage.setItem("loggedUser",JSON.stringify(user)) //to convert javascript object to string
          navigate("/account");
        }
        else{
          alert("please check your email and password")
        }
        
    }

  return (
    <div>
      <div className="registration-detail">
        <h1 className="text-center text-light m-0">Login page</h1>
        <form action="" className="form-detail" onSubmit={handleSubmit}>
          <div className="container">
            <div className="row justify-content-center align-items-center">
              <div className="col-lg-5 form-design p-3 mb-5">
                <div className="row">
                  <div className="col-lg-12">
                    <div className="input-field">
                      <label htmlFor="" className="text-light">
                        Email:
                      </label>
                      <input
                      className="form-control"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter Email"
                        required
                      />
                    </div>
                  </div>
                </div>
                <div className="row justify-content-between">
                  <div className="col-lg-12">
                    <div className="input-field">
                      <label htmlFor="" className="text-light">
                        Password:
                      </label>
                      <div className="password-detail">
                        <input
                        className="form-control"
                          type={showPassword ? "text" : "password"}
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          placeholder="Enter password"
                          required
                        />
                        <span onClick={handlepassword}>
                          {showPassword ? <IoIosEye /> : <IoIosEyeOff />}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <p className="text-light text-center">
                  Don't have an Account? <Link to="/">SignUp</Link>
                </p>

                <div className="btn-detail">
                  <button className="btn btn-danger">
                    Login
                  </button>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
