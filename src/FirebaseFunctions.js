import functions from 'firebase/firebase-functions'
import admin from 'firebase/firebase-admin'
export const addNewUser = functions.auth.user().onCreate(user=>{
    admin.firestore().collection('users').doc(user.uid).set({
        email:
    })
})