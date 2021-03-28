import React, { useState, useRef } from 'react';
import Firebase from '../Firebase'
import { auth } from '../Firebase';
import { useHistory, Link } from 'react-router-dom';

export default function Login() {
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const email = useRef()
  const password = useRef()
  const history = useHistory()
  const db = Firebase.firestore()
  // Login Method
  const handleSubmit = async (e) => {
    e.preventDefault()
    auth.signInWithEmailAndPassword(email.current.value, password.current.value)
      .then((userCredential) => {
        //Read Data from FireStore and Check if Customer is match with Currect User ID
        var docRef = db.collection("User").where("option", "==", "Customer")
        docRef.get().then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
            if (userCredential.user.uid == doc.id) {
              console.log(userCredential.user.uid, "=>", doc.id)
              history.push('/')
            }
          })
        }).catch((error) => {
          console.log("Error getting document:", error);
        });
      })
      .catch((error) => {
        // var errorCode = error.code;
        var errorMessage = error.message;
        setError(errorMessage)

      });
    setLoading(false)
  }
  return (
    <div className="container">
      <div className="row d-flex justify-content-center">
        <div className="col-md-6 col-sm-12">
          <div className="card mt-5" style={{ width: "400px" }}>
            <form className="form-signin" onSubmit={handleSubmit}>
              <div className="d-flex justify-content-center">
                <img className="mb-4 d-flex align0" src="https://getbootstrap.com/docs/4.0/assets/brand/bootstrap-solid.svg" alt="" width={72} height={72} />
              </div>
              <h1 className="h3 mb-3 font-weight-normal text-center">Please sign in</h1>
              <label htmlFor="inputEmail" className="sr-only">Email address</label>
              <input type="email" id="inputEmail" ref={email} className="form-control" placeholder="Email address" required autoFocus />
              <label htmlFor="inputPassword" className="sr-only">Password</label>
              <input type="password" id="inputPassword" ref={password} className="form-control" placeholder="Password" required />
              <div className="checkbox mb-3">
                <label>
                  <input type="checkbox" defaultValue="remember-me" /> Remember me
          </label>
              </div>
              <button className="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
              <label className=" alert-danger">{error}</label>
              <div className="form-group">
                <p className="text-center">Don't have an account <Link to='/Signup'><a id="signup">Sign up here</a></Link> </p>
              </div>
              <p className="mt-5 mb-3 text-muted">© 2017-2018</p>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
