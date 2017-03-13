export interface IFileUploadService {
    progress: number;
    state: string;
    error: string;
    upload(url: string, file: any, transaction: any, callback?: (data: any, err: any) => void): void;
}