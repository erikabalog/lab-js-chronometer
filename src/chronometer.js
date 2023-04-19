class Chronometer {
  constructor() {
    this.currentTime= 0;
    this.intervalId= null;
  }
  start(printTimeCallback) {
    // ... your code goes here
    this.intervalId = setInterval(
      () => { this.currentTime += 1;}, 1000
    );
    if (printTimeCallback !== null){
      this.intervalId = setInterval(() => { 
        printTimeCallback();
      }, 1000);
    }
    
  }

  getMinutes() {
    // ... your code goes here
    return Math.floor(this.currentTime / 60);
  }

  getSeconds() {
    // ... your code goes here
    return Math.floor(this.currentTime % 60);
  }

  computeTwoDigitNumber(value) {
    // ... your code goes here
    if (value > 9){
      return value.toString();
    }
    else {
      return "0" + value.toString();
    }
  }

  stop() {
    // ... your code goes here
    clearInterval(this.currentTime, this.intervalId);
    this.intervalId = null;
  }

  reset() {
   this.currentTime = 0;
  }

  split() {
    // ... your code goes here
    let minutes = this.getMinutes();
    let seconds = this.getSeconds();
    return minutes.toString() + ":" + seconds.toString();
  }
}
