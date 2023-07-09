import React from "react";


export class Greet extends React.Component{
    constructor(props:object){
        super(props)
    }

    render(){
        return <div>
            <h1>Hello</h1>
        </div>
    }
}


export function Sum (){
    return 1+2
};