import React,{useEffect} from 'react'
import Navbar from './Navbar'
import Firebase from '../Firebase'
import 'firebase/firestore'
export default function Home() {
    const db = Firebase.firestore()
    return (
        <div>
            <Navbar/>
            <h1>This is Home Page</h1>
        </div>
    )
}
