import "antd/dist/antd.css"
import React from 'react'
import { Route } from 'react-router-dom'
import './App.css'
import { BrowserRouter } from 'react-router-dom'
import Login from './components/Auth/Login'
import Reg from './components/Auth/Reg'
import Gallery from './components/gallery/Gallery'
import Header from './components/header/Header'


const App = () =>  {
  return (
      <BrowserRouter>
        <Header/>
        <Route path='/gallery' render={() => <Gallery/>}/>
        <Route path='/login' render={() => <Login/>}/>
        <Route path='/registration' render={() => <Reg/>}/>
      </BrowserRouter>
  );
}

export default App;
