function formatString(input: string, toUpper?: boolean): string {
    if(toUpper !== false){
        return input.toUpperCase()
    } else{
        return input.toLowerCase()
    }
}


