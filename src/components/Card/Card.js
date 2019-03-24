import React from "react"

function Card(props){

    return(
        
        <div className="card col-sm-4 mt-3">
            <div className="card-body">{props.crib.address}</div>
        </div>
        
    )
    
}


export default Card