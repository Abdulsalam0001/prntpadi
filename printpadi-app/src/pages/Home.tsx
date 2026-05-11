import { IonPage, IonHeader, IonToolbar, IonContent, IonCard, IonCardContent, IonButton, IonBadge, IonIcon } from '@ionic/react';
import { flashOutline, star, chevronForwardOutline, arrowForward } from 'ionicons/icons';
import { useHistory } from 'react-router-dom';
import '../theme/printpadi.css';

const Home: React.FC = () => {
  const history = useHistory();

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <div slot="start" style={{ padding: '8px 12px' }}>
            <img src="/assets/logo.svg" alt="PrintPadi" style={{ height: '36px' }} />
          </div>
        </IonToolbar>
      </IonHeader>
      
      <IonContent>
        <div style={{ padding: '16px' }}>
          {/* Hero Section - Exact match */}
          <div className="printpadi-hero">
            <h1>Grab Up to 50% Off</h1>
            <p>On Your First Bulk Purchase</p>
            <IonButton 
              expand="block" 
              color="warning" 
              size="large"
              style={{
                fontWeight: 800,
                fontSize: '16px',
                '--background': '#FFD93D',
                '--color': '#2D3436',
                '--border-radius': '12px',
                marginTop: '8px'
              }}
              onClick={() => history.push('/products')}
            >
              <IonIcon icon={flashOutline} slot="start" />
              Shop Flash Sale Now
            </IonButton>
          </div>

          {/* Section: Gift Shop Deals */}
          <div style={{ marginBottom: '20px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
              <h2 style={{ fontWeight: 700, fontSize: '18px', margin: 0 }}>🎁 Gift Shop Deals</h2>
              <IonButton fill="clear" size="small" onClick={() => history.push('/products')}>
                View All <IonIcon icon={chevronForwardOutline} slot="end" />
              </IonButton>
            </div>
            
            {/* Product Card */}
            <IonCard className="printpadi-product-card" style={{ margin: '0 0 16px' }}>
              <div className="printpadi-product-image">
                <span style={{ fontSize: '64px' }}>💳</span>
              </div>
              <IonCardContent>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                  <div>
                    <h3 style={{ fontWeight: 700, margin: '0 0 6px', fontSize: '16px' }}>Premium Business Cards</h3>
                    <p style={{ color: '#636E72', margin: '0 0 8px', fontSize: '14px' }}>Matte Finish</p>
                  </div>
                  <span className="printpadi-rating-badge">
                    <IonIcon icon={star} style={{ fontSize: '12px' }} /> 4.5
                  </span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span className="printpadi-price">₦800</span>
                  <span className="printpadi-orders">2.5k+ orders</span>
                </div>
                <IonButton expand="full" size="small" style={{ marginTop: '12px', '--background': '#667eea' }}>
                  Shop Now <IonIcon icon={arrowForward} slot="end" />
                </IonButton>
              </IonCardContent>
            </IonCard>
          </div>

          {/* Section: Custom Printing Deals */}
          <div style={{ marginBottom: '20px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
              <h2 style={{ fontWeight: 700, fontSize: '18px', margin: 0 }}>✨ Custom Printing Deals</h2>
              <IonButton fill="clear" size="small" onClick={() => history.push('/custom-printing')}>
                View All <IonIcon icon={chevronForwardOutline} slot="end" />
              </IonButton>
            </div>
            
            <IonCard className="printpadi-product-card" style={{ margin: '0 0 16px' }}>
              <div className="printpadi-product-image">
                <span style={{ fontSize: '64px' }}>🃏</span>
              </div>
              <IonCardContent>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                  <div>
                    <h3 style={{ fontWeight: 700, margin: '0 0 6px', fontSize: '16px' }}>Premium Business Cards</h3>
                    <p style={{ color: '#636E72', margin: '0 0 8px', fontSize: '14px' }}>Custom Matte Finish</p>
                  </div>
                  <span className="printpadi-rating-badge">
                    <IonIcon icon={star} style={{ fontSize: '12px' }} /> 4.5
                  </span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div>
                    <span className="printpadi-price">₦750 - ₦850</span>
                    <p className="printpadi-moq" style={{ margin: '2px 0 0' }}>MOQ: 10 Pcs</p>
                  </div>
                  <span className="printpadi-orders">2.5k+ orders</span>
                </div>
                <IonButton expand="full" size="small" style={{ marginTop: '12px', '--background': '#667eea' }}>
                  Customize <IonIcon icon={arrowForward} slot="end" />
                </IonButton>
              </IonCardContent>
            </IonCard>
          </div>

          {/* Flash Sale Banner */}
          <div className="printpadi-flash-sale">
            <h2 style={{ margin: '0 0 8px', fontWeight: 900, fontSize: '20px' }}>Flash Sale!</h2>
            <p style={{ fontSize: '16px', margin: '8px 0', fontWeight: 600 }}>
              500 business cards from ₦4,000
            </p>
            <p style={{ fontSize: '13px', opacity: 0.9, margin: '0 0 12px' }}>
              Premium matte finish included
            </p>
            <IonButton 
              expand="block" 
              color="light" 
              size="small"
              style={{ 
                '--background': 'white', 
                '--color': '#FF6B6B',
                fontWeight: 700 
              }}
              onClick={() => history.push('/products')}
            >
              Grab This Deal
            </IonButton>
          </div>

          {/* Explore Products Button */}
          <IonButton 
            expand="block" 
            fill="outline" 
            style={{
              '--border-color': '#667eea',
              '--color': '#667eea',
              borderRadius: '12px',
              fontWeight: 600,
              marginTop: '8px'
            }}
            onClick={() => history.push('/products')}
          >
            Explore All Products
          </IonButton>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Home;