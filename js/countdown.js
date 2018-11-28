// Set the date we're counting down to:
var countDownDate = new Date("Jan 03, 2019 00:00:00").getTime();

// Update the count down every 1 second:
var countDownfunction = setInterval(function() {


// Get todays fate and time:
var now = new Date().getTime();

// Find the distance between now and the count down date:
var distance = countDownDate - now;
// Time calculations for days, hours, minutes adn seconds:
var days = Math.floor(distance / (1000 * 60 * 60 * 24));
var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
var seconds = Math.floor((distance % (1000 * 60 )) / 1000);

// Output the result in an element with id = "countdown"
document.getElementById("countdown").innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds + "s ";

//If the count down is over, write some text:
if(distance < 0){
    clearInterval(countDownfunction);
    document.getElementById("countdown").innerHTML = "00d 00h 00m 00s"
}
},1000);


