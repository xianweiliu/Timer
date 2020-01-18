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
        // stored a convered number from the input value
        const timeRemaining = parseFloat(this.durationInput.value);
        // and updates the value by -1
        this.durationInput.value = timeRemaining - 1;
        // check if the timer has reach to 0
        if (this.durationInput.value == 0) return this.pause();
    };
}

// select all the HTML elements that needed for the function
const durationInput = document.querySelector("#duration");
const startBtn = document.querySelector("#start");
const pauseBtn = document.querySelector("#pause");
// pass these selected HTML elements to the class
const timer = new Timer(durationInput, startBtn, pauseBtn);
// timer.start();
