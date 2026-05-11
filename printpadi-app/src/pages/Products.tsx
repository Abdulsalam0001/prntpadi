import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonCard, IonCardContent, IonButton, IonBadge, IonSearchbar } from '@ionic/react';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';

const allProducts = [
  { id: 1, name: 'Premium Business Cards - Matte Finish', price: '₦800-₦1000', category: 'business-cards', moq: 10 },
  { id: 2, name: 'Premium Mugs', price: '₦800', category: 'gifts', moq: 10 },
  { id: 3, name: 'Premium Cups', price: '₦800', category: 'gifts', moq: 10 },
  { id: 4, name: 'Custom T-Shirts', price: '₦2,500', category: 'custom-printing', moq: 5 },
  { id: 5, name: 'Corporate Gift Sets', price: '₦5,000', category: 'gifts', moq: 20 },
  { id: 6, name: 'Flyers & Brochures', price: '₦50/pc', category: 'custom-printing', moq: 100 },
];

const Products: React.FC = () => {
  const [searchText, setSearchText] = useState('');
  const history = useHistory();

  const filteredProducts = allProducts.filter(product =>
    product.name.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="primary">
          <IonTitle>Products</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <IonSearchbar
          value={searchText}
          onIonChange={e => setSearchText(e.detail.value!)}
          placeholder="Search products..."
          style={{ marginBottom: '16px' }}
        />

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
          {filteredProducts.map(product => (
            <IonCard key={product.id} style={{ margin: 0 }}>
              <div style={{
                height: '120px',
                background: '#f0f0f0',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                {product.name.split(' ').slice(0, 2).join(' ')}
              </div>
              <IonCardContent>
                <h3 style={{ fontSize: '0.9rem', fontWeight: 'bold' }}>{product.name}</h3>
                <p style={{ color: '#4a4a4a', fontWeight: 'bold' }}>{product.price}</p>
                <p style={{ fontSize: '0.8rem', color: '#666' }}>MOQ: {product.moq}</p>
                <IonButton size="small" expand="full" style={{ marginTop: '8px' }}>
                  Add to Cart
                </IonButton>
              </IonCardContent>
            </IonCard>
          ))}
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Products;