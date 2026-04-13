module.exports = function countVowels(string) {
    string = string.toLowerCase();
    const vowels = "aeiou";
    let count = 0;
    for (let index = 0; index < string.length; index++) {
        const letter = string[index];
        if (vowels.includes(letter)) count++;
    }
    return count;
}