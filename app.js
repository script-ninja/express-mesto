const path = require('path');
const { PORT = 3000 } = process.env;
const sendUsers = require('./routes/users');
const sendCards = require('./routes/cards');
const sendNotFound = require('./routes/notFound');

const express = require('express');
const app = express();

app.use(express.static(path.join(__dirname, 'public')));

app.get('/users', sendUsers);
app.get('/users/:id', sendUsers);
app.get('/cards', sendCards);
app.use(sendNotFound);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});