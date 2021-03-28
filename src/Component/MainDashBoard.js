import React, { useContext,useEffect, useState} from 'react';
import Firebase from '../Firebase';
import Customer from './Customer';
import Driver from './Driver';
import {auth} from '../Firebase';
import DashBoardNavBar from './DashBoardNavBar';
import UserContext from '../Provider/UserProvider'
export default function MainDashBoard(){
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
            <DashBoardNavBar name={currentUser.email}/>
            <Customer/>
            </div>
        )
    }
    return(
        <div>
        <DashBoardNavBar name={currentUser.email}/>
        <Driver/>
        </div>
    )
       
    
}
