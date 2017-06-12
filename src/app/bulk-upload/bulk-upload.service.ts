import { Injectable } from '@angular/core';

interface Document {
    name: string,
    path?: string,
};

interface Folder {
    name: string,
    path?: string,
    isFolder: true,
    children: Array<Folder | Document>
};


@Injectable()
export class BulkUploadService {
    rootItem: Folder =  { name: 'Document Root', isFolder: true, children: [] };

    getDataTransferList(items: DataTransferItemList) {
        const length = items.length;

        for (let i = 0; i < length; i++) {
            const entries: WebKitDirectoryEntry[] = [];

            entries[0] = items[i].webkitGetAsEntry();

            this.readDirectory(entries, this.rootItem);
        }
    }

    readDirectory(entries: WebKitDirectoryEntry[], parentNode: Folder) {
        for (let i = 0; i < entries.length; i++) {
            const entry = entries[i];

            if (entry.isDirectory) {
                let folder = { name: entry.name, isFolder: true, path: entry.fullPath, children: [] };
                parentNode.children.push(folder);

                const directoryReader = entry.createReader();

                this.getAllEntries(
                    directoryReader,
                    this.readDirectory,
                    folder
                );

            } else {
               parentNode.children.push(
                    { name: entry.name, path: entry.fullPath }
                );
                // entries[i].file(appendFile, errorHandler);
            }
        }
    }

    getAllEntries(directoryReader: WebKitDirectoryReader, callback: Function, parentNode) {
        let entries = [];

        const readEntries = () => {
            directoryReader.readEntries((results: any) => {
                const items = (<Array<WebKitDirectoryEntry | WebKitFileEntry>>results);

                if (!items.length) {
                    entries.sort();
                    callback.bind(this)(entries, parentNode);
                } else {
                    entries = entries.concat(this.toArray(results));
                    readEntries();
                }
            }, this.errorHandler);
        };

        readEntries();
    }

    toArray(list) {
        return Array.prototype.slice.call(list || [], 0);
    }

    errorHandler(e) {
        console.log('FileSystem API error code: ' + e.code)
    }
}
