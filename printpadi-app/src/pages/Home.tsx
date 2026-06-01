import { IonPage, IonHeader, IonToolbar, IonContent, IonCard, IonCardContent, IonButton, IonBadge, IonIcon } from '@ionic/react';
import { flashOutline, star, chevronForwardOutline } from 'ionicons/icons';
import { useHistory } from 'react-router-dom';
import '../theme/printpadi.css';

const Home: React.FC = () => {
  const history = useHistory();

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar style={{ '--background': 'white' }}>
          <img 
            src="/assets/logo.svg" 
            alt="PrintPadi" 
            style={{ height: '36px', marginLeft: '12px' }} 
          />
        </IonToolbar>
      </IonHeader>
      
      <IonContent style={{ '--background': '#F8F9FA' }}>
        <div style={{ padding: '16px' }}>
          
          {/* HERO SECTION - Exact match to your website */}
          <div style={{
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            borderRadius: '20px',
            padding: '40px 24px',
            textAlign: 'center',
            color: 'white',
            marginBottom: '24px',
            boxShadow: '0 15px 35px rgba(102, 126, 234, 0.3)'
          }}>
            <h1 style={{ 
              fontSize: '32px', 
              fontWeight: '900', 
              marginBottom: '8px',
              lineHeight: '1.2'
            }}>
              Grab Up to 50% Off
            </h1>
            <p style={{ 
              fontSize: '16px', 
              marginBottom: '20px',
              opacity: '0.95'
            }}>
              On Your First Bulk Purchase
            </p>
            <IonButton 
              expand="block" 
              style={{ 
                '--background': '#FFD93D', 
                '--color': '#2D3436',
                fontWeight: '800',
                fontSize: '16px',
                '--border-radius': '12px'
              }}
              size="large"
              onClick={() => history.push('/products')}
            >
              <IonIcon icon={flashOutline} slot="start" />
              Shop Flash Sale Now
            </IonButton>
          </div>

          {/* GIFT SHOP DEALS SECTION */}
          <div style={{ marginBottom: '24px' }}>
            <div style={{ 
              display: 'flex', 
              justifyContent: 'space-between', 
              alignItems: 'center', 
              marginBottom: '12px' 
            }}>
              <h2 style={{ fontWeight: '700', fontSize: '20px', margin: 0 }}>
                🎁 Gift Shop Deals
              </h2>
              <IonButton 
                fill="clear" 
                size="small"
                onClick={() => history.push('/products')}
                style={{ '--color': '#667eea' }}
              >
                View All
                <IonIcon icon={chevronForwardOutline} slot="end" />
              </IonButton>
            </div>
            <p style={{ color: '#636E72', fontSize: '14px', marginBottom: '16px' }}>
              Gift for everyone - retail or bulk, customized or not
            </p>

            {/* Product Card 1 */}
            <IonCard style={{ 
              borderRadius: '16px', 
              boxShadow: '0 2px 12px rgba(0,0,0,0.08)',
              marginBottom: '16px'
            }}>
              <div style={{
                height: '180px',
                background: 'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '64px'
              }}>
                💳
              </div>
              <IonCardContent>
                <div style={{ 
                  display: 'flex', 
                  justifyContent: 'space-between', 
                  alignItems: 'flex-start' 
                }}>
                  <div>
                    <h3 style={{ fontWeight: '700', marginBottom: '4px', fontSize: '16px' }}>
                      Premium Business Cards
                    </h3>
                    <p style={{ color: '#636E72', fontSize: '14px', marginBottom: '8px' }}>
                      Matte Finish
                    </p>
                  </div>
                  <IonBadge style={{ 
                    '--background': '#00B894', 
                    '--color': 'white',
                    '--padding-start': '8px',
                    '--padding-end': '8px',
                    fontWeight: '600'
                  }}>
                    <IonIcon icon={star} style={{ fontSize: '12px' }} /> 4.5
                  </IonBadge>
                </div>
                <div style={{ 
                  display: 'flex', 
                  justifyContent: 'space-between', 
                  alignItems: 'center',
                  marginBottom: '12px'
                }}>
                  <span style={{ fontSize: '22px', fontWeight: '800', color: '#2D3436' }}>
                    ₦800
                  </span>
                  <span style={{ fontSize: '12px', color: '#636E72' }}>
                    2.5k+ orders
                  </span>
                </div>
                <IonButton 
                  expand="full" 
                  style={{ 
                    '--background': '#667eea',
                    '--border-radius': '12px',
                    fontWeight: '600'
                  }}
                  onClick={() => history.push('/products')}
                >
                  Shop Now
                </IonButton>
              </IonCardContent>
            </IonCard>
          </div>

          {/* CUSTOM PRINTING DEALS SECTION */}
          <div style={{ marginBottom: '24px' }}>
            <div style={{ 
              display: 'flex', 
              justifyContent: 'space-between', 
              alignItems: 'center', 
              marginBottom: '12px' 
            }}>
              <h2 style={{ fontWeight: '700', fontSize: '20px', margin: 0 }}>
                ✨ Custom Printing Deals
              </h2>
              <IonButton 
                fill="clear" 
                size="small"
                onClick={() => history.push('/custom-printing')}
                style={{ '--color': '#667eea' }}
              >
                View All
                <IonIcon icon={chevronForwardOutline} slot="end" />
              </IonButton>
            </div>
            <p style={{ color: '#636E72', fontSize: '14px', marginBottom: '16px' }}>
              Your ideas, your prints, with PrintPadi
            </p>

            {/* Product Card 2 */}
            <IonCard style={{ 
              borderRadius: '16px', 
              boxShadow: '0 2px 12px rgba(0,0,0,0.08)',
              marginBottom: '16px'
            }}>
              <div style={{
                height: '180px',
                background: 'linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '64px'
              }}>
                🃏
              </div>
              <IonCardContent>
                <div style={{ 
                  display: 'flex', 
                  justifyContent: 'space-between', 
                  alignItems: 'flex-start' 
                }}>
                  <div>
                    <h3 style={{ fontWeight: '700', marginBottom: '4px', fontSize: '16px' }}>
                      Premium Business Cards
                    </h3>
                    <p style={{ color: '#636E72', fontSize: '14px', marginBottom: '8px' }}>
                      Matte Finish
                    </p>
                  </div>
                  <IonBadge style={{ 
                    '--background': '#00B894', 
                    '--color': 'white',
                    '--padding-start': '8px',
                    '--padding-end': '8px',
                    fontWeight: '600'
                  }}>
                    <IonIcon icon={star} style={{ fontSize: '12px' }} /> 4.5
                  </IonBadge>
                </div>
                <div style={{ 
                  display: 'flex', 
                  justifyContent: 'space-between', 
                  alignItems: 'center',
                  marginBottom: '12px'
                }}>
                  <div>
                    <span style={{ fontSize: '22px', fontWeight: '800', color: '#2D3436' }}>
                      ₦750 - ₦850
                    </span>
                    <p style={{ fontSize: '12px', color: '#636E72', margin: '2px 0 0' }}>
                      MOQ: 10 Pcs
                    </p>
                  </div>
                  <span style={{ fontSize: '12px', color: '#636E72' }}>
                    2.5k+ orders
                  </span>
                </div>
                <IonButton 
                  expand="full" 
                  style={{ 
                    '--background': '#667eea',
                    '--border-radius': '12px',
                    fontWeight: '600'
                  }}
                  onClick={() => history.push('/custom-printing')}
                >
                  Customize
                </IonButton>
              </IonCardContent>
            </IonCard>
          </div>

          {/* FLASH SALE BANNER */}
          <div style={{
            background: 'linear-gradient(135deg, #FF6B6B, #ee5a24)',
            color: 'white',
            padding: '24px',
            borderRadius: '16px',
            textAlign: 'center',
            marginTop: '8px',
            marginBottom: '24px',
            boxShadow: '0 10px 30px rgba(255,107,107,0.3)'
          }}>
            <h2 style={{ 
              fontWeight: '900', 
              fontSize: '22px', 
              marginBottom: '8px' 
            }}>
              ⚡ Flash Sale!
            </h2>
            <p style={{ 
              fontSize: '18px', 
              marginBottom: '4px', 
              fontWeight: '600' 
            }}>
              500 business cards from ₦4,000
            </p>
            <p style={{ 
              fontSize: '14px', 
              opacity: '0.9', 
              marginBottom: '16px' 
            }}>
              Premium matte finish included
            </p>
            <IonButton 
              expand="block" 
              style={{ 
                '--background': 'white', 
                '--color': '#FF6B6B',
                fontWeight: '700',
                '--border-radius': '12px'
              }}
              onClick={() => history.push('/products')}
            >
              Grab This Deal
            </IonButton>
          </div>

          {/* EXPLORE ALL PRODUCTS */}
          <IonButton 
            expand="block" 
            fill="outline"
            style={{
              '--border-color': '#667eea',
              '--color': '#667eea',
              '--border-radius': '12px',
              fontWeight: '600'
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
