const NumberToLCD = require('./kata');

describe('NumberToLCD', function () {
  describe('Should convert single digits', () => {
    it('Should convert 1', () => {
      const numberOne = NumberToLCD.convert(1);
      expect(numberOne).toBe(NumberToLCD.LINES_FOR['1'].join('\n'));
    });

    it('Should convert 2', () => {
      const numberTwo = NumberToLCD.convert(2);
      expect(numberTwo).toBe(NumberToLCD.LINES_FOR['2'].join('\n'));
    });

    it('Should convert 3', () => {
      const numberThree = NumberToLCD.convert(3);
      expect(numberThree).toBe(NumberToLCD.LINES_FOR['3'].join('\n'));
    });

    it('Should convert 4', () => {
      const numberFour = NumberToLCD.convert(4);
      expect(numberFour).toBe(NumberToLCD.LINES_FOR['4'].join('\n'));
    });

    it('Should convert 5', () => {
      const numberFive = NumberToLCD.convert(5);
      expect(numberFive).toBe(NumberToLCD.LINES_FOR['5'].join('\n'));
    });

    it('Should convert 6', () => {
      const numberSix = NumberToLCD.convert(6);
      expect(numberSix).toBe(NumberToLCD.LINES_FOR['6'].join('\n'));
    });

    it('Should convert 7', () => {
      const numberSeven = NumberToLCD.convert(7);
      expect(numberSeven).toBe(NumberToLCD.LINES_FOR['7'].join('\n'));
    });

    it('Should convert 8', () => {
      const numberEight = NumberToLCD.convert(8);
      expect(numberEight).toBe(NumberToLCD.LINES_FOR['8'].join('\n'));
    });

    it('Should convert 9', () => {
      const numberNine = NumberToLCD.convert(9);
      expect(numberNine).toBe(NumberToLCD.LINES_FOR['9'].join('\n'));
    });

    it('Should convert 0', () => {
      const numberZero = NumberToLCD.convert(0);
      expect(numberZero).toBe(NumberToLCD.LINES_FOR['0'].join('\n'));
    });
  });

  describe('Should convert multiple digits', () => {
    it('Should convert 1267', () => {
      const multiNumber = NumberToLCD.convert(1267);
      const array = [
        NumberToLCD.LINES_FOR['1'],
        NumberToLCD.LINES_FOR['2'],
        NumberToLCD.LINES_FOR['6'],
        NumberToLCD.LINES_FOR['7'],
      ];
      expect(multiNumber).toBe(array[0].map((col, i) => array.map(row => row[i]).join(' ')).join('\n'));
    });
  });
});