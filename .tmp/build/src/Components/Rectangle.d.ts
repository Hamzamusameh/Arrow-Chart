import * as React from "react";
import "./../../style/Components/Rectangle.less";
export interface State {
    textLabel: string;
    textValue: string;
}
export declare class Rectangle extends React.Component<any, any> {
    state: {
        textLabel: string;
        textValue: string;
    };
    constructor(props: any);
    update: (newState: State) => void;
    getClassName: () => "pass-class" | "partially-class" | "rework-class";
    render(): JSX.Element;
}
export default Rectangle;
