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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Resource = void 0;
const dcterms_1 = require("@_linked/dcmi/ontologies/dcterms");
const SHACL_1 = require("@_linked/core/shapes/SHACL");
const Shape_1 = require("@_linked/core/shapes/Shape");
const dcat_js_1 = require("../ontologies/dcat.js");
const package_js_1 = require("../package.js");
let Resource = class Resource extends Shape_1.Shape {
    get title() {
        return '';
    }
    get description() {
        return '';
    }
};
exports.Resource = Resource;
Resource.targetClass = dcat_js_1.dcat.Resource;
__decorate([
    (0, SHACL_1.literalProperty)({
        path: dcterms_1.dcterms.title,
    }),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [])
], Resource.prototype, "title", null);
__decorate([
    (0, SHACL_1.literalProperty)({
        path: dcterms_1.dcterms.description,
    }),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [])
], Resource.prototype, "description", null);
exports.Resource = Resource = __decorate([
    package_js_1.linkedShape
], Resource);
//# sourceMappingURL=Resource.js.map