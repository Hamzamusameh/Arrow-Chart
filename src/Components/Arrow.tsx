import * as React from "react";
import "./../../style/Components/Arrow.less";

export interface State {
  textLabel: string;
  textValue: string;
}

export class Arrow extends React.Component<any, any> {
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

  componentDidMount() {
    var canvas : any = document.getElementById("arrow-canvas");
    var ctx = canvas.getContext("2d");
    ctx.lineWidth = 10
    ctx.strokeStyle = "#bfbfbf";
    ctx.fillStyle = "red";
    ctx.fill();
    var line3 = canvas.getContext("2d");
    line3.moveTo(0,50);
    line3.lineTo(0,150);
    line3.stroke();
    
    var line1 = canvas.getContext("2d");
    line1.moveTo(0,50);
    line1.lineTo(300,50);
    line1.stroke();
    
    var line2 = canvas.getContext("2d");
    line2.moveTo(0,150);
    line2.lineTo(300,150);
    line2.stroke();
    
    
    var line4 = canvas.getContext("2d");
    line4.moveTo(300,150);
    line4.lineTo(300,200);
    line4.stroke();
    
    var line5 = canvas.getContext("2d");
    line5.moveTo(300,0);
    line5.lineTo(300,50);
    line5.stroke();
    
    
     var line6 = canvas.getContext("2d");
    line6.moveTo(400,100);
    line6.lineTo(300,200);
    line6.stroke();
    
     var line7 = canvas.getContext("2d");
    line7.moveTo(300,0);
    line7.lineTo(400,100);
    line7.stroke();

    ctx.font = "40px Courier";
    ctx.fillText(this.props.data[1], 20, 100);
    ctx.fillText(this.props.data[0], 50, 130);
  }

  render() {
    return (
      <div>
        <canvas ref="canvas" id="arrow-canvas" width={410} height={200} />
      </div>
    );
  }
}

export default Arrow;
