import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonCard, IonCardContent, IonButton, IonBadge, IonIcon } from '@ionic/react';
import { flashOutline, starOutline } from 'ionicons/icons';
import { useHistory } from 'react-router-dom';
import { useState } from 'react';

// Your actual PrintPadi products
const featuredProducts = [
  { id: 1, name: 'Premium Business Cards - Matte Finish', price: '₦800', orders: '2.5k+', rating: 4.5, minOrder: 10 },
  { id: 2, name: 'Premium Mugs', price: '₦800', orders: '1.8k+', rating: 4.5, minOrder: 10 },
  { id: 3, name: 'Premium Cups', price: '₦800', orders: '1.2k+', rating: 4.5, minOrder: 10 },
];

const Home: React.FC = () => {
  const history = useHistory();
  const [activeSegment, setActiveSegment] = useState('gifts');

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="primary">
          <IonTitle>PrintPadi</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        {/* Hero Section - Your exact offer */}
        <div style={{
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          borderRadius: '16px',
          padding: '30px 20px',
          textAlign: 'center',
          marginBottom: '24px',
          color: 'white'
        }}>
          <h1 style={{ fontSize: '1.8rem', fontWeight: 'bold', marginBottom: '12px' }}>
            Grab Up to 50% Off
          </h1>
          <p style={{ fontSize: '1.1rem', marginBottom: '20px' }}>
            On Your First Bulk Purchase
          </p>
          <IonButton 
            expand="block" 
            color="warning" 
            size="large"
            onClick={() => history.push('/custom-printing')}
            style={{ fontWeight: 'bold' }}
          >
            <IonIcon icon={flashOutline} slot="start" />
            Shop Flash Sale Now
          </IonButton>
        </div>

        {/* Categories */}
        <div style={{ marginBottom: '24px' }}>
          <h2 style={{ fontWeight: 'bold', marginBottom: '16px' }}>Explore Products</h2>
          <div style={{ display: 'flex', gap: '10px', overflow: 'auto', padding: '4px 0' }}>
            {['All', 'Gifts', 'Custom Printing', 'Business Cards'].map(cat => (
              <IonButton 
                key={cat}
                fill={activeSegment === cat.toLowerCase() ? 'solid' : 'outline'}
                size="small"
                onClick={() => setActiveSegment(cat.toLowerCase())}
              >
                {cat}
              </IonButton>
            ))}
          </div>
        </div>

        {/* Featured Products */}
        <h2 style={{ fontWeight: 'bold', marginBottom: '16px' }}>Featured Deals</h2>
        {featuredProducts.map(product => (
          <IonCard key={product.id} style={{ marginBottom: '16px' }}>
            <div style={{
              height: '180px',
              background: `linear-gradient(45deg, #ff6b6b, #4ecdc4)`,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'white',
              fontSize: '1.1rem'
            }}>
              {product.name.replace('Premium ', '')}
            </div>
            <IonCardContent>
              <h3 style={{ fontWeight: 'bold', marginBottom: '8px' }}>{product.name}</h3>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div>
                  <span style={{ fontSize: '1.3rem', fontWeight: 'bold', color: '#4a4a4a' }}>
                    {product.price}
                  </span>
                  <div style={{ fontSize: '0.8rem', color: '#666' }}>
                    MOQ: {product.minOrder} pcs
                  </div>
                </div>
                <div>
                  <IonBadge color="success">
                    <IonIcon icon={starOutline} /> {product.rating}
                  </IonBadge>
                  <div style={{ fontSize: '0.7rem', color: '#666', marginTop: '4px' }}>
                    {product.orders} orders
                  </div>
                </div>
              </div>
              <IonButton 
                expand="full" 
                size="small" 
                style={{ marginTop: '12px' }}
                onClick={() => history.push('/products')}
              >
                View Details
              </IonButton>
            </IonCardContent>
          </IonCard>
        ))}

        {/* Flash Sale Banner */}
        <IonCard style={{
          background: '#ff6b6b',
          color: 'white',
          textAlign: 'center',
          padding: '20px'
        }}>
          <h2>Flash Sale!</h2>
          <p style={{ fontSize: '1.1rem', margin: '10px 0' }}>
            500 business cards from ₦4,000
          </p>
          <p style={{ fontSize: '0.9rem', opacity: '0.9' }}>
            Premium matte finish included
          </p>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default Home;