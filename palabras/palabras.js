const fs = require('fs');

function readFile(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', (err, data) => {
      if (err) reject(err);
      else resolve(data);
    });
  });
}

function findMostCommonWord(text) {
  return new Promise((resolve, reject) => {
    // Dividir el texto en palabras
    const words = text.toLowerCase().split(/\W+/);

    // Contar la frecuencia de cada palabra
    const frequencyMap = {};
    words.forEach((word) => {
      if (frequencyMap[word]) {
        frequencyMap[word]++;
      } else {
        frequencyMap[word] = 1;
      }
    });

    // Encontrar la palabra con la frecuencia más alta
    let mostCommonWord = null;
    let highestFrequency = 0;
    Object.keys(frequencyMap).forEach((word) => {
      if (frequencyMap[word] > highestFrequency) {
        mostCommonWord = word;
        highestFrequency = frequencyMap[word];
      }
    });

    if (mostCommonWord) {
      resolve(mostCommonWord);
    } else {
      reject(new Error('No se encontró la palabra más común.'));
    }
  });
}

readFile('archivo.txt')
  .then((text) => {
    return findMostCommonWord(text);
  })
  .then((mostCommonWord) => {
    console.log(`La palabra más común es "${mostCommonWord}".`);
  })
  .catch((err) => {
    console.error(err);
  });
