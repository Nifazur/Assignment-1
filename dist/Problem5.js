"use strict";
function processValue(value) {
    if (typeof (value) === 'string') {
        return value.length;
    }
    else {
        return value * 2;
    }
}
