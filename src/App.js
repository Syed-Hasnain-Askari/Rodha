import React from 'react'
import Home from './Component/Home'
import DashBoard from './Component/Customer'
import UserProvider from './Provider/UserProvider'
import './App.css';
import AppRoute from './Router'
function App() {
  return (
    <div className="App">
      <UserProvider>
        <AppRoute/>
      </UserProvider>
    </div>
  );
}

export default App;
