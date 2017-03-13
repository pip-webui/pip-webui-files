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
    upload(url: string, file: any, callback?: (data: any, err: any) => void, changeProgress?: (progress: number) => void, changeState?: (state: string) => void): void;
}




}
