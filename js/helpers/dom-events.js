import firebase from "./config.js";
import { Message } from "../components/Message.js";
import { PostCard } from "../components/PostCard.js";
import { deletePost, getPost, getPosts, savePost } from "./db.js";
import { deletePhoto, getPhotoURL, uploadPhoto } from "./storage.js";

const d = document,
  w = window,
  $uploader = d.getElementById("uploader"),
  $preview = d.getElementById("image-preview");

d.addEventListener("click", async (e) => {
  if (e.target.matches(".btn-add, .btn-add *")) {
    e.stopPropagation();
    $uploader.click();
  }

  if (e.target.matches(".btn-delete, .btn-delete *")) {
    e.stopPropagation();
    let key = e.target.dataset.key;
    let isDelete = window.confirm("¿Estás seguro de eliminar el Post?");

    if (isDelete) {
      alert(`Eliminar el Post ${key}`);
      let post = await getPost(key);
      //console.log(post.val());
      let photos = post.val().photos;
      //console.log(photos);
      await Promise.all(photos.map(async (photo) => await deletePhoto(photo)));
      await deletePost(key);
      window.location.reload();
    } else {
      return false;
    }
  }
});

d.addEventListener("change", (e) => {
  if (e.target.matches("#uploader")) {
    //console.log(e.target.files);
    e.stopPropagation();
    w.location.hash = "preview";
    let fileList = Array.from(e.target.files);

    if (fileList.length === 0) {
      let options = {
        type: "error",
        msg: "<b>No hay archivos seleccionados</b>"
      };
      Message(options);
    } else {
      fileList.forEach((file) => {
        $preview.innerHTML = `<img src="${w.URL.createObjectURL(file)}" alt="${
          file.name
        }">`;
      });
    }
  }
});

d.addEventListener("submit", async (e) => {
  if (e.target.matches("#modal-form")) {
    e.preventDefault();
    alert("Enviando Post");

    let fileList = Array.from(e.target.uploader.files);
    let data = {
      caption: e.target.caption.value,
      photos: []
    };

    let isNotImages = fileList.filter((file) => !file.type.match("image.*"));
    //console.log(isNotImages);

    if (isNotImages.length > 0) {
      let options = {
        type: "error",
        msg: "<b>Estas tratando de subir un archivo que no es imagen</b>"
      };

      Message(options);
      w.location.hash = "";
      e.target.reset();
      return false;
    }

    await Promise.all(
      fileList.map(async (file) => {
        //Subir la imagen
        //Una vez subida la imagen insertar los datos en la BD
        let photoName = `${new Date().getTime()}_${file.name}`;
        let upload = await uploadPhoto(photoName, file);
        console.log(upload);

        if (upload.state === "success") {
          let photoURL = await getPhotoURL(photoName);
          console.log(photoURL);
          data.photos.push(photoURL);
          console.log(data);
        } else {
          let options = {
            type: "error",
            msg: "<b>Ocurrió un error al subir la foto</b>"
          };
          Message(options);
          w.location.hash = "";
          e.target.reset();
          return false;
        }
      })
    );

    savePost(data);
    let options = {
      type: "success",
      msg: "<b>Se ha creado el Post</b>"
    };
    Message(options);
    w.location.hash = "";
    e.target.reset();
  }
});

d.addEventListener("DOMContentLoaded", async (e) => {
  let postsHTML = "",
    postsData = [],
    postsInverse = [];

  await getPosts()
    .then((data) => {
      //console.log(data);
      data.forEach((snapshot) => {
        //console.log(snapshot);
        postsData.push(snapshot);
      });
    })
    .then(() => {
      postsInverse = postsData.reverse();

      let user = firebase.auth().currentUser;
      //console.log(user);
      postsInverse.forEach((el) => {
        //console.log(el.val());
        //if (user.uid === el.val().uid) {
        postsHTML += PostCard(el.val(), el.key);
        //}
      });

      d.getElementById("app").innerHTML = postsHTML;
    })
    .catch((err) => console.log(err));
});

w.addEventListener("hashchange", (e) => {});

