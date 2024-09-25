import React, { useState } from "react";
import { IoIosEye } from "react-icons/io";
import { IoIosEyeOff } from "react-icons/io";
import { json, Link, useNavigate } from "react-router-dom";
import Login from "./Login";

function Register() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    if (password === confirmPassword && password.length >= 8) {
      const user = {
        firstName,
        lastName,
        email,
        password,
      };
      localStorage.setItem(email, JSON.stringify(user));
      alert("Registration Successfully!");
      navigate("/login");
    } else {
      alert("please check password and should be 8 character atleast");
    }
  }

  function handlepassword() {
    setShowPassword(!showPassword);
  }

  return (
    <>
      <div className="registration-detail">
        <h1 className="text-center text-light m-0">Welcome to our page</h1>
        <form action="" className="form-detail" onSubmit={handleSubmit}>
          <div className="container">
            <div className="row justify-content-center align-items-center">
              <div className="col-lg-6 form-design p-3 mb-5">
                <div className="row justify-content-between">
                  <div className="col-lg-6">
                    <div className="input-field">
                      <label htmlFor="" className="text-light">
                        First Name:
                      </label>
                      <input
                        className="form-control"
                        type="text"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        placeholder="Enter First Name"
                        required
                      />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="input-field">
                      <label htmlFor="" className="text-light">
                        Last Name:
                      </label>
                      <input
                        className="form-control"
                        type="text"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        placeholder="Enter Last Name"
                        required
                      />
                    </div>
                  </div>
                </div>
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
                  <div className="col-lg-6">
                    <div className="input-field">
                      <label htmlFor="" className="text-light">
                        Password:
                      </label>
                      <div className="password-detail">
                        <input
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
                  <div className="col-lg-6">
                    <div className="input-field">
                      <label htmlFor="" className="text-light">
                        Confirm Password:
                      </label>
                      <div className="password-detail">
                        <input
                          type={showPassword ? "text" : "password"}
                          value={confirmPassword}
                          onChange={(e) => setConfirmPassword(e.target.value)}
                          placeholder="Confirm Password"
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
                  Already have an Account? <Link to="/login">Login</Link>
                </p>

                <div className="btn-detail">
                  <button className="btn btn-danger">Register</button>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default Register;
