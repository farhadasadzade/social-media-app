import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import './App.css';

import Dialogs from './components/Dialogs/Dialogs';
import Header from './components/Header/Header.jsx'
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';

const App = (props) => {
  return (
    <BrowserRouter>
      <div className='wrapper'>
        <Header />
        <Navbar />
        <div className='content'>
          <Routes>
            <Route path='/profile' element={<Profile state={props.state.profilePage} addPost={props.addPost} updateNewPostText={props.updateNewPostText}/>}/>
            <Route path='/dialogs' element={<Dialogs state={props.state.dialogsPage}/>}/>
            <Route path='/news'/>
            <Route path='/music'/>
            <Route path='/settings'/>
          </Routes>
        </div>
      </div>
    </BrowserRouter>
    
  );
}

export default App;
