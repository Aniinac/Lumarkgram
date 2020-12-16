import React from "react";
import { Router } from "react-router-dom";

import App from "../containers/app";
import FavRoute from "./fav";
import UserRoute from "./user";
import HomeRoute from "./home";

function Routes(props) {
    const { history } = props;
    return (
        <App {...props}>
            <Router history={history}>
               <UserRoute/>
               <FavRoute />
               <HomeRoute /> 
            </Router>
        </App>
    );
}
export default Routes;
