import React from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter, Route, Routes, useParams, Navigate, HashRouter } from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import { connect } from "react-redux";
import { compose } from "redux";
import { initializeApp } from "./redux/app-reduser";
import Preloader from "./components/common/Preloader/Preloader";

function withRouter(Children){
  return(props)=>{
     const match  = {params: useParams()};
     return <Children {...props}  match = {match}/>
 }
}

class App extends React.Component {
  componentDidMount() {
    this.props.initializeApp();
}

  render() {
    if(!this.props.initialized) {
      
      return (
        <div className="app-wrapper" style={{marginTop: 85}}>
          <Preloader />
        </div>
      )
    }
    
    return (
      <HashRouter basename="/social-network">
        <div className="app-wrapper">
          <HeaderContainer />
          <Navbar />
          <div className="app-wrapper-content">
            <Routes>
              {/* {window.location.pathname === "/" && <Route path="/" element={ <Navigate to="/profile"/> } /> } */}
              <Route path="/profile" element={<ProfileContainer isMain={true}/>} />
              <Route path="/profile/:userId" element={<ProfileContainer />} />
              <Route path="/dialogs/*" element={<DialogsContainer />}/>
              <Route path="/news/*" element={<News />}/>
              <Route path="/music/*" element={<Music />}/>
              <Route path="/users/*" element={<UsersContainer />} />
              <Route path="/settings/*" element={<Settings />}/>
              <Route path="/login/*" element={<Login />}/>
            </Routes>
          </div>
        </div>
      </HashRouter>
    )
  }
  
}

const mapStateToProps = (state) => ({
  initialized: state.app.initialized,
})

export default compose(
  withRouter,
  connect(mapStateToProps, { initializeApp }))(App);