import React from "react"

class AddListing extends React.Component{

    constructor(){

        super()
        this.state = {
            

            id: "",
            type: "",
            price: "",
            address: "",
            description: "",
            bedrooms: "",
            bathrooms: "",
            area: "",
            image:"default-crib"
            
        }
        this.handleOnSubmit = this.handleOnSubmit.bind(this)
        this.handleOnChange = this.handleOnChange.bind(this)
    }

    handleOnChange(event){
        const {name, value, type, checked} = event.target
        type === "checkbox" ? this.setState({ [name]: checked }) : this.setState( {[name]: value })
    }

    handleOnSubmit(event){
        event.preventDefault();
        this.props.newCribCallback(this.state);
        this.setState({
            id: "",
            type: "",
            price: "",
            address: "",
            description: "",
            bedrooms: "",
            bathrooms: "",
            area: "",
            image:"default-crib"
        })
    }

    render(){
        let propertyTypes = ['House', 'Condo', 'Duplex'];
        let typeOptions = propertyTypes.map(type =>{
            return <option value={type}>{type}</option>
        })
        typeOptions = [<option value="">Type</option>, ...typeOptions]

        return(
            <div className="card mt-3">
                <div className="card-header">
                    <h4>Add a Listing</h4>
                </div>

                <div className="card-body">

                    <form onSubmit={this.handleOnSubmit}>
                        <div className="form-row">
                            <div className="form-group col-sm-4">
                                <label for="address" className="">Address</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Address"
                                    name="address"
                                    value={this.state.address}
                                    onChange={this.handleOnChange}
                                    required
                                />
                            </div>
                            <div className="form-group col-sm-4">
                                <label className="">Price</label>
                                <input
                                    type="number"
                                    className="form-control"
                                    placeholder="Price"
                                    name="price"
                                    value={this.state.price}
                                    onChange={this.handleOnChange}
                                    required
                                />
                            </div>
                            <div className="form-group col-sm-4">
                                <label for="property-type" className="">Property Type</label>
                                <select
                                    name="type"
                                    id="property-type"
                                    className="form-control"
                                    value={this.state.type}
                                    onChange={this.handleOnChange}
                                    required>
                                    {typeOptions}
                                </select>
                            </div>
                            <div className="form-group col-sm-6">
                                <label for="description" className="">Desciption</label>
                                <textarea
                                    type="text"
                                    className="form-control"
                                    placeholder="Description"
                                    name="description"
                                    value={this.state.description}
                                    onChange={this.handleOnChange}
                                    required>
                                </textarea>
                            </div>
                            <div className="form-group col-sm-2">
                                <label for="beds" className="">Beds</label>
                                <input
                                    type="number"
                                    className="form-control"
                                    placeholder="Beds"
                                    name="bedrooms"
                                    value={this.state.bedrooms}
                                    onChange={this.handleOnChange}
                                    required
                                />
                            </div>
                            <div className="form-group col-sm-2">
                                <label for="baths" className="">Baths</label>
                                <input
                                    type="number"
                                    className="form-control"
                                    placeholder="Baths"
                                    name="bathrooms"
                                    value={this.state.bathrooms}
                                    onChange={this.handleOnChange}
                                    required
                                />
                            </div>
                            <div className="form-group col-sm-2">
                                <label for="sqft" className="">SqFt</label>
                                <input
                                    type="number"
                                    className="form-control"
                                    placeholder="SqFt"
                                    name="area"
                                    value={this.state.area}
                                    onChange={this.handleOnChange}
                                    required
                                />
                            </div>
                            <div className="form-group col-sm-12">
                                <button
                                    className="btn btn-primary listing-button"
                                    type="submit"
                                    onClick={this.handleOnClick}
                                >
                                    Add
                                </button>
                            </div>
                        </div>
                    </form>

                </div>  
            </div>

        )
    }
}

export default AddListing