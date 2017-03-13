export interface IFileUploadService {
    upload(url: string,
           file: any, 
           callback?: (data: any, err: any) => void, 
           changeProgress?: (progress: number) => void, 
           changeState?: (state: string) => void ): void;
}