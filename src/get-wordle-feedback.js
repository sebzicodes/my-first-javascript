module.exports = function getWordleFeedback(guess, secret) {
    const guessCharacters = guess.split ("");
    const secretRemaining = secret.split ("");
    const result = new Array(guessCharacters.length).fill(-1);

    for(let i = 0; i < guessCharacters.length; i++) {
        if (guessCharacters[i] === secretRemaining[i]) {
            result[i] = 1;
            secretRemaining[i] = null;
        }
    }
    for(let i = 0; i < guessCharacters.length; i++) {
        if (result[i] !== 1) {
            const matchIndex = secretRemaining.indexOf(guessCharacters[i]);
            if(matchIndex !== -1) {
                result[i] = 0;
                secretRemaining[matchIndex] = null;
            }
        }
    }

    return result;
};