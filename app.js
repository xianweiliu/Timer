class Timer {
    // creates a constructor for all the values that passed in
    constructor(durationInput, startBtn, pauseBtn) {
        this.durationInput = durationInput;
        this.startBtn = startBtn;
        this.pauseBtn = pauseBtn;
        // added event listeners to the buttoms and give it the function call
        this.startBtn.addEventListener("click", this.start);
        this.pauseBtn.addEventListener("click", this.pause);
    }
    // a start function
    start = () => {
        // number start to count right after start btn has been click
        // otherwise it will wait for 2 seconds
        this.countDown();
        // use the setInterval to call countDown() every second and stored it into intervalId
        this.intervalId = setInterval(this.countDown, 1000);
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
            this.remainingTime = this.currTime - 1;
        }
    };

    // using get methods
    // get value and parse to float
    get currTime() {
        return parseFloat(this.durationInput.value);
    }

    // set the calculated value from the countDown() then set the time to the input!
    set remainingTime(time) {
        this.durationInput.value = time;
    }
}

// select all the HTML elements that needed for the function
const durationInput = document.querySelector("#duration");
const startBtn = document.querySelector("#start");
const pauseBtn = document.querySelector("#pause");

// pass these selected HTML elements to the class
const timer = new Timer(durationInput, startBtn, pauseBtn);
