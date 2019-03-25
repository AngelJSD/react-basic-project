import React from "react"
import "./Card.css"

class Card extends React.Component {

    constructor(){

        super()
        this.state = {
            showDetails: false
        }
        this.handleOnCLick = this.handleOnCLick.bind(this)
    }

    handleOnCLick(){
        this.setState(prevState => {

            return{
                showDetails: !prevState.showDetails
            }
        })
    }

    render(){
        return(
            <div className="col-sm-4 mt-3">
                <div className="card my-card">
                    <img className="card-img-top" src={"./assets/images/"+this.props.crib.image+".jpg"} alt="Card image cap"></img>
                    <div className="card-body">
                    {!this.state.showDetails ? 
                    <div>
                        <h4>
                        <span className="badge badge-primary">
                            { this.props.crib.type }
                        </span>
                        </h4>
                        <h3>
                        <i className="fa fa-tag"></i> 
                            { 
                                this.props.crib.price.toLocaleString('en-US', {
                                    style: 'currency',
                                    currency: 'USD',
                                })
                            }
                        </h3>
                        <h4>
                        <i className="fa fa-home"></i> 
                            { this.props.crib.address }
                        </h4>

                        <hr/>

                        <button 
                            className="btn btn-sm btn-success"
                            onClick={this.handleOnCLick}
                        >
                        Details
                        </button>

                    </div>
                    :
                    <div>
                        <div className="details">
                        <h4>
                            <span className="badge badge-primary mr-1">
                            Beds: { this.props.crib.bedrooms }
                            </span>
                            <span className="badge badge-primary mr-1">
                            Baths: { this.props.crib.bathrooms }
                            </span>
                            <span className="badge badge-primary mr-1">
                            SqFt: { this.props.crib.area }
                            </span>
                        </h4>

                        <p>{ this.props.crib.description }</p>

                        <hr/>

                        <button
                            className="btn btn-sm btn-danger"
                            onClick={this.handleOnCLick}
                        >
                            Close
                        </button>

                        </div>
                    </div>
                    }
                    </div>
                </div>
            </div>
            
        )
    }
    
}


export default Card