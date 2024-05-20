const express = require("express");
const server = express();
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const cookieEncrypter = require("cookie-encrypter");
const helmet = require("helmet");
const morgan = require("morgan");
const logger = require("./logger");
require("dotenv").config();

const PORT = process.env.PORT;
const secretKey = process.env.COOKIE_SECRET;
const encryptOptions = {
    secret: secretKey,
    encrypt: true,
    signed: true,
};

server.use(bodyParser.urlencoded({ extended: true }));
server.use(bodyParser.json());
server.use(cookieParser(secretKey));
server.use(cookieEncrypter(secretKey, encryptOptions));
server.use(helmet());

const stream = {
    write: function (message, encoding) {
        logger.info(message.trim());
    },
};

server.use(morgan("combined", { stream: stream }));

server.listen(PORT, () => {
    console.log(`Server running at ${PORT}`);
});
