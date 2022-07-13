class Display {
    constructor(displayAboveValue, displayActualValue) {
        this.displayActualValue = displayActualValue;
        this.displayAboveValue = displayAboveValue;
        this.calculator = new Calculator();
        this.operatioType = undefined;
        this.actualValue = '';
        this.aboveValue = '';
        this.signs = {
            add: '+',
            div: '%',
            multi: 'x',
            sub: '-',
        }
    }
    deleteAll() {
        this.actualValue = '';
         this.aboveValue = '';
         this.operatioType = undefined;
         this.printValues();
    }

    delete() {
        this.actualValue = this.actualValue.toString().slice(0,-1);
        this.printValues();
    }

    compute(type) {
        this.operatioType !== 'equal' && this.calculate();
        this.operatioType = type;
        this.aboveValue = this.actualValue || this.aboveValue;
        this.actualValue = '';
        this.printValues();
    }

    addNumber(number) {
        if (number === '.' && this.actualValue.includes('.')) return
        this.actualValue = this.actualValue.toString() + number.toString();
        this.printValues();
    }

    printValues() {
        this.displayActualValue.textContent = this.actualValue;
        this.displayAboveValue.textContent = `${this.aboveValue} ${this.signs[this.operatioType] || ''}`;
    }

    calculate() {
        const aboveValue = parseFloat(this.aboveValue);
        const actualValue = parseFloat(this.actualValue);

        if(isNaN(actualValue) || isNaN(aboveValue)) return
        this.actualValue = this.calculator[this.operatioType](aboveValue, actualValue);
    }
}