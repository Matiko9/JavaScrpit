function getWeeklyDay(year, month, day) {
    var date = new Date(year, month - 1, day); 

    var daysOfWeek = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'];

    var dayIndex = date.getDay();

    return daysOfWeek[dayIndex];
}

var year = 2023;
var month = 11; 
var day = 27;

var dayOfWeek = getWeeklyDay(year, month, day);
console.log(dayOfWeek); 
