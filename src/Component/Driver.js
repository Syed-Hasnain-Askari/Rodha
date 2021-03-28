import React,{useContext} from 'react';
import UserProvider from '../Provider/UserProvider';
import DashBoardNavBar from './DashBoardNavBar';

export default function Driver() {
    return (
        <div>
            <DashBoardNavBar/>
            <h1>Driver DashBoard</h1>
        </div>
    )
}
