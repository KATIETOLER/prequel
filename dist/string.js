String.prototype.lines = function () {
    return this.trim().split(/\r\n|(?!\r\n)[\n-\r\x85\u2028\u2029]/);
};
export {};
//# sourceMappingURL=string.js.map