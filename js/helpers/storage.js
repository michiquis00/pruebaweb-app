import { Message } from "../components/Message.js";
import firebase from "./config.js";

const storage = firebase.storage().ref().child("postagram");

export async function uploadPhoto(name, photo) {
  const d = document,
    $container = d.getElementById("progress-upload"),
    $bar = d.getElementById("progress-bar"),
    $advance = d.getElementById("progress-advance");

  let upload = storage.child(name).put(photo);

  await upload.on(
    "state_changed",
    (snapshot) => {
      let progress = Math.floor(
        (snapshot.bytesTransferred / snapshot.totalBytes) * 100
      );
      $container.classList.remove("d-none");
      $bar.value = progress;
      $advance.innerHTML = `<b>${progress}%</b>`;
    },
    (err) => {
      let options = {
        type: "error",
        msg: `
          Error al subir el archivo: <b>${err.code}</b>
          <br>
          Mensaje: <b>${err.message}</b>
        `
      };
      Message(options);
    },
    () => {
      $container.classList.add("d-none");
      $bar.value = 0;
      $advance.innerHTML = "";
    }
  );

  return upload;
}

export async function getPhotoURL(name) {
  return await storage
    .child(name)
    .getDownloadURL()
    .then((url) => url)
    .catch((err) => err);
}

export async function deletePhoto(photoURL) {
  return await firebase
    .storage()
    .refFromURL(photoURL)
    .delete()
    .then(() => ({ code: "success", msg: "Foto eliminada con éxito" }))
    .catch((err) => err);
}
