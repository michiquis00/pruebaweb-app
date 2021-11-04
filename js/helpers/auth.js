import { Message } from "../components/Message.js";
import firebase from "./config.js";

const d = document;
let pageAfterLogin = "index.html";

export const auth = firebase.auth();

function authError(err) {
  let options = {
    type: "error",
    msg: `
      Error: <b>${err.code}</b>
      <br>
      Mensaje: <b>${err.message}</b>
    `
  };
  Message(options);
}

export function loginWithEmail(form = "#login") {
  d.querySelector(form).addEventListener("submit", (e) => {
    e.preventDefault();
    let t = e.target;

    auth
      .signInWithEmailAndPassword(t.email.value, t.pass.value)
      .then(() => (window.location.href = pageAfterLogin))
      .catch((err) => authError(err));
  });
}

export function logout(url, selector = "#logout") {
  //d.querySelector(selector).addEventListener("click", (e) => {
  d.addEventListener("click", (e) => {
    if (e.target.matches(`${selector}, ${selector} *`)) {
      e.stopPropagation();
      auth.signOut().then(() => (window.location.href = url));
    }
  });
}

export function loginWithGoogle(selector = "#login-google") {
  d.querySelector(selector).addEventListener("click", (e) => {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth
      .signInWithPopup(provider)
      .then(() => (window.location.href = pageAfterLogin))
      .catch((err) => authError(err));
  });
}

export function signinWithEmail(form = "#signin") {
  d.querySelector(form).addEventListener("submit", (e) => {
    e.preventDefault();
    let t = e.target;
    auth
      .createUserWithEmailAndPassword(t.email.value, t.pass.value)
      .then(() => (window.location.href = pageAfterLogin))
      .catch((err) => authError(err));
  });
}

export function resetPassword(form = "#password") {
  d.querySelector(form).addEventListener("submit", (e) => {
    e.preventDefault();
    let t = e.target;

    auth
      .sendPasswordResetEmail(t.email.value)
      .then(() => {
        let options = {
          type: "success",
          msg:
            "Revisa tu bandeja de entrada, te hemos enviado un correo para recuperar tu contraseña"
        };
        Message(options);
      })
      .catch((err) => authError(err));
  });
}
