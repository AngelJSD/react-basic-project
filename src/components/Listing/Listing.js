import React from "react"

import Card from "../Card/Card"
import AddListing from "../AddListing/AddListing"

class Listing extends React.Component{

    constructor(){
        super()
        this.state = {
            cribs: []
        }
        this.newCribCallback = this.newCribCallback.bind(this)
    }

    componentDidMount(){

        fetch('./data/cribs.json')
            .then(response =>{
                return response.json()
            })
            .then(data => {
                this.setState({cribs: data})
                //console.log(this.state.cribs)
            })
    }

    newCribCallback(data){
        
        console.log(data)
        this.setState(prevState => {
            const newCribs = [data, ...prevState.cribs]
            return{
                cribs: newCribs
            }
        })
    }

    render(){

        const cardCribs = this.state.cribs.map( crib =>{
            return <Card key={crib.id} crib={crib} />
        })

        return(
            
            <div className="container">
                <AddListing newCribCallback={this.newCribCallback}/>
            
                <div className="row">
                    
                    {cardCribs}

                </div>
            </div>
            
        )
    }
}


export default Listing