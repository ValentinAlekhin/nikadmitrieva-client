import React from 'react';
import './App.scss';
import 'normalize.css'
import { Route, Switch, Redirect } from 'react-router-dom'
import Header from './layouts/header/Header'
import Footer from './layouts/footer/Footer'
import Index from './pages/Index/Index'
import Contact from './pages/Contact/Contact'
import About from './pages/About/About'
import Portfolio from './pages/Portfolio/Portfolio'
import Gallery from './pages/Gallery/Gallery'
import Login from './components/Login/Login'

function App() {
  const turnOfContextMenu = e => {
    // e.preventDefault();
  }

  return (
    <div onContextMenu={turnOfContextMenu} className="App">
      <Header/>

      <Login />

      <Switch>
        <Route path="/" exact component={Index}/>
        <Route path="/contact" component={Contact}/>
        <Route path="/about" component={About}/>
        <Route path="/:category" exact component={Portfolio}/>
        <Route path="/:category/:gallery" component={Gallery}/>
        <Redirect to={'/'}/>
      </Switch>
      
      <Footer/>
    </div>
  );
}

export default App;
