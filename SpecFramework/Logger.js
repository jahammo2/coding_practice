class Logger {
  constructor({ spaces, text, color }) {
    this.spaces = spaces;
    this.text = text;
    this.color = color;
  }

  createSentence() {
    return `${' '.repeat(this.spaces)}${this.text}`;
  }

  run() {
    console.log(this.color, this.createSentence());
  }
}

export default Logger;
