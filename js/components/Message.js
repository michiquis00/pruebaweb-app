export function Message({ type, msg, selector = "#message", time = 5000 }) {
  let msgTemplate = `
    <div class="message ${type}">
      <p>${msg}</p>
    </div>
  `;
  document.querySelector(selector).innerHTML = msgTemplate;

  setTimeout(() => {
    document.querySelector(selector).innerHTML = null;
  }, time);
}
