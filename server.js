const express = require('express')
const server = express();
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const cookieEncrypter = require('cookie-encrypter')
const helmet = require('helmet')
require('dotenv').config()

const PORT = process.env.PORT;
const secretKey = process.env.COOKIE_SECRET;
const encryptOptions = {
  secret: secretKey,
  encrypt: true,
  signed: true,
};

app.use(bodyParser.urlencoded({extended : true}))
app.use(bodyParser.json())
app.use(cookieParser(secretKey));
app.use(cookieEncrypter(secretKey, encryptOptions));
app.use(helmet())


server.listen(PORT, ()=>{
    console.log(`Server running at ${PORT}`)
})