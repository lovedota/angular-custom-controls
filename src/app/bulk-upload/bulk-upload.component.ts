import { Component } from '@angular/core';

import { BulkUploadService } from './bulk-upload.service';

@Component({
    selector: 'ng2-bulk-upload',
    templateUrl: 'bulk-upload.component.html',
    styleUrls: ['./bulk-upload.component.scss'],
    providers: [BulkUploadService]
})
export class BulkUploadComponent {
    isDragging = false;

    constructor(private _bulkUploadService: BulkUploadService) {

    }

    onDrop(event: DragEvent) {
        event.preventDefault();

        this.isDragging = false;

        this._bulkUploadService.getDataTransferList(event.dataTransfer.items);

        console.log(this._bulkUploadService.rootItem);
    }

    onDragOver(event: DragEvent) {
        this.isDragging = true;
        event.preventDefault();
    }

    onDragLeave(event: DragEvent) {
        this.isDragging = false;
    }
}
