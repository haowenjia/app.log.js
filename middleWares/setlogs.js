const fs = require('fs');
const os = require('os');

function setlog(req, res, next) {
    let log = [];
    log.push(req.ip);
    let time = new Date();
    let year = time.getFullYear();
    log.push(time);
    let filename = time.toLocaleDateString().split("/").join("");
    log.push(req.url);
    log.push(req.method);
    log.push(req.headers["user-agent"])
    fs.appendFile(`./logs/${filename}.log`, log.join("-------") + os.EOL, (err) => {
        console.log(err);
        req.log = log;
        next();
    })
}
module.exports = setlog;