module.exports = function getType(value) {
    if(Array.isArray(value)) {
        return "array";
    }
    const type = typeof value;
    if(value === null) {
        return "null";
    }
    
    else return type;
};