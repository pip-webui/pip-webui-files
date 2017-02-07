export class FileUploadController {
    public localFile: any;
    
    constructor($scope) {
        "ngInject";
        this.localFile = $scope.localFile;
        $scope.$watch('vm.localFile', (item) => {
            $scope.localFile = item;
        }) 
    }

    public onUploadButtonClick(): void {
        $('#inp_file').click();
    }

    public onDeleteButtonClick(): void {
        this.localFile = null;
        let forml = document.getElementById('inp_form');
        (<any>forml).reset();

    }
}