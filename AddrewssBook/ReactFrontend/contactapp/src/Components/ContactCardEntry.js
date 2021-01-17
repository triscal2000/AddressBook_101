import React, { Component } from 'react'

export class ContactCardEntry extends Component {
    constructor(props) {
        super(props)
        this.state = {
            entry: props.entry
        }
    }

    render() {

        return (
            <div key={this.state.entry.Id} className="row">
                <div className="col-sm-4 smallLabel">
                    {this.state.entry.Name}
                </div>
                <div className="col-sm-7 col mr-2">
                    {this.state.entry.PhoneNumber}
                </div>
            </div>
        )

    }
}

export default ContactCardEntry