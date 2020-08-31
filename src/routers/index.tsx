import * as React from 'react'
import { Switch, Route, Router } from 'react-router-dom'
import Home from '../pages/home/Home'
import About from '../pages/about/About'
import { history } from '../utils/history'

const MyRouter = () => {
    return (
        <Router history={history}>
            <Switch>
                <Route path='/' exact component={Home} />
                <Route path='/about' component={About} />
            </Switch>
        </Router>
    )
}

export default MyRouter
