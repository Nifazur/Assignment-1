"use strict";
function formatString(input, toUpper) {
    if (toUpper !== false) {
        return input.toUpperCase();
    }
    else {
        return input.toLowerCase();
    }
}
