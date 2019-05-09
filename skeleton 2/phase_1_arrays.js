Array.prototype.uniq = function() {
    let unique = [];
    for (i = 0; i < this.length; i++) {
        if (unique.includes(this[i])) {
            continue;
        }
        unique.push(this[i]);
    }
    return unique;
};

const arr = [2,1,2,1,3,3,4,-3];

// console.log(arr.uniq());

Array.prototype.twoSum = function() {
    let pairs = [];
    for (let i = 0; i < this.length - 1; i++) {
        for (let j = i + 1; j < this.length; j++) {
            if (this[i] + this[j] === 0) {
                pairs.push([i, j]);
            }   
        }
    }

    return pairs;
};

// console.log(arr.twoSum());

const multiArray = function(num) {
    let arr = [];
    let i = 0;
    while (i < num) {
        arr.push([]);
        i++;
    }
    return arr;
};

Array.prototype.transpose = function() {
    let transposed = multiArray(this.length);
    for (let row = 0; row < this.length; row++) {
        for (let col = 0; col < this.length; col++) {
            transposed[row][col] = this[col][row];
        }
    }

    return transposed;
}

const arr2 = [[1,2,3], [4,5,6], [7,8,9]];

// console.log(arr2.transpose());