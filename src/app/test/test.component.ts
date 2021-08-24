import { NodeEntry } from '@alfresco/js-api';
import { Component, OnInit } from '@angular/core';
import { PreviewService } from '../services/preview.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  nodeEntryId: string;

  constructor(private preview: PreviewService) { }

  ngOnInit(): void {

  }

  onClick(node: NodeEntry): void {
    this.nodeEntryId = node.entry.id;
  }

  showPreview(event) {
    const entry = event.value.entry;
    if (entry && entry.isFile) {
      this.preview.showResource(entry.id);
    }
  }

  myCustomAction1(event) {
    const entry = event.value.entry;
    alert(`Custom document action for ${entry.name}`);
  }

  myCustomActionAfterDelete(event) {
    const entry = event.value.entry;
    alert(`Custom callback after delete system action for ${entry.name}`);
  }

}
