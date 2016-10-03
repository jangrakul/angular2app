/**
 * Created by jangrakul on 27/09/2016.
 */
import { Component } from '@angular/core';
import { FileUploader, FileSelectDirective, FileDropDirective } from "ng2-file-upload";
// import { NgStyle, NgClass } from "@angular/common";

// api url
const URL = 'https://evening-anchorage-3159.herokuapp.com/api/';

@Component({
    selector: 'my-fileupload',
    templateUrl: '/app/fileupload/fileupload.component.html',
    styleUrls: [ '/app/fileupload/fileupload.component.css' ],
   //directives: [FileSelectDirective, FileDropDirective, NgStyle, NgClass]
})
export class FileUploadComponent {
    title:string = 'File Upload Service';

    public uploader:FileUploader = new FileUploader({url: URL});
    public hasBaseDropZoneOver:boolean = false;
    public hasAnotherDropZoneOver:boolean = false;

    public fileOverBase(e:any):void {
        this.hasBaseDropZoneOver = e;
    }

    public fileOverAnother(e:any):void {
        this.hasAnotherDropZoneOver = e;
    }
}