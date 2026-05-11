import { Redirect, Route } from 'react-router-dom';
import {
  IonApp, IonIcon, IonLabel, IonRouterOutlet, IonTabBar,
  IonTabButton, IonTabs, setupIonicReact
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { homeOutline, gridOutline, colorWandOutline, cartOutline, personOutline } from 'ionicons/icons';
import Home from './pages/Home';
import Products from './pages/Products';
import CustomPrinting from './pages/CustomPrinting';
import Cart from './pages/Cart';
import Account from './pages/Account';

setupIonicReact();

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonTabs>
        <IonRouterOutlet>
          <Route exact path="/home" component={Home} />
          <Route exact path="/products" component={Products} />
          <Route exact path="/custom-printing" component={CustomPrinting} />
          <Route exact path="/cart" component={Cart} />
          <Route exact path="/account" component={Account} />
          <Route exact path="/" render={() => <Redirect to="/home" />} />
        </IonRouterOutlet>
        
        <IonTabBar slot="bottom">
          <IonTabButton tab="home" href="/home">
            <IonIcon icon={homeOutline} />
            <IonLabel>Home</IonLabel>
          </IonTabButton>
          <IonTabButton tab="products" href="/products">
            <IonIcon icon={gridOutline} />
            <IonLabel>Products</IonLabel>
          </IonTabButton>
          <IonTabButton tab="custom-printing" href="/custom-printing">
            <IonIcon icon={colorWandOutline} />
            <IonLabel>Custom</IonLabel>
          </IonTabButton>
          <IonTabButton tab="cart" href="/cart">
            <IonIcon icon={cartOutline} />
            <IonLabel>Cart</IonLabel>
          </IonTabButton>
          <IonTabButton tab="account" href="/account">
            <IonIcon icon={personOutline} />
            <IonLabel>Account</IonLabel>
          </IonTabButton>
        </IonTabBar>
      </IonTabs>
    </IonReactRouter>
  </IonApp>
);

export default App;