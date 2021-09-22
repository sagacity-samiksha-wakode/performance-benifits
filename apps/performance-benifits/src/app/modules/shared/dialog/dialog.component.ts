import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';

import { DialogModel } from './dialog-model';

// import { DialogModel } from 'src/app/modules/shared/dialog/dialog-model';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {
  @Input() dialogModel?: DialogModel
  @Output() onDialogClose = new EventEmitter<boolean>();
  @ViewChild('dialogRef', { read: ElementRef }) public dialogRef?: ElementRef<any>;

  constructor() { }

  ngOnInit(): void {
  }

  closeDialog() {
    this.onDialogClose.emit(true);
    this.dialogModel!.visible = false;
  }

  scrollTop(){
    this.dialogRef!.nativeElement.querySelector(".p-dialog-content").scrollTop = 0;
  }
}
