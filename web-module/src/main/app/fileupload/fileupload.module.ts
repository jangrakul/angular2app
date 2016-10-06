/**
 * Created by jangrakul on 03/10/2016.
 */
import { FileUploadComponent } from "./fileupload.component";
import { NgModule } from "@angular/core";
import { fileuploadRouting } from "./fileupload.routing";

@NgModule({
    imports: [
        fileuploadRouting
    ],
    declarations: [
        FileUploadComponent
    ]
})

export class CustomFileUploadModule {

}