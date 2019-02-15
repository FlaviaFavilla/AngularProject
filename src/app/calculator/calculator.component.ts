import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss']
})
export class CalculatorComponent implements OnInit {

  title = 'Calculator';
  numTab = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, '00', '.'];
  operators = ['del', '/', '*', '-', '+', '='];

  numberInput = [];
  operatorInput = '';
  calculatorInputs = [];
  numberString = '';
  numberFloat;
  result;
  array = [1,'+',4];
  constructor() {

  }

  ngOnInit() {
  }

  indexTracker(index: number, value: any) {
    return index;
  }

  generateNumber() {
    this.numberString = this.numberInput.toString();
    this.numberString = this.numberString.replace(/,/g , '');
    this.numberFloat = parseFloat(this.numberString);
    // console.log(this.numberInput);
  }
  onAddNumber(numb) {
    this.numberInput.push(numb);
    this.generateNumber();
    return this.numberInput;
  }
  summatory() {
    console.log('calculatorInputs:' + JSON.stringify(this.calculatorInputs));
    this.result = this.calculatorInputs.reduce((a, b) => eval(a.number + a.operator + b.number));
    // this.result = this.array.reduce((a, b) => eval(a + b), 0);
    // arr.reduce((a, b) => ({x: a.x + b.x}));
    console.log('stampa result: ' + this.result);
  }
  onOperatorAct(operator) {
    this.operatorInput = operator;
    switch (this.operatorInput) {
      case 'del' : this.numberInput.pop();
                   this.generateNumber();
                   break;
      case '=' :  //this.calculatorInputs.push(this.numberFloat);
                  this.calculatorInputs.push({ number: this.numberFloat, operator: this.operatorInput });
                  console.log('=', this.calculatorInputs);
                  this.summatory();
                  this.numberFloat = this.result;
                  // this.numberFloat = null;
                  // console.log('numberFloat:' + this.numberFloat);
                  break;
      default : //console.log(this.numberFloat, this.calculatorInputs, this.operatorInput);
                // this.calculatorInputs.push(this.numberFloat);
                // this.calculatorInputs.push(this.numberFloat, this.operatorInput);
                this.calculatorInputs.push({ number: this.numberFloat, operator: this.operatorInput });
                this.numberInput = [];
                console.log('calculatorInputs: ' + this.calculatorInputs);
    }

  }
}
