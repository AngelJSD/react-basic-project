import React from "react"

function Card(props){

    return(
        <div className="col-sm-4 mt-3">
            <div className="card">
                <img className="card-img-top" src={"./assets/images/"+props.crib.image+".jpg"} alt="Card image cap"></img>
                <div className="card-body">{props.crib.address}</div>
            </div>
        </div>
        
    )
    
}


export default Card