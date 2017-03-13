import { FileUploadState } from './FileUploadState';

export interface IFileUploadService {
    upload(file: any, url: string,
        resultCallback?: (data: any, err: any) => void,
        progressCallback?: (state: FileUploadState, progress: number) => void
    );
}