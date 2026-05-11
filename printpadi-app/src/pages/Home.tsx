import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonCard, IonCardContent, IonButton, IonBadge, IonIcon } from '@ionic/react';
import { flashOutline, star } from 'ionicons/icons';
import { useHistory } from 'react-router-dom';
import '../theme/printpadi.css';

const Home: React.FC = () => {
  const history = useHistory();

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="primary">
          <img 
            src="/assets/logo.svg" 
            alt="PrintPadi" 
            style={{ height: '32px', marginLeft: '12px' }} 
          />
        </IonToolbar>
      </IonHeader>
      
      <IonContent className="ion-padding" style={{ '--background': '#F8F9FA' }}>
        {/* Hero Section */}
        <div style={{
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          borderRadius: '16px',
          padding: '30px 20px',
          textAlign: 'center',
          color: 'white',
          marginBottom: '20px'
        }}>
          <h1 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '8px' }}>
            Grab Up to 50% Off
          </h1>
          <p style={{ marginBottom: '16px' }}>On Your First Bulk Purchase</p>
          <IonButton 
            expand="block" 
            color="warning" 
            size="large"
            onClick={() => history.push('/products')}
          >
            <IonIcon icon={flashOutline} slot="start" />
            Shop Flash Sale Now
          </IonButton>
        </div>

        {/* Gift Shop Deals Section */}
        <h2 style={{ fontWeight: 'bold', marginBottom: '12px' }}>
          <span>🎁</span> Gift Shop Deals
        </h2>
        <p style={{ color: '#636E72', marginBottom: '16px', fontSize: '14px' }}>
          Gift for everyone - retail or bulk, customized or not
        </p>

        {/* Product Card */}
        <IonCard style={{ borderRadius: '12px', boxShadow: '0 2px 8px rgba(0,0,0,0.08)' }}>
          <div style={{
            height: '160px',
            background: 'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '48px'
          }}>
            💳
          </div>
          <IonCardContent>
            <h3 style={{ fontWeight: 'bold', marginBottom: '4px' }}>Premium Business Cards - Matte Finish</h3>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ fontSize: '20px', fontWeight: 'bold', color: '#2D3436' }}>₦800</span>
              <IonBadge color="success">4.5 ★</IonBadge>
            </div>
            <p style={{ color: '#636E72', fontSize: '12px', marginTop: '4px' }}>2.5k+ orders</p>
            <IonButton expand="full" size="small" style={{ marginTop: '8px' }}>
              Shop Now
            </IonButton>
          </IonCardContent>
        </IonCard>

        {/* Custom Printing Section */}
        <h2 style={{ fontWeight: 'bold', marginTop: '24px', marginBottom: '12px' }}>
          <span>✨</span> Custom Printing Deals
        </h2>
        <p style={{ color: '#636E72', marginBottom: '16px', fontSize: '14px' }}>
          Your ideas, your prints, with PrintPadi
        </p>

        {/* Second Product Card */}
        <IonCard style={{ borderRadius: '12px', boxShadow: '0 2px 8px rgba(0,0,0,0.08)' }}>
          <div style={{
            height: '160px',
            background: 'linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '48px'
          }}>
            🃏
          </div>
          <IonCardContent>
            <h3 style={{ fontWeight: 'bold', marginBottom: '4px' }}>Premium Business Cards - Matte Finish</h3>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ fontSize: '20px', fontWeight: 'bold', color: '#2D3436' }}>₦750 - ₦850</span>
              <IonBadge color="success">4.5 ★</IonBadge>
            </div>
            <p style={{ color: '#636E72', fontSize: '12px', marginTop: '4px' }}>MOQ: 10 Pcs</p>
            <IonButton expand="full" size="small" style={{ marginTop: '8px' }}>
              Customize
            </IonButton>
          </IonCardContent>
        </IonCard>

        {/* Flash Sale */}
        <div style={{
          background: '#FF6B6B',
          color: 'white',
          padding: '20px',
          borderRadius: '12px',
          textAlign: 'center',
          marginTop: '24px'
        }}>
          <h2 style={{ fontWeight: 'bold', marginBottom: '8px' }}>⚡ Flash Sale!</h2>
          <p style={{ fontSize: '16px', marginBottom: '4px' }}>500 business cards from ₦4,000</p>
          <p style={{ fontSize: '14px', opacity: 0.9 }}>Premium matte finish included</p>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Home;