import React from "react";
import { Switch, Route } from 'react-router-dom';

const Router= () => {
    return (
        <Switch>
            <Route exact path='/' component={App} />
        </Switch>
    );
};

export default Router;
