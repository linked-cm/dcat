"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var dcterms_1 = require("@_linked/dcmi/ontologies/dcterms");
var SHACL_1 = require("@_linked/core/shapes/SHACL");
var Shape_1 = require("@_linked/core/shapes/Shape");
var dcat_js_1 = require("../ontologies/dcat.js");
var package_js_1 = require("../package.js");
var Resource = /** @class */ (function (_super) {
    __extends(Resource, _super);
    function Resource() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(Resource.prototype, "title", {
        get: function () {
            return '';
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Resource.prototype, "description", {
        get: function () {
            return '';
        },
        enumerable: false,
        configurable: true
    });
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
    Resource = __decorate([
        package_js_1.linkedShape
    ], Resource);
    return Resource;
}(Shape_1.Shape));
exports.Resource = Resource;
//# sourceMappingURL=Resource.js.map