import { Component } from '@angular/core';

@Component({
    selector: 'ng2-bulk-upload',
    templateUrl: 'bulk-upload.component.html',
    styleUrls: ['./bulk-upload.component.scss']
})
export class BulkUploadComponent {
    isDragging: boolean;

    constructor() {
        this.isDragging = false;
    }

    onDrop(event: DragEvent) {
        event.preventDefault();

        this.isDragging = false;
        console.log(event.dataTransfer.files);
    }

    onDragOver(event: DragEvent) {
        this.isDragging = true;
        event.preventDefault();
    }

    onDragLeave(event: DragEvent) {
        this.isDragging = false;
    }
}
