import React, { Component } from 'react'
import axios from 'axios'
import ContactCard from '../Components/ContactCard';

export class ContactList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            ContactList: []
        }
    }
    componentDidMount() {
        axios.get('http://localhost:2345/api/Phonebook/Get').then(response => {
            console.log(response.data);
            this.setState({
                ContactList: response.data
            });
        });
    }
    
    handleChange = (e) => {
        axios.post('http://localhost:2345/api/Phonebook/Search', {
            Seatch: e.target.value,
        })
            .then(json => {
                console.log(json.data);
                this.setState({
                    ContactList: json.data
                });
            })
    }

    render() {
        const items = []
        for (const [index, value] of this.state.ContactList.entries()) {
            items.push(<li key={index}>{value}</li>)
        }
        return (

            <div className="container-fluid">
                <div className="row">
                    <div className="col-sm-12 btn btn-primary" style={{ "margin": "6px" }}>Contact List</div>
                </div>
                <div className="row">
                    <div className="col-sm-12" style={{ "margin-bottom": "6px" }}>
                        <input type="text" name="Name" onChange={this.handleChange} value={this.state.FirstName} className="form-control" id="Name" placeholder="Search Name" />
                    </div>
                </div>
                <div className="row">
                    {
                        this.state.ContactList.map((p, index) => {
                            return <ContactCard contact={p} />
                        })
                    }
                </div>
            </div>
        )
    }
}

export default ContactList