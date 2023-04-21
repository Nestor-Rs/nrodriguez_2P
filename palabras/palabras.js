const fs = require('fs');

function readFile(filePath) {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, 'utf8', (err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
}

function findMostCommonWords(filePath) {
  return readFile(filePath)
    .then(text => {
      const wordCount = text
        .split(/\W+/) // dividir el texto en palabras
        .reduce((count, word) => {
          count[word] = (count[word] || 0) + 1; // contar la frecuencia de cada palabra
          return count;
        }, {});
      
      let mostCommonWords = [];
      let maxCount = 0;
      
      Object.entries(wordCount).forEach(([word, count]) => {
        if (count > maxCount) { // encontrar la palabra más común
          mostCommonWords = [word];
          maxCount = count;
        } else if (count === maxCount) { // manejar palabras con igual frecuencia
          mostCommonWords.push(word);
        }
      });
      
      return mostCommonWords;
    });
}

// ejemplo de uso
findMostCommonWords('archivo.txt')
  .then(words => console.log(`Las palabras más comunes son: ${words.join(', ')}`))
  .catch(err => console.error(err));
