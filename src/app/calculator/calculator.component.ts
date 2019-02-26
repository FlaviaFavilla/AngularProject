import { Component, OnInit } from '@angular/core';
import {forEach} from '@angular/router/src/utils/collection';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss']
})
export class CalculatorComponent implements OnInit {

  title = 'Calculator';
  numTab = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, '00', '.'];
  // operators = ['del', '/', '*', '-', '+', '='];
  operators = [
                { display: 'del', value: 'del'},
                { display: '/', value: '/'},
                { display: 'X', value: '*'},
                { display: '-', value: '-'},
                { display: '+', value: '+'},
                { display: '=', value: '='}
               ];

  numberInput = '';
  operatorInput = '';
  calculatorInputs = [];
  numberString = '';
  numberFloat;
  result = 0;
  moltOper;
  divOper;
  partialResult;
  mathUp = {
    '+': function(a, b) { return a + b },
    '-': function(a, b) { return a - b },
    '*': function(a, b) { return a * b },
    '/': function(a, b) { return a / b }
  };
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

    while (this.moltOper === undefined || this.moltOper != null) {
      // find in array + and / to perform them before + and -
      this.moltOper = this.calculatorInputs.indexOf('*') !== -1 ? this.calculatorInputs.indexOf('*') : this.calculatorInputs.indexOf('/')  !== -1 ? this.calculatorInputs.indexOf('/') : null;
      // console.log(this.moltOper);
      if (this.moltOper != null) {
        // perform moltiplications and divisions, then save result in array
        this.partialResult = this.mathUp[this.calculatorInputs[this.moltOper]](this.calculatorInputs[(this.moltOper - 1)], this.calculatorInputs[(this.moltOper + 1)]);
        this.calculatorInputs.splice((this.moltOper - 1), 3, this.partialResult);
      }
    }
    console.log( this.calculatorInputs);
    // this.result = this.mathUp[this.calculatorInputs[this.moltOper]](this.calculatorInputs[(this.moltOper - 1)], this.calculatorInputs[(this.moltOper + 1)]);
    this.calculatorInputs.forEach( (element) => this.result += element );


    console.log('stampa result: ' + this.result, this.calculatorInputs);
  }

  onOperatorAct(operator) {
    this.operatorInput = operator;
    switch (this.operatorInput) {
      case 'del' : this.numberInput = this.numberInput.slice(0, -1).trim();
                   break;
      case '=' :  this.calculatorInputs.push(this.numberInput);
                  console.log('=', this.calculatorInputs);
                  this.summatory();
                  break;
      default : this.calculatorInputs.push(this.numberInput, this.operatorInput);
                console.log('calculatorInputs array: ' + this.calculatorInputs , this.numberInput);
                this.numberInput = '';
                // this.numberInput = this.numberInput + ' ' + this.operatorInput + ' ';
                console.log('calculatorInputs: ' + this.calculatorInputs , this.numberInput);
    }

  }
}
