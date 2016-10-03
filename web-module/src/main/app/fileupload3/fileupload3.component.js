/**
 * Created by jangrakul on 27/09/2016.
 */
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
var core_1 = require('@angular/core');
var ng2_file_upload_1 = require('ng2-file-upload');
// api url
var URL = 'https://evening-anchorage-3159.herokuapp.com/api/';
var FileUpload3Component = (function () {
    function FileUpload3Component() {
        this.title = 'File Upload Service';
        this.uploader = new ng2_file_upload_1.FileUploader({ url: URL });
        this.hasBaseDropZoneOver = false;
        this.hasAnotherDropZoneOver = false;
    }
    FileUpload3Component.prototype.fileOverBase = function (e) {
        this.hasBaseDropZoneOver = e;
    };
    FileUpload3Component.prototype.fileOverAnother = function (e) {
        this.hasAnotherDropZoneOver = e;
    };
    FileUpload3Component = __decorate([
        core_1.Component({
            selector: 'my-fileupload3',
            templateUrl: '/app/fileupload3/fileupload3.component.html',
            styleUrls: ['/app/fileupload3/fileupload3.component.css']
        }), 
        __metadata('design:paramtypes', [])
    ], FileUpload3Component);
    return FileUpload3Component;
}());
exports.FileUpload3Component = FileUpload3Component;
//# sourceMappingURL=fileupload3.component.js.map