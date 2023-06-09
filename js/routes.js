const db = require('./db');// Imported SQL methods from db.js.

// Defined routing and cors methods.
const express = require('express');
const app = express();
const PORT = 3000;
var cors = require('cors');

app.use(cors());

// Route asks for players in database to display on site.
app.get('/players/', db.getPlayers);

// Route asks for teams in database to display on site.
app.get('/teams/', db.getTeams);

// Route asks for a player's information in database to display on site.
app.get('/players/:id', db.getPerson);

// Route asks for players on a team's information.
app.get('/teaminfo/', db.getPlayerInfo);


app.listen(PORT, () => console.log(`Listening on port ${PORT}`));