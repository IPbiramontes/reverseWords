// solution to Codeacademy Reserve Words problem

function wordReverser(phrase) {
  let splitPhrase = phrase.split(' ');
  let newOrderOfSplitPhrases = splitPhrase.reverse();
  let reversedPhrase = newOrderOfSplitPhrases.toString();
  let finalReversePhrase = reversedPhrase.replace(/,/g, ' ');
  return finalReversePhrase;
}

console.log(wordReverser("Codecademy rules"));

// Leave this so we can test your code:
module.exports = wordReverser;
