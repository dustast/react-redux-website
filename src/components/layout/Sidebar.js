import React from 'react';
//import Clients from '../clients/Clients'
import { Link } from  'react-router-dom';

export default () =>{
return(
    <Link to="/client/add" className="btn btn-success btn-block">
    <i className="fas fa-plus"/> Add Account
    </Link>
    )
}
