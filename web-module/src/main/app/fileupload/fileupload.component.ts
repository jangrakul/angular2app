/**
 * Created by jangrakul on 27/09/2016.
 */
import { Component } from '@angular/core';
import { FileUploader } from "ng2-file-upload";

// api url
const URL = 'http://localhost:8000/api/upload';

@Component({
    moduleId: module.id,
    selector: 'my-fileupload',
    templateUrl: 'fileupload.component.html',
    styleUrls: [ 'fileupload.component.css' ]
})

export class CustomFileUploadComponent {
    title:string = 'File Upload Service';

    public uploader:FileUploader = new FileUploader({url: URL});

    // public hasBaseDropZoneOver:boolean = false;
    // public hasAnotherDropZoneOver:boolean = false;
    //
    // public fileOverBase(e:any):void {
    //     this.hasBaseDropZoneOver = e;
    // }
    //
    // public fileOverAnother(e:any):void {
    //     this.hasAnotherDropZoneOver = e;
    // }
}