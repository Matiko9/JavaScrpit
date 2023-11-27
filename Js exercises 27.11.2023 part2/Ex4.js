function getLastDayOfMonth(year, month) {
    if (month === 1) {
        year--;
        month = 12;
    } else {
        month--;
    }

    var lastDay = new Date(year, month + 1, 0).getDate();
    return lastDay;
}

var year = 2023;
var month = 11;

var lastDayOfPrevMonth = getLastDayOfMonth(year, month);
console.log("The last day of the previous month was: " + lastDayOfPrevMonth);
