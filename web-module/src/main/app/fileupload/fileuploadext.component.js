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
var FileUploadExtComponent = (function () {
    function FileUploadExtComponent(element, fileUploadService, renderer) {
        this.isHover = false;
        this.inputs = ['allowedMimeType',
            'allowedFileType',
            'autoUpload',
            'isHTML5',
            'headers',
            'maxFileSize',
            'queueLimit',
            'removeAfterUpload',
            'url'
        ];
        this.uploaderOptions = {};
        this.multiple = true;
        this.element = element;
        this.fileUploadService = fileUploadService;
        this.renderer = renderer;
    }
    FileUploadExtComponent.prototype.ngOnInit = function () {
        for (var _i = 0, _a = this.inputs; _i < _a.length; _i++) {
            var input = _a[_i];
            if (this[input]) {
                this.uploaderOptions[input] = this[input];
            }
        }
        this.fileUploadService.setOptions(this.uploaderOptions);
        this.multiple = (!this.queueLimit || this.queueLimit > 1);
    };
    FileUploadExtComponent.prototype.onDrop = function (event) {
        this._preventAndStop(event);
        this.isHover = false;
        var transfer = this._getTransfer(event);
        if (!transfer) {
            return;
        }
        this.fileUploadService.addToQueue(transfer.files);
    };
    FileUploadExtComponent.prototype.onDragOver = function (event) {
        this._preventAndStop(event);
        if (this.isHover) {
            return;
        }
        var transfer = this._getTransfer(event);
        if (!this._haveFiles(transfer.types)) {
            return;
        }
        this.isHover = true;
    };
    FileUploadExtComponent.prototype.onDragLeave = function (event) {
        this._preventAndStop(event);
        if (event.currentTarget === this.element[0]) {
            return;
        }
        this.isHover = false;
    };
    FileUploadExtComponent.prototype.onChange = function ($event) {
        this.fileUploadService.addToQueue($event.srcElement.files);
    };
    FileUploadExtComponent.prototype._getTransfer = function (event) {
        return event.dataTransfer ? event.dataTransfer : event.originalEvent.dataTransfer;
    };
    FileUploadExtComponent.prototype._preventAndStop = function (event) {
        event.preventDefault();
        event.stopPropagation();
    };
    FileUploadExtComponent.prototype._haveFiles = function (types) {
        if (!types) {
            return false;
        }
        if (types.indexOf) {
            return types.indexOf('Files') !== -1;
        }
        else if (types.contains) {
            return types.contains('Files');
        }
        else {
            return false;
        }
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], FileUploadExtComponent.prototype, "url", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Number)
    ], FileUploadExtComponent.prototype, "queueLimit", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Number)
    ], FileUploadExtComponent.prototype, "maxFileSize", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Boolean)
    ], FileUploadExtComponent.prototype, "autoUpload", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Array)
    ], FileUploadExtComponent.prototype, "allowedMimeType", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Array)
    ], FileUploadExtComponent.prototype, "allowedFileType", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Array)
    ], FileUploadExtComponent.prototype, "headers", void 0);
    __decorate([
        core_1.HostBinding('class.hover'), 
        __metadata('design:type', Boolean)
    ], FileUploadExtComponent.prototype, "isHover", void 0);
    __decorate([
        core_1.HostListener('drop', ['$event']), 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', [Object]), 
        __metadata('design:returntype', void 0)
    ], FileUploadExtComponent.prototype, "onDrop", null);
    __decorate([
        core_1.HostListener('dragover', ['$event']), 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', [Object]), 
        __metadata('design:returntype', void 0)
    ], FileUploadExtComponent.prototype, "onDragOver", null);
    __decorate([
        core_1.HostListener('dragleave', ['$event']), 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', [Object]), 
        __metadata('design:returntype', void 0)
    ], FileUploadExtComponent.prototype, "onDragLeave", null);
    FileUploadExtComponent = __decorate([
        core_1.Component({
            selector: 'file-upload-ext',
            providers: [ng2_file_upload_1.FileUploader],
            template: require('./fileuploadext.component.html'),
            styles: [':host {border:1px solid black; padding:59px;display: block;}' +
                    '.hover {border: 3px solid green; backgroud: black;}']
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef, ng2_file_upload_1.FileUploader, core_1.Renderer])
    ], FileUploadExtComponent);
    return FileUploadExtComponent;
}());
exports.FileUploadExtComponent = FileUploadExtComponent;
//# sourceMappingURL=fileuploadext.component.js.map