
import { useState } from "react";
import { auth } from "./Auth";
import logo from './user.png'
function Signup(props){
   const [data,setData]=useState({Email:"",password:""});
   const {Email,password}=data;
    const changeHandler=((e)=>{
         setData({...data,[e.target.name]:e.target.value});
    });
    const signUp=((e)=>{
        e.preventDefault();
       auth.createUserWithEmailAndPassword(Email,password).then(user=>alert("Sign up success")).catch(err=>alert(err.message));
    });
return(
    <div  style={{backgroundColor: "#508bfc",height:"100vh",width:"100vw",display:"flex",justifyContent:"center",alignItems:"center"}}>
    <form className="form-group"> 
     <div className="d-flex  flex-column mt-5 p-4 justify-content-center shadow  align-items-start" style={{backgroundColor: "white",width:"25vw",height:"65vh",borderRadius:"8px"}}>
       <img src={logo} alt="Logo" style={{width:"60px",aspectRatio:1/1,margin:"10px auto",}}/>
        <h3 style={{color:"#A020F0"}}>Sign up</h3>
        <label style={{fontSize:"18px"}} className="mt-3 fs-0" for="Email">Email</label>
        <input onChange={changeHandler} className="mt-2 form-control" type="email" name="Email" id="Email" placeholder="Enter your Email" required/>
        <label className="mt-2" style={{fontSize:"18px"}}for="password">Password</label>
        <input onChange={changeHandler} className="w-100 mt-2 form-control" required type="password" id="password"  name="password" placeholder="Enter your Password"/>
        <button onClick={signUp} className="w-100 btn mt-3 bg-primary p-2 text-white border-0">SIGN UP</button>
        <div className="d-flex mt-2 flex-row">
        <span style={{marginRight:"10px"}}>Already have an Account?</span>
        <a href="#" onClick={()=>{props.function(!props.login)}}>Log in</a>
        </div>
        </div>
    </form>
</div>
);
}
export default Signup;