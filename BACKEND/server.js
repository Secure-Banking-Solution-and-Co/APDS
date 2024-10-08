const express = require('express'); 
const bodyParser = require('body-parser');
const cors = require('cors');
const dotenv = require('dotenv');  // Load dotenv
const bcrypt = require('bcryptjs');  // Import bcrypt for password hashing
const jwt = require('jsonwebtoken'); // Import jwt for token generation
const express = require('express');
const fs = require('fs');
const https = require('https');

dotenv.config();  // Initialize dotenv
const app = express();



/*
Mushfeef implementing the HTTPS 
*/
// Serve a simple response for HTTPS
app.get('/', (req, res) => {
  res.send('Hello! This connection is secured with HTTPS.');
});

// SSL options
const sslOptions = {
  key: fs.readFileSync('server.key'),
  cert: fs.readFileSync('server.cert')
};

// Create HTTPS server
https.createServer(sslOptions, app).listen(443, () => {
  console.log('HTTPS server is running on https://localhost');
});

// Redirect HTTP to HTTPS
http.createServer((req, res) => {
  res.writeHead(301, { Location: `https://${req.headers.host}${req.url}` });
  res.end();
}).listen(80, () => {
  console.log('HTTP server is running and redirecting to HTTPS');
});

// Middleware
app.use(cors());
app.use(bodyParser.json());

/*
  Azania
*/
//mongo 
// MongoDB connection
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected successfully'))
  .catch(err => console.log('MongoDB connection error: ', err));

// Register route
app.post('/api/register', async (req, res) => {
  const { fullName, passportId, accNo, password, confirmPassword } = req.body;

  // Input validation
  if (!fullName || !passportId || !accNo || !password || !confirmPassword) {
    return res.status(400).send('All fields are required.');
  }
  if (password !== confirmPassword) {
    return res.status(400).send('Passwords do not match.');
  }

  try {
    // Hash the password before saving
    const hashedPassword = await bcrypt.hash(password, 10);
    //after validation, a new user is registered or creted using the user model
    const theNewUser = new User({ fullName, passportId, accNo, password: hashedPassword });
    
    //registration done meaning the user is saved to MongoDB cluster place
    await theNewUser.save();

    //as shown, a success response is shown
    res.status(201).send('User registered successfully');
  } catch (error) { //unless the user already register then an alert is sent
    if (error.code === 11000) { // Duplicate key error
      return res.status(400).send('Passport ID or Account Number already exists.');
    }
    res.status(400).send('Error registering user: ' + error.message);
  }
  const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

// Login route
app.post('/api/login', async (req, res) => {
  const { passportId, password } = req.body;
  const user = await User.findOne({ passportId }); // Use passportId for login

  if (!user || !(await bcrypt.compare(password, user.password))) {
    return res.status(401).send('Invalid credentials');
  }
  const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET); // Use environment variable for secret key
  res.json({ token });
});

// Start server
app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});
})
