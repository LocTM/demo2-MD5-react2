import {Component} from "react";

export default class Demo3 extends Component{
    constructor() {
        super();
        this.state = {
            name: "Test3"
        }
    }
    render(){
        return(
            <h1>{this.state.name}</h1>
        )
    }
}