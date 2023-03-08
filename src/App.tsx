import React from 'react';
import { Router, Switch, Redirect, Route } from "react-router-dom";
import { Footer } from './components/footer';
import { createBrowserHistory, History } from 'history';
import { Header } from './components/header';
import { Home } from './pages/home';
import { Banner } from './components/banner';
import { Container } from './styles';
import { Search } from './pages/search';

const history: History = createBrowserHistory()

const App: React.FC = () => {
  return (
    <Container>
      <Router history={history}>
        <Header />
        <Banner history={history} />
        <Switch>
          <Route path='/' exact>
            <Home history={history} />
          </Route>
          <Route path='/search' exact>
            <Search history={history} />
          </Route>
          <Redirect to='/' />
        </Switch>
        <Footer />
       </Router>
    </Container>
  )
}

export default App