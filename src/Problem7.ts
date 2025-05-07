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
    if(day === Day.Sunday){
        return "Weekend"
    } else{
        return "Weekday"
    }
}