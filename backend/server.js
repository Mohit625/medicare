const express = require('express');
const fs = require('fs');
const cors = require('cors');
const app = express();
const PORT = 3000;

app.use(cors());

const tips = JSON.parse(fs.readFileSync('updated_health_tips.json', 'utf8'));
const doctors = JSON.parse(fs.readFileSync('doctors_list_with_images.json', 'utf8'));
const hospitals = JSON.parse(fs.readFileSync('hospitals_list.json', 'utf8'));

app.get('/api/tips', (req, res) => {
  res.json(tips);
});

app.get('/api/tips/:id', (req, res) => {
  const tip = tips[parseInt(req.params.id)];
  if (tip) {
    res.json(tip);
  } else {
    res.status(404).json({ error: 'Tip not found' });
  }
});

app.get('/api/doctors', (req, res) => {
  res.json(doctors);
});

app.get('/api/doctors/:id', (req, res) => {
  const doctor = doctors.find(d => d.id === parseInt(req.params.id));
  if (doctor) {
    res.json(doctor);
  } else {
    res.status(404).json({ error: 'Doctor not found' });
  }
});

app.get('/api/hospitals', (req, res) => {
  res.json(hospitals);
});

app.get('/api/hospitals/:name', (req, res) => {
  const name = decodeURIComponent(req.params.name);
  const hospital = hospitals.find(h => h.name.toLowerCase() === name.toLowerCase());
  if (hospital) {
    res.json(hospital);
  } else {
    res.status(404).json({ error: 'Hospital not found' });
  }
});

app.listen(PORT, () => {
  console.log(`API server running at http://localhost:${PORT}`);
});

