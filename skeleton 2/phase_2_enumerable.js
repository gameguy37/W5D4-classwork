Array.prototype.myEach = function(cb) {
    for (let i = 0; i < this.length; i++) {
        cb(this[i]);
    }
};
const arr3 = [1,2,3,4];
const func = (num) => {
    return num + 1;
}

// console.log(arr3.myEach(func));

Array.prototype.myMap = function (cb) {
    let mapped = [];

    this.myEach(function(ele) {
        mapped.push(cb(ele));
    });

    return mapped;
};

// console.log(arr3.myMap(func));

Array.prototype.myReduce = function (cb, iv) {

    let newArray = this.slice();
    if (!(typeof iv === "undefined")) {
        newArray.unshift(iv);
    }

    let result = newArray[0];

    newArray.slice(1).myEach(function(ele) {
        result = cb(result, ele);
    });
    return result;
};

const cb1 = (acc, el) => {
    return acc + el;
};

const cb2 = (acc, el) => {
    return acc * el;
};

// console.log(arr3.myReduce(cb1));
// console.log(arr3.myReduce(cb1, 10));
// console.log(arr3.myReduce(cb2));
// console.log(arr3.myReduce(cb2, 2));




