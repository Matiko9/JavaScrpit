function getSecondsToNewYear() {
    var now = new Date();
    var endOfYear = new Date(now.getFullYear() + 1, 0, 1);
    var difference = endOfYear - now;

    var seconds = Math.floor(difference / 1000);

    return seconds;
}

var secondsToNewYear = getSecondsToNewYear();
console.log("Seconds remaining until the end of the year: " + secondsToNewYear);
