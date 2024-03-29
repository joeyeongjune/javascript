class Calculator {
  constructor(displayElement) {
    this.displayElement = displayElement;
    this.displayContent = "";
    this.clear();
  }
  appendNumber(number) {
    this.displayContent += number;
  }

  appendOperator(operator) {
    this.displayContent += operator;
  }

  updateDisplay() {
    this.displayElement.value = this.displayContent;
  }

  compute() {
    this.displayContent = eval(
      this.displayContent.replace("\u00D7", "*").replace("\u00F7", "/")
    );
  }

  clear() {
    this.displayContent = "";
    this.displayElement.value = 0;
  }
}

const buttons = document.querySelectorAll("button");
const displayElement = document.querySelector("input");

const calculator = new Calculator(displayElement);

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    switch (button.dataset.type) {
      case "operator":
        calculator.appendOperator(button.innerText);
        calculator.updateDisplay();
        break;
      case "ac":
        calculator.clear();
        break;
      case "equals":
        calculator.compute();
        calculator.updateDisplay();
        break;
      default:
        calculator.appendNumber(button.innerText);
        calculator.updateDisplay();
        break;
    }
  });
});
