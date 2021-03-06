import { NotesService } from './../../service/notes.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-add',
  template: `
  <Header></Header>
  <main>
  <form [formGroup]="form" (ngSubmit)="onSubmit()">
      <div class="form-container-fields">
          <label for="title">Titulo</label>
          <input type="text" class="form-content-item item-name" id="title" placeholder="Titulo" required formControlName="title"  maxlength="150">
      </div>
      <div class="form-container-fields">
          <label for="description">Descrição</label>
          <input type="text" class="form-content-item item-description" id="description" placeholder="Descrição" required formControlName="description" maxlength="150">
      </div>
      <div class="form-container-fields">
          <label for="note">Nota</label>
          <input type="text" class="form-content-item item-note" id="note" placeholder="Anotação" require formControlName="note"  maxlength="2000">
      </div>

      <div class="form-container-fields">
          
          <select name="selector-categ" id="categ" class="form-content-item item-selector-categ" formControlName="categ"> 
              <option value="1" selected>Urgente</option>
              <option value="2">Importante</option>
              <option value="3">Relativo</option>
          </select>
      </div>

      <div id="form-button-container">
        <input type="submit" [disabled]="form.invalid">
        <a routerLink="/" id="button-come-back">Voltar</a>
      </div>
  </form>
  </main>
  `,
  styles: [`
  main {
    width: 100%;
    height: calc(100vh - 9vh);
    display:flex;
    justify-content: center;
    align-items: center;
  }
  form {
    width: 80vw;
    height: 80vh;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    padding: 20px 15px;
  }
  .form-container-fields {
    width: 100%;
    height: 55px;
    display: flex;
    flex-direction: column; 
    margin: 0 auto 10px;
  }
  .form-content-item {
    width: 99%;
    height: 35px;
    border: 1px solid #efefef;
    border-radius: 7px;
    padding: 0 15px;
  }
  .item-note {
    max-width: 99%;
    height: auto !important;
    min-height: 35px;
    display: block;
    white-space: pre-line;
  }
  .item-selector-categ {
    width: 210px;
    display: block;
    margin:10px 0;
  }
  #form-button-container {
    width: 260px;
    height: auto;
    display: flex; 
    justify-content: space-between;
  }
  input[type="submit"] {
    width: 120px;
    height: 40px;
    background-color: #3970ff;
    transition: .4s ease;
    border-radius: 5px;
    color: #fff;
    cursor: pointer;
  }
  #button-come-back {
    width: max-content;
    height: max-content;
    background-color: #48d848;
    transition: .4s ease;
    border-radius: 5px;
    padding: 10px 35px;
    text-decoration: none;
    color: #fff;
    cursor: pointer;
  }
  #button-come-back:hover,
  input[type="submit"]:hover {
    background-color: #3907ff;
  }
  `]
})
export class FormAddComponent implements OnInit {

  form!: FormGroup;
  note: any; 


  constructor(
    private formBuilder: FormBuilder,
    private services: NotesService
  ) { }

  ngOnInit(): void {
    this.note = {}

    this.form = this.formBuilder.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      note: ['', Validators.required],
      categ: ['', Validators.required],
    })
  } 

  createNote() {
    this.services.sendNotes(this.form.value)
    .subscribe(() => {
      window.location.href = "/"
    })
    this.form.reset()
  }

  
  
  onSubmit() {
    this.createNote()
  }

}
