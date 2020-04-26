"use strict";

import "core-js/stable";
import "./../style/visual.less";
import powerbi from "powerbi-visuals-api";
import VisualConstructorOptions = powerbi.extensibility.visual.VisualConstructorOptions;
import VisualUpdateOptions = powerbi.extensibility.visual.VisualUpdateOptions;
import IVisual = powerbi.extensibility.visual.IVisual;
import IViewport = powerbi.IViewport;
import * as React from "react";
import * as ReactDOM from "react-dom";
import { Helpers } from "./Helpers";

export class Visual implements IVisual {
  private target: HTMLElement;
  // private colorPlate :IColorPalette = host.colorPaltte;

  constructor(options: VisualConstructorOptions) {
    console.log("Visual constructor", options);
    this.target = options.element;
  }

  public update(options: VisualUpdateOptions) {
    if (options.dataViews && options.dataViews[0]) {
      console.log("Visual update", options);
      ReactDOM.render(React.createElement(Helpers, options), this.target);
    }
  }
}
