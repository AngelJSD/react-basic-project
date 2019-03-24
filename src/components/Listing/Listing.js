import React from "react"

import Card from "../Card/Card"

class Listing extends React.Component{

    constructor(){
        super()
        this.state = {
            cribs: []
        }
    }

    componentDidMount(){

        fetch('./data/cribs.json')
            .then(response =>{
                return response.json()
            })
            .then(data => {
                this.setState({cribs: data})
                console.log(this.state.cribs)
            })
    }

    render(){

        const cardCribs = this.state.cribs.map( crib =>{
            return <Card key={crib.id} crib={crib} />
        } )
        return(
            
            <div className="row">
                
                {cardCribs}

            </div>
        )
    }
}


export default Listing