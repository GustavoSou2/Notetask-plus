import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-main-screen',
  templateUrl: './main-screen.component.html' ,
  styleUrls: ['./main-screen.component.css']
})
export class MainScreenComponent implements OnInit {
  
  allPost: any = [
    {
      id: 1,
      title: "Primeiro teste",
      description: "Primeiro teste após",
      categ: 1
    }, {
      id: 2,
      title: "Primeiro teste",
      description: "Primeiro teste após",
      categ: 1
    },
    {
      id: 3,
      title: "Primeiro teste",
      description: "Primeiro teste após",
      categ: 2
    },
    {
      id: 4,
      title: "Primeiro teste",
      description: "Primeiro teste após",
      categ: 3
    },
    {
      id: 5,
      title: "Primeiro teste",
      description: "Primeiro teste após",
      categ: 1
    },
    {
      id: 6,
      title: "Primeiro teste",
      description: "Primeiro teste após",
      categ: 2
    },
  ]


  constructor() { }

  ngOnInit(): void {
  }

}
