const express = require('express');
const cors = require('cors');
const path = require('path');
const basicAuth = require('express-basic-auth');

const DummyUser = {
    id: 2,
    email: "test@gmail.com",
    firstName: "Alex",
    lastName: "Smith",
    weight: 66,
    height: 169,
    role: 'user'
};

const DummyAdmin = {
    id: 1,
    email: "test@gmail.com",
    firstName: "AdminFirstName",
    lastName: "AdminLastName",
    weight: 90,
    height: 169,
    role: 'admin'
};

const auth = basicAuth({
    users: {
        'admin@test.com': '111111',
        'user@test.com': '111111',
    },
});

const app = express();

const PORT = process.env.PORT || 8080;

app.use(cors());

app.use(express.static(path.join(__dirname, '/client/build')))
    .listen(PORT, () => console.log(`Listening on ${PORT}`));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/client/build/index.html'));
});

app.get('/authenticate', auth, (req, res) => {
    console.log(req)
    if (req.auth.user === 'admin') {
        res.send(JSON.stringify(DummyAdmin));
    } else if (req.auth.user === 'user') {
        res.send(JSON.stringify(DummyUser));
    }
});