"use strict";
function filterByRating(items) {
    let newArray = [];
    for (const item of items) {
        if (item.rating >= 4) {
            newArray.push(item);
        }
    }
    return newArray;
}
