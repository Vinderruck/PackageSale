import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import { Button } from  'react-bootstrap';
import { FaArrowRight } from "react-icons/fa";
import { MdMenuOpen } from "react-icons/md";

const UserSignUp = () => {
  return (
    <div style={{background:"#2a1450"}}>
      <div className="justify-content-between align-items-center" style={{background:"#2a1450",color:"white",display:"flex"}}>
        <div><h1 className="Art" style={{fontSize:"2rem", border:"1px solid white",padding:"1px",marginLeft:"2px"}}> MODERN-TECH</h1></div>
        <div   >
          <ul style={{display:'flex',alignItems:'center',justifyContent:"center",padding:"1rem",listStyle:"none",marginRight:"3rem"}}>
            <li className="Link1" >
              Solutions
            </li>
            <li className="Link1">
              Pricing
            </li>
            <li className="Link1">
             About
            </li>
          </ul>
        </div>
        <Button style={{background:"white",color:"black",borderRadius:'50px',width:"10%"}}>Sign Up</Button>
      </div>
      <div>
      <MdMenuOpen />
      </div>
    <div className="d-flex flex-column flex-sm-row justify-content-beteween align-items-center col-3" style={{width:"100%", background:"#2a1450", marginTop:'0rem' }}>
    
    
    <div  className="data"style={{background:"#3f236f",height:"70vh",boxShadow:"1px 1px 0px 1px white" ,color:"white",width:"80%",margin:"2rem",borderRadius:"20px" ,padding:"2rem"}}>
     
    <p className="poppinslight">free</p>
    <h1 className="poppinshead">FREE</h1>
    <p className="text-center poppinslight">forever for individual and small teams of 3</p>
    <ul className="poppinslight">
    <li className="Link">✔ Unlimited Access</li>
  <li className="Link"> ✔ 100MB Storage</li>
  <li className="Link">✔ 3 Users</li>
  <li className="Link">✔ Unlimited Tasks</li>
</ul>
 




<Button style={{background:"white",color:"black",borderRadius:'50px',width:"50%"}}>Start for free &nbsp;<FaArrowRight/></Button>
    </div>
    
    <div className="data"style={{background:"#3f236f",height:"70vh", color:"white",width:"80%",margin:"2rem" ,borderRadius:"20px" ,padding:"2rem",boxShadow:"1px 1px 0px 1px white"}}>
    <p>Unlimited </p>
    <h1 className="poppinshead">$29</h1>
    <p className="text-center">per user/month billed yearly
    $39 billed monthly</p>
    <ul className="poppinslight">
    <li className="Link">✔ All in Free +</li>
  <li className="Link">✔ Advanced Analytics</li>
  <li className="Link">✔ Unlimited Tasks</li>
  <li className="Link">✔ Smart Notifications</li>
  <li className="Link">✔ Priority Support</li>
</ul>
<Button style={{background:"white",color:"black",borderRadius:'50px',width:"50%"}}>Start for free &nbsp;<FaArrowRight/></Button>
    </div>
    

    <div  className="data" style={{background:"#3f236f",height:"70vh",width:"80%" ,color:"white",margin:"2rem",borderRadius:"20px",padding:"2rem",boxShadow:"1px 1px 0px 1px white"}}>
      <p>Enterprice</p>
    
    <h1 className="poppinshead">$35</h1>
    <p className="text-center">per user/month billed yearly
    $45 billed monthly</p>
    <ul className="poppinslight">
  <li className="Link">✔ All in Unlimited +</li>
  <li className="Link">✔ Bulk Export</li>
  <li className="Link">✔ Advanced Analytics</li>
  <li className="Link">✔ Advanced Security</li>
</ul>

<Button style={{background:"white",color:"black",borderRadius:'50px',width:"50%"}}>Start for free &nbsp;<FaArrowRight/></Button>
    </div>
    </div>
    </div>
  )
}

export default UserSignUp