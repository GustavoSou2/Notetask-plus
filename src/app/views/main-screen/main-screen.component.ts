import { NotesService } from './../../service/notes.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-screen',
  template: `
  <Header></Header>
  <main>
      <div id="container-functions">
          <!-- Button add note -->
          <button id="element-add-note" routerLink="/form">Add nota</button>
  
          <!-- Field search -->
          <label for="element-search" id="container-search">
              <input type="search" name="cont-search" id="element-search" placeholder="Pesquisar">
          </label>
      </div>
      <section id="container-notes">
          <div class="case-note" *ngFor="let post of notes">
              <span class="title-note"> {{ post.title }} </span>
              <div class="container-description ">
                  <span class="description-note">
                      {{ post.description }}...
                  </span>
              </div>
              <div class="container-button">
                  <img [src]="'../../../assets/svg/eye-open.svg'" alt="" class="eyes-icon">
                  <span class="status-categ-post">
                      status
                      <i class="case-color-status red" *ngIf="post.categ == 1"></i>
                      <i class="case-color-status yellow" *ngIf="post.categ == 2"></i>
                      <i class="case-color-status green" *ngIf="post.categ == 3"></i>
                  </span>
              </div>
          </div>
      </section>
  </main>` ,
  styleUrls: ['./main-screen.component.css']
})
export class MainScreenComponent implements OnInit {
    
  notes!: Array<any>


  constructor(private services: NotesService) { }

  ngOnInit(): void {
          this.services.listNotes()
              .subscribe(result => console.log(result))
  }

  
}
