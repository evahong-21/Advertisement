import React, {Component} from 'react';
import { Route } from 'react-router-dom';
import { Home, Insert, Detail, Put} from '../pages';

class App extends Component {
    render() {
        return (
            <div>
                <Route exact path="/" component={Home}/>
                <Route path="/insert" component={Insert}/>
                <Route path="/put/:id" component={Put}/>
                <Route path="/detail/:id" component={Detail}/>

            </div>
        );
    }
}

export default App;
