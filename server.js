// Modules
const express = require('express');
const path = require('path');
const PORT = 3001;
const app = express();


// Routes & configurations
app.use(express.static(path.join(__dirname, './public')));

app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, './public/notes.html'))
});

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, './public/index.html'))
});




// Start server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
})