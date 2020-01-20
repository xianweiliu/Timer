class Timer {
    // creates a constructor for all the values that passed in
    constructor(durationInput, startBtn, pauseBtn, callbacks) {
        this.durationInput = durationInput;
        this.startBtn = startBtn;
        this.pauseBtn = pauseBtn;
        // checking if there's a callback
        if (callbacks) {
            this.onStart = callbacks.onStart;
            this.onCountDown = callbacks.onCountDown;
            this.onComplete = callbacks.onComplete;
        }

        // added event listeners to the buttoms and give it the function call
        this.startBtn.addEventListener("click", this.start);
        this.pauseBtn.addEventListener("click", this.pause);
    }
    start = () => {
        if (this.onStart) {
            this.onStart(this.currTime);
        }
        // number start to count right after start btn has been click
        // otherwise it will wait for 2 seconds
        this.countDown();
        // use the setInterval to call countDown() every 50ms and stored it into intervalId
        this.intervalId = setInterval(this.countDown, 50);
    };
    // a pause function
    pause = () => {
        // this will pause the the setInterval with that particular ID
        clearInterval(this.intervalId);
    };
    // a countDown function
    countDown = () => {
        // check if the currTime if less or equal to 0
        if (this.currTime <= 0) {
            // if it does, call pause
            this.pause();
        } else {
            // calculates the time.
            // also for the animation to be reduced in every a bit
            this.remainingTime = this.currTime - 0.05;
            if (this.onCountDown) {
                this.onCountDown(this.currTime);
            }
        }
    };

    // using get methods
    // get value and parse to float
    get currTime() {
        return parseFloat(this.durationInput.value);
    }

    // set the calculated value from the countDown() then set the time to the input!
    set remainingTime(time) {
        this.durationInput.value = time.toFixed(2);
    }
}
