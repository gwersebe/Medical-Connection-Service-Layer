const express = require('express');
const bodyParser = require('body-parser');
const connection = require('./db');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/doctors', (req, res) => {
    connection.query('SELECT * FROM doctors', (err, results) => {
        if (err) {
            console.error('Error fetching doctors:', err);
            return res.status(500).json({ error: 'Error fetching doctors' });
        }

        res.json(results);
    });
});

app.post('/doctors', (req, res) => {
    const { name, specialization, location } = req.body;
    const doctor = { name, specialization, location };

    connection.query('INSERT INTO doctors SET ?', doctor, (err, results) => {
        if (err) {
            console.error('Error inserting doctor:', err);
            return res.status(500).json({ error: 'Error inserting doctor' });
        }

        res.json(results);
    });
});

app.get('patients', (req, res) => {
    connection.query('SELECT * FROM patients', (err, results) => {
        if (err) {
            console.error('Error fetching patients:', err);
            return res.status(500).json({ error: 'Error fetching patients' });
        }


        res.json(results);
    });
});

app.post('/patients', (req, res) => {
    const { name, age, gender, address } = req.body;
    const patient = { name, age, gender, address };

    connection.query('INSERT INTO patients SET ?', patient, (err, results) => {
        if (err) {
            console.error('Error inserting patient:', err);
            return res.status(500).json({ error: 'Error inserting patient' });

        }

        res.json(results);
    });
});

app.get('/appointments', (req, res) => {
    connection.query('SELECT * FROM appointments', (err, results) => {
        if (err) {
            console.error('Error fetching appointments:', err);
            return res.status(500).json({ error: 'Error fetching appointments' });
        }

        res.json(results);
    });
});


app.post('/appointments', (req, res) => {
    const { doctor_id, patient_id, date } = req.body;
    const appointment = { doctor_id, patient_id, date };

    connection.query('INSERT INTO appointments SET ?', appointment, (err, results) => {
        if (err) {
            console.error('Error inserting appointment:', err);
            return res.status(500).json({ error: 'Error inserting appointment' });
        }

        res.json(results);
    });
});


app.get('medical-records', (req, res) => {
    connection.query('SELECT * FROM medical-records', (err, results) => {
        if (err) {
            console.error('Error fetching medical-records:', err);
            return res.status(500).json({ error: 'Error fetching medical-records' });
        }

        res.json(results);
    });
});

app.post('/medical-records', (req, res) => {
    const { patient_id, doctor_id, appointment_id, diagnosis, prescription, notes } = req.body;
    const medicalRecord = { patient_id, doctor_id, appointment_id, diagnosis, prescription, notes };

    connection.query('INSERT INTO medical-records SET ?', medicalRecord, (err, results) => {
        if (err) {
            console.error('Error inserting medical-record:', err);
            return res.status(500).json({ error: 'Error inserting medical-record' });
        }

        res.json(results);
    });
});

app.get('symptoms', (req, res) => {
    connection.query('SELECT * FROM symptoms', (err, results) => {
        if (err) {
            console.error('Error fetching symptoms:', err);
            return res.status(500).json({ error: 'Error fetching symptoms' });
        }

        res.json(results);
    });
});


app.post('/symptoms', (req, res) => {
    const { name, description } = req.body;
    const symptom = { name, description };

    connection.query('INSERT INTO symptoms SET ?', symptom, (err, results) => {
        if (err) {
            console.error('Error inserting symptom:', err);
            return res.status(500).json({ error: 'Error inserting symptom' });
        }

        res.json(results);
    });
});

app.get('doctor-symptoms', (req, res) => {
    connection.query('SELECT * FROM doctor-symptoms', (err, results) => {
        if (err) {
            console.error('Error fetching doctor-symptoms:', err);
            return res.status(500).json({ error: 'Error fetching doctor-symptoms' });
        }

        res.json(results);
    });
});

app.post('/doctor-symptoms', (req, res) => {
    const { doctor_id, symptom_id } = req.body;
    const doctorSymptom = { doctor_id, symptom_id };

    connection.query('INSERT INTO doctor-symptoms SET ?', doctorSymptom, (err, results) => {
        if (err) {
            console.error('Error inserting doctor-symptom:', err);
            return res.status(500).json({ error: 'Error inserting doctor-symptom' });
        }

        res.json(results);
    });
});









const port = 3000;
app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});
