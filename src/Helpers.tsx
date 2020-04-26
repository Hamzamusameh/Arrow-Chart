import * as React from "react";
import { Arrow } from "./Components/Arrow";
import { Rectangle } from "./Components/Rectangle";

export interface State {
  textLabel: string;
  textValue: string;
}

export class Helpers extends React.Component<any, any> {
  public state = {
    textLabel: "",
    textValue: "",
  };

  // private static updateCallback: (data: object) => void = null;

  constructor(props: any) {
    super(props);
    console.log("Component Constructor");
    console.log(props);
    this.state = {
      textLabel: "",
      textValue: "",
    };
  }

  update = (newState: State) => {
    console.log("Component Update " + newState);
    this.setState({ newState });
  };

  render() {
    // const { textLabel, textValue } = this.state;
    console.log("Props: " + this.props);
    const elements = this.props.dataViews[0].table.rows;
    const firstElement = elements[0];
    const BeforeLastElement = elements[elements.length - 1];
    const width = this.props.viewport.width;
    const height = this.props.viewport.height;

    return (
      <div
        style={{
          height: height,
          width: width,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        
        <Rectangle data={BeforeLastElement} />
        <Rectangle data={BeforeLastElement} />
        <Arrow data={firstElement} />
        {/* <Example /> */}
      </div>
    );
  }
}

export default Helpers;
