var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { dcterms } from '@_linked/dcmi/ontologies/dcterms';
import { literalProperty } from '@_linked/core/shapes/SHACL';
import { Shape } from '@_linked/core/shapes/Shape';
import { dcat } from '../ontologies/dcat.js';
import { linkedShape } from '../package.js';
let Resource = class Resource extends Shape {
    get title() {
        return '';
    }
    get description() {
        return '';
    }
};
Resource.targetClass = dcat.Resource;
__decorate([
    literalProperty({
        path: dcterms.title,
    }),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [])
], Resource.prototype, "title", null);
__decorate([
    literalProperty({
        path: dcterms.description,
    }),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [])
], Resource.prototype, "description", null);
Resource = __decorate([
    linkedShape
], Resource);
export { Resource };
//# sourceMappingURL=Resource.js.map