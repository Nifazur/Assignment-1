function filterByRating(items: {title: string; rating: number}[]): {title: string; rating: number}[]{
    let newArray: {title: string; rating: number}[] = []
    for(const item of items){
        if(item.rating >= 4){
            newArray.push(item)
        }
    }
    return newArray
}