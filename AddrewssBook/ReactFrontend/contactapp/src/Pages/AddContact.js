import React, { Component } from 'react'
import axios from 'axios';


export class AddContact extends Component {
    constructor(props) {
        super(props)
        this.state = {
            Name: '',
        }
    }

    AddContact = () => {
        axios.post('http://localhost:2345/api/Phonebook/Create', {
            Id: null,
            Name: this.state.Name
        })
            .then(json => {
                if (json.data.Status === 'Success') {
                    console.log(json.data.Status);
                    alert("Data Save Successfully");
                    this.props.history.push('/ListContacts')
                }
                else {
                    alert('Data not Saved');
                    debugger;
                }
            })
    }

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-sm-12 btn btn-primary" style={{ "margin": "6px" }}>
                        Add New Contact
    </div>
                </div>
                <div className="card o-hidden border-0 shadow-lg my-5" style={{ "marginTop": "5rem!important" }}>
                    <div className="card-body p-0">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="p-5">
                                    <div className="text-center">
                                        <h1 className="h4 text-gray-900 mb-4">Create a New Contact!</h1>
                                    </div>
                                    <form className="user">
                                        <div className="form-group row">
                                            <input type="text" name="Name" onChange={this.handleChange} value={this.state.FirstName} className="form-control" id="Name" placeholder="Name" />
                                        </div>
                                        <button type="button" onClick={this.AddContact} className="btn btn-primary  btn-block">
                                            Create Contact</button>
                                        <hr />
                                    </form>
                                    <hr />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default AddContact