import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import {compose} from 'redux';
import {connect} from 'react-redux';
import {firestoreConnect} from 'react-redux-firebase';
import PropTypes from 'prop-types';
import Loading from '../layout/Loading'

class ClientDetails extends Component {
    render(){
        const {client} = this.props;
        if (client){
            return(
                <div>
                    <div className="row">
                        <div className="col-md-6">
                            <Link to="/" className= "btn btn-link">
                                <i className="fas fa-arrow-circle-left"></i>
                                {" "}Back To Dashboard
                            </Link>
                        </div>
                            <div className="col-md-6">
                              <div className="btn-group float-right">
                                   <Link to={`/client/edit/${client.id}`} className= "btn btn-dark">
                                   Edit
                                   </Link> 
                                   <button className="btn btn-danger">Delete</button>
                                </div>
                             </div>
                    </div>
                    <div className="card">
                    <h3 className="card-header">
                    {client.firstName} {client.lastName}
                    </h3>
                    <div className="card-body">
                    <div className="row">
                    <h4 className="col-md-6">
                    Client ID:{' '}{client.id}
                    </h4>
                    <div className="col-md-6">
                    Balance: ${client.balance}
                    </div>
                    </div>
                    <hr/>
                    </div>
                    </div>
                </div>)
        }
        else {
            return <Loading/>
        }
        
    }
}

export default compose(
    firestoreConnect(props => [
        {collection: 'clients', storeAs:'client', doc: props.match.params.id}
    ]),
    connect(({firestore: {ordered}}, props) => ({
        client: ordered.client && ordered.client[0]
    })))(ClientDetails);