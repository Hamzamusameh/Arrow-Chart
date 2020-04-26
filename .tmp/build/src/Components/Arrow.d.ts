import * as React from "react";
import "./../../style/Components/Arrow.less";
export interface State {
    textLabel: string;
    textValue: string;
}
export declare class Arrow extends React.Component<any, any> {
    state: {
        textLabel: string;
        textValue: string;
    };
    constructor(props: any);
    update: (newState: State) => void;
    render(): JSX.Element;
}
export default Arrow;
