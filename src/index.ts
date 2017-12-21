
import './service/FileUploadService';
import './service/MultiuploadResult';
import './model/FileModel';
import './file_success/FileSuccess';
import './file_upload/FileUpload';
import './file_start/FileStart';
import './file_fail/FileFail';
import './file_select/FileSelect';

angular
    .module('pipFiles', [
        'pipFiles.Templates',
        'pipFiles.Service',
        'pipFiles.Model',
        'pipFiles.SuccessUpload',
        'pipFiles.FileUpload',
        'pipFiles.StartUpload',
        'pipFiles.FailUpload',
        'pipFiles.Select'
    ]);
