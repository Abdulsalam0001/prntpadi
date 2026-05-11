import { Redirect, Route } from 'react-router-dom';
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
  setupIonicReact
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { homeOutline, gridOutline, colorWandOutline, cartOutline, personOutline } from 'ionicons/icons';
import Splash from './pages/Splash';
import Home from './pages/Home';
import Products from './pages/Products';
import CustomPrinting from './pages/CustomPrinting';
import Cart from './pages/Cart';
import Account from './pages/Account';

/* Core CSS required for Ionic components */
import '@ionic/react/css/core.css';
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

setupIonicReact({
  mode: 'ios'
});

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonTabs>
        <IonRouterOutlet>
          {/* Splash screen is shown first */}
          <Route exact path="/splash" component={Splash} />
          
          {/* Main tab pages */}
          <Route exact path="/home" component={Home} />
          <Route exact path="/products" component={Products} />
          <Route exact path="/custom-printing" component={CustomPrinting} />
          <Route exact path="/cart" component={Cart} />
          <Route exact path="/account" component={Account} />
          
          {/* Default redirect to splash */}
          <Route exact path="/" render={() => <Redirect to="/splash" />} />
        </IonRouterOutlet>
        
        <IonTabBar slot="bottom" style={{
          '--background': 'white',
          '--border': '1px solid #f0f0f0',
          padding: '4px 0'
        }}>
          <IonTabButton tab="home" href="/home" style={{ '--color-selected': '#667eea' }}>
            <IonIcon icon={homeOutline} />
            <IonLabel style={{ fontSize: '11px' }}>Home</IonLabel>
          </IonTabButton>
          
          <IonTabButton tab="products" href="/products" style={{ '--color-selected': '#667eea' }}>
            <IonIcon icon={gridOutline} />
            <IonLabel style={{ fontSize: '11px' }}>Products</IonLabel>
          </IonTabButton>
          
          <IonTabButton tab="custom-printing" href="/custom-printing" style={{ '--color-selected': '#667eea' }}>
            <IonIcon icon={colorWandOutline} />
            <IonLabel style={{ fontSize: '11px' }}>Custom</IonLabel>
          </IonTabButton>
          
          <IonTabButton tab="cart" href="/cart" style={{ '--color-selected': '#667eea' }}>
            <IonIcon icon={cartOutline} />
            <IonLabel style={{ fontSize: '11px' }}>Cart</IonLabel>
          </IonTabButton>
          
          <IonTabButton tab="account" href="/account" style={{ '--color-selected': '#667eea' }}>
            <IonIcon icon={personOutline} />
            <IonLabel style={{ fontSize: '11px' }}>Account</IonLabel>
          </IonTabButton>
        </IonTabBar>
      </IonTabs>
    </IonReactRouter>
  </IonApp>
);

export default App;