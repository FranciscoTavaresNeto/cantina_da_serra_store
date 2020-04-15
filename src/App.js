import React from 'react';
import './App.css';
import Card from './ui/Card.js';
import NavBar from './ui/NavBar.js';
import Vip from './container/vip.js'
import './logo.svg'
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";

function App() {
  return (
    <div className="App">
        <header className="App-header">
          <NavBar />
        </header>
          <Router>
          <Card 
          title={'Clientes VIP'}
          logo={<img src="?" className="rounded-circle" alt="O logo devia estar aqui"/>}
          action={<Link to="/vip"/>}
          />
          <Card 
          title={'Maiores Vendas'}
          logo={<img src="#" className="rounded-circle" alt="O logo devia estar aqui"/>}
          />
          <Card 
          title={'Clientes Mais Fiéis'}
          logo={<img src="#" className="rounded-circle" alt="O logo devia estar aqui"/>}
          />
          <Card 
          title={'Recomendações'}
          logo={<img src="#" className="rounded-circle" alt="O logo devia estar aqui"/>}
          />
          <Switch>                        
            <Route path="/vip">
              <Vip />
            </Route>            
          </Switch>
          </Router>                   
    </div>      
  );
}

export default App;