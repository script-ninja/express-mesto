const fsPromises = require('fs').promises;

const readFile = (filePath) => fsPromises.readFile(filePath, { encoding: 'utf-8' })
  .then((data) => JSON.parse(data));

module.exports = {
  readFile,
};
