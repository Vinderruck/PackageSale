import React,{useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import { Button } from  'react-bootstrap';
import { FaArrowRight } from "react-icons/fa";
import { MdMenuOpen } from "react-icons/md";

const UserSignUp = () => {
  const [menu, setmenu] = useState(false)
  const [Error, setError] = useState("")

  const handleclick = () => {
    // Display the message every 100ms
    const Timer = setInterval(() => {
      setError("Hi client, this is just a Template for a real Site. Please contact the Developer +254700317320");
    }, 900);
  
    // Stop the interval and clear the message after a certain time (e.g., 2 seconds)
    setTimeout(() => {
      clearInterval(Timer); // Stops the interval
      setError(""); // Clears the error message
    }, 2000); // 2 seconds
  }; 
  return (
    <div className="justify-center align-items-center" style={{background:"#2a1450", }}>
      <div className="justify-content-between align-items-center" style={{background:"#2a1450",color:"white",display:"flex"}}>
        <div className="justify-center"><h1 className="Art" style={{fontSize:"2rem",borderRadius:"5px" ,boxShadow:"1px 1px 2px 1px white",border:"1px solid white",padding:"1px",marginLeft:"2px"}}> MODERN-TECH</h1></div>
        <div  className="d-lg-block d-none" >
          <ul style={{display:'flex',alignItems:'center',justifyContent:"center",padding:"1rem",listStyle:"none",marginRight:"3rem"}}>
            <li className="inputtext Link"  onClick={()=> handleclick} >
              Solutions
            </li>
            <li className="inputtext Link1"  onClick={()=> handleclick}>
              Pricing
            </li>
            <li className="inputtext Link1"  onClick={()=> handleclick}>
             About
            </li>
          </ul>
        </div>
        <Button onClick={()=> {setmenu(false);handleclick()}}    className="d-lg-block d-none poppinslight" style={{background:"white",color:"black",borderRadius:'50px',width:"10%"}}>Sign Up</Button>
    
      <div className="d-lg-none" style={{width:"35px",height:"35px",marginRight:"1rem",position:"relative"}}>
      <MdMenuOpen onClick={()=>setmenu(!menu)} style={{color:"white",width:"100%",height:"100%"}}/>
        {menu &&(
          <div className="bg-white menu" style={{width:"100%",height:"auto",justifyContent:"start"}}>
             <ul style={{display:'flex' ,flexDirection:"column",color:"black",justifyContent:"end",alignItems:"right",padding:"1rem",listStyle:"none",marginRight:"3rem"}}>
            <li className="inputtext Link1"  onClick={()=> {setmenu(false);handleclick()}} >
              Solutions
            </li>
            <li className="inputtext Link1"  onClick={()=> {setmenu(false);handleclick()}}>
              Pricing
            </li>
            <li className="inputtext Link1"  onClick={()=> {setmenu(false);handleclick()}}>
             About
            </li>
            <li className="inputtext Link1" onClick={()=> {setmenu(false);handleclick()}}>
           Logout
            </li>
          </ul>
        
            
           </div>  )}
      </div>
      </div>
      <p className="bg-white text-center inputtext" style={{color:"black",borderRadius:"5px",width:"80%",marginRight:"1rem",marginLeft:"1rem",position:"fixed",zIndex:"2" }}>{Error}</p>
    <div className="d-flex flex-column flex-sm-row justify-content-beteween align-items-center col-3" style={{width:"100%", background:"#2a1450", marginTop:'0rem' }}>
    
    
    <div  className="data"style={{background:"#3f236f",height:"auto",boxShadow:"1px 1px 0px 1px white" ,color:"white",width:"80%",margin:"2rem",borderRadius:"20px" ,padding:"2rem"}}>
     
    <p className="poppinslight">free</p>
    <h1 className="poppinshead">FREE</h1>
    <p className="text-center poppinslight">forever for individual and small teams of 3</p>
    <ul className="poppinslight">
    <li className="Link">&nbsp;</li>  
    <li className="Link">✔ Unlimited Access</li>
  <li className="Link"> ✔ 100MB Storage</li>
  <li className="Link">✔ 3 Users</li>
  <li className="Link">✔ Unlimited Tasks</li>
</ul>
 



<Button  onClick={()=> {setmenu(false);handleclick()}}  className="poppinslight" style={{background:"white",color:"black",boxShadow:"1px 1px 2px 1px white",justifyContent:"center" ,alignContent:'center',display:'flex',borderRadius:'50px',width:"50%"}}><span>Start now</span> <span>&nbsp;<FaArrowRight/></span></Button>
    </div>
    
    <div className="data"style={{background:"#3f236f",height:"auto", color:"white",width:"80%",margin:"2rem" ,borderRadius:"20px" ,padding:"2rem",boxShadow:"1px 1px 0px 1px white"}}>
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
<Button   onClick={()=> {setmenu(false);handleclick()}}  className="poppinslight" style={{background:"white",color:"black",boxShadow:"1px 1px 2px 1px white",justifyContent:"center" ,alignContent:'center',display:'flex',borderRadius:'50px',width:"50%"}}><span>Start now</span> <span>&nbsp;<FaArrowRight/></span></Button>
    </div>
    

    <div  className="data" style={{background:"#3f236f",height:"auto",width:"80%" ,color:"white",margin:"2rem",borderRadius:"20px",padding:"2rem",boxShadow:"1px 1px 0px 1px white"}}>
      <p>Enterprice</p>
    
    <h1 className="poppinshead">$35</h1>
    <p className="text-center">per user/month billed yearly
    $45 billed monthly</p>
    <ul className="poppinslight">
    <li className="Link">&nbsp;</li>
  <li className="Link">✔ All in Unlimited +</li>
  <li className="Link">✔ Bulk Export</li>
  <li className="Link">✔ Advanced Analytics</li>
  <li className="Link">✔ Advanced Security</li>
</ul>

<Button  onClick={()=> {setmenu(false);handleclick()}}   className="poppinslight" style={{background:"white",color:"black",boxShadow:"1px 1px 2px 1px white",justifyContent:"center" ,alignContent:'center',display:'flex',borderRadius:'50px',width:"50%"}}><span>Start now</span> <span>&nbsp;<FaArrowRight/></span></Button>
    </div>
    </div>

    </div>
  )
}

export default UserSignUp