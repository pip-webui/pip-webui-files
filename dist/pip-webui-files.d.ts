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
}

}
