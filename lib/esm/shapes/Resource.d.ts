import { Shape } from '@_linked/core/shapes/Shape';
export declare class Resource extends Shape {
    static targetClass: import("@_linked/core/utils/NodeReference.js").NodeReferenceValue;
    get title(): string;
    get description(): string;
}
