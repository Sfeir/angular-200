import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'sfeir-form',
  templateUrl: 'form.component.html',
  styleUrls: ['form.component.css']
})
export class FormComponent implements OnInit {

  @Output('onCancel') cancel$;
  @Output('onPersonAdd') add$;

  person = {};

  constructor() {
    this.add$ = new EventEmitter();
    this.cancel$ = new EventEmitter();
  }

  ngOnInit() {
  }

  cancel() {
    this.cancel$.emit();
  }

  add(person) {
    this.add$.emit(person);
  }

}
