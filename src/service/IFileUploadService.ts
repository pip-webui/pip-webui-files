import { FileUploadState } from './FileUploadState';
import { MultiuploadResult } from './MultiuploadResult';

export interface IFileUploadService {
    upload(file: any, url: string,
        resultCallback?: (data: any, err: any) => void,
        progressCallback?: (state: FileUploadState, progress: number) => void
    );
    multiUpload(uploadedUrl: string, collections: any[], oneFileResultCallback: (index: number, data: any, err: any) => void,
        oneFileProgressCallback: (index: number, state: FileUploadState, progress: number) => void,
        successCallback: (error: any, result: any, res: MultiuploadResult[]) => void, 
        abortCallback?: (cancelQuery: any) => void, 
        breakOnFirstError?: boolean, idField?: string): void
}