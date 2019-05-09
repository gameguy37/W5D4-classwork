
const range = function(start, end) {
    if (start === end) {
        return [start];
    } 

    return [start].concat(range(start + 1, end));
};

// console.log(range(1, 10));

const sumRec = (arr) => {
    if (arr.length === 0) {
        return 0;
    }

    return arr[0] + sumRec(arr.slice(1));
}

// console.log(sumRec([1,2,3,4]));

const exponent = (base, exp) => {
    if (exp === 0) {
        return 1;
    }

    return base * exponent(base, exp - 1);
}

console.log(exponent(2,5));