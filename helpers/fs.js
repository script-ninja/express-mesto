const fsPromises = require('fs').promises;
const readErrorMessage = { message: 'Ошибка чтения данных' }


const readFile = (filePath) => {
  return fsPromises.readFile(filePath, { encoding: 'utf-8' })
    .then(data => JSON.parse(data))
    .catch(err => {
      console.log(err);
      return Promise.reject(readErrorMessage);
    });
}


module.exports = {
  readFile
};