let homeScore = document.getElementById("home-score")
let guestScore = document.getElementById("guest-score")
homeScore = 0
guestScore = 0
document.getElementById("home-score").textContent = 0;
document.getElementById("guest-score").textContent = 0;
function increment_home_1(){
    homeScore++
    document.getElementById("home-score").textContent = homeScore;
}

function increment_home_2(){
    homeScore += 2
    document.getElementById("home-score").textContent = homeScore;
}

function increment_home_3(){
    homeScore += 3
    document.getElementById("home-score").textContent = homeScore;
}

function increment_guest_1(){
    guestScore++
    document.getElementById("guest-score").textContent = guestScore;
}

function increment_guest_2(){
    guestScore += 2
    document.getElementById("guest-score").textContent = guestScore;
}

function increment_guest_3(){
    guestScore += 3
    document.getElementById("guest-score").textContent = guestScore;
}

function reset_all(){
    homeScore = 0
    guestScore = 0;
    document.getElementById("home-score").textContent = 0;
    document.getElementById("guest-score").textContent = 0;
}

function reset_home(){
    homeScore = 0
    document.getElementById("home-score").textContent = 0;
}

function reset_guest(){
    guestScore = 0;
    document.getElementById("guest-score").textContent = 0;
}