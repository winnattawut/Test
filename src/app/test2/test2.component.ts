import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test2',
  templateUrl: './test2.component.html',
  styleUrls: ['./test2.component.css']
})
export class Test2Component implements OnInit {
  displayText: any;
  rawData: any;
  txt: string;
  constructor() { }

  ngOnInit(): void {
    fetch('https://api.publicapis.org/categories')
      .then(res => res.json())
      .then((response) => {
        //console.log(response);
        this.displayText = response;
        this.rawData = response;
      });



  }

  search() {
    let tmp = this.rawData;
    this.displayText = tmp.filter(x => x.includes(this.txt));
  }
}
