declare module pip.files {

export class ButtonsUpload {
    title: string;
    click: Function;
}






export class FileUploadState {
    static All: string[];
    static Start: string;
    static Upload: string;
    static Fail: string;
}

export interface IFileUploadService {
    progress: number;
    state: string;
    error: string;
    upload(url: string, file: any, transaction: any, callback?: (data: any, err: any) => void): void;
}




}
