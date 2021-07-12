import React,{useState} from 'react'
import {auth} from './Firebase'
import './Auth.css'
export default function Auth() {
    const [userSignUpDetails,setUserSignUpDetails]=useState({email:"",password:""})
    const handleChange=(e)=>{
        setUserSignUpDetails({...userSignUpDetails,[e.target.name]:e.target.value})
    }


    const signUp=(e)=>{
        e.preventDefault()
        // alert(userSignUpDetails.password)
        if (userSignUpDetails.email.length!=0 & userSignUpDetails.password.length!=0){
        auth.createUserWithEmailAndPassword(userSignUpDetails.email,userSignUpDetails.password)
        .then((user)=>console.log(user))
        }
        else{
            alert("enter something")
        }
    }



    const signIn=(e)=>{
        e.preventDefault()
        auth.signInWithEmailAndPassword(userSignUpDetails.email,userSignUpDetails.password)
    }



    return (
        <div className="main">
            <form>
            
                {/* <input type="email" placeholder="email" onChange={handleChange} name="email"/>
                <input type="password" placeholder="password" onChange={handleChange} name="password"/> */}

            
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" onChange={handleChange} name="email"/>
                    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" onChange={handleChange} name="password"/>
                </div>
                <div className="form-group form-check">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                    <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                </div>
                






                <div className="button-group">
                <button type="submit" className="btn btn-primary" onClick={signUp}>signUp</button>
                <button className="btn btn-primary" type="submit" onClick={signIn}>signIn</button>
                </div>
            </form>

            


            
        </div>
    )
}
