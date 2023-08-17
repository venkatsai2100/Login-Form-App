
import { auth } from "./Auth";
import sidebar from './sidebar.png'
import { useRef } from "react";
import dashboard from './dashboard.png'
function Layout(){
  const ref=useRef(null);
  function openNav(){
     ref.current.style.width="300px";
  }
  function closeNav(){
    ref.current.style.width="0px";
        }
    return(
    <div>
      <header style={{display:"flex",flexDirection:"row",backgroundColor:"#A020F0",height:"50px"}}>
      <div ref={ref} className="d-flex flex-column" style={{height:"100vh",width:"0",position:"fixed",zIndex:"1",top:"0",left:"-80px",overflowX:"hidden",paddingTop:"60px",transition:"0.5s",backgroundColor:"black",color:"white",gap:"10p"}}>
        <a href="#" onClick={closeNav} style={{color:"white",fontSize:"20px"}}>Close</a>
        <a href="#" style={{color:"white",fontSize:"20px"}}>Home</a>
        <a href="#" style={{color:"white",fontSize:"20px"}}>About</a>
        <a href="#" style={{color:"white",fontSize:"20px"}}>Services</a>
        <a href="#" style={{color:"white",fontSize:"20px"}}>Contact</a>
      </div>
      <nav className="navbar navbar-expand-lg navbar-dark" style={{width:"100vw"}}>
        <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav">
      <li className="nav-item">
      <img onMouseEnter={openNav} onClick={openNav} src={sidebar} alt="menu" style={{width:"50px",marginRight:"70vw",zIndex:"0"}}/>
      </li>
      <li className="nav-item">
        <a className="nav-link text-white" style={{fontSize:"20px"}} href="#">Dashboard</a>
      </li>
      <li className="nav-item">
      <img className="ml-3 mr-3" src={dashboard} alt="dashboard" style={{width:"40px",aspectRatio:"1/1"}}/>
      </li>
      <li className="nav-item">
        <button className="nav-link btn bg-info" style={{color:"black",margin:" 5px 2px 5px 20px"}}  onClick={()=>{auth.signOut();
       alert("Logged out successfully")}} href="#">Log Out</button>
      </li>
      </ul>
      </div>
      </nav>
      </header>
    </div>
    )
}
export default Layout;