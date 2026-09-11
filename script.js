const list = document.querySelector("#starred");
const status = document.getElementById('starred-status');
if (status) status.textContent = 'Loading…';

fetch("events.json")
  .then((response) => {
    if (!response.ok) throw new Error(`Network response was not ok (${response.status})`);
    return response.json();
  })
  .then((events) => {
    if (!Array.isArray(events) || events.length === 0) {
      list.innerHTML = '<li>No starred repositories found.</li>';
      if (status) status.textContent = '';
      return;
    }
    list.innerHTML = '';
    events.forEach((event) => {
      const item = document.createElement("li");
      item.textContent = `${event.name} — starred ${event.starred}`;
      list.appendChild(item);
    });
    if (status) status.textContent = '';
  })
  .catch((err) => {
    list.innerHTML = `<li>Could not load events.</li>`;
    if (status) status.textContent = `Error: ${err.message}`;
    console.error(err);
  });
