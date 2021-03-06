import React,{useState,useRef} from 'react'
import 'firebase/functions'
import {Link} from 'react-router-dom'
import Firebase  from '../Firebase'
import {auth} from "../Firebase";
import {useHistory} from "react-router-dom";
import 'firebase/firestore';
import swal from 'sweetalert';
export default function Signup() {
    const history = useHistory()
    const [error,setError] = useState("")
    const [loading,setLoading] = useState(false)
    const name = useRef()
    const email = useRef()
    const password = useRef()
    const confpassword = useRef()
    // const option = useRef()
    // console.log(option,"option")
    const[value,setValue]=useState("")
    const[disabled,setDisabled]=useState(false);
    const handle=()=>{
     
      if(disabled==true){
        setDisabled(false)
      }
      else{
        setDisabled(true)
      }
     
    }
    console.log(value,"values dekh bhai")
    //Run on Click Event
    const db = Firebase.firestore();
    const handleSubmit = async (e)=>{
        e.preventDefault()
        if(password.current.value!== confpassword.current.value){
            return setError("Password do not match")
        }
        auth.createUserWithEmailAndPassword(email.current.value,password.current.value)
            .then((userCredential) => {
              db.collection("User").doc(userCredential.user.uid).set({
              name: name.current.value,
              email: email.current.value,
              option:value
              });
              swal("Registration has been Successfull!", "You clicked the button!", "success");
              history.push('/')
              // auth.signOut()
              
        })
        .catch((error) => {
            var errorMessage = error.message;
            setError(errorMessage)
            // ..
        });
        setLoading(false)
       
    }
    return (
        <div className="container">
        <div className="row d-flex justify-content-center">
             <div className="col-md-6 col-sm-12">
             <div className="card mt-5" style={{width:"400px"}}>
     <form className="form-signin" id="signup-form" onSubmit={handleSubmit}>
     <div className="d-flex justify-content-center">
     <img className="mb-4 d-flex align0" src="https://getbootstrap.com/docs/4.0/assets/brand/bootstrap-solid.svg" alt="" width={72} height={72} />
     </div>
     <h1 className="h3 mb-3 font-weight-normal text-center">Please SignUp your Form</h1>
     <label htmlFor="inputEmail" className="sr-only">Enter your Name</label>
     <input type="text" id="inputEmail" className="form-control" 
            placeholder="Enter your Name" 
            required
            ref={name}
            autoFocus />
     <label htmlFor="inputEmail" className="sr-only">Email address</label>
     <input type="email" id="inputEmail" className="form-control" 
            placeholder="Email address" 
            required
            ref={email}
            autoFocus />
     <label htmlFor="inputPassword" className="sr-only">Password</label>
     <input type="password" id="inputPassword" className="form-control" 
            placeholder="Password" 
            ref={password}
            required />
      <label htmlFor="inputPassword" className="sr-only">Confirm Password</label>
     <input type="password" id="confirmPassword" className="form-control" 
            placeholder=" Confirm Password" 
            ref={confpassword}
            required />
      <div>

     <div style={{paddingLeft:"5px"}}>
       
       <div><label>Customer</label>&nbsp;<input onChange={()=>{handle()}} disabled={disabled}  onClick={()=>{setValue("Customer")}} type="radio"></input></div>
       <div><label>Driver</label>&nbsp;&nbsp;<input onChange={()=>{handle()}} disabled={disabled} onClick={()=>{setValue("Driver")}} type="radio"></input></div>

    </div> 


      </div>
    
     <div className="checkbox mb-3 ml-1">
       <label>
         <input type="checkbox" defaultValue="remember-me" /> Remember me
       </label>
     </div>
     <button className="btn btn-lg btn-primary btn-block" type="submit" >SignUp</button>
     <label className=" alert-danger">{error}</label>
     <div className="form-group">
        <p className="text-center">Already have an account? 
        <Link to='/'>
          <a id="signin">Sign in here</a>
          </Link> </p>
      </div>
     <p className="mt-5 mb-3 text-muted">?? 2017-2018</p>
   </form>
     </div>
             </div>
        </div>
    </div>
  )}
