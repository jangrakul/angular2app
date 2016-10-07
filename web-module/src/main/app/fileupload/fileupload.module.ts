/**
 * Created by jangrakul on 03/10/2016.
 */
import { CustomFileUploadComponent } from "./fileupload.component";
import { NgModule } from "@angular/core";
import { fileuploadRouting } from "./fileupload.routing";
import { FileSelectDirective, FileDropDirective } from "ng2-file-upload";
import { CommonModule } from "@angular/common";

@NgModule({
    imports: [
        CommonModule,
        fileuploadRouting
    ],
    declarations: [
        FileDropDirective,
        FileSelectDirective,
        CustomFileUploadComponent
    ],
    exports: [
        FileDropDirective,
        FileSelectDirective
    ]
})

export class CustomFileUploadModule {

}