import React from 'react';
import { Route } from 'react-router-dom';

import MainContainer from './main/main_page_container';
import NavbarContainer from './navbar/navbar_container';
import MapContainer from './location/map_container';
import Modal from './modal/modal';

const App = () => (
    <div>
        <Modal />
        <Route path='/' component={NavbarContainer}/>
        <Route exact path='/' component={MainContainer}/>
        <Route exact path='/location' component={MapContainer}/>
    </div>
);

export default App;