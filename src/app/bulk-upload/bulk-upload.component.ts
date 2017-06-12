import { Component } from '@angular/core';
import { BulkUploadService } from './bulk-upload.service';
import { DocumentList, Directory } from './bulk-upload.interfaces';

@Component({
    selector: 'ng2-bulk-upload',
    templateUrl: 'bulk-upload.component.html',
    styleUrls: ['./bulk-upload.component.scss'],
    providers: [BulkUploadService]
})
export class BulkUploadComponent {
    isDragging = false;
    items: DocumentList;

    constructor(private _bulkUploadService: BulkUploadService) {}

    onDrop(event: DragEvent) {
        event.preventDefault();

        this.isDragging = false;

        this._bulkUploadService.processtDataTransferList(event.dataTransfer.items);

        console.log((<Directory>(this._bulkUploadService.documentList[0])).children.length);
    }

    onDragOver(event: DragEvent) {
        this.isDragging = true;
        event.preventDefault();
    }

    onDragLeave(event: DragEvent) {
        this.isDragging = false;
    }
}
