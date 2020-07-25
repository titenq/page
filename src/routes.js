import React, { lazy, Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';

const Home = lazy(() => import('./pages/Home'));
const Tecnologias = lazy(() => import('./pages/Tecnologias'));
const Portfolio = lazy(() => import('./pages/Portfolio'));
const Contatos = lazy(() => import('./pages/Contatos'));
const PageNotFound = lazy(() => import('./pages/PageNotFound'));

const Routes = () => {
  return (
    <Suspense fallback={<h1>Carregando...</h1>}>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/tecnologias" component={Tecnologias} />
        <Route exact path="/portfolio" component={Portfolio} />
        <Route exact path="/contatos" component={Contatos} />
        <Route component={PageNotFound} />
      </Switch>
    </Suspense>
  );
};

export default Routes;
