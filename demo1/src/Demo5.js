import {Component} from "react";

export default class Demo5 extends Component{
    constructor() {
        super();
        this.state = {
            name: "Demo5 change name"
        }
    }
    render() {
        return (
            <div>
                <h1>{this.state.name}</h1>
                <input type="text" onChange={(e)=>{
                    this.setState({
                        name: e.target.value
                        }
                    )
                }}/>
            </div>
        );
    }
}