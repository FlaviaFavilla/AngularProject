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
  operatorIndex;
  mdas;
  partialResult;
  mathUp = {
    '+': function(a, b) { return a + b },
    '-': function(a, b) { return a - b },
    '*': function(a, b) { return a * b },
    '/': function(a, b) { return a / b }
  };
  md = ['*','/'];
  as = ['+','-'];
  constructor() {

  }

  ngOnInit() {
  }

  indexTracker(index: number, value: any) {
    return index;
  }

  //  ---- generate string of number input -----
  onAddNumber(numb) {
    this.numberInput += numb;
    this.numberString = this.numberInput;
    return this.numberInput;
  }

  orderOfOperations(mdas){
    while (this.operatorIndex === undefined || this.operatorIndex != null ) {
      // find in array operator to perform calculation
      this.operatorIndex = this.calculatorInputs.findIndex(el => mdas.includes(el));
      if (this.operatorIndex != null && this.operatorIndex != -1) {
        // perform calc, then save result in array
        this.partialResult = this.mathUp[this.calculatorInputs[this.operatorIndex]](this.calculatorInputs[(this.operatorIndex - 1)], this.calculatorInputs[(this.operatorIndex + 1)]);
        this.calculatorInputs.splice((this.operatorIndex - 1), 3, this.partialResult);
      } else if( this.operatorIndex === -1){
        break;
      }
    }
    this.operatorIndex = undefined;
  }

  summatory() {
    this.orderOfOperations( this.md);
    this.orderOfOperations( this.as);
    this.result = this.calculatorInputs;
  }

  onOperatorAct(operator) {
    this.operatorInput = operator;
    switch (this.operatorInput) {
      case 'del' : this.numberInput = this.numberInput.slice(0, -1).trim();
                   break;
      case '=' :  this.calculatorInputs.push(this.numberInput);
                  this.summatory();
                  break;
      default : this.calculatorInputs.push(this.numberInput, this.operatorInput);
                this.numberInput = '';
    }

  }
}
