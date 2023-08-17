
import './App.css';
import Layout from './Layout';
import Home from './Home';
import Login from './Login';
import Signup from './Signup';
import Dashboard from './Dashboard';
import {useState,useEffect} from 'react';
import {auth} from './Auth';
function App() {
  const [user,setUser]=useState(null);
  const [login,setLogin]=useState(true);
  useEffect(()=>{
    auth.onAuthStateChanged(user=>{
      if(user){
       setUser({
        uid:user.uid,
        email:user.email
       })
      }else{
        setUser(null);
      }
    })

  },[])
  return (
    <div className="App">
      {
       user?
        <Dashboard/>:
         login?<Login login={login} function={setLogin}/>:<Signup login={login} function={setLogin}/>
       }
    </div>
  );
}

export default App;
