import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BulkUploadComponent } from './bulk-upload.component';
import { TreeViewListComponent } from './tree-view/tree-view-list.component';
import { TreeViewItemComponent } from './tree-view/tree-view-item.component';

@NgModule({
    imports: [CommonModule],
    exports: [BulkUploadComponent],
    declarations: [BulkUploadComponent, TreeViewListComponent, TreeViewItemComponent],
    providers: []
})
export class BulkUploadModule { }
