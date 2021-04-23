import React, {useState} from 'react'
import {GlobalStyle} from './globalStyles'
import Hero from './components/Hero'
import Products from './components/Products'
import {productData, productDataTwo} from './components/Products/data'
import Feature from './components/Feature'
import Footer from './components/Footer'
import { Switch, Route } from 'react-router-dom'
import Contact from './components/Contact/index'


function App() {
      const [isOpen, setIsOpen] = useState(false);
      const toggle = () => {
        setIsOpen(!isOpen);
      };
  return (
    <>
      <GlobalStyle />
      <Switch>
        <Route exact path="/">
          <Hero isOpen={isOpen} toggle={toggle} />
        </Route>
        <Route exact path="/decks">
          <Products
            heading="Choose &nbsp; your &nbsp; favorite"
            data={productData}
            isOpen={isOpen}
            toggle={toggle}
          />
          <Feature />
        </Route>
        <Route exact path="/wheels&apparel">
          <Products
            isOpen={isOpen}
            toggle={toggle}
            heading="Choose &nbsp; your &nbsp; favorite"
            data={productDataTwo}
          />
          <Feature />
        </Route>
        <Route exact path="/contact">
          <Contact isOpen={isOpen} toggle={toggle} />
          <Feature />
        </Route>
      </Switch>
      <Footer />
    </>
  );
}

export default App;
