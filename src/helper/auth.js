import { auth } from "../services/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  FacebookAuthProvider,
} from "firebase/auth";

export function signUp(email, password) {
  return createUserWithEmailAndPassword(auth, email, password)
    .then(function (result) {
      // This gives you a Facebook Access Token. You can use it to access the Facebook API.
      var token = result.user.accessToken;
      // The signed-in user info.
      var user = result.user;
      //TODO Manage token
      //console.log(result.user.accessToken);
      // ...
    })
    .catch(function (error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      console.error(`${errorCode} ${errorMessage}`);
    });
}

export function signIn(email, password) {
  return signInWithEmailAndPassword(auth, email, password)
    .then(function (result) {
      //TODO Manage token
      //console.log(result.user.accessToken);
      // ...
    })
    .catch(function (error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      console.error(`${errorCode} ${errorMessage}`);
    });
}

export function signinWithFaceBook(email, password) {
  var provider = new FacebookAuthProvider();
  return signInWithPopup(auth, provider)
    .then(function (result) {
      //TODO Manage token
      //console.log(result.user.accessToken);
      // ...
    })
    .catch(function (error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      console.error(`${errorCode} ${errorMessage}`);
    });
}
