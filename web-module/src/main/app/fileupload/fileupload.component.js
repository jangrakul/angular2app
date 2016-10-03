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
 * Created by jangrakul on 27/09/2016.
 */
var core_1 = require('@angular/core');
var ng2_file_upload_1 = require("ng2-file-upload");
// import { NgStyle, NgClass } from "@angular/common";
// api url
var URL = 'https://evening-anchorage-3159.herokuapp.com/api/';
var FileUploadComponent = (function () {
    function FileUploadComponent() {
        this.title = 'File Upload Service';
        this.uploader = new ng2_file_upload_1.FileUploader({ url: URL });
        this.hasBaseDropZoneOver = false;
        this.hasAnotherDropZoneOver = false;
    }
    FileUploadComponent.prototype.fileOverBase = function (e) {
        this.hasBaseDropZoneOver = e;
    };
    FileUploadComponent.prototype.fileOverAnother = function (e) {
        this.hasAnotherDropZoneOver = e;
    };
    FileUploadComponent = __decorate([
        core_1.Component({
            selector: 'my-fileupload',
            templateUrl: '/app/fileupload/fileupload.component.html',
            styleUrls: ['/app/fileupload/fileupload.component.css'],
        }), 
        __metadata('design:paramtypes', [])
    ], FileUploadComponent);
    return FileUploadComponent;
}());
exports.FileUploadComponent = FileUploadComponent;
//# sourceMappingURL=fileupload.component.js.map