import { Component, OnInit, Output, Input, EventEmitter, OnChanges } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'sfeir-form',
  templateUrl: 'form.component.html',
  styleUrls: ['form.component.css']
})
export class FormComponent implements OnInit, OnChanges {

  private isUpdateMode: boolean = false;

  @Input() model;
  @Output('cancel') cancel$;
  @Output('submit') submit$;


  form: FormGroup;

  constructor() {
    this.submit$ = new EventEmitter();
    this.cancel$ = new EventEmitter();
    this.form = this._buildForm();
    this.model = {address:{}};
  }

  ngOnInit() {
  }

  ngOnChanges(record) {
    if(record.model && record.model.currentValue) {
      this.model = record.model.currentValue;
      this.isUpdateMode = !!this.model;
      this.form.patchValue(this.model);
    }
  }

  cancel() {
    this.cancel$.emit();
  }

  submit(person) {
    this.submit$.emit(person);
  }

  private _buildForm() {
    return new FormGroup({
      id: new FormControl({value: '', disabled:true}),
      firstname: new FormControl('', Validators.compose([
        Validators.required, Validators.minLength(2)
      ])),
      lastname: new FormControl('', Validators.compose([
        Validators.required, Validators.minLength(2)
      ])),
      email: new FormControl('', Validators.required),
      photo: new FormControl('https://randomuser.me/api/portraits/lego/6.jpg'),
      address: new FormGroup({
        street: new FormControl(''),
        city: new FormControl(''),
        postalCode: new FormControl('')
      }),
      phone: new FormControl('', Validators.compose([
        Validators.required, Validators.pattern('\\d{10}')
      ])),
      isManager: new FormControl('')
    });
  }

}
