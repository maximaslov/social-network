import React from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import Login from './components/Login/Login';

function App(props) {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <HeaderContainer />
        <Navbar 
        // state={props.state.sideBar} 
        />
        <div className="app-wrapper-content">
          <Routes>
            <Route path="/profile" element={<ProfileContainer isMain={true}/>} />
            <Route path="/profile/:userId" element={<ProfileContainer />} />
            <Route path="/dialogs/*" element={<DialogsContainer />}/>
            <Route path="/news/*" element={<News />}/>
            <Route path="/music/*" element={<Music />}/>
            <Route path="/users/*" element={<UsersContainer />} />
            <Route path="/settings/*" element={<Settings />}/>
            <Route path="/login/*" element={<Login />}/>
            {/* <Route path="/friends/*" element={<Friends />}/> */}
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
