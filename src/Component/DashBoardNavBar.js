import React from 'react';
import {auth} from '../Firebase';
import {useHistory} from 'react-router-dom'

export default function DashBoardNavBar(props) {
    const history = useHistory() 
    const signOut = ()=>{
        auth.signOut().then(() => {
            history.push('/')
          }).catch((error) => {
            // An error happened.
          });
    }
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="#">Navbar</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <a className="nav-link">{props.name}</a>
            </li>
            <li className="nav-item">
              <button className="btn btn-outline-primary" onClick={()=>signOut()}>Signout</button>
            </li>
          </ul>
        </div>
      </nav>
        </div>
    )
}
