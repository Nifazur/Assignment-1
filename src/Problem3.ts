function concatenateArrays<T>(...arrays: T[][]): T[]{
    let newArray: T[] = []
    for(const array of arrays){
        newArray.push(...array)
    }
    return newArray
}