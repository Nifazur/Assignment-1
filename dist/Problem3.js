"use strict";
function concatenateArrays(...arrays) {
    let newArray = [];
    for (const array of arrays) {
        newArray.push(...array);
    }
    return newArray;
}
