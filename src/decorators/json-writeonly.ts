import { getDefinition } from "../classes/object-definition";
import { TaPropertyDecorator } from "../types";

// tslint:disable:ext-variable-name only-arrow-functions

export function JsonWriteonly():TaPropertyDecorator {
    return function(target:any, key:string):void {
        const property = getDefinition(target.constructor).getProperty(key);

        property.writeonly = true;
    };
}
