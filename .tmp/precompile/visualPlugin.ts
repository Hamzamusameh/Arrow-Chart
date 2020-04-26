import { Visual } from "../../src/visual";
import powerbiVisualsApi from "powerbi-visuals-api"
import IVisualPlugin = powerbiVisualsApi.visuals.plugins.IVisualPlugin
import VisualConstructorOptions = powerbiVisualsApi.extensibility.visual.VisualConstructorOptions
var powerbiKey: any = "powerbi";
var powerbi: any = window[powerbiKey];

var arrowChart18DE516D5F17458FA1212E6BBF317186_DEBUG: IVisualPlugin = {
    name: 'arrowChart18DE516D5F17458FA1212E6BBF317186_DEBUG',
    displayName: 'ArrowChart',
    class: 'Visual',
    apiVersion: '2.6.0',
    create: (options: VisualConstructorOptions) => {
        if (Visual) {
            return new Visual(options);
        }

        throw 'Visual instance not found';
    },
    custom: true
};

if (typeof powerbi !== "undefined") {
    powerbi.visuals = powerbi.visuals || {};
    powerbi.visuals.plugins = powerbi.visuals.plugins || {};
    powerbi.visuals.plugins["arrowChart18DE516D5F17458FA1212E6BBF317186_DEBUG"] = arrowChart18DE516D5F17458FA1212E6BBF317186_DEBUG;
}

export default arrowChart18DE516D5F17458FA1212E6BBF317186_DEBUG;