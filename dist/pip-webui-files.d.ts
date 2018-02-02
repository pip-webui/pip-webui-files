declare module pip.files {


export class ButtonsUpload {
    title: string;
    click: Function;
}







export enum FileUploadState {
    Uploading = 0,
    Completed = 1,
    Failed = 2,
}

export interface IFileUploadService {
    upload(file: any, url: string, resultCallback?: (data: any, err: any) => void, progressCallback?: (state: FileUploadState, progress: number) => void): any;
    multiUpload(uploadedUrl: string, collections: any[], oneFileResultCallback: (index: number, data: any, err: any) => void, oneFileProgressCallback: (index: number, state: FileUploadState, progress: number) => void, successCallback: (error: any, result: any, res: MultiuploadResult[]) => void, abortCallback?: (cancelQuery: any) => void, breakOnFirstError?: boolean, idField?: string): void;
}

export class MultiuploadResult {
    index: number;
    data: any;
    error: any;
    id: string;
}


}
