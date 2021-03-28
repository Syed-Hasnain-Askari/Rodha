import React, { useContext,useEffect, useState} from 'react';
import Firebase from '../Firebase';
import {auth} from '../Firebase';
import DashBoardNavBar from './DashBoardNavBar';
import UserContext from '../Provider/UserProvider'
export default function Customer(){
    const [check,setCheck] = useState(false)
    const user = useContext(UserContext)
    const currentUser = auth.currentUser
    const db = Firebase.firestore()
    const docRef = db.collection("User").where("option","==","Customer")
    docRef.get().then((querySnapshot) => {
        querySnapshot.forEach((doc)=>{
          if(currentUser.uid == doc.id) {
            setCheck(true)
        }})
    }).catch((error) => {
        console.log("Error getting document:", error);
    });
    if(check==true){
        return(
            <div>
            <DashBoardNavBar/>
            <h1>Customer</h1>
            </div>
        )
    }
    return(
        <div>
        <DashBoardNavBar/>
        <h1> Truck Driver</h1>
        </div>
    )
       
    
}
