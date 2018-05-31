import { getDefinition } from "../classes/object-definition";
import { TaPropertyDecorator } from "../types";

// tslint:disable:ext-variable-name only-arrow-functions

export function BeforeDeserialized():TaPropertyDecorator {
    return function(target:any, key:string):void {
        const definition = getDefinition(target.constructor);

        definition.beforeDeserialized = target[key];
    };
}
