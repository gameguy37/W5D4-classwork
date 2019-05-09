// def bubbleSort(&prc)

// prc ||= { |x,y| x <=> y }


Array.prototype.bubbleSort = function(cb) {
    let sorted = false;

    while (!sorted) {
        sorted = true;
        for ( let i = 0; i < this.length - 1; i++ ) {
            for ( let j = i + 1; j < this.length; j++ ) {
                if (cb(this[i], this[j])) {
                    let x = this[i];
                    this[i] = this[j];
                    this[j] = x;
                    sorted = false;
                }
            }
        }
    }

    return this;
};

// const callback = function(x,y) {
//     return x > y;
// };


// const array = [4,3,5,2,1];
// console.log(array.bubbleSort(callback));

String.prototype.substrings = function() {
    let subs = [];
    for (let i = 0; i < this.length; i++) {
        for (let j = i + 1; j < this.length + 1; j++) {
            subs.push(this.slice(i,j))
        }
    }

    return subs
};

console.log("hello".substrings())
