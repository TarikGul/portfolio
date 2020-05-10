import React from 'react';
import { Route } from 'react-router-dom';

import { AuthRoute } from '../util/route_util';

import MainContainer from './main/main_page_container';
import NavbarContainer from './navbar/navbar_container';
import MapContainer from './location/map_container';
import ContactContainer from './contact/contact_container';
import LoginFormContainer from './session/login_form_container';
import Modal from './modal/modal';

const App = () => (
    <div>
        <Modal />
        <Route path='/' component={NavbarContainer}/>
        <Route exact path='/' component={MainContainer}/>
        <Route exact path='/location' component={MapContainer}/>
        <Route exact path='/contact' component={ContactContainer}/>
        <AuthRoute exact path="/login" component={LoginFormContainer} />
    </div>
);

export default App;