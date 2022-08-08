function Duck(b, f) {
    let res = {};
    for (let s in b) {
        res[s] = b[s];
    }
    for (let s in f) {
        res[s] = f[s];
    }
    return res;
}
function isFish(pet) {
    return pet.swim !== undefined;
}
//# sourceMappingURL=highTypes.js.map