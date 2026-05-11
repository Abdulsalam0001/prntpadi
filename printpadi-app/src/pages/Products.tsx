import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonSearchbar, IonButton, IonIcon, IonBadge } from '@ionic/react';
import { starOutline, cartOutline } from 'ionicons/icons';
import { useState } from 'react';
import '../theme/printpadi.css';

// Exact products from your website
const allProducts = [
  {
    id: 1,
    name: 'Premium Business Cards - Matte Finish',
    price: '₦800',
    priceRange: '₦800 - ₦1000',
    rating: 4.5,
    orders: '2.5k+',
    minOrder: '10 pcs',
    category: 'business-cards',
    image: '💳'
  },
  {
    id: 2,
    name: 'Premium Mugs',
    price: '₦800',
    priceRange: '₦800',
    rating: 4.5,
    orders: '2.5k+',
    minOrder: '10 pcs',
    category: 'gifts',
    image: '☕'
  },
  {
    id: 3,
    name: 'Premium Cups',
    price: '₦800',
    priceRange: '₦800',
    rating: 4.5,
    orders: '2.5k+',
    minOrder: '10 pcs',
    category: 'gifts',
    image: '🥤'
  },
  {
    id: 4,
    name: 'Premium Business Cards - Matte Finish',
    price: '₦750 - ₦850',
    priceRange: '₦750 - ₦850',
    rating: 4.5,
    orders: '2.5k+',
    minOrder: 'MOQ: 10 Pcs',
    category: 'custom-printing',
    image: '🃏'
  },
  {
    id: 5,
    name: 'Premium Business Cards - Matte Finish',
    price: '₦750 - ₦850',
    priceRange: '₦750 - ₦850',
    rating: 4.5,
    orders: '2.5k+',
    minOrder: 'MOQ: 10 Pcs',
    category: 'custom-printing',
    image: '📇'
  },
  {
    id: 6,
    name: 'Premium Business Cards - Matte Finish',
    price: '₦750 - ₦850',
    priceRange: '₦750 - ₦850',
    rating: 4.5,
    orders: '2.5k+',
    minOrder: 'MOQ: 10 Pcs',
    category: 'custom-printing',
    image: '🎴'
  }
];

const Products: React.FC = () => {
  const [searchText, setSearchText] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { name: 'All', value: 'all' },
    { name: 'Gift Shop Deals', value: 'gifts' },
    { name: 'Custom Printing', value: 'custom-printing' }
  ];

  const filteredProducts = allProducts.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchText.toLowerCase());
    const matchesCategory = activeCategory === 'all' || product.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar style={{ '--background': 'var(--printpadi-primary)', '--color': 'white' }}>
          <IonTitle style={{ fontWeight: 700 }}>Products</IonTitle>
        </IonToolbar>
      </IonHeader>
      
      <IonContent style={{ '--background': '#F8F9FA' }}>
        <div style={{ padding: '16px' }}>
          {/* Search Bar - Matching your website style */}
          <IonSearchbar
            value={searchText}
            onIonChange={e => setSearchText(e.detail.value!)}
            placeholder="Search products..."
            style={{
              '--border-radius': '12px',
              '--background': 'white',
              '--box-shadow': '0 2px 8px rgba(0,0,0,0.05)',
              marginBottom: '16px'
            }}
          />

          {/* Category Tabs - Matching your website's filter style */}
          <div style={{ 
            display: 'flex', 
            gap: '8px', 
            overflow: 'auto', 
            padding: '4px 0',
            marginBottom: '20px' 
          }}>
            {categories.map(cat => (
              <IonButton
                key={cat.value}
                fill={activeCategory === cat.value ? 'solid' : 'outline'}
                size="small"
                onClick={() => setActiveCategory(cat.value)}
                style={{
                  '--background': activeCategory === cat.value ? 'var(--printpadi-primary)' : 'white',
                  '--color': activeCategory === cat.value ? 'white' : 'var(--printpadi-dark)',
                  '--border-color': 'var(--printpadi-light)',
                  borderRadius: '20px',
                  whiteSpace: 'nowrap',
                  minWidth: 'auto',
                  fontWeight: 500
                }}
              >
                {cat.name}
              </IonButton>
            ))}
          </div>

          {/* Flash Sale Banner - Exactly like your website */}
          <div style={{
            background: 'var(--printpadi-danger)',
            color: 'white',
            padding: '20px',
            borderRadius: '12px',
            textAlign: 'center',
            marginBottom: '20px',
            boxShadow: '0 4px 12px rgba(255,107,107,0.3)'
          }}>
            <div style={{ fontSize: '24px', marginBottom: '8px' }}>⚡</div>
            <h2 style={{ fontSize: '18px', fontWeight: 800, margin: '0 0 8px' }}>
              Flash Sale!
            </h2>
            <p style={{ fontSize: '16px', margin: '0 0 4px', fontWeight: 600 }}>
              500 business cards from ₦4,000
            </p>
            <p style={{ fontSize: '14px', opacity: 0.9, margin: 0 }}>
              Premium matte finish included
            </p>
          </div>

          {/* Product Grid - Matching your website's card layout */}
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: '1fr 1fr', 
            gap: '12px',
            marginBottom: '20px'
          }}>
            {filteredProducts.map(product => (
              <div
                key={product.id}
                className="printpadi-product-card"
                style={{
                  background: 'white',
                  borderRadius: '12px',
                  overflow: 'hidden',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
                  cursor: 'pointer'
                }}
              >
                {/* Product Image Area - Colored like your website */}
                <div style={{
                  height: '140px',
                  background: 'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '48px',
                  position: 'relative'
                }}>
                  {product.image}
                  
                  {/* Rating Badge - Top right like your website */}
                  <div style={{
                    position: 'absolute',
                    top: '8px',
                    right: '8px',
                    background: 'var(--printpadi-success)',
                    color: 'white',
                    padding: '4px 8px',
                    borderRadius: '6px',
                    fontSize: '11px',
                    fontWeight: 600,
                    display: 'flex',
                    alignItems: 'center',
                    gap: '2px'
                  }}>
                    <IonIcon icon={starOutline} style={{ fontSize: '12px' }} />
                    {product.rating}
                  </div>
                </div>

                {/* Product Info - Matched to your website */}
                <div style={{ padding: '12px' }}>
                  <h3 style={{
                    fontSize: '13px',
                    fontWeight: 600,
                    margin: '0 0 6px',
                    color: 'var(--printpadi-dark)',
                    lineHeight: '1.3'
                  }}>
                    {product.name}
                  </h3>
                  
                  <div style={{ 
                    display: 'flex', 
                    justifyContent: 'space-between', 
                    alignItems: 'center',
                    marginBottom: '8px'
                  }}>
                    <div>
                      <span style={{
                        fontSize: '18px',
                        fontWeight: 700,
                        color: 'var(--printpadi-dark)'
                      }}>
                        {product.price}
                      </span>
                      <div style={{
                        fontSize: '11px',
                        color: 'var(--printpadi-gray)',
                        marginTop: '2px'
                      }}>
                        {product.minOrder}
                      </div>
                    </div>
                    <div style={{
                      fontSize: '11px',
                      color: 'var(--printpadi-gray)',
                      textAlign: 'right'
                    }}>
                      {product.orders} orders
                    </div>
                  </div>

                  {/* Add to Cart Button */}
                  <IonButton
                    expand="full"
                    size="small"
                    style={{
                      '--background': 'var(--printpadi-primary)',
                      '--border-radius': '8px',
                      fontSize: '13px',
                      fontWeight: 600,
                      margin: 0
                    }}
                  >
                    <IonIcon icon={cartOutline} slot="start" />
                    Add to Cart
                  </IonButton>
                </div>
              </div>
            ))}
          </div>

          {/* View All Button - Like your website */}
          <IonButton
            expand="block"
            fill="outline"
            style={{
              '--border-color': 'var(--printpadi-primary)',
              '--color': 'var(--printpadi-primary)',
              borderRadius: '12px',
              fontWeight: 600
            }}
          >
            View All Products
          </IonButton>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Products;