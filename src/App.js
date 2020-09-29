import React from 'react';


import {BrowserRouter as Router, Route} from 'react-router-dom';

import Join from './Components/Join/Join';
import Chat from './Components/Chat/Chat';
import Test from './Components/Test/Test';
import Func from "./Components/Test/TestHooks";


const App = () => {
    return(
    <Router>
        <Route path='/' exact component={Func} />
        <Route path='/chat' component={Chat} />
    </Router>
    )
};

export default App;