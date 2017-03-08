
import {
    ButtonsUpload
} from "../common/ButtonsUpload";

import { IFileSuccessBindings} from './index';

export interface IFileSuccessController {
    name: string;
    type: string;
    buttons: ButtonsUpload[];
}

export class FileSuccessController implements IFileSuccessController, IFileSuccessBindings {
    public name: string;
    public type: string = 'file';
    public buttons: ButtonsUpload[];

    constructor() {}

    public $onChanges(changes) {}
}