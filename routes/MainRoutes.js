const Router = require('express').Router();
const bodyParser = require('body-parser');
const fs = require('fs');

Router.use((req,res,next) => {
    const date = new Date();
    console.log(`[🕔] -- Caught @ ${date.getHours()}:${date.getMinutes()} -> ${req.ip} on ${req.url}`);
    next();
})

Router.post('/login', (req, res) => {
    const goodCredentials = {
        username: 'aled',
        password: 'workshop'
    }
    if (!req.body || !req.body.password) {
        res.status(400).send({status: 400, message:'Bad request'});
    } else {
        res.status(200).send({status:200, message:'OK. Logged in'});
        console.log(`[✅] -- Logged in!`)
    }
})

Router.get('/register', (req, res) => {
    if (!req.body || !req.email)
        res.status(402).send({status: 402, message: 'Bad request'});
    else {
        res.status(203).send({status: 203, message: 'OK.'});
        console.log(`[✅] -- New user registered`);
    }
});

Router.get('/pupper', (req, res) => {
    const pupPath = '../public/imgs/shibe.jpg';
    if (!fs.existsSync(pupPath))
        res.status(404).send({status: 404, message: 'Pupper not found. :('});
    else {
        res.status(200).send(pupPath);
    }
})

Router.get('/teapot', (req, res) => {
    res.status(417).send({status: 417, message:'I\'m a teapot.'});
    console.log('[🫖] -- I\'m a teapot dude');
});

Router.post('/ping', (req, res) => {
    res.status(200).send({status:200, message:'Pong!'});
    console.log(`[✅] -- Pong lmao`);
});

module.exports = Router;