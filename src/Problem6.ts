interface Product {
    name: string;
    price: number;
}

function getMostExpensiveProduct(products: Product[]): Product | null {
    if(products.length === 0){
        return null
    } else{
        return products.reduce((maxPriceProduct, product) => product.price > maxPriceProduct.price ? product : maxPriceProduct)
    }
}