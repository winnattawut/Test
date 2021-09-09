import { collectExternalReferences } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test1',
  templateUrl: './test1.component.html',
  styleUrls: ['./test1.component.css']
})
export class Test1Component implements OnInit {

  myVal: string;
  myResult: boolean;

  constructor() { }

  ngOnInit(): void {
  }

  intOnly() {
    //console.log(this.myVal);
    if (this.myVal == "") {
      return true
    }
    let tmp = Math.round(Number(this.myVal))
    if (tmp.toString() == "NaN") {
      return true
    } else {
      if (tmp < 0) {
        this.myVal = "1";
      } else {
        this.myVal = tmp.toString();
      }
    }
    //test
  }

  onChange(val) {
    if (val == 1) {
      this.myResult = this.isPrime(this.myVal);
      //console.log(this.isPrime(this.myVal));
    } else if (val == 2) {
      this.myResult = this.isFibonacci(this.myVal)
    } else {
      this.myResult = null;
    }
  }


  isPrime(num) {
    for (var i = 2; i < num; i++)
      if (num % i === 0) return false;
    return num > 1;
  }


  isPerfectSquare(x) {
    let s = Number(Math.sqrt(x));
    return (s * s == x);
  }

  isFibonacci(n) {
    return this.isPerfectSquare(5 * n * n + 4) || this.isPerfectSquare(5 * n * n - 4);
  }

}
