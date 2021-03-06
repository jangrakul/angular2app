"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
 * Created by jangrakul on 03/10/2016.
 */
var fileupload_component_1 = require("./fileupload.component");
var core_1 = require("@angular/core");
var fileupload_routing_1 = require("./fileupload.routing");
var ng2_file_upload_1 = require("ng2-file-upload");
var common_1 = require("@angular/common");
var CustomFileUploadModule = (function () {
    function CustomFileUploadModule() {
    }
    CustomFileUploadModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                fileupload_routing_1.fileuploadRouting
            ],
            declarations: [
                ng2_file_upload_1.FileDropDirective,
                ng2_file_upload_1.FileSelectDirective,
                fileupload_component_1.CustomFileUploadComponent
            ],
            exports: [
                ng2_file_upload_1.FileDropDirective,
                ng2_file_upload_1.FileSelectDirective
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], CustomFileUploadModule);
    return CustomFileUploadModule;
}());
exports.CustomFileUploadModule = CustomFileUploadModule;
//# sourceMappingURL=fileupload.module.js.map