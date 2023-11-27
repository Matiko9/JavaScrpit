function getSecondsFromNewYear() {
    var now = new Date();
    var startOfYear = new Date(now.getFullYear(), 0, 1);

    var difference = now - startOfYear;

    var seconds = Math.floor(difference / 1000);

    return seconds;
}

var secondsFromStartOfYear = getSecondsFromNewYear();
console.log("Seconds from the beginning of the year until now: " + secondsFromStartOfYear);
