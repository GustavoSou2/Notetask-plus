import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-main-screen',
  templateUrl: './main-screen.component.html' ,
  styleUrls: ['./main-screen.component.css']
})
export class MainScreenComponent implements OnInit {
  title: String = "Limpar"
  description: String = "Lembrar de passar pano no chão" 



  constructor() { }

  ngOnInit(): void {
  }

}
