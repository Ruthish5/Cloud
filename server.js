const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

let bookings = []; // Replace with DB in production

app.post('/book', (req, res) => {
  const { name, flight } = req.body;
  if (!name || !flight) return res.status(400).json({ message: "Missing fields" });

  bookings.push({ name, flight, time: new Date() });
  res.json({ message: `Flight booked for ${name} on ${flight}` });
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
