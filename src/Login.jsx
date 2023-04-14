import React, { useState } from 'react';
import app from '../firebase.config.js'
import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  GithubAuthProvider,
} from "firebase/auth";


const Login = () => {
    const [user, setUser] = useState(null)
    const auth = getAuth()
    const googleProvider = new GoogleAuthProvider()
    const githubProvider = new GithubAuthProvider();



    const googleLoginHandler = ()=> {        
        signInWithPopup(auth, googleProvider)
        .then((result) => {
            console.log("sing up");
            const loggedInUser = result.user;
          //  console.log(loggedInUser);
            setUser(loggedInUser)
        })
        .catch((error) => {
            console.log(error);
        });
    }
    const githubLoginHandler = ()=> {
        console.log('git hub login');
        signInWithPopup(auth, githubProvider)
          .then((result) => {
            const loggedInUser = result.user;
            console.log(loggedInUser);
            setUser(loggedInUser);
          })
          .catch((error) => {
            console.log(error);
          });
    }

    const logoutHandler = ()=> {
        setUser(null)
    }

    return (
      <div className="pt-5 pb-5">
        <h1>Login</h1>
        {!user ? (
          <>
            <button
              onClick={googleLoginHandler}
              className="btn btn-success m-4"
            >
              Google Login{" "}
            </button>
            <button
              onClick={githubLoginHandler}
              className="btn btn-warning m-4"
            >
              Github Login{" "}
            </button>
          </>
        ) : (
          <button onClick={logoutHandler} className="btn btn-danger">
            Logout
          </button>
        )}

        <div>
          <div>
            {user && (
              <>
                <h2>User Name: {user?.displayName} </h2>
                <div>
                  <img
                    style={{width:"200px"}}
                    src={user?.photoURL}
                    alt="user image"
                    className="mt-4 mb-4"
                  />
                </div>
                <h6>Email: {user?.email} </h6>
              </>
            )}
          </div>
        </div>
      </div>
    );
};

export default Login;