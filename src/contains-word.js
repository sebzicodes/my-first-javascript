module.exports = function containsWord(sentance, word) {
    return sentance.split(" ").includes(word);
}