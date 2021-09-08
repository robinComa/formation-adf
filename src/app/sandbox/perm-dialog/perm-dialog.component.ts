import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-perm-dialog',
  templateUrl: './perm-dialog.component.html',
  styleUrls: ['./perm-dialog.component.css']
})
export class PermDialogComponent implements OnInit {


  constructor(@Inject(MAT_DIALOG_DATA) public data: string) {}

  ngOnInit(): void {
  }

}
