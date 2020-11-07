import React from 'react';
import { BrowserRouter, Switch, Route} from 'react-router-dom';

import Landing from './Pages/Landing';
import OrphanagesMap from './Pages/OrphanagesMap';
import Orphanage from './Pages/Orphanage';
import CreateOrphanage from './Pages/CreateOrphanage';

function Routes() {
    return (
        <BrowserRouter>
            <Route path="/" exact component={Landing} />
            <Route path="/app" component={OrphanagesMap} />
            <Route path="/orphanages/create" exact component={CreateOrphanage} />
            <Route path="/orphanages/:id" component={Orphanage} />
        </BrowserRouter>
    );
}

export default Routes;