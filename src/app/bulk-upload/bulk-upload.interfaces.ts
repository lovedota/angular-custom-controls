export interface File {
    name: string,
    path?: string
};

export interface Directory {
    name: string,
    path?: string,
    isFolder: true,
    children: Array<File | Directory>
};

export type DocumentList = Array<Directory | File>;
