fetch("events.json")
  .then((response) => response.json())
  .then((events) => {
    const list = document.querySelector("#starred");
    events.forEach((event) => {
      const item = document.createElement("li");
      item.textContent = `${event.name} — starred ${event.starred}`;
      list.appendChild(item);
    });
  })
  .catch((err) => {
    const list = document.querySelector("#starred");
    list.innerHTML = `<li>Could not load events: ${err.message}</li>`;
    console.error(err);
  });
