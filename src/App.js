import React, { useState, useEffect } from "react";
import './App.css';
import NavBar from "./Components/NavBar";
import SideBar from "./Components/SideBar"
import TopSecondaryNavBar from "./Components/TopSecondaryNavBar"
import RightSideBar from "./Components/RightSideBar";
import FilesView from"./Components/FilesView";
import FileOptions from "./Components/FileOptions"
import { auth, provider } from "./firebase";

function App() {

  const [user, setUser] = useState();

  const hanndleLogin = () => {
    auth.signInWithPopup(provider).then(result => {
      setUser(result.user);
      console.log(user);
    })
  }

  // 

  useEffect(() => {
    auth.onAuthStateChanged(usera => {
      if (usera) {
        setUser(usera)
        console.log(usera)
        console.log(usera.photoURL)
      } else {
        console.log("no user is here")
      }
    })
  }, [])

  return (
    <div className="App">
      { user ? (
        <>
          <NavBar userPfp={user.photoURL}/>
          <div className="app__main">
            <SideBar userId={user.uid}/>
            <div className="app__mainFiles">
              <TopSecondaryNavBar />
              <FilesView userId={user.uid}/>
            </div>
            <RightSideBar />
          </div>
        </>
        ) : (
          <div className="app__login">
            <img style={{width: "400px"}} src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/Google_Drive_icon_(2020).svg/1200px-Google_Drive_icon_(2020).svg.png" alt="Google Drive"/>
            <button onClick={hanndleLogin}> log in to Google Drive </button>
          </div>
        )
      }

    </div>
  );
}

export default App;
