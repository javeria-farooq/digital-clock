function clock() {
    let hours = document.querySelector("#hours")
    let minutes = document.querySelector("#minutes")
    let seconds = document.querySelector("#seconds")
    let period = document.querySelector("#period")

    let newHours = new Date().getHours();
    let newMinutes = new Date().getMinutes();
    let newSeconds = new Date().getSeconds();

    let amPm = newHours >= 12 ? "PM" : "AM"

    if(newHours > 12) {
        newHours = newHours - 12
    }

    newHours = (newHours < 10) ? "0" + newHours: newHours;
    newMinutes = (newMinutes < 10) ? "0" + newMinutes: newMinutes;
    newSeconds = (newSeconds < 10) ? "0" + newSeconds: newSeconds;

    hours.innerHTML = newHours
    minutes.innerHTML = newMinutes
    seconds.innerHTML = newSeconds
    period.innerHTML = amPm
}

setInterval(clock, 1000)