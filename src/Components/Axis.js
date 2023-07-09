import React from "react";
// import axios from "axios";
import * as math from "./Moc";

export default class Axis extends React.Component{

    constructor(props){
        super(props)
        this.state={
            name:"",
            error:false,
            age:""
        }
    }

    componentDidMount(){
        this.func(90,80)
    }

    func = async(no1,no2)=>{
        let url = "http://localhost/api/article/list";
        let options={
            method:"GET",
            url:url
        }

        try{
            let response = await axios(options)
            this.setState({
                age:response.data.studentAge
            })
        }
        catch(error){

        }
    }

    multiplyNumber(){
        return math.multiply(12,24)
    }

    render(){
        return <div>
            Hello
            <button onClick={()=>this.multiplyNumber()}>Multiply Numbers</button>
        </div>
    }

}