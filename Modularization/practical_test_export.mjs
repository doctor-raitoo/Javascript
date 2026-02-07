function splitString(string) {
    if (typeof string !== 'string') {
        return [];
    }
    
    return Array.from(string);
}

function unique(array) {
    const set = new Set(array);
    return Array.from(set.values());
}

// Named export
export { splitString };

// Default export
export default unique;
