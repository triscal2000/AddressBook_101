import React, { Component } from 'react'
import ContactCardEntry from './ContactCardEntry'
import { Link } from 'react-router-dom'

export class ContactCard extends Component {
    constructor(props) {
        super(props)
        this.state = {
            contact: props.contact
        }
    }

    render() {

        return <div key={this.state.contact.Id} className="col-xl-3 col-md-6 mb-4">
            <div className="card">
                <div className="card-header py-3">
                    <h6 className="m-0 font-weight-bold text-primary">  <img style={{ "height": "25px" }} src="https://img.icons8.com/nolan/64/contact-card.png" alt="Contact" />Contact Details</h6>
                </div>
                <div className="card-body">
                    <div className="row no-gutters align-items-center">
                        <div className="form-group row">
                            <div className="col-sm-12">
                                <div className="row">
                                    <div className="col-sm-4">
                                        <img src="https://img.icons8.com/office/16/000000/user.png" alt="user" />
                                    </div>
                                    <div className="col-sm-7 col mr-2">
                                        {this.state.contact.Name}
                                    </div>
                                </div>
                                {this.state.contact.Entries &&
                                    this.state.contact.Entries.map((p, index) => {
                                        return <ContactCardEntry entry={p} />
                                    })
                                }
                                <div className="row">
                                    <div className="center">
                                    <Link to={`/AddEntry/${this.state.contact.Id}/${this.state.contact.Name}`} className="nav-link"><img src="https://img.icons8.com/office/16/add-to-favorites--v2.png" alt="Add"></img></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    }
}

export default ContactCard