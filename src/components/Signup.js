import React, { useState } from "react";
import { Form, Alert } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { Link,useNavigate} from "react-router-dom";
import { useUserAuth } from "../context/UserAuthContext";
const Signup = () => {
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");
  const [error,setError]=useState("");
  const {signUp}=useUserAuth();
  const navigate=useNavigate();

  const handleSubmit=async(e)=>{
    setError("");
    e.preventDefault();
    try{
      await signUp(email,password);
      navigate("/")
    }catch(error){
      setError(error.message);
    }
  }

  return (
    <>
      <div className="p-4 box">
        <h2 className="mb-3">Firebase Auth Signup</h2>
        {error && <Alert variant="danger">{error}</Alert>}
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control
              type="email"
              placeholder="Email address"
              onChange={(e)=>setEmail(e.target.value)}
              
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Control
              type="password"
              placeholder="Password"
              onChange={(e)=>setPassword(e.target.value)}

            />
          </Form.Group>

          <div className="d-grid gap-2">
            <Button variant="primary" type="Submit">
              Sign up
            </Button>
          </div>
        </Form>
      </div>
      <div className="p-4 box mt-3 text-center">
        Already have an account? <Link to="/">Login</Link>
      </div>
    </>
  );
};

export default Signup;