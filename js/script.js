var today = new Date();
var hourNow = today.getHours();
var minuteNow = ("0" + today.getMinutes()).slice(-2);
var greetingText;

if (hourNow >= 18) {
    greetingText = "GOOD EVENING";
} else if (hourNow >= 12) {
    greetingText = "GOOD AFTERNOON";
} else if (hourNow >= 0) {
    greetingText = "GOOD MORNING";
}
else {
    greetingText = "WELCOME";
}



function greeting() {
    document.getElementById("text").innerHTML = greetingText;
    document.getElementById("timeOfDay").innerHTML = hourNow + ":" + minuteNow;
    
}