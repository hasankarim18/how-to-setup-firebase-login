## How to setup firebase Login 

- firebase.config.js file is not uploaded 
- When anybody want to use to this file they have to create firebase.config.js and export app from that file.


##  Steps 



INITIAL SETUP
 ------------------
 * 1. visit console.firebase.google.com
 * 2. create project (skip google analytics)
 * 3. Register app (create config)
 * 4. install firebase: npm install firebase
 * 5. Add config files to your projects
 * 6. Do not publish or make firebase config to public by pushing to github
 
 INTEGRATION
 ------------- 
 * 7. Go to docs > Build > Authentication > web > Get started
 * 8. Export app from the firebase.config.js / firebase.init.js export default app
 * 9. Login.jsx: import getAuth from firebase/auth
 * 10. Create const auth = getAuth(app

  PROVIDER SETUP
  -----------------
 * 11. import google auth provider and create a new provider
 * 12. use signInWithPopUp and pass auth with provider
 * 13. activate sign in method (google, facebook, github)
 * 14. [vite]: change 127.0.0.1 to local host
 

  -------------
  More auth provider 
 * 1. activate the auth provider (create app, provide redirect url, client id ,client secret)
 */