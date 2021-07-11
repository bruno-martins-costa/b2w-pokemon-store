import { useContext } from 'react';
import { StoresContext } from './contexts/Stores/StoresContext';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Home, Store, Pokemon, NotFound } from './pages';
import { RoutesListener } from './components/RoutesListener';
import { Header } from './components/Header';
import { Cart } from './components/Cart';
import { Modal } from './components/Modal';
import { PurchaseMessage } from './components/PurchaseMessage';

export function Routes() {
  const { currentStoreType } = useContext(StoresContext);

  return (
    <BrowserRouter>
      <RoutesListener />
      {!!currentStoreType.value && <Header />}
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/store/:type' exact component={Store} />
        <Route path='/store/:type/pokemon/:name' component={Pokemon} />
        <Route path='*' component={NotFound} />
      </Switch>
      <Cart />
      <Modal>
        <PurchaseMessage />
      </Modal>
    </BrowserRouter>
  );
}
