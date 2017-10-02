import { Component, OnInit } from '@angular/core';
import { MdDialogRef } from '@angular/material';


@Component({
  selector: 'sfeir-add-dialog',
  templateUrl: './add-dialog.component.html',
  styleUrls: ['./add-dialog.component.css']
})
export class AddDialogComponent implements OnInit {

  constructor(public dialogRef: MdDialogRef<AddDialogComponent>) { }

  closeDialog(result = null) {
    this.dialogRef.close(result);
  }

  ngOnInit() {
  }

  onCancel() {
    this.closeDialog();
  }

  onSave(person) {
    this.closeDialog(person);
  }
}