Array.prototype.sum = function () {
    return this.reduce((a, b) => a + b, 0);
};
Array.prototype.sortNum = function () {
    return this.sort((n1, n2) => n1 - n2);
};
export function sum(list) {
    return list.reduce((a, b) => a + b, 0);
}
//# sourceMappingURL=array.js.map