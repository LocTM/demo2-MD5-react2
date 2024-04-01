import {Component} from "react";

export default class Demo2 extends Component {
    constructor() {
        super();
        this.state = {
            name:"Test2"
        }
    }
    render() {
        return(
            <h1>{this.state.name}</h1>
        )
    }
}