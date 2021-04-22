import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import { ScreenLogin } from '../components/ScreenLogin';
import { ScreenSchedule } from '../components/ScreenSchedule';

export const AppRouter = () => {
    return (
        <Router>
            <div>
                <Switch>
                    <Route
                        exact path="/login" component={ScreenLogin} />
                    <Route
                        exact
                        path="/delivery" component={ScreenSchedule} />
                </Switch>
            </div >
        </Router>
    )
}
