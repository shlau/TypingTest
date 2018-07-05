window.onload = function() {
    const testText = document.getElementById("text").innerHTML;
    const testArea = document.querySelector("textarea");
    const button = document.querySelector("button");
    const timeArea = document.querySelector(".timer");
    const result = document.querySelector(".result");
    let timerStart = false;
    let interval;
    let time = 0;
    function checkFinished() {
        if(testText.trim() == testArea.value.trim()) {
            testArea.style.borderColor = "green";
            clearInterval(interval);
            console.log("time",91/(time/60));
            result.innerHTML = Math.round(91/(time/60)) + "WPM";

        }
    }

    function leadingZero(digit) {
        if(digit < 10) {
            return "0" + digit;
        }
        else {
            return "" + digit;
        }
    }
    function startOver() {
        clearInterval(interval);
        testArea.style.borderColor = "#eac67a";
        testArea.value = '';
        result.innerHTML = '';
        timeArea.innerHTML = '00:00:00';    
        timerStart = false;
        time = 0;
    }

    function timer() {
        time += 1;
        let hours = Math.floor(time / 3600);
        let minutes = Math.floor((time % 3600) / 60);
        let seconds = Math.floor((time % 3600) % 60);
        let newTime = leadingZero(hours) + ":" + leadingZero(minutes) + ":" + leadingZero(seconds);
        timeArea.innerHTML = newTime;
    }

    function startTime() {
        console.log({len:testArea.value.length,currTime:timerStart});
        if(testArea.value.length == 0 && !timerStart) {
            interval = setInterval(timer,1000);
            timerStart = true;
        }
    }

    button.addEventListener('click',startOver,false);
    testArea.addEventListener('keyup',checkFinished,false);
    testArea.addEventListener('keypress',startTime,false);
}