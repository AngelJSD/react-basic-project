import React from "react"

import Card from "../Card/Card"
import AddListing from "../AddListing/AddListing"

class Listing extends React.Component{

    constructor(){
        super()
        this.state = {
            cribs: [],
            sortDirection: 'asc',
            sortField: 'price'
        }
        this.newCribCallback = this.newCribCallback.bind(this)
        this.handleOnChange = this.handleOnChange.bind(this)
    }

    componentDidMount(){

        fetch('./data/cribs.json')
            .then(response =>{
                return response.json()
            })
            .then(data => {
                this.setState({cribs: data})
                this.sortCribs()
                //console.log(this.state.cribs)
            })
    }

    newCribCallback(data){
        
        console.log(data)
        this.setState(prevState => {
            const newCribs = [data, ...prevState.cribs]
            return{
                cribs: newCribs,
                sortDirection: 'none'
            }
        })
    }

    handleOnChange(event){
        
        if(event.target.name==="sort-field"){
            this.setState({sortField: event.target.value})
        }
        else if(event.target.name==="asc"){
            this.setState(prevState => {
                return{
                    sortDirection: 'asc'
                }
            })
        }
        else if(event.target.name==="des"){
            this.setState(prevState => {
                return{
                    sortDirection: 'des'
                }
            })
        }
        
        this.sortCribs()
    }

    sortCribs(){
        
        this.setState(prevState =>{
            console.log(prevState.sortField)
            let modifier = 1;

            if (prevState.sortDirection === "des") {
                modifier = -1;
            }

            const sortedCribs = prevState.cribs.sort((a, b) => {

                if (a[prevState.sortField] < b[prevState.sortField]) {
                    return -1 * modifier;
                } else {
                    return 1 * modifier;
                }
            });
            
            return{
                cribs: sortedCribs
            }
        }) 
    }

    render(){
        
        let sortFields = [
            'price',
            'address',
            'area',
            'bathrooms',
            'bedrooms',
            'type'
        ];
        let sortOptions = sortFields.map(field =>{
            return  <option value={field}> {field} </option>
        })

        const cardCribs = this.state.cribs.map( crib =>{
            return <Card key={crib.id} crib={crib} />
        })

        return(

            <div className="container">
                <AddListing newCribCallback={this.newCribCallback}/>

                
                    <div className="card mt-3">
                    <div className="card-body">
                        <div className="row">
                        <div className="col-sm-4">
                        <label>Sort By</label>
                        <select 
                            className="form-control" 
                            name="sort-field" 
                            id="sort-field"
                            onChange={this.handleOnChange} 
                            >
                            {sortOptions}
                        </select>
                        
                        </div>
                        <div className="col-sm-4">
                        <label>Sort Direction</label>
                        <div>
                            
                            <button 
                                className={"btn btn-primary mr-1 "+(this.state.sortDirection==='asc' && "btn-success")}
                                name="asc"
                                onClick={this.handleOnChange}
                            >
                                Asc
                            </button>

                            <button 
                                className={"btn btn-primary mr-1 "+(this.state.sortDirection==='des' && "btn-success")}
                                name="des"
                                onClick={this.handleOnChange}
                            >
                                Des
                            </button>

                        </div>
                        </div>
                        </div>
                    </div>
                    </div>
                

                <div className="row">
                    
                    {cardCribs}

                </div>
            </div>
            
        )
    }
}


export default Listing