import React,{useState,useRef} from 'react'
import swal from 'sweetalert';
import Firebase from '../Firebase'
export default function Signup() {
    const email = useRef()
    const password = useRef()
       const addUser = e => {
        e.preventDefault();
        const db = Firebase.firestore();
        db.settings({
          timestampsInSnapshots: true
        });
        const userRef = db.collection("User").add({
          email: email.current.value,
          password: password.current.value
        });
         email.current.value = ""
         password.current.value = "" 
         swal("Good job!", "You clicked the button!", "success");   
      };
    return (
        <div className="container">
        <div className="row d-flex justify-content-center">
             <div className="col-md-6 col-sm-12">
             <div className="card mt-5" style={{width:"400px"}}>
     <form className="form-signin" onSubmit={addUser}>
     <div className="d-flex justify-content-center">
     <img className="mb-4 d-flex align0" src="https://getbootstrap.com/docs/4.0/assets/brand/bootstrap-solid.svg" alt="" width={72} height={72} />
     </div>
     <h1 className="h3 mb-3 font-weight-normal text-center">Please SignUp your Form</h1>
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
     <div className="checkbox mb-3">
       <label>
         <input type="checkbox" defaultValue="remember-me" /> Remember me
       </label>
     </div>
     <button className="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
     <p className="mt-5 mb-3 text-muted">© 2017-2018</p>
   </form>
     </div>
             </div>
        </div>
    </div>
    )
}
