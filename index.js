const express = require('express');
const cors = require('cors');
const nameEmailController = require('./controllers/nameEmailController');
const mondayStayController = require('./controllers/mondayStayController');
// Import other controllers as needed
// Add the following controllers
const hackathonController = require('./controllers/hackathonController');
const tuesdayStayController = require('./controllers/tuesdayStayController');
const celebrationController = require('./controllers/celebrationController');
const drinkPreferenceController = require('./controllers/drinkPreferenceController');
const thankYouController = require('./controllers/thankYouController');

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Use the controllers (routers) for each component
app.use('/api', nameEmailController);
app.use('/api', mondayStayController);
// Use other controllers as needed
app.use('/api', hackathonController);
app.use('/api', tuesdayStayController);
app.use('/api', celebrationController);
app.use('/api', drinkPreferenceController);
app.use('/api', thankYouController);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});






















// const express = require('express');
// const bodyParser = require('body-parser');
// const cors = require('cors');
// const apiRoutes = require('./routes/api');
// const path = require('path'); // Add this line

// const app = express();
// const port = process.env.PORT || 5000;

// app.use(cors());
// app.use(bodyParser.json());

// app.use('/api', apiRoutes);

// // Serve static files from the build folder
// app.use(express.static(path.join(__dirname, 'build')));

// // Catch-all route to serve the index.html file from the build folder
// app.get('*', (req, res) => {
//   res.sendFile(path.join(__dirname, 'build', 'index.html'));
// });

// app.listen(port, () => {
//   console.log(`Server running on port ${port}`);
// });
