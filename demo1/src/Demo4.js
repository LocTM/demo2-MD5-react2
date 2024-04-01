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
            <>
                <h1>{this.state.name}</h1>
                <input type="text" onChange={(e) =>{
                    console.log(e.target.value)
                    this.setState({
                        name: e.target.value
                    })
                }}/>
            </>


        )
    }
}