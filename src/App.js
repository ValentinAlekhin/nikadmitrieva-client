import React from 'react';
// import logo from './logo.svg';
import './App.scss';
import 'normalize.css'
import {Route} from 'react-router-dom'
import Store from './store/store'
import Header from './layouts/header/Header'
import Footer from './layouts/footer/Footer'
import Index from './pages/Index/Index'
import Contact from './pages/Contact/Contact'
import About from './pages/About/About'
import Portfolio from './pages/Portfolio/Portfolio'
import Gallery from './pages/Gallery/Gallery'

// console.log(Store.getPortfolioCardsByCategory('photo'))

function App() {
  const turnOfContextMenu = e => {
    e.preventDefault();
  }

  return (
    <div onContextMenu={turnOfContextMenu} className="App">
      <Header/>
      <Route path="/" exact component={Index}/>
      <Route path="/contact" component={Contact}/>
      <Route path="/about" component={About}/>
      { Store.getPortfolioNamesAndRouts().map(({route, page}, index) => {
        return (
        <Route key={index} path={route}>
          <Portfolio cards={Store.getPortfolioCardsByCategory(page)}/>
        </Route>
        )
      }) }

      { Store.allGalleries.map(({route, title, imgArr}, index) => {
        return (
          <Route key={index} path={route}>
            <Gallery title={title} imgArr={imgArr}/>
          </Route>
        )
      }) }
      {/* <Route path="/dust">
        <Gallery title="Пыль" imgArr={Store.getGalleryByCategoryAndTitle('photo', 'dust')}/>
      </Route> */}
      <Footer/>
    </div>
  );
}

export default App;
