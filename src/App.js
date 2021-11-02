import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Area from './components/AreaItem/Area';
import AreaNew from './components/AreaItem/AreaNew';
import { useEffect } from 'react';

import AreaEdit from './components/AreaItem/AreaEdit';

 
function App() {



  return (
    <Router>
        <Route exact path='/' component={Area} />
        <Route exact path='/area-new' component={AreaNew} />
        <Route exact path='/area-edit' component={AreaEdit} />
  </Router>
     );
}

export default App;