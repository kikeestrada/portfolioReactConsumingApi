import React from "react"
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"
import Mainmenu from './organisms/MainMenu'
import Banner from './organisms/Banner'
import Home from "../components/pages/Home"
import Episodes from "../components/pages/Episodes"

const AppRoutes = () => (
    <Router>
        <Mainmenu/>
        <Banner/>
        <Switch>
            <Route path = "/" exact component={Home}/>
            <Route path = "/Episodes" exact component={Episodes}/>
            <Route component={() => (
                <div className="ed-grid">
                    <h1>Página no encontrada</h1>
                </div>
            )}/>
        </Switch>
    </Router>

);

export default AppRoutes;