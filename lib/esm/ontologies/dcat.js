import { createNameSpace } from '@_linked/core/utils/NameSpace';
import { linkedOntology } from '../package.js';
//import all the exports of this file as one variable called _this (we need this at the end)
import * as _this from './dcat.js';
const dataFile = '../data/dcat.json';
/**
 * Load the data of this ontology into memory, thus adding the properties of the entities of this ontology to the local graph.
 */
export var loadData = () => {
    if (typeof module !== 'undefined' && typeof exports !== 'undefined') {
        // CommonJS import
        return import('../data/dcat.json');
    }
    else {
        // ESM import
        //@ts-ignore
        return import('../data/dcat.json', { with: { type: "json" } }).then((data) => data.default);
    }
};
/**
 * The namespace of this ontology, which can be used to create NamedNodes with URI's not listed in this file
 */
export var ns = createNameSpace('http://www.w3.org/ns/dcat#');
/**
 * The NamedNode of the ontology itself
 */
export var _self = ns('');
//A list of all the entities (Classes & Properties) of this ontology, each exported as a NamedNode
export var DataService = ns('DataService');
export var Resource = ns('Resource');
export var endpointURL = ns('endpointURL');
//An extra grouping object so all the entities can be accessed from the prefix/name
export const dcat = {
    DataService,
    Resource,
    endpointURL,
};
//Registers this ontology to LINCD.JS, so that data loading can be automated amongst other things
linkedOntology(_this, ns, 'dcat', loadData, dataFile);
//# sourceMappingURL=dcat.js.map