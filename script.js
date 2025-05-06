async function bookFlight() {
  const name = document.getElementById("passenger").value;
  const flight = document.getElementById("flight").value;

  const res = await fetch('https://<your-server-url>/book', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name, flight })
  });

  const data = await res.json();
  document.getElementById("response").textContent = data.message;
}
