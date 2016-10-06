/**
 * Created by kuldee103061 on 03/10/2016.
 */
import { NgModule } from "@angular/core";
import { HomeComponent } from "./home.component";
import { homeRouting } from "./home.routing";

@NgModule({
    imports: [
        homeRouting
    ],
    declarations: [ HomeComponent ]
})

export class HomeModule {
}