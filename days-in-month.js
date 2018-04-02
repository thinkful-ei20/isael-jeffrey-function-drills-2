function daysInMonth(month,leapYear){
    switch(month.toUpperCase()){
        case "JANUARY" : 
            return 31;
        case "FEBRUARY": 
           return leapYear ? 29 : 28;
        case "MARCH": 
            return 31;
        case "APRIL": 
            return 30;
        case "MAY": 
            return 31;
        case "JUNE": 
            return 30;
        case "JULY": 
        case "AUGUST":
            return 31;
        case "SEPTEMBER": 
            return 30;
        case "OCTOBER":
            return 31;
        case "NOVEMBER":
            return 30;
        case "DECEMBER": 
            return 31;
        default: 
            return "What is time?";
    }
}
let output = daysInMonth("february", false);
console.log(output);