const express = require('express');
const mongoose = require('mongoose');
const users = require('./routes/api/users');
const profile = require('./routes/api/profile');
const posts = require('./routes/api/posts');

const server = express();

// DB Config
const db = require('./config/keys').mongoURI;

// Connect to mongoDB through mongoose
mongoose
	.connect(db, { useNewUrlParser: true })
	.then(() => console.log('MongoDB Connected'))
	.catch((err) => console.log(err));

server.use(express.json());
server.get('/', (req, res) => {
	res.send({ message: 'server is alive' });
});

//////// Use Routes /////////////
server.use('/api/users', users);
server.use('/api/profile', profile);
server.use('/api/posts', posts);

const port = process.env.PORT || 9000;
server.listen(port, () => {
	console.log(`This server is over ${port}`);
});
