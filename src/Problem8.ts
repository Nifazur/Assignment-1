async function squareAsync(n:number): Promise<number> {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            if(n > 0){
                resolve(n*n)
            } else{
                reject("Error: Negative number not allowed")
            }
        }, 1000)
    })
}