
import { useState,useEffect } from 'react';
import './App.css';
import Auth from "./Auth"
import { auth } from './Firebase';
import Home from"./Home";
function App() {
  const [presentUser,setPresentUser]=useState(null)
  useEffect(()=>{
    auth.onAuthStateChanged(user=>{
      if (user){
        setPresentUser({uid:user.uid,email:user.email})
      }
      else{
        setPresentUser(null)
      }
    })
  }, [])
  return (
    <div className="App">

      {presentUser?<Home email={presentUser.email}/>:<Auth/>}
    </div>
  );
}

export default App;

