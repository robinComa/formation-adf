import { DocumentListComponent, NodePermissionDialogService } from '@alfresco/adf-content-services';
import { Node, NodeChildAssociationEntry } from '@alfresco/js-api';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NotificationService } from '@alfresco/adf-core';
import { PreviewService } from 'app/services/preview.service';
import { MatDialog } from '@angular/material/dialog';
import { PermDialogComponent } from './perm-dialog/perm-dialog.component';

@Component({
  selector: 'app-sandbox',
  templateUrl: './sandbox.component.html',
  styleUrls: ['./sandbox.component.css']
})
export class SandboxComponent implements OnInit {

  constructor(
    private nodePermissionDialogService: NodePermissionDialogService,
    private preview: PreviewService,
    private notificationService: NotificationService,
    private dialog: MatDialog
  ) { }

  @ViewChild('documentList')
  documentList: DocumentListComponent;

  ngOnInit(): void {
    
  }

  onNodeClick(event) : void {
    console.log(event);
  }

  reload() : void {
    this.documentList.reload();
  }

  navigate(event) : void {
    this.documentList.currentFolderId = event.entry.id;
    this.reload();
  }

  showPreview(event) {
    const entry = event.value.entry;
    if (entry && entry.isFile) {
      this.preview.showResource(entry.id);
    }
  }

  notify(message : string, duration : number = 2500) : void {
    this.notificationService
      .openSnackMessage(message, duration);
  }

  onNodeDeleted(event) : void {
    this.reload();
    this.notify("Node deleted");
  }

  onFolderCreated(event) : void {
    this.reload();
    this.notify("Folder created");
  }

  onNodeEdited(event) : void {
    this.reload();
    this.notify("Node edited");
  }

  managePermissions(event) : void {
    console.log(event);
    const dialogRef = this.dialog.open(PermDialogComponent, {
      data: event.value.entry.id,
      width: "800px",
      panelClass: 'no-padding-dialog-container',
    });
  }
}
