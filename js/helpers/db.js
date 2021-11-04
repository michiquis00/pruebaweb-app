import firebase from "./config.js";

const db = firebase.database().ref("postagram");

export function savePost(data) {
  const user = firebase.auth().currentUser;

  data = {
    ...data,
    uid: user.uid
  };

  db.push(data);
}

export function getPosts() {
  return new Promise((resolve, reject) =>
    db.on("value", (snapshot) =>
      snapshot
        ? resolve(snapshot)
        : reject({ err: true, msg: `No hay posts que cargar.` })
    )
  );
}

export function getPost(key) {
  return new Promise((resolve, reject) =>
    db
      .child(key)
      .on("value", (snapshot) =>
        snapshot
          ? resolve(snapshot)
          : reject({ err: true, msg: `No existe el post con la key ${key}.` })
      )
  );
}

export function deletePost(key) {
  return new Promise((resolve, reject) =>
    db
      .child(key)
      .remove()
      .then(() => resolve({ err: false, msg: "El post se elimino con éxito" }))
      .catch((err) =>
        reject({
          err: true,
          msg: `El post con la key ${key} no se pudo eliminar`
        })
      )
  );
}

