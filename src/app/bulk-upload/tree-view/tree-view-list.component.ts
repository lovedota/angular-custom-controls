import { Component, Input } from '@angular/core';
import { DocumentList } from '../bulk-upload.interfaces';

@Component({
    selector: 'ng2-tree-view',
    templateUrl: 'tree-view-list.component.html',
    styleUrls: ['./tree-view-list.component.scss'],
})
export class TreeViewListComponent {
    @Input() items: DocumentList;
}

// https://bootsnipp.com/snippets/featured/bootstrap-30-treeview
// http://codebits.glennjones.net/dragdrop/dropfolder.htm
