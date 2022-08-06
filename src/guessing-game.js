class GuessingGame {
  constructor() {
    this.min_value = 0;
    this.max_value = 0;
    this.result = 0;
  }

  setRange(min, max) {
    this.min_value = min+1;
    this.max_value = max;
  }

  guess() {
    this.result = Math.floor(
      this.min_value + (this.max_value - this.min_value) / 2
    );
    return this.result;
  }

  lower() {
    this.max_value = this.result;
  }

  greater() {
    this.min_value = this.result+1;
  }
}


module.exports = GuessingGame;

