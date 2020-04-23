import React from 'react';
import { Route } from 'react-router-dom';

import MainContainer from './main/main_page_container';
import NavbarContainer from './navbar/navbar_container'

const App = () => (
    <div>
        <Route path='/' component={NavbarContainer}/>
        <Route exact path='/' component={MainContainer}/>
    </div>
);

export default App;