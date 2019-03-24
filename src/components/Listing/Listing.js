import React from "react"

import Card from "../Card/Card"

class Listing extends React.Component{

    constructor(){
        super()
        this.state = {
            cribs: []
        }
    }

    render(){
        return(
            
            <div className="row">
                
                <Card />
                <Card />
                <Card />

            </div>
        )
    }
}


export default Listing