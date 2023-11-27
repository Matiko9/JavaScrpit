function getMyBornDay() {
    var myBirthDate = new Date(2007, 11, 13);

    var daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

    var bornDayIndex = myBirthDate.getDay();

    return daysOfWeek[bornDayIndex];
}

var myBornDay = getMyBornDay();
console.log("I was born on a " + myBornDay + ".");
