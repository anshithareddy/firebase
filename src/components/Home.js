import React from "react";
import { Button } from "react-bootstrap";
import { useUserAuth } from "../context/UserAuthContext";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const {user,logOut}=useUserAuth();
  const navigate=useNavigate();
  const handleLogOut=async(e)=>{
    try{
      await logOut();
      
    }
    catch(error){
      console.log(error.message)
    }
  }
  return (
    <>
      <div className="p-4 box mt-3 text-center">
        Hello {user && user.email}<br />
      </div>
      <div className="d-grid gap-2">
        <Button variant="primary" onClick={handleLogOut}>
          Log out
        </Button>
      </div>
    </>
  );
};

export default Home;