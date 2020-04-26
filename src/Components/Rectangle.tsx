import * as React from "react";
// import 'bootstrap/dist/css/bootstrap.css';
import { Card, Container, Row } from "react-bootstrap";
import "./../../style/Components/Rectangle.less";

export interface State {
  textLabel: string;
  textValue: string;
}

export class Rectangle extends React.Component<any, any> {
  public state = {
    textLabel: "",
    textValue: "",
  };

  public canvasRef;
  // private static updateCallback: (data: object) => void = null;

  constructor(props) {
    super(props);
    console.log("Component Constructor");
    console.log(props);
    this.canvasRef = React.createRef();
    this.state = {
      textLabel: "",
      textValue: "",
    };
  }

  update = (newState: State) => {
    console.log("Component Update " + newState);
    this.setState({ newState });
  };

  getClassName = () => {
    let status = this.props.data[3];
    if (status == "Pass") return "pass-class";
    else if (status == "Partially Pass") return "partially-class";
    else return "rework-class";
  };

  getStrokeColor = () => {
    let status = this.props.data[3];
    if (status == "Pass") return "pass-class";
    else if (status == "Partially Pass") return "#177b61";
    else return "rework-class";
  };

  getFillColor = () => {
    let status = this.props.data[3];
    if (status == "Pass") return "pass-class";
    else if (status == "Partially Pass") return "#c5e0b4";
    else return "rework-class";
  };

  componentDidMount() {
    const canvas = this.canvasRef.current;
    const ctx = canvas.getContext("2d");
    ctx.font = "30px Courier";
    ctx.fillStyle = "black";
    ctx.fill();
    ctx.lineWidth = 7;
    ctx.strokeStyle = this.getStrokeColor();
    ctx.strokeRect(0, 0, 250, 100);

    ctx.fillText(this.props.data[1], 5, 40);
    ctx.fillText(this.props.data[0], 70, 80);
  }

  render() {
    return (
      <div style={{ paddingLeft: "10px", paddingRight: "10px" }}>
        <canvas ref={this.canvasRef} width={250} height={100} />
      </div>
    );
  }
}

export default Rectangle;
