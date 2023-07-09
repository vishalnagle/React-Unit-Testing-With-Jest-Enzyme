import React from "react";

export default class Table extends React.Component{

    constructor(props){
        super(props)
    }


    render(){
        return (<table className="custom-border">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Demo</td>
                    <td>NA</td>
                </tr>
            </tbody>
        </table>)
    }

}
