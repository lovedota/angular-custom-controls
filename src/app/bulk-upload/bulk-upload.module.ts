import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BulkUploadComponent } from './bulk-upload.component';
import { TreeViewComponent } from './tree-view/tree-view.component';

@NgModule({
    imports: [CommonModule],
    exports: [BulkUploadComponent],
    declarations: [BulkUploadComponent, TreeViewComponent],
    providers: []
})
export class BulkUploadModule { }
