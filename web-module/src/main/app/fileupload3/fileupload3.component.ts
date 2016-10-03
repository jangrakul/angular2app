/**
 * Created by jangrakul on 27/09/2016.
 */

import { Component } from '@angular/core';
import { FileUploader } from 'ng2-file-upload';

// api url
const URL = 'https://evening-anchorage-3159.herokuapp.com/api/';

@Component({
    selector: 'my-fileupload3',
    templateUrl: '/app/fileupload3/fileupload3.component.html',
    styleUrls: [ '/app/fileupload3/fileupload3.component.css' ]
})
export class FileUpload3Component {
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