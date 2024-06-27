// Modules
const express = require('express');
const PORT = process.env.PORT || 3001;
const app = express();
const htmlRoutes = require('./routes/htmlRoutes');
const apiRoutes = require('./routes/apiRoutes');

// Routes & configurations
app.use(express.static('public'));

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use('/', htmlRoutes);

app.use('/api', apiRoutes);


// Start server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
})
