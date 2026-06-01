import { IonPage, IonContent, IonButton } from '@ionic/react';
import { useHistory } from 'react-router-dom';

// Sample product data matching your website structure
const retailProducts = [
  { id: 1, name: 'Premium Business Cards', price: '₦800', image: '/assets/cards.jpg', rating: 4.5 },
  { id: 2, name: 'Custom Mugs', price: '₦800', image: '/assets/mugs.jpg', rating: 4.5 },
  { id: 3, name: 'Premium Cups', price: '₦800', image: '/assets/cups.jpg', rating: 4.5 },
];

const bulkProducts = [
  { id: 4, name: 'Bulk Business Cards', price: '₦750 - ₦850', image: '/assets/bulk-cards.jpg', rating: 4.5 },
  { id: 5, name: 'Bulk Mugs', price: '₦750 - ₦850', image: '/assets/bulk-mugs.jpg', rating: 4.5 },
  { id: 6, name: 'Bulk Cups', price: '₦750 - ₦850', image: '/assets/bulk-cups.jpg', rating: 4.5 },
];

const exploreLatest = [
  { name: 'business cards', link: '/products', image: '/assets/explore1.jpg' },
  { name: 'flyers', link: '/products', image: '/assets/explore2.jpg' },
  { name: 'brochures', link: '/products', image: '/assets/explore3.jpg' },
  { name: 'letterheads', link: '/products', image: '/assets/explore4.jpg' },
];

const Home: React.FC = () => {
  const history = useHistory();

  return (
    <IonPage>
      <IonContent className="font-bricolage-grotesque" style={{ '--background': '#ffffff' }}>
        <div className="min-h-screen w-full" style={{ marginTop: '10px' }}>
          
          {/* Carousel / Hero Section */}
          <div className="px-4">
            <div style={{
              background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
              borderRadius: '12px',
              padding: '40px 20px',
              position: 'relative',
              minHeight: '200px'
            }}>
              <div style={{ maxWidth: '162px' }}>
                <h2 style={{
                  fontWeight: '600',
                  fontSize: '12px',
                  color: 'white',
                  marginBottom: '12px'
                }}>
                  Grab Up to 50% Off On Your First Bulk Purchase
                </h2>
                <IonButton 
                  onClick={() => history.push('/products')}
                  style={{
                    fontSize: '7.95px',
                    height: 'auto',
                    padding: '8px 16px'
                  }}
                >
                  shop now
                </IonButton>
              </div>
            </div>
          </div>

          {/* Gift Shop Deals Section */}
          <div style={{ marginTop: '40px' }}>
            <div style={{ padding: '0 16px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                <h2 style={{ fontWeight: 'bold', fontSize: '18px', textTransform: 'capitalize' }}>gift shop deals</h2>
                <span 
                  onClick={() => history.push('/products')}
                  style={{ color: '#667eea', fontSize: '12px', fontWeight: '500', cursor: 'pointer' }}
                >
                  View All →
                </span>
              </div>
              <p style={{ fontSize: '14px', color: '#666', marginBottom: '16px' }}>
                gift for everyone- retail or bulk, customized or not
              </p>
            </div>
            
            {/* Horizontal scroll row */}
            <div style={{
              display: 'flex',
              gap: '15px',
              overflowX: 'auto',
              scrollSnapType: 'x mandatory',
              padding: '0 16px',
              WebkitOverflowScrolling: 'touch'
            }}>
              {retailProducts.map(product => (
                <div key={product.id} style={{
                  flex: '0 0 calc((100% - 30px) / 3)',
                  scrollSnapAlign: 'start',
                  background: 'white',
                  borderRadius: '12px',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                  overflow: 'hidden'
                }}>
                  <div style={{
                    height: '120px',
                    background: '#f0f0f0',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    🖨️
                  </div>
                  <div style={{ padding: '12px' }}>
                    <h3 style={{ fontWeight: 'bold', fontSize: '14px' }}>{product.name}</h3>
                    <p style={{ fontWeight: 'bold', fontSize: '16px' }}>{product.price}</p>
                    <IonButton size="small" expand="full" onClick={() => history.push('/products')}>
                      Shop Now
                    </IonButton>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Custom Printing Deals Section */}
          <div style={{ marginTop: '24px' }}>
            <div style={{ padding: '0 16px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                <h2 style={{ fontWeight: 'bold', fontSize: '18px', textTransform: 'capitalize' }}>custom printing deals</h2>
                <span 
                  onClick={() => history.push('/products')}
                  style={{ color: '#667eea', fontSize: '12px', fontWeight: '500', cursor: 'pointer' }}
                >
                  View All →
                </span>
              </div>
              <p style={{ fontSize: '14px', color: '#666', marginBottom: '16px' }}>
                your ideas, your prints, with printpadi
              </p>
            </div>
            
            {/* Horizontal scroll row */}
            <div style={{
              display: 'flex',
              gap: '15px',
              overflowX: 'auto',
              scrollSnapType: 'x mandatory',
              padding: '0 16px',
              WebkitOverflowScrolling: 'touch'
            }}>
              {bulkProducts.map(product => (
                <div key={product.id} style={{
                  flex: '0 0 calc((100% - 30px) / 3)',
                  scrollSnapAlign: 'start',
                  background: 'white',
                  borderRadius: '12px',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                  overflow: 'hidden'
                }}>
                  <div style={{
                    height: '120px',
                    background: '#f0f0f0',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    🖨️
                  </div>
                  <div style={{ padding: '12px' }}>
                    <h3 style={{ fontWeight: 'bold', fontSize: '14px' }}>{product.name}</h3>
                    <p style={{ fontWeight: 'bold', fontSize: '16px' }}>{product.price}</p>
                    <IonButton size="small" expand="full" onClick={() => history.push('/products')}>
                      Customize
                    </IonButton>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Explore Latest Section */}
          <div className="px-4" style={{ marginTop: '16px' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <h2 style={{ textTransform: 'capitalize', fontWeight: 'bold', fontSize: '18px' }}>explore latest printing & branding</h2>
              <span 
                onClick={() => history.push('/products')}
                style={{ color: '#667eea', fontSize: '12px', fontWeight: '500', cursor: 'pointer' }}
              >
                View All
              </span>
            </div>
            <div style={{
              marginTop: '44px',
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '30px 20px',
              justifyItems: 'center'
            }}>
              {exploreLatest.map((item, index) => (
                <div key={index} onClick={() => history.push(item.link)} style={{ cursor: 'pointer' }}>
                  <div style={{
                    width: '175px',
                    height: '182px',
                    background: '#f0f0f0',
                    borderRadius: '8px',
                    marginBottom: '14px'
                  }}></div>
                  <h4 style={{ textTransform: 'capitalize', fontWeight: '500', fontSize: '12px' }}>
                    {item.name}
                  </h4>
                </div>
              ))}
            </div>
          </div>

          {/* Explore Products Section */}
          <div style={{ marginTop: '78px', marginBottom: '55px', padding: '0 16px' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '23px' }}>
              <h2 style={{ textTransform: 'capitalize', fontWeight: 'bold', fontSize: '18px' }}>explore products</h2>
              <span 
                onClick={() => history.push('/products')}
                style={{ color: '#667eea', fontSize: '12px', fontWeight: '500', cursor: 'pointer' }}
              >
                View All
              </span>
            </div>
            <div style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '16px'
            }}>
              {[...retailProducts, ...bulkProducts].slice(0, 4).map(product => (
                <div key={product.id} style={{
                  background: 'white',
                  borderRadius: '12px',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                  overflow: 'hidden',
                  cursor: 'pointer'
                }} onClick={() => history.push('/products')}>
                  <div style={{
                    height: '150px',
                    background: '#f0f0f0',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    🖨️
                  </div>
                  <div style={{ padding: '12px' }}>
                    <h3 style={{ fontWeight: 'bold', fontSize: '14px' }}>{product.name}</h3>
                    <p style={{ fontWeight: 'bold', fontSize: '16px' }}>{product.price}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </IonContent>
    </IonPage>
  );
};

export default Home;
