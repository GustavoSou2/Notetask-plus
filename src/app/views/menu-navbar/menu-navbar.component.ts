import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'Header',
  template: `
    <header>
      <div id="container-header">
        <h2>Notetask Plus</h2>

        <span> {{ nameUser }} </span>
      </div>
    </header>

  `,
  styles: [`
    header {
      width: 100%;
      height: 9vh; 
      display: flex;
      justify-content: center;
      align-items: center; 
      background-color: #48d848;
    }
    #container-header {
      width: 95%;
      height: 8.5vh;
      display: flex;
      align-items: center;
      justify-content: space-between;
      background-color: transparent;
    }
    h2 {
      font-size: 1.3rem;
      font-weight: 400;
    }
    span {
      color: #fff;
    } 
  `]
})

export class MenuNavbarComponent implements OnInit {
  /* Vars and declaretion */
  nameUser: String = "Gustavo Souza";
  
  constructor() { }

  ngOnInit(): void {
  }
 


}
