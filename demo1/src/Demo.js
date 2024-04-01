import {Component} from "react";

export default class Demo extends Component {
    constructor() {
        super();
        this.state = {
            name: "Hello C1023H1"
        }
    }
    render(){
        return(
            <h1>{this.state.name}</h1>
        )
    }
}