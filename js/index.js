import "./helpers/include-html.js";
import "./helpers/dom-events.js";
import {
  auth,
  loginWithEmail,
  loginWithGoogle,
  logout,
  resetPassword,
  signinWithEmail
} from "./helpers/auth.js";

const d = document;

if (d.querySelector("#login")) loginWithEmail();

//if (d.querySelector("#logout")) logout("login.html");
logout("login.html");

if (d.querySelector("#login-google")) loginWithGoogle();

if (d.querySelector("#password")) resetPassword();

if (d.querySelector("#signin")) signinWithEmail();

auth.onAuthStateChanged((user) => {
  let url = window.location.href;

  if (
    user === null &&
    (url === "https://pyvoe.csb.app/" || url.includes("index.html"))
  ) {
    window.location.href = "login.html";
  }

  console.log(user);
});
