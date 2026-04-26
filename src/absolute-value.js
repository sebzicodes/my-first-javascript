module.exports = function getAbsolute(num) {
    if (num < 0) {
        return -num;
    }
    if (num == 0) {
        return 0;
    }
    return num;
};