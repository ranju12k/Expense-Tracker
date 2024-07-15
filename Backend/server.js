const express = require('express');
const { MongoClient, ObjectId } = require('mongodb');
const path = require('path');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Serve static files
app.use(express.static(path.join(__dirname, 'public')));

// MongoDB Connection URL and Database Name
const url = 'mongodb://localhost:27017';
const dbName = 'ExpenseTracker';

// Connect to MongoDB
MongoClient.connect(url, { useUnifiedTopology: true })
  .then(client => {
    console.log('Connected successfully to MongoDB');
    const db = client.db(dbName);

    // Define MongoDB collections
    const userDataCollection = db.collection('UserData');

    // Route to fetch user data
    app.get('/api/UserData', (req, res) => {
      userDataCollection.find({}, { projection: { name: 1, email: 1, address: 1, password: 1, phone: 1 } })
        .toArray()
        .then(result => res.json(result))
        .catch(err => {
          console.error('Error fetching UserData', err);
          res.status(500).json({ error: 'Internal Server Error' });
        });
    });

    // Login route
    app.post('/api/login', (req, res) => {
      const { email, password } = req.body;
      userDataCollection.findOne({ email: email, password: password })
        .then(user => {
          if (user) {
            res.json({ success: true });
          } else {
            res.json({ success: false });
          }
        })
        .catch(err => {
          console.error('Error logging in', err);
          res.status(500).json({ error: 'Internal Server Error' });
        });
    });

    // Register route
   app.post('/api/register', async (req, res) => {
      const newUser = req.body;

      try {
        // Check for existing email
        const existingUser = await userDataCollection.findOne({ email: newUser.email });

        if (existingUser) {
          return res.status(409).json({ error: 'Email address already registered. Please try a different email.' });
        }

        // Insert new user if email is unique
        const result = await userDataCollection.insertOne(newUser);
        console.log('User registered successfully');
        res.json({ success: true });
      } catch (err) {
        console.error('Error registering user:', err);
        res.status(500).json({ error: 'Internal Server Error' });
      }
    });

    // Start the server
    app.listen(port, () => {
      console.log(`Server running at http://localhost:${port}`);
    });

  })
  .catch(err => {
    console.error('Error connecting to MongoDB', err);
  });
