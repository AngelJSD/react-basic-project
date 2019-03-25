import React from "react"

function Card(props){

    return(
        <div className="col-sm-4 mt-3">
            <div className="card">
                <img className="card-img-top" src={"./assets/images/"+props.crib.image+".jpg"} alt="Card image cap"></img>
                <div className="card-body">
                <div>
                    <h4>
                    <span className="badge badge-primary">
                        { props.crib.type }
                    </span>
                    </h4>
                    <h3>
                    <i className="fa fa-tag"></i> 
                        { props.crib.price}
                    </h3>
                    <h4>
                    <i className="fa fa-home"></i> 
                        { props.crib.address }
                    </h4>

                    <hr/>

                    <button 
                        className="btn btn-sm btn-success"
                    >
                    Details
                    </button>

                </div>

                <div>
                    <div className="details">
                    <h4>
                        <span className="badge badge-primary mr-1">
                        Beds: { props.crib.bedrooms }
                        </span>
                        <span className="badge badge-primary mr-1">
                        Baths: { props.crib.bathrooms }
                        </span>
                        <span className="badge badge-primary mr-1">
                        SqFt: { props.crib.area }
                        </span>
                    </h4>

                    <p>{ props.crib.description }</p>

                    <hr/>

                    <button
                        className="btn btn-sm btn-danger"
                    >
                        Close
                    </button>

                    </div>
                </div>
                </div>
            </div>
        </div>
        
    )
    
}


export default Card