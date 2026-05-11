// src/pages/Home.tsx - Updated with PrintPadi Website Styles
import { IonPage, IonHeader, IonToolbar, IonContent, IonCard, IonCardContent, IonButton, IonBadge, IonIcon } from '@ionic/react';
import { flashOutline, starOutline, chevronForwardOutline } from 'ionicons/icons';
import { useHistory } from 'react-router-dom';
import { useState } from 'react';
import '../theme/printpadi.css';  // Import your brand styles

const featuredProducts = [
  { id: 1, name: 'Premium Business Cards', subtext: 'Matte Finish', price: '₦800', orders: '2.5k+', rating: 4.5, minOrder: 10 },
  { id: 2, name: 'Premium Mugs', subtext: 'Custom Prints', price: '₦800', orders: '1.8k+', rating: 4.5, minOrder: 10 },
  { id: 3, name: 'Premium Cups', subtext: 'Bulk Orders', price: '₦800', orders: '1.2k+', rating: 4.5, minOrder: 10 },
];

const Home: React.FC = () => {
  const history = useHistory();

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <div slot="start" style={{ padding: '8px' }}>
            <img src="/assets/logo.svg" alt="PrintPadi" style={{ height: '32px' }} />
          </div>
        </IonToolbar>
      </IonHeader>
      
      <IonContent className="ion-padding" style={{ '--background': '#F8F9FA' }}>
        {/* Hero Section - Direct copy of your website's style */}
        <div className="printpadi-hero">
          <h1>Grab Up to 50% Off</h1>
          <p>On Your First Bulk Purchase</p>
          <IonButton 
            expand="block" 
            style={{ 
              '--background': 'var(--printpadi-accent)', 
              '--color': 'var(--printpadi-dark)',
              fontWeight: 800,
              fontSize: '16px'
            }}
            size="large"
            onClick={() => history.push('/custom-printing')}
          >
            <IonIcon icon={flashOutline} slot="start" />
            Shop Flash Sale Now
          </IonButton>
        </div>

        {/* Category Filter - Matching your website's UI */}
        <div style={{ marginBottom: '24px' }}>
          <div style={{ display: 'flex', gap: '8px', overflow: 'auto', padding: '4px 0' }}>
            {['Gift Shop Deals', 'Custom Printing', 'Business Cards', 'All Products'].map(cat => (
              <IonButton 
                key={cat}
                fill="outline"
                size="small"
                className="printpadi-category-btn"
                style={{ 
                  '--border-color': 'var(--printpadi-light)',
                  '--color': 'var(--printpadi-dark)',
                  whiteSpace: 'nowrap'
                }}
                onClick={() => history.push('/products')}
              >
                {cat}
              </IonButton>
            ))}
          </div>
        </div>

        {/* Products Section Title */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
          <h2 style={{ fontWeight: 700, fontSize: '20px', margin: 0 }}>Explore Products</h2>
          <IonButton fill="clear" size="small" onClick={() => history.push('/products')}>
            View All
            <IonIcon icon={chevronForwardOutline} slot="end" />
          </IonButton>
        </div>

        {/* Product Cards - Your website's exact card style */}
        {featuredProducts.map(product => (
          <IonCard key={product.id} className="printpadi-product-card" style={{ marginBottom: '16px' }}>
            <div className="printpadi-product-image">
              {product.name.replace('Premium ', '')}
            </div>
            <IonCardContent>
              <h3 style={{ fontWeight: 700, margin: '0 0 4px', fontSize: '16px' }}>
                {product.name}
              </h3>
              <p style={{ color: 'var(--printpadi-gray)', margin: '0 0 12px', fontSize: '14px' }}>
                {product.subtext}
              </p>
              
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div>
                  <span className="printpadi-price">{product.price}</span>
                  <div className="printpadi-moq">MOQ: {product.minOrder} Pcs</div>
                </div>
                <div style={{ textAlign: 'right' }}>
                  <span className="printpadi-rating-badge">
                    <IonIcon icon={starOutline} /> {product.rating}
                  </span>
                  <div className="printpadi-orders">{product.orders} orders</div>
                </div>
              </div>
              
              <IonButton 
                expand="full" 
                size="small" 
                style={{ marginTop: '12px', '--background': 'var(--printpadi-primary)' }}
                onClick={() => history.push('/products')}
              >
                Shop Now
              </IonButton>
            </IonCardContent>
          </IonCard>
        ))}

        {/* Flash Sale Card - Red accent like your site */}
        <div className="printpadi-flash-sale">
          <h2 style={{ margin: '0 0 8px', fontWeight: 800 }}>⚡ Flash Sale!</h2>
          <p style={{ fontSize: '18px', margin: '8px 0', fontWeight: 600 }}>
            500 business cards from ₦4,000
          </p>
          <p style={{ fontSize: '14px', opacity: 0.9, margin: '0' }}>
            Premium matte finish included
          </p>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Home;