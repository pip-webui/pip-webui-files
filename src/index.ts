﻿
import './service/FileUploadService';
import './model/FileModel';
import './success/FileSuccess';
import './upload/FileUpload';
import './start/FileStart';
import './fail/FileFail';
import './select/FileSelect';

angular
    .module('pipFiles', [
        'pipFiles.Service',
        'pipFiles.Model',
        'pipFiles.SuccessUpload',
        'pipFiles.FileUpload',
        'pipFiles.StartUpload',
        'pipFiles.FailUpload',
        'pipFiles.Select'
    ]);