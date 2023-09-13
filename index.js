const express = require('express');
const jwt = require('jsonwebtoken');
const uuid4 = require('uuid4');
const cors = require('cors');
const dotenv = require('dotenv');
const serverless = require('serverless-http');
dotenv.config();
const app = express();
const app_secret = process.env.APP_SECRET;
const app_access_key = process.env.APP_ACCESS_KEY;
// const port = process.env.PORT || 8000     no need to use port in serverless

console.log(app_access_key, app_secret);

const generateAuthToken = (req, resp) => {
    var payload = {
        access_key: app_access_key,
        room_id: req.params.roomid,
        user_id: req.params.userId,
        role: req.params.role,
        type: 'app',
        version: 2,
        iat: Math.floor(Date.now() / 1000),
        nbf: Math.floor(Date.now() / 1000)
    };

    if (req.params.roomid != null && req.params.userId != null && req.params.role != null) {
        jwt.sign(
            payload,
            app_secret,
            {
                algorithm: 'HS256',
                expiresIn: '24h',
                jwtid: uuid4()
            },
            function (err, token) {
                resp.send({ "token": token });
            }
        );
    } else {
        resp.send("somefiels are not field");
    }

}
const generateManagementToken = (req, resp) => {
    var payload = {
        access_key: app_access_key,
        type: req.params.type,
        version: 2,
        iat: Math.floor(Date.now() / 1000),
        nbf: Math.floor(Date.now() / 1000)
    };

    if (req.params.type != null) {
        jwt.sign(
            payload,
            app_secret,
            {
                algorithm: 'HS256',
                expiresIn: '24h',
                jwtid: uuid4()
            },
            function (err, token) {
                resp.send({ "token": token });
            }
        );
    } else {
        resp.send("somefiels are not field");
    }

}

app.options('*', cors());
app.get('/hmsatkn/:roomid/:userId/:role/', generateAuthToken);
app.get('/hmsmtkn/:type/', generateManagementToken);
app.get("/test", (req, res) => {
    res.send("Congurates your app is running");
});

//remove app.listen to use in serverless
// app.listen(port, () => {
//     console.log(port);
// });

module.export.handler = serverless(app);