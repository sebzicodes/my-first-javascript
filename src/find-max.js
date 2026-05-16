module.exports = function findMax(array) {
    if (array.length === 0) {
        return null;
    }
    return Math.max (...array);

}