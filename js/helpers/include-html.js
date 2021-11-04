/* 
AJAX - https://jonmircha.com/ajax
Introducción a AJAX - https://www.youtube.com/watch?v=lN43CTpbWTU&list=PLvq-jIkSeTUZ6QgYYO3MwG9EMqC-KoLXA
Objeto XMLHttpRequest - https://www.youtube.com/watch?v=6CQrK1sS7WA&list=PLvq-jIkSeTUZ6QgYYO3MwG9EMqC-KoLXA
Delegación de Eventos - https://www.youtube.com/watch?v=j2fWSgOrxRs&list=PLvq-jIkSeTUZ6QgYYO3MwG9EMqC-KoLXA
*/

document.addEventListener("DOMContentLoaded", (e) => {
  const includeHTML = (el, url) => {
    //console.log(el, url);
    const xhr = new XMLHttpRequest();

    xhr.addEventListener("readystatechange", (e) => {
      if (xhr.readyState !== 4) {
        return;
      }

      if (xhr.status >= 200 && xhr.status < 300) {
        el.outerHTML = xhr.responseText;
      } else {
        let message =
          xhr.statusText ||
          "Error al cargar el archivo, verifica que estes haciendo la petición por http o https";
        el.outerHTML = `<div><p>Error ${xhr.status}: ${message}</p></div>`;
      }

      //console.log(xhr);
    });

    xhr.open("GET", url);
    xhr.setRequestHeader("Content-type", "text/html; charset=utf-8");
    xhr.send();
  };

  document
    .querySelectorAll("[data-include]")
    .forEach((el) => includeHTML(el, el.getAttribute("data-include")));
  //console.log(document.querySelectorAll("[data-include]"));
});

