//Problem 1

function formatString(input: string, toUpper?: boolean): string {
    if(toUpper === false){
        return input.toLowerCase()
    }
    return input.toUpperCase()
}

// Problem 2

function filterByRating(items: {title: string; rating: number}[]): {title: string; rating: number}[]{
    let newArray: {title: string; rating: number}[] = []
    for(const item of items){
        if(item.rating >= 4){
            newArray.push(item)
        }
    }
    return newArray
}

// Problem 3

function concatenateArrays<T>(...arrays: T[][]): T[]{
    let newArray: T[] = []
    for(const array of arrays){
        newArray.push(...array)
    }
    return newArray
}

// Problem 4

class Vehicle {
    private make: string
    private year: number

    constructor(make: string, year: number){
        this.make = make
        this.year = year
    }
    getInfo(): string{
        return (`Make: ${this.make}, Year: ${this.year}`);
    }
}
class Car extends Vehicle {
    private model: string

    constructor(make: string, year: number, model: string){
        super(make, year)
        this.model = model
    }
    getModel(): string{
        return (`Model: ${this.model}`);
    }
}

// Problem 5

function processValue(value: string | number): number{
    if(typeof value === 'string'){
        return value.length
    } else{
        return value * 2
    }
}

// Problem 6

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

// Problem 7

enum Day {
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday
}
  
function getDayType(day: Day): string {
    if(day === Day.Saturday || day === Day.Sunday){
        return "Weekend";
    }
    return "Weekday";
}

// Problem 8

async function squareAsync(n: number): Promise<number> {
    if (n < 0) {
        return Promise.reject("Error: Negative number not allowed");
    }
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(n * n);
        }, 1000);
    });
}