class NumberToLCD {
  constructor() {
    this.STRING_FOR_LINE_TYPE = {
      BLANK: "   ",
      LEFT: "|  ",
      RIGHT: "  |",
      LEFT_AND_RIGHT: "| |",
      MIDDLE: " - ",
    };
    
    this.LINES_FOR = {
      '1': [
        this.STRING_FOR_LINE_TYPE.BLANK,
        this.STRING_FOR_LINE_TYPE.RIGHT,
        this.STRING_FOR_LINE_TYPE.BLANK,
        this.STRING_FOR_LINE_TYPE.RIGHT,
        this.STRING_FOR_LINE_TYPE.BLANK,
      ],
    
      '2': [
        this.STRING_FOR_LINE_TYPE.MIDDLE,
        this.STRING_FOR_LINE_TYPE.RIGHT,
        this.STRING_FOR_LINE_TYPE.MIDDLE,
        this.STRING_FOR_LINE_TYPE.LEFT,
        this.STRING_FOR_LINE_TYPE.MIDDLE,
      ],
    
      '3': [
        this.STRING_FOR_LINE_TYPE.MIDDLE,
        this.STRING_FOR_LINE_TYPE.RIGHT,
        this.STRING_FOR_LINE_TYPE.MIDDLE,
        this.STRING_FOR_LINE_TYPE.RIGHT,
        this.STRING_FOR_LINE_TYPE.MIDDLE,
      ],
    
      '4': [
        this.STRING_FOR_LINE_TYPE.BLANK,
        this.STRING_FOR_LINE_TYPE.LEFT_AND_RIGHT,
        this.STRING_FOR_LINE_TYPE.MIDDLE,
        this.STRING_FOR_LINE_TYPE.RIGHT,
        this.STRING_FOR_LINE_TYPE.BLANK,
      ],
    
      '5': [
        this.STRING_FOR_LINE_TYPE.MIDDLE,
        this.STRING_FOR_LINE_TYPE.LEFT,
        this.STRING_FOR_LINE_TYPE.MIDDLE,
        this.STRING_FOR_LINE_TYPE.RIGHT,
        this.STRING_FOR_LINE_TYPE.MIDDLE,
      ],
    
      '6': [
        this.STRING_FOR_LINE_TYPE.MIDDLE,
        this.STRING_FOR_LINE_TYPE.LEFT,
        this.STRING_FOR_LINE_TYPE.MIDDLE,
        this.STRING_FOR_LINE_TYPE.LEFT_AND_RIGHT,
        this.STRING_FOR_LINE_TYPE.MIDDLE,
      ],
    
      '7': [
        this.STRING_FOR_LINE_TYPE.MIDDLE,
        this.STRING_FOR_LINE_TYPE.RIGHT,
        this.STRING_FOR_LINE_TYPE.BLANK,
        this.STRING_FOR_LINE_TYPE.RIGHT,
        this.STRING_FOR_LINE_TYPE.BLANK,
      ],
    
      '8': [
        this.STRING_FOR_LINE_TYPE.MIDDLE,
        this.STRING_FOR_LINE_TYPE.LEFT_AND_RIGHT,
        this.STRING_FOR_LINE_TYPE.MIDDLE,
        this.STRING_FOR_LINE_TYPE.LEFT_AND_RIGHT,
        this.STRING_FOR_LINE_TYPE.MIDDLE,
      ],
    
      '9': [
        this.STRING_FOR_LINE_TYPE.MIDDLE,
        this.STRING_FOR_LINE_TYPE.LEFT_AND_RIGHT,
        this.STRING_FOR_LINE_TYPE.MIDDLE,
        this.STRING_FOR_LINE_TYPE.RIGHT,
        this.STRING_FOR_LINE_TYPE.MIDDLE,
      ],
    
      '0': [
        this.STRING_FOR_LINE_TYPE.MIDDLE,
        this.STRING_FOR_LINE_TYPE.LEFT_AND_RIGHT,
        this.STRING_FOR_LINE_TYPE.BLANK,
        this.STRING_FOR_LINE_TYPE.LEFT_AND_RIGHT,
        this.STRING_FOR_LINE_TYPE.MIDDLE,
      ],
    };
  }

  convert(number) {
    // Converts number into string and splits into digits
    const digits = this.digitsFor(number);
    // Maps digits into lines defined by LINES_FOR
    const linesForDigits = this.linesForThese(digits);
    const transposed = this.transpose(linesForDigits);
    const combined = this.combine(transposed);
    return combined.join('\n');
  }

  combine(lines) {
    return lines.map(line => line.join(' '));
  }

  transpose(array) {
    return array[0].map((col, i) => array.map(row => row[i]));
  }

  stringsForThese(lines) {
    return lines.map(line => line);
  }

  linesForThese(digits) {
    return digits.map(digit => this.LINES_FOR[digit]);
  }

  digitsFor(number) {
    return number.toString().split('');
  }
};
module.exports = new NumberToLCD();
