import firebase from "../helpers/config.js";

export function PostCard(el, key) {
  //console.log(el, key);
  let { uid, caption, photos } = el;
  let user = firebase.auth().currentUser;

  //console.log(uid, user.uid);

  return `
  <article class="card">
  <header class="card-header">
    <a href="#" class="card-avatar">
      <img src="https://placeimg.com/42/42/people" alt="Usuario" />
      <span>Nombre de Usuario</span>
    </a>
    ${
      user.uid === uid
        ? `<button class="btn-delete" data-key="${key}">
    <svg data-key="${key}" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path data-key="${key}" fill-rule="evenodd" clip-rule="evenodd" d="M17 5V4C17 2.89543 16.1046 2 15 2H9C7.89543 2 7 2.89543 7 4V5H4C3.44772 5 3 5.44772 3 6C3 6.55228 3.44772 7 4 7H5V18C5 19.6569 6.34315 21 8 21H16C17.6569 21 19 19.6569 19 18V7H20C20.5523 7 21 6.55228 21 6C21 5.44772 20.5523 5 20 5H17ZM15 4H9V5H15V4ZM17 7H7V18C7 18.5523 7.44772 19 8 19H16C16.5523 19 17 18.5523 17 18V7Z" fill="currentColor" /><path data-key="${key}" d="M9 9H11V17H9V9Z" fill="currentColor" /><path data-key="${key}" d="M13 9H15V17H13V9Z" fill="currentColor" /></svg>
    </button>`
        : `<button>
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M14 6C14 7.10457 13.1046 8 12 8C10.8954 8 10 7.10457 10 6C10 4.89543 10.8954 4 12 4C13.1046 4 14 4.89543 14 6Z"
        fill="currentColor"
      />
      <path
        d="M14 12C14 13.1046 13.1046 14 12 14C10.8954 14 10 13.1046 10 12C10 10.8954 10.8954 10 12 10C13.1046 10 14 10.8954 14 12Z"
        fill="currentColor"
      />
      <path
        d="M14 18C14 19.1046 13.1046 20 12 20C10.8954 20 10 19.1046 10 18C10 16.8954 10.8954 16 12 16C13.1046 16 14 16.8954 14 18Z"
        fill="currentColor"
      />
    </svg>
  </button>`
    }
  </header>
  <section class="card-image">
    <img src="${photos[0]}" alt="${uid}" />
  </section>
  <nav class="card-icons">
    <button title="Me gusta">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd"
          d="M12.0122 5.57169L10.9252 4.48469C8.77734 2.33681 5.29493 2.33681 3.14705 4.48469C0.999162 6.63258 0.999162 10.115 3.14705 12.2629L11.9859 21.1017L11.9877 21.0999L12.014 21.1262L20.8528 12.2874C23.0007 10.1395 23.0007 6.65711 20.8528 4.50923C18.705 2.36134 15.2226 2.36134 13.0747 4.50923L12.0122 5.57169ZM11.9877 18.2715L16.9239 13.3352L18.3747 11.9342L18.3762 11.9356L19.4386 10.8732C20.8055 9.50635 20.8055 7.29028 19.4386 5.92344C18.0718 4.55661 15.8557 4.55661 14.4889 5.92344L12.0133 8.39904L12.006 8.3918L12.005 8.39287L9.51101 5.89891C8.14417 4.53207 5.92809 4.53207 4.56126 5.89891C3.19442 7.26574 3.19442 9.48182 4.56126 10.8487L7.10068 13.3881L7.10248 13.3863L11.9877 18.2715Z"
          fill="currentColor" />
      </svg>
    </button>
    <button title="Comenta">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M17 9H7V7H17V9Z" fill="currentColor" />
        <path d="M7 13H17V11H7V13Z" fill="currentColor" />
        <path fill-rule="evenodd" clip-rule="evenodd"
          d="M2 18V2H22V18H16V22H14C11.7909 22 10 20.2091 10 18H2ZM12 16V18C12 19.1046 12.8954 20 14 20V16H20V4H4V16H12Z"
          fill="currentColor" />
      </svg>
      </svg>
    </button>
    <button title="Compartir">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M14 13.9633H16V7.96331H10V9.96331H12.5858L7.25623 15.2929L8.67044 16.7071L14 11.3775L14 13.9633Z"
          fill="currentColor" />
        <path fill-rule="evenodd" clip-rule="evenodd"
          d="M1 12C1 5.92487 5.92487 1 12 1C18.0751 1 23 5.92487 23 12C23 18.0751 18.0751 23 12 23C5.92487 23 1 18.0751 1 12ZM3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12Z"
          fill="currentColor" />
      </svg>
    </button>
    <button title="Guardar">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd"
          d="M19 20H17.1717L12.7072 15.5354C12.3166 15.1449 11.6835 15.1449 11.2929 15.5354L6.82843 20L5 20V7C5 5.34315 6.34315 4 8 4H16C17.6569 4 19 5.34314 19 7V20ZM17 7C17 6.44772 16.5523 6 16 6H8C7.44772 6 7 6.44772 7 7V17L9.87873 14.1212C11.0503 12.9497 12.9498 12.9497 14.1214 14.1212L17 16.9999V7Z"
          fill="currentColor" />
      </svg>
    </button>
  </nav>
  <a class="card-likes" href="#">
    <span>80</span> Me gusta  
  </a>
  <footer class="card-caption">
    <a href="#">${uid}</a>
    <span>${caption}</span>
  </footer>
  <details class="card-comments">
    <summary>Ver comentarios</summary>
    <section>
      <article class="card-comment">
        <a href="#">Nombre Usuario</a>
        <span>Comentario del usuario</span>
      </article>
      <article class="card-comment">
        <a href="#">Nombre Usuario</a>
        <span>Comentario del usuario</span>
      </article>
      <article class="card-comment">
        <a href="#">Nombre Usuario</a>
        <span>Comentario del usuario</span>
      </article>
      <article class="card-comment">
        <a href="#">Nombre Usuario</a>
        <span>Comentario del usuario</span>
      </article>
    </section>
  </details>
  <small class="card-time">Hace 5 horas</small>
  <form class="card-form">
    <label for="comment">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 17C14.2091 17 16 15.2091 16 13H8C8 15.2091 9.79086 17 12 17Z" fill="currentColor" />
        <path
          d="M10 10C10 10.5523 9.55228 11 9 11C8.44772 11 8 10.5523 8 10C8 9.44772 8.44772 9 9 9C9.55228 9 10 9.44772 10 10Z"
          fill="currentColor" />
        <path
          d="M15 11C15.5523 11 16 10.5523 16 10C16 9.44772 15.5523 9 15 9C14.4477 9 14 9.44772 14 10C14 10.5523 14.4477 11 15 11Z"
          fill="currentColor" />
        <path fill-rule="evenodd" clip-rule="evenodd"
          d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12ZM20 12C20 16.4183 16.4183 20 12 20C7.58172 20 4 16.4183 4 12C4 7.58172 7.58172 4 12 4C16.4183 4 20 7.58172 20 12Z"
          fill="currentColor" />
      </svg>
    </label>
    <input type="text" id="comment" name="comment" placeholder="Añade un comentario..." requred />
    <input type="submit" value="Publicar">
  </form>
</article>
  `;
}
