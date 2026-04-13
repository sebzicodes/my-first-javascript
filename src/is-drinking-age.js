module.exports = function isDrinkingAge(currentYear, birthYear) {
    const age = currentYear - birthYear;
    if (age >= 21) return true;
    return false;
}