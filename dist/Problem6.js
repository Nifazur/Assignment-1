"use strict";
function getMostExpensiveProduct(products) {
    if (products.length === 0) {
        return null;
    }
    else {
        return products.reduce((maxPriceProduct, product) => product.price > maxPriceProduct.price ? product : maxPriceProduct);
    }
}
