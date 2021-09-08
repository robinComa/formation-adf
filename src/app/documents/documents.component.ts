/*!
 * @license
 * Copyright 2016 Alfresco Software, Ltd.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { Component, ViewChild, Input } from '@angular/core';
import { NotificationService } from '@alfresco/adf-core';
import { DocumentListComponent, ShareDataRow } from '@alfresco/adf-content-services';
import { PreviewService } from '../services/preview.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-documents',
  templateUrl: './documents.component.html',
  styleUrls: ['./documents.component.scss']
})
export class DocumentsComponent {

  @Input()
  showViewer = false;
  nodeId: string = null;

  @ViewChild('documentList')
  documentList: DocumentListComponent;

  constructor(private notificationService: NotificationService, private preview: PreviewService, private translate: TranslateService) {
  }

  uploadSuccess(event: any) {
    console.log(event);
    this.notificationService.openSnackMessage(this.translate.instant ("UPLOAD_MESSAGE.SUCCESS", {value: event.value.entry.name}));
    this.documentList.reload();
  }

  showPreview(event) {
    const entry = event.value.entry;
    if (entry && entry.isFile) {
      this.preview.showResource(entry.id);
    }
  }

  onCheckboxClicked(event, context: {row: ShareDataRow}): void {
    event.stopPropagation();
    console.log(event.srcElement.firstChild.checked);
    console.log(context.row.node.entry.id);
    console.log(event);
  }

  onGoBack(event: any) {
    this.showViewer = false;
    this.nodeId = null;
  }

  myCustomAction1(event) {
    let entry = event.value.entry;
    alert(`Custom document action for ${entry.name}`);
}

myCustomActionAfterDelete(event) {
    let entry = event.value.entry;
    alert(`Custom callback after delete system action for ${entry.name}`);
}

}
