import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss']
})
export class CalculatorComponent implements OnInit {

  title = 'Calculator';
  numTab = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, '00', '.'];
  operators = ['del', '/', 'x', '-', '+', '='];

  numberCreate = [];
  calculationCreate = [];
  dispayNumber = '';
  operatorAct = '';
  calcNumb;
  constructor() {

  }

  ngOnInit() {
  }

  indexTracker(index: number, value: any) {
    return index;
  }

  generateNumber() {
    this.dispayNumber = this.numberCreate.toString();
    this.dispayNumber = this.dispayNumber.replace(/,/g , '');
    this.calcNumb = parseFloat(this.dispayNumber);
    console.log(this.numberCreate);
  }
  onAddNumber(numb) {
    this.numberCreate.push(numb);
    this.generateNumber();
    return this.numberCreate;
  }

  onOperatorAct(operator) {
    this.operatorAct = operator;
    switch (this.operatorAct) {
      case 'del' : this.numberCreate.pop();
                   this.generateNumber();
                   break;
      case '+' : this.dispayNumber = this.dispayNumber + ' + ';
                 this.calculationCreate.concat(this.numberCreate).push(this.dispayNumber);
                 // this.numberCreate = [];
                 console.log(this.calculationCreate, this.numberCreate);
                 break;
      case '-' : console.log('-'); break;
      case 'x' : console.log('x'); break;
      case '/' : console.log('/'); break;
      case '=' : console.log('='); break;
      default : console.log(this.numberCreate);
    }
    console.log(this.numberCreate);

  }
}
