import { Component, Input, ChangeDetectionStrategy  } from '@angular/core';
import { Directory, File } from '../bulk-upload.interfaces';

@Component({
    selector: 'ng2-tree-view-item',
    templateUrl: 'tree-view-item.component.html'
})
export class TreeViewItemComponent {
    @Input() item: Directory | File;
}

// https://bootsnipp.com/snippets/featured/bootstrap-30-treeview
// http://codebits.glennjones.net/dragdrop/dropfolder.htm
