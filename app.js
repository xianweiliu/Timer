// select all the HTML elements that needed for the function
const durationInput = document.querySelector("#duration");
const startBtn = document.querySelector("#start");
const pauseBtn = document.querySelector("#pause");
const circle = document.querySelector("circle");

const preimeter = circle.getAttribute("r") * 2 * Math.PI;
circle.setAttribute("stroke-dasharray", preimeter);

let duration;

// pass these selected HTML elements to the class
// also passed in three callback functions to control the animation of svg element which is the circle
const timer = new Timer(durationInput, startBtn, pauseBtn, {
    onStart(totalDuration) {
        // takes the totalDuration from the start function inside the Timer Class for calculation
        duration = totalDuration;
    },
    onCountDown(currTime) {
        circle.setAttribute(
            "stroke-dashoffset",
            // calculation of dashoffset's value, in order to have the animation effect
            (preimeter * currTime) / duration - preimeter,
        );
    },
    onComplete() {
        // log completed
        console.log("Completed");
    },
});
