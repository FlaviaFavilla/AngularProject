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

  numberInput = '';
  operatorInput = '';
  calculatorInputs = [];
  numberString = '';
  numberFloat;
  result;
  constructor() {

  }

  ngOnInit() {
  }

  indexTracker(index: number, value: any) {
    return index;
  }

  // generateNumber() {
  //   this.numberString = this.numberInput.toString();
  //   this.numberString = this.numberString.replace(/,/g , '');
  //   this.numberFloat = parseFloat(this.numberString);
  //   // console.log(this.numberInput);
  // }

  //  ---- generate string of number input -----
  onAddNumber(numb) {
    this.numberInput += numb;
    console.log(this.numberInput);
    this.numberString = this.numberInput;
    return this.numberInput;
  }
  summatory() {
    this.result = eval(this.numberInput);
    console.log('stampa result: ' + this.result);
  }

  onOperatorAct(operator) {
    this.operatorInput = operator;
    switch (this.operatorInput) {
      case 'del' : this.numberInput = this.numberInput.slice(0, -1).trim();
                   break;
      case '=' :  console.log('=', this.calculatorInputs);
                  this.summatory();
                  this.numberFloat = this.result;
                  // this.numberFloat = null;
                  // console.log('numberFloat:' + this.numberFloat);
                  break;
      default : this.numberInput = this.numberInput + ' ' + this.operatorInput + ' ';
                console.log('calculatorInputs: ' + this.calculatorInputs , this.numberInput);
    }

  }
}
