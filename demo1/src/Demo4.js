import {Component} from "react";

export default class Demo4 extends Component{
    constructor() {
        super();
        this.state = {
            name: "ABC"
        }
    }
    render() {
        return(
            <h1>{this.state.name}</h1>
        )
    }
}