const fs = require('fs');
const path = require('path');

const logDir = path.join(__dirname, '../logs');

if (!fs.existsSync(logDir)) {
  fs.mkdirSync(logDir);
}

exports.log = (message) => {
  const logFile = path.join(logDir, 'service.log');
  const timestamp = new Date().toISOString();
  fs.appendFileSync(logFile, `${timestamp} - ${message}\n`);
};