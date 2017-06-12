import { Injectable } from '@angular/core';

import { File, Directory, DocumentList } from './bulk-upload.interfaces';

@Injectable()
export class BulkUploadService {
    rootItem: Directory =  { name: 'Document Root', isFolder: true, children: [] };
    documentList: DocumentList = [];

    processtDataTransferList(items: DataTransferItemList) {
        const length = items.length;

        for (let i = 0; i < length; i++) {
            const entries: WebKitDirectoryEntry[] = [];

            entries[0] = items[i].webkitGetAsEntry();

            this.readDirectory(entries);
        }
    }

    readDirectory(entries: Array<WebKitDirectoryEntry | WebKitFileEntry>, parentNode?: Directory) {
        for (let i = 0; i < entries.length; i++) {
            const entry = entries[i];

            if (entry.isDirectory) {
                const folder = {
                    name: entry.name,
                    isFolder: true,
                    path: entry.fullPath,
                    children: []
                };

                if (parentNode) {
                    parentNode.children.push(folder);
                } else {
                    this.documentList.push(folder);
                }

                const directoryReader = (<WebKitDirectoryEntry>entry).createReader();

                this.getAllEntries(
                    directoryReader,
                    this.readDirectory,
                    folder
                );

            } else {
                const document = { name: entry.name, path: entry.fullPath };

                if (parentNode) {
                    parentNode.children.push(document);
                } else {
                    this.documentList.push(document);
                }
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
